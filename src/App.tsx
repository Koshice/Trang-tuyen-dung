import React from 'react';
import './App.css';
import XemJDSinhVien from './pages/XemJDSinhVien';
import XemJDDoanhNghiep from './pages/XemJDDoanhNghiep';
import DangNhap from './pages/DangNhap';
import QuenMatKhau from './pages/QuenMatKhau';
import TaoLaiMatKhau from './pages/TaoLaiMatKhau';
import DangKyTrucTuyen from './pages/DangKyTrucTuyen';
import DangKyDoanhNghiep from './pages/DoanhNghiepDangKy';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<XemJDSinhVien />} />
        <Route path='/enterprise' element={<XemJDDoanhNghiep />} />
        <Route path='/login' element={<DangNhap />} />
        <Route path='/forgotPassword' element={<QuenMatKhau />} />
        <Route path='/newPassword' element={<TaoLaiMatKhau />} />
        <Route path='/signUpStudent' element={<DangKyTrucTuyen />} />
        <Route path='/signUpEnterprise' element={<DangKyDoanhNghiep />} />
      </Routes>
    </Router>
  );
}

export default App;
