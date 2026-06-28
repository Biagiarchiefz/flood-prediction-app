/**
 * usePredictionFlow — mengatur ALUR UX prediksi (bukan logika model).
 *
 * Membungkus usePrediction dan menambahkan "loading minimum" (~2.5 detik)
 * agar proses terasa natural/meyakinkan, walaupun backend selesai lebih cepat.
 *
 * Fase:
 *   "idle"    -> belum ada aksi
 *   "loading" -> sedang menampilkan animasi loading AI
 *   "done"    -> hasil/error siap ditampilkan
 */

import { useEffect, useRef, useState } from "react";
import { usePrediction } from "./usePrediction";

const MIN_LOADING_MS = 2500;

export function usePredictionFlow() {
  const { result, error, loading, durationMs, predict } = usePrediction();
  const [phase, setPhase] = useState("idle");

  const startRef = useRef(0);
  const timerRef = useRef(null);

  function run(features) {
    clearTimeout(timerRef.current);
    startRef.current = performance.now();
    setPhase("loading");
    predict(features); // memicu request asli ke backend
  }

  function reset() {
    clearTimeout(timerRef.current);
    setPhase("idle");
  }

  // Saat request selesai, tahan loading sampai durasi minimum tercapai,
  // baru pindah ke fase "done".
  useEffect(() => {
    if (phase !== "loading") return;
    if (loading) return; // request masih berjalan

    const elapsed = performance.now() - startRef.current;
    const remaining = Math.max(MIN_LOADING_MS - elapsed, 0);

    timerRef.current = setTimeout(() => setPhase("done"), remaining);
    return () => clearTimeout(timerRef.current);
  }, [phase, loading]);

  // Bersihkan timer saat unmount untuk mencegah memory leak.
  useEffect(() => () => clearTimeout(timerRef.current), []);

  return { phase, result, error, durationMs, run, reset };
}
