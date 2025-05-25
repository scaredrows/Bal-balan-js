import React from 'react';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage'; // ⬅️ arahkan ke file yang kamu buat
import NotFound from './pages/NotFound';
// Tambahkan import lainnya kalau kamu punya

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
      </Routes>
    </Router>
  );
}

export default App;
