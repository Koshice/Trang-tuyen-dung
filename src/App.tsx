import React, { useEffect } from 'react';
import './App.css';
import TaoDeThi from './pages/TaoDeThi';
import DangNhap from './pages/DangNhap';
import QuenMatKhau from './pages/QuenMatKhau';
import TaoLaiMatKhau from './pages/TaoLaiMatKhau';
import ThiTracNghiem from './pages/ThiTracNghiem';
import XemJDSinhVien from './pages/XemJDSinhVien';
import TienTrinhHocTap from './pages/TienTrinhHocTap';
import DangKyTrucTuyen from './pages/DangKyTrucTuyen';
import XemJDDoanhNghiep from './pages/XemJDDoanhNghiep';
import DangKyDoanhNghiep from './pages/DoanhNghiepDangKy';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from './redux/hooks';
import { collectionFetchData } from './redux/slice/collectionSlice';
import { fetchQuestions } from './redux/slice/questionSlice';

const App = () => {
  const { currentUser } = useAppSelector(state => state.auth)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(collectionFetchData())
    dispatch(fetchQuestions())
  }, [currentUser, dispatch])  
  
  return (
    <Router>
      <Routes>
        {/* Auth */}
        <Route path='/login' element={<DangNhap />} />
        <Route path='/newPassword' element={<TaoLaiMatKhau />} />
        <Route path='/forgotPassword' element={<QuenMatKhau />} />

        {/* Student */}
        <Route path='/' element={<XemJDSinhVien />} />
        <Route path='/taoDeThi' element={<TaoDeThi />} />
        <Route path='/thiTracNghiem' element={<ThiTracNghiem />} />
        <Route path='/signUpStudent' element={<DangKyTrucTuyen />} />
        <Route path='/tienTrinhHocTap' element={<TienTrinhHocTap />} />
        
        {/* Enterprise */}
        <Route path='/enterprise' element={<XemJDDoanhNghiep />} />
        <Route path='/signUpEnterprise' element={<DangKyDoanhNghiep />} />
      </Routes>
    </Router>
  );
}

export default App;
