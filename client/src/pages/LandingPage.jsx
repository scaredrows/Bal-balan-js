import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1>⚽ Bal-Balan Yuk</h1>
        <p>Platform pemesanan lapangan sepak bola online</p>
        <div style={{ marginTop: '1rem' }}>
          <Link to="/login"><button>Login</button></Link>
          <Link to="/register"><button style={{ marginLeft: '1rem' }}>Daftar</button></Link>
        </div>
      </header>

      <main>
        <section>
          <h2>🔹 Fitur Utama:</h2>
          <ul>
            <li>✅ Booking lapangan secara online</li>
            <li>✅ Cek jadwal & ketersediaan</li>
            <li>✅ Upload bukti pembayaran</li>
            <li>✅ Riwayat booking & status pembayaran</li>
            <li>✅ Notifikasi dan konfirmasi cepat</li>
            <li>✅ Admin panel untuk kelola semua data</li>
          </ul>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2>📍 Kenapa Bal-Balan Yuk?</h2>
          <ul>
            <li>⚡ Proses booking cepat dan mudah</li>
            <li>📆 Jadwal real-time dan transparan</li>
            <li>🧾 Bukti booking dan pembayaran langsung dari dashboard</li>
          </ul>
        </section>
      </main>

      <footer style={{ marginTop: '3rem', textAlign: 'center' }}>
        <p>&copy; {new Date().getFullYear()} Bal-Balan Yuk. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
