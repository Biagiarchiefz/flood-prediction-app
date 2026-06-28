/**
 * Daftar 20 fitur input model, lengkap dengan label berbahasa Indonesia.
 *
 * - `name`  : HARUS sama persis dengan nama kolom saat training (dipakai backend).
 * - `label` : teks ramah-pengguna yang ditampilkan di form.
 *
 * Menaruh daftar ini di satu tempat membuat form bisa dibuat otomatis
 * (looping) tanpa menulis 20 input satu per satu secara manual.
 */

export const FEATURES = [
  { name: "MonsoonIntensity", label: "Intensitas Musim Hujan" },
  { name: "TopographyDrainage", label: "Drainase Topografi" },
  { name: "RiverManagement", label: "Pengelolaan Sungai" },
  { name: "Deforestation", label: "Deforestasi" },
  { name: "Urbanization", label: "Urbanisasi" },
  { name: "ClimateChange", label: "Perubahan Iklim" },
  { name: "DamsQuality", label: "Kualitas Bendungan" },
  { name: "Siltation", label: "Sedimentasi (Pendangkalan)" },
  { name: "AgriculturalPractices", label: "Praktik Pertanian" },
  { name: "Encroachments", label: "Alih Fungsi Lahan" },
  { name: "IneffectiveDisasterPreparedness", label: "Kesiapsiagaan Bencana Lemah" },
  { name: "DrainageSystems", label: "Sistem Drainase" },
  { name: "CoastalVulnerability", label: "Kerentanan Pesisir" },
  { name: "Landslides", label: "Tanah Longsor" },
  { name: "Watersheds", label: "Daerah Aliran Sungai" },
  { name: "DeterioratingInfrastructure", label: "Penurunan Kualitas Infrastruktur" },
  { name: "PopulationScore", label: "Skor Kepadatan Populasi" },
  { name: "WetlandLoss", label: "Hilangnya Lahan Basah" },
  { name: "InadequatePlanning", label: "Perencanaan Tidak Memadai" },
  { name: "PoliticalFactors", label: "Faktor Politik" },
];
