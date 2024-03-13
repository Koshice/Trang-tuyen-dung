import React, { useState } from 'react';
import { Typography } from 'antd';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import Menu from '../components/MenuDoanhNghiep';
import Collections from '../components/Collections';

const { Title } = Typography;

const XemJDDoanhNghiep = () => {
  const [selectedCompany, setSelectedCompany] = useState<string>('');
  const [selectedNameJob, setSelectedNameJob] = useState<string>('');

  const handleCompanyChange = (value: string) => {
    setSelectedCompany(value);
  };

  const handleNameJobChange = (value: string) => {
    setSelectedNameJob(value);
  };
  return (
    <>
        <Menu></Menu>
      
        <div>
          <div style={{display: 'flex', justifyContent: 'center', marginTop: '40px'}}>
            <SearchBar onCompanyChange={handleCompanyChange} onJobChange={handleNameJobChange}/>
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
              <Collections selectedCompany={selectedCompany} selectedNameJob={selectedNameJob}/>
          </div>

        </div>

        <Footer position="fixed" />
    </>
  );
};

export default XemJDDoanhNghiep
