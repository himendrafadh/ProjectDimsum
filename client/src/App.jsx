import { useState, useEffect } from 'react'

function App() {
  // 1. Siapkan wadah untuk menampung data dimsum (State)
  const [dimsumList, setDimsumList] = useState([]);

  // 2. Ambil data dari Node.js saat halaman pertama kali dibuka
  useEffect(() => {
    // Panggil alamat server Node.js kita tadi
    fetch('hhttps://naggingly-lunisolar-alba.ngrok-free.dev/')
      .then(response => response.json()) // Ubah jadi JSON
      .then(data => setDimsumList(data)) // Masukkan ke wadah State
      .catch(error => console.error("Gagal ambil data:", error));
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🥢 Warung Dimsum Himendra</h1>

      {/* Tampilkan pesan loading jika data belum ada */}
      {dimsumList.length === 0 ? <p>Sedang memuat menu...</p> : null}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
        {/* 3. Looping data (Map) */}
        {dimsumList.map((item) => (
          <div key={item.id} style={{ 
              border: '1px solid #ddd', 
              borderRadius: '8px', 
              padding: '10px',
              backgroundColor: '#f9f9f9'
            }}>
            <h3>{item.nama}</h3>
            <p>Harga: Rp {item.harga}</p>
            <p>Stok: {item.stok} porsi</p>
            <button style={{ background: 'orange', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>
              Pesan
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App