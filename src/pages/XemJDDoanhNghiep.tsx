import React from 'react';
import { Typography } from 'antd';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import Menu from '../components/MenuDoanhNghiep';
import Collections from '../components/Collections';

const { Title } = Typography;

const XemJDDoanhNghiep = () => {
  return (
    <>
        <Menu></Menu>
      
        <div>
          <div style={{display: 'flex', justifyContent: 'center', marginTop: '40px'}}>
            <SearchBar></SearchBar>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Title level={3} style={{ marginBottom: 0 }}>
              TÌM <span style={{ color: '#F26D21' }}> CÔNG VIỆC MƠ ƯỚC </span> CỦA BẠN
            </Title>
            <Title level={3} style={{ marginTop: 0 }}>
              TẠI NGÔI NHÀ MỚI
            </Title>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '650px'}}>
                <Collections></Collections>
          </div>

        </div>

        <Footer position="fixed" />
    </>
  );
};

export default XemJDDoanhNghiep
