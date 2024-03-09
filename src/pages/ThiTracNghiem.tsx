import React from 'react';
import Footer from '../components/Footer';
import Menu from '../components/MenuHocTap';
import FormDeThi from '../components/FormDeThi';

const ThiTracNghiem = () => {
  return (
    <>
        <Menu></Menu>

        <div className='content'>
          <FormDeThi></FormDeThi>
        </div>

        <Footer position="fixed" />
    </>
  );
};

export default ThiTracNghiem
