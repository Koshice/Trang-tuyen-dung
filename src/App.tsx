import React, { useEffect } from 'react';
import './App.css';
import DangNhap from './pages/DangNhap';
import QuenMatKhau from './pages/QuenMatKhau';
import TaoLaiMatKhau from './pages/TaoLaiMatKhau';
import XemJDSinhVien from './pages/XemJDSinhVien';
import DangKyTrucTuyen from './pages/DangKyTrucTuyen';
import XemJDDoanhNghiep from './pages/XemJDDoanhNghiep';
import DangKyDoanhNghiep from './pages/DoanhNghiepDangKy';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from './redux/hooks';
import { collectionFetchData } from './redux/slice/collectionSlice';

const App = () => {
  const { currentUser } = useAppSelector(state => state.auth)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(collectionFetchData())
  }, [currentUser, dispatch])  
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<XemJDSinhVien />} />
        <Route path='/login' element={<DangNhap />} />
        <Route path='/newPassword' element={<TaoLaiMatKhau />} />
        <Route path='/forgotPassword' element={<QuenMatKhau />} />
        <Route path='/enterprise' element={<XemJDDoanhNghiep />} />
        <Route path='/signUpStudent' element={<DangKyTrucTuyen />} />
        <Route path='/signUpEnterprise' element={<DangKyDoanhNghiep />} />
      </Routes>
    </Router>
  );
}

export default App;
