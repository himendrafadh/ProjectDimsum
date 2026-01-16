const express = require("express");
const cors = require("cors");
const app = express();

// Konfigurasi agar tidak bentrok
app.use(cors());
app.use(express.json());

// Data Dummy
const menuDimsum = [
  { id: 1, nama: "Siomay Ayam", harga: 15000, stok: 10 },
  { id: 2, nama: "Hakau Udang", harga: 20000, stok: 5 },
  { id: 3, nama: "Lumpia Kulit Tahu", harga: 18000, stok: 8 },
  { id: 4, nama: "Bakpao Telur Asin", harga: 17000, stok: 12 },
];

// RUTE 1: Cek apakah server hidup (PENTING BUAT DEBUGGING)
// Akses nanti: /api
app.get("/api", (req, res) => {
  res.send("Backend Dimsum Berjalan! 🚀");
});

// RUTE 2: Ambil data menu
// Akses nanti: /api/menu
app.get("/api/menu", (req, res) => {
  res.json(menuDimsum);
});

// --- BAGIAN KUNCI UNTUK VERCEL ---
// Kita export app-nya, BUKAN di-listen (kecuali kalau di laptop)
module.exports = app;

// Cek apakah dijalankan manual di laptop (node api/index.js)
if (require.main === module) {
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server jalan di http://localhost:${PORT}`);
  });
}