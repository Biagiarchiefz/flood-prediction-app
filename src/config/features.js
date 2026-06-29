/**
 * Daftar 20 fitur input model, lengkap dengan label berbahasa Indonesia.
 *
 * - `name`  : HARUS sama persis dengan nama kolom saat training (dipakai backend).
 * - `label` : teks ramah-pengguna yang ditampilkan di form.
 * - `max`   : nilai maksimum yang pernah ada di data training (dari data.describe()).
 *             Tiap fitur bisa berbeda — jangan disamakan semua ke 16.
 *
 * Sumber max: data.describe() pada dataset training (1.117.957 baris).
 */

export const FEATURES = [
  { name: "MonsoonIntensity",              label: "Intensitas Musim Hujan",              max: 16 },
  { name: "TopographyDrainage",            label: "Drainase Topografi",                  max: 18 },
  { name: "RiverManagement",               label: "Pengelolaan Sungai",                  max: 16 },
  { name: "Deforestation",                 label: "Deforestasi",                         max: 17 },
  { name: "Urbanization",                  label: "Urbanisasi",                          max: 17 },
  { name: "ClimateChange",                 label: "Perubahan Iklim",                     max: 17 },
  { name: "DamsQuality",                   label: "Kualitas Bendungan",                  max: 16 },
  { name: "Siltation",                     label: "Sedimentasi (Pendangkalan)",          max: 16 },
  { name: "AgriculturalPractices",         label: "Praktik Pertanian",                   max: 16 },
  { name: "Encroachments",                 label: "Alih Fungsi Lahan",                   max: 18 },
  { name: "IneffectiveDisasterPreparedness", label: "Kesiapsiagaan Bencana Lemah",       max: 16 },
  { name: "DrainageSystems",               label: "Sistem Drainase",                     max: 17 },
  { name: "CoastalVulnerability",          label: "Kerentanan Pesisir",                  max: 17 },
  { name: "Landslides",                    label: "Tanah Longsor",                       max: 16 },
  { name: "Watersheds",                    label: "Daerah Aliran Sungai",                max: 16 },
  { name: "DeterioratingInfrastructure",   label: "Penurunan Kualitas Infrastruktur",    max: 17 },
  { name: "PopulationScore",               label: "Skor Kepadatan Populasi",             max: 16 },
  { name: "WetlandLoss",                   label: "Hilangnya Lahan Basah",               max: 19 },
  { name: "InadequatePlanning",            label: "Perencanaan Tidak Memadai",           max: 16 },
  { name: "PoliticalFactors",              label: "Faktor Politik",                      max: 16 },
];
