/**
 * Lapisan komunikasi ke backend.
 *
 * Semua pemanggilan HTTP melewati file ini, sehingga komponen tidak perlu
 * tahu detail axios/URL. Kalau cara request berubah, cukup edit di sini.
 */

import axios from "axios";

// Satu instance axios dengan konfigurasi standar.
// baseURL diambil dari .env (import.meta.env), bukan ditulis langsung.
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

/**
 * Mengirim 20 fitur ke endpoint /predict dan mengembalikan data respons.
 *
 * @param {Object} features - objek berisi 20 pasangan nama_fitur: nilai (number)
 * @returns {Promise<Object>} - { success, prediction, input }
 */
export async function predictFlood(features) {
  const response = await api.post("/predict", features);
  return response.data;
}

export default api;
