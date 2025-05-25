const express = require('express');
const cors = require('cors');
const session = require('express-session');

const app = express();

// 🟡 Tambahkan ini untuk mengizinkan React mengakses backend
app.use(cors({
  origin: 'http://localhost:5173', // alamat frontend kamu
  credentials: true                // WAJIB agar session ikut terkirim
}));

// 🟡 Konfigurasi express-session
app.use(session({
  secret: 'secret123',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false, // false karena masih pakai HTTP (bukan HTTPS)
    httpOnly: true,
    sameSite: 'lax'
  }
}));

// 🟡 Middleware penting lainnya
app.use(express.json());

// 🟢 Routing backend kamu
const authRoutes = require('./routes/authRoutes'); // pastikan path-nya benar
app.use('/api/auth', authRoutes);

// 🟢 Port server
app.listen(5000, () => console.log('Server running at http://localhost:5000'));
