/**
 * PredictionLoader — animasi loading bertema komputasi AI/Machine Learning.
 *
 * Menampilkan:
 *  - tumpukan angka acak yang berubah cepat (kesan model sedang menghitung),
 *    dengan baris tengah sebagai fokus (besar + glow) dan baris lain buram/pudar,
 *  - status proses yang berganti otomatis (fade),
 *  - progress bar simulasi (transform scaleX => tidak memicu layout).
 *
 * Semua interval dibersihkan saat unmount. Menghormati prefers-reduced-motion.
 */

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

const STATUSES = [
  "Analyzing Input...",
  "Normalizing Features...",
  "Running Model...",
  "Generating Prediction...",
  "Almost Done...",
];

const ROW_COUNT = 7;

function randomDigits(length = 6) {
  let value = "";
  for (let i = 0; i < length; i += 1) {
    value += Math.floor(Math.random() * 10);
  }
  return value;
}

function makeRows() {
  return Array.from({ length: ROW_COUNT }, () => randomDigits());
}

function PredictionLoader() {
  const reduceMotion = useReducedMotion();
  const [rows, setRows] = useState(makeRows);
  const [statusIndex, setStatusIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // Angka acak berubah cepat (statis bila pengguna memilih reduced-motion).
  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => setRows(makeRows()), 90);
    return () => clearInterval(id);
  }, [reduceMotion]);

  // Status berganti berurutan dan berhenti di status terakhir.
  useEffect(() => {
    const id = setInterval(() => {
      setStatusIndex((index) => Math.min(index + 1, STATUSES.length - 1));
    }, 520);
    return () => clearInterval(id);
  }, []);

  // Progress simulasi UX: bergerak melambat menuju 100%.
  useEffect(() => {
    const id = setInterval(() => {
      setProgress((value) => {
        if (value >= 100) return 100;
        return Math.min(value + Math.max(0.8, (100 - value) * 0.05), 100);
      });
    }, 60);
    return () => clearInterval(id);
  }, []);

  const center = Math.floor(ROW_COUNT / 2);

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Model sedang memproses prediksi"
      className="overflow-hidden rounded-xl border-2 border-ink bg-surface p-8 shadow-brutal"
    >
      {/* Tumpukan angka */}
      <div className="relative flex flex-col items-center gap-1">
        {rows.map((digits, index) => {
          const distance = Math.abs(index - center);
          const isCenter = distance === 0;
          const style = {
            opacity: Math.max(0.15, 1 - distance * 0.24),
            filter: distance ? `blur(${distance * 1.1}px)` : "none",
            transform: `scale(${1 - distance * 0.06})`,
          };
          return (
            <span
              key={index}
              style={style}
              className={`font-mono tabular-nums tracking-[0.4em] transition-all duration-100 ${
                isCenter
                  ? "text-3xl font-bold text-ink [text-shadow:0_0_18px_rgba(247,198,0,0.85)] sm:text-4xl"
                  : "text-2xl font-semibold text-muted"
              }`}
            >
              {digits}
            </span>
          );
        })}

        {/* Glow halus berdenyut di belakang angka */}
        {!reduceMotion && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            animate={{ opacity: [0, 0.3, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            style={{
              background:
                "radial-gradient(circle at center, rgba(255,213,74,0.55), transparent 60%)",
            }}
          />
        )}
      </div>

      {/* Status proses (fade saat berganti) */}
      <div className="mt-7 flex h-7 items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={statusIndex}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            className="text-sm font-bold uppercase tracking-wide text-muted"
          >
            {STATUSES[statusIndex]}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Progress bar simulasi */}
      <div className="mx-auto mt-4 max-w-md">
        <div className="h-3 w-full overflow-hidden rounded-full border-2 border-ink bg-bg">
          <motion.div
            className="h-full origin-left rounded-full bg-primary"
            style={{ scaleX: progress / 100 }}
          />
        </div>
        <p className="mt-2 text-center text-xs font-bold tabular-nums text-muted">
          {Math.round(progress)}%
        </p>
      </div>
    </div>
  );
}

export default PredictionLoader;
