const express = require('express');
const cors = require('cors');
const session = require('express-session');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost:27017/nama_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
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

app.use('/api/v1/auth', require('./routes/apiRoutes/authRoutes'));

// 🟢 Port server
app.listen(5000, () => console.log('Server running at http://localhost:5000'));
