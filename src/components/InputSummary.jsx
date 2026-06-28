/**
 * InputSummary — tabel Neo Brutalism berisi 20 fitur yang dipakai prediksi.
 * Setiap baris muncul satu per satu dengan animasi stagger (slide dari kiri).
 * Menghormati prefers-reduced-motion: hanya fade tanpa geser.
 */

import { ListChecks } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { FEATURES } from "../config/features";
import Card from "./ui/Card";

// Jarak delay antar baris (detik). 20 baris × 0.04 = 0.8 detik total.
const ROW_STAGGER = 0.04;

function InputSummary({ data }) {
  const reduceMotion = useReducedMotion();

  return (
    <Card className="overflow-hidden p-0">
      <div className="flex items-center gap-2 border-b-2 border-ink bg-primary px-5 py-3">
        <ListChecks className="h-5 w-5" strokeWidth={2.5} />
        <h3 className="text-lg font-bold">Ringkasan Input</h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b-2 border-ink">
              <th className="px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-muted">
                Faktor
              </th>
              <th className="px-5 py-2.5 text-right text-xs font-bold uppercase tracking-wide text-muted">
                Nilai
              </th>
            </tr>
          </thead>
          <tbody>
            {FEATURES.map((feature, index) => (
              <motion.tr
                key={feature.name}
                className={index % 2 ? "bg-bg" : "bg-surface"}
                initial={{ opacity: 0, x: reduceMotion ? 0 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: index * ROW_STAGGER,
                  duration: 0.28,
                  ease: "easeOut",
                }}
              >
                <td className="border-t-2 border-ink/10 px-5 py-2.5 font-medium text-ink">
                  {feature.label}
                </td>
                <td className="border-t-2 border-ink/10 px-5 py-2.5 text-right text-lg font-bold">
                  {data[feature.name]}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

export default InputSummary;
