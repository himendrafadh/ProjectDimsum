const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());

const menuDimsum = [
    { id: 1, nama: "Siomay Ayam", harga: 15000, stok: 10 },
    { id: 2, nama: "Hakau Udang", harga: 20000, stok: 5 },
    { id: 3, nama: "Lumpia Kulit Tahu", harga: 18000, stok: 8 },
    { id: 4, nama: "Bakpao Telur Asin", harga: 17000, stok: 12 },
];

app.get('/api/menu', (req, res) => {
    console.log("Ada yang minta data dimsum!");
    res.json(menuDimsum);
});

// --- 👇 GANTI BAGIAN BAWAH INI YAA 👇 ---

// 1. (BARU) Kita harus "ekspor" app ini supaya Vercel bisa menjalankannya
module.exports = app;

// 2. (BARU) Cek: Apakah kode ini sedang dijalankan langsung (di laptop)?
// Kalau iya, baru kita nyalakan server manual.
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server Dimsum berjalan di http://localhost:${PORT}`);
    });
}