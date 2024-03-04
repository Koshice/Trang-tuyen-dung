import React from 'react';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Menu from '../components/MenuSinhVien';
import SeachBar from '../components/SearchBar';

const XemJD = () => {
  return (
    <>
        <Menu></Menu>
      
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
        
        {/* <SeachBar></SeachBar> */}

          <Card></Card>

        </div>

        <Footer></Footer>
    </>
  );
};

export default XemJD
