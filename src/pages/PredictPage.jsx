/**
 * PredictPage — form input 20 fitur + alur prediksi beranimasi.
 *
 * Alur UX (fase dari usePredictionFlow):
 *   idle    -> EmptyState
 *   loading -> PredictionLoader (animasi AI ~2.5s)
 *   done    -> hasil (Reveal) atau Alert error
 *
 * Logika model tidak berubah; hanya pengalaman/visual.
 */

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  Activity,
  RotateCcw,
  CircleCheck,
  Info,
  TriangleAlert,
  Waves,
} from "lucide-react";

import { FEATURES } from "../config/features";
import { usePredictionFlow } from "../hooks/usePredictionFlow";
import { getRiskLevel } from "../utils/riskLevel";

import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Badge from "../components/ui/Badge";
import Alert from "../components/ui/Alert";
import PageHeader from "../components/ui/PageHeader";
import EmptyState from "../components/ui/EmptyState";
import InputSummary from "../components/InputSummary";
import PredictionLoader from "../components/PredictionLoader";
import Reveal from "../components/Reveal";

// Nilai awal: semua fitur diisi 5 (nilai tengah yang wajar untuk skor 0-16).
const initialValues = FEATURES.reduce((acc, feature) => {
  acc[feature.name] = 5;
  return acc;
}, {});

// Pemetaan level risiko -> warna badge + ikon.
const RISK_META = {
  low: { tone: "success", icon: CircleCheck },
  medium: { tone: "primary", icon: Info },
  high: { tone: "danger", icon: TriangleAlert },
};

function PredictPage() {
  const [values, setValues] = useState(initialValues);
  const { phase, result, error, durationMs, run, reset } = usePredictionFlow();

  const isLoading = phase === "loading";

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function handleReset() {
    setValues(initialValues);
    reset();
  }

  function handleSubmit(event) {
    event.preventDefault();

    const numericFeatures = {};
    for (const feature of FEATURES) {
      numericFeatures[feature.name] = Number(values[feature.name]);
    }

    run(numericFeatures);
  }

  // Hitung kategori risiko hanya bila sudah ada hasil sukses.
  const risk = result ? getRiskLevel(result.prediction) : null;
  const riskMeta = risk ? RISK_META[risk.level] : null;

  return (
    <div className="space-y-6">
      <PageHeader
        icon={Activity}
        title="Form Prediksi Banjir"
        subtitle="Isi ke-20 faktor risiko berikut sesuai rentang nilai masing-masing, lalu jalankan prediksi."
      />

      <Card as="form" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <Input
              key={feature.name}
              id={feature.name}
              name={feature.name}
              label={`${feature.label} (0–${feature.max})`}
              type="number"
              min="0"
              max={feature.max}
              step="1"
              value={values[feature.name]}
              onChange={handleChange}
              required
            />
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button type="submit" disabled={isLoading}>
            <Activity className="h-5 w-5" strokeWidth={2.5} />
            {isLoading ? "Memprediksi..." : "Prediksi Sekarang"}
          </Button>
          <Button
            type="button"
            variant="secondary"
            onClick={handleReset}
            disabled={isLoading}
          >
            <RotateCcw className="h-5 w-5" strokeWidth={2.5} />
            Reset
          </Button>
        </div>
      </Card>

      {/* Area dinamis: idle / loading / done — saling bergantian dengan fade */}
      <AnimatePresence mode="wait">
        {phase === "idle" && (
          <motion.div
            key="idle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <EmptyState
              icon={Waves}
              title="Belum ada hasil"
              description="Isi form di atas lalu klik Prediksi Sekarang untuk melihat estimasi probabilitas banjir."
            />
          </motion.div>
        )}

        {phase === "loading" && (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <PredictionLoader />
          </motion.div>
        )}

        {phase === "done" && (
          <motion.div
            key="done"
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {error ? (
              <Reveal>
                <Alert variant="error">{error}</Alert>
              </Reveal>
            ) : (
              <>
                <Reveal>
                  <Card className="text-center">
                    <div className="flex justify-center">
                      <Badge tone={riskMeta.tone} icon={riskMeta.icon}>
                        {risk.label}
                      </Badge>
                    </div>
                    <p className="mt-4 font-bold text-muted">Probabilitas Banjir</p>
                    <p className="text-6xl font-bold tracking-tight">
                      {(result.prediction * 100).toFixed(2)}%
                    </p>
                    <p className="mt-1 font-medium text-muted">
                      Nilai mentah: {result.prediction.toFixed(4)} · Waktu proses:{" "}
                      {durationMs} ms
                    </p>
                  </Card>
                </Reveal>

                <Reveal delay={0.08}>
                  <InputSummary data={result.input} />
                </Reveal>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default PredictPage;
