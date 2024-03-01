import React from 'react';
import './App.css';
import DangNhap from './pages/DangNhap';
import QuenMatKhau from './pages/QuenMatKhau';
import TaoLaiMatKhau from './pages/TaoLaiMatKhau';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<DangNhap />} />
        <Route path='/forgotPassword' element={<QuenMatKhau />} />
        <Route path='/newPassword' element={<TaoLaiMatKhau />} />
      </Routes>
    </Router>
  );
}

export default App;
