const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Izinkan siapa saja (termasuk React) mengakses data ini
app.use(cors());

// DATA DUMMY (Ceritanya ini database kita sementara)
const menuDimsum = [
    { id: 1, nama: "Siomay Ayam", harga: 15000, stok: 10 },
    { id: 2, nama: "Hakau Udang", harga: 20000, stok: 5 },
    { id: 3, nama: "Lumpia Kulit Tahu", harga: 18000, stok: 8 },
    { id: 4, nama: "Bakpao Telur Asin", harga: 17000, stok: 12 },
];

// ROUTE: Saat React minta ke alamat '/api/menu', kasih data di atas
app.get('/api/menu', (req, res) => {
    console.log("Ada yang minta data dimsum!"); // Cek di terminal nanti
    res.json(menuDimsum);
});

// Nyalakan Server
app.listen(PORT, () => {
    console.log(`Server Dimsum berjalan di http://localhost:${PORT}`);
});