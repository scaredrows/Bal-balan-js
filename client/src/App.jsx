import React from 'react';
import PasswordReset from './pages/auth/PasswordReset';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage'; // ⬅️ arahkan ke file yang kamu buat
import NotFound from './pages/NotFound';
import routes from './routes';
// Tambahkan import lainnya kalau kamu punya

function App() {
  // return (
  //   <Router>
  //     <Routes>
  //       <Route path="/" element={<LandingPage />} />
  //       <Route path="*" element={<NotFound />} />
  //       <Route path="/login" element={<Login />} />
  //       <Route path="/register" element={<Register />} />
  //       <Route path="/reset-password" element={<PasswordReset />} />
  //     </Routes>
  //   </Router>
  // );
  return(
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App;
