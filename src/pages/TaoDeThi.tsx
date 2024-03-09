import React from 'react';
import Footer from '../components/Footer';
import Menu from '../components/MenuHocTap';
import FormChonDeThi from '../components/FormChonDeThi';

const TaoDeThi = () => {
  return (
    <>
        <Menu></Menu>

        <div className='content'>
          <FormChonDeThi></FormChonDeThi>
        </div>

        <Footer position="fixed" />
    </>
  );
};

export default TaoDeThi
