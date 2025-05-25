const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.forgotPassword = async (req, res) => {
  const { identifier } = req.body;
  const user = await User.findOne({
    $or: [{ email: identifier }, { username: identifier }]
  });

  if (!user) return res.status(404).json({ message: 'User tidak ditemukan' });

  // Simpan userId di session atau kirim response ke frontend
  req.session.resetUserId = user._id;
  res.json({ message: 'User ditemukan. Silakan reset password.' });
};

exports.resetPassword = async (req, res) => {
  const { password, confirmPassword } = req.body;
  const userId = req.session.resetUserId;

  if (!userId) return res.status(400).json({ message: 'Akses tidak valid' });
  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Password tidak cocok' });
  }

  const hashed = await bcrypt.hash(password, 10);
  await User.findByIdAndUpdate(userId, { password: hashed });
  req.session.resetUserId = null;

  res.json({ message: 'Password berhasil diubah' });
};
