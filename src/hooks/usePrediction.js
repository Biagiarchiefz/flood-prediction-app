/**
 * usePrediction — custom hook yang membungkus seluruh logika prediksi:
 * memanggil API serta mengelola 3 keadaan (loading, error, result).
 *
 * Komponen cukup memanggil:  const { result, loading, error, predict } = usePrediction();
 * lalu jalankan predict(features). Tampilan tinggal bereaksi pada state.
 */

import { useState } from "react";
import { predictFlood } from "../services/api";

export function usePrediction() {
  const [result, setResult] = useState(null); // hasil sukses dari backend
  const [loading, setLoading] = useState(false); // sedang menunggu respons?
  const [error, setError] = useState(null); // pesan error (jika ada)
  const [durationMs, setDurationMs] = useState(null); // lama proses (untuk Phase 9)

  async function predict(features) {
    // Reset keadaan setiap kali memulai prediksi baru.
    setLoading(true);
    setError(null);
    setResult(null);

    const start = performance.now(); // catat waktu mulai

    try {
      const data = await predictFlood(features);
      setResult(data);
    } catch (err) {
      // Ambil pesan error dari backend bila ada; jika tidak, pesan umum.
      const message =
        err.response?.data?.error ||
        "Gagal terhubung ke server. Pastikan backend Flask sedang berjalan.";
      setError(message);
    } finally {
      setDurationMs(Math.round(performance.now() - start));
      setLoading(false);
    }
  }

  return { result, loading, error, durationMs, predict };
}
