/**
 * Mengubah nilai prediksi (0.0 - 1.0) menjadi kategori risiko.
 *
 * Ambang batas dipilih di sekitar nilai tengah distribusi target (~0.5),
 * karena FloodProbability pada dataset terdistribusi normal di sekitar situ.
 *
 * @param {number} prediction - nilai probabilitas banjir (0.0 - 1.0)
 * @returns {{ label: string, level: "low" | "medium" | "high" }}
 */
export function getRiskLevel(prediction) {
  if (prediction < 0.45) {
    return { label: "Risiko Rendah", level: "low" };
  }
  if (prediction < 0.55) {
    return { label: "Risiko Sedang", level: "medium" };
  }
  return { label: "Risiko Tinggi", level: "high" };
}
