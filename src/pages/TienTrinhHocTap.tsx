import React from 'react';
import Footer from '../components/Footer';
import Menu from '../components/MenuHocTap';
import FomTienTrinhHocTap from '../components/FomTienTrinhHocTap';

const TienTrinhHocTap = () => {
  return (
    <>
        <Menu></Menu>
      
        <div className='content'>
          <FomTienTrinhHocTap></FomTienTrinhHocTap>
        </div>

        <Footer position="fixed" />
    </>
  );
};

export default TienTrinhHocTap
