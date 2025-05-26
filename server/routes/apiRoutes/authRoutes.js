const express = require('express');
const router = express.Router();
const authController = require('../../controllers/authController');

const bcrypt = require('bcrypt');
const User = require('../models/User'); // pastikan path ini benar

// 👇 Tambahkan ini di BAWAH baris router.post('/reset-password')
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Semua field wajib diisi.' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email sudah terdaftar.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'Registrasi berhasil.' });
  } catch (error) {
    console.error('❌ Error saat registrasi:', error);
    res.status(500).json({ message: 'Terjadi kesalahan saat registrasi.' });
  }
});
