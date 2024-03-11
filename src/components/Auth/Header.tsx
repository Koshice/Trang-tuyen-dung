import React from 'react';
import { Row, Col, Flex } from 'antd';
import { useMediaQuery } from 'react-responsive';

const Header = () => {
  const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
  });
  return (
    <>
      {isDesktopOrLaptop ? (
        <Row>
          <Col span={4} style={{ marginTop: '50px' }}>
            <Flex justify="start" align="middle" style={{ marginLeft: '250px', height: '61px' }}>
              <img src={process.env.PUBLIC_URL + '/Image/Logo.svg'} alt="Logo" style={{ width: 'auto', height: '80%' }}/>
            </Flex>
          </Col>

          
          <Col span={20} style={{ marginTop: '33px' }}>
            <Flex justify="end" align="middle">
              <div>
                <h2 style={{ marginRight: '315px', color: '#F26D21'}}>HỆ THỐNG TUYỂN DỤNG <br/> VÀ QUẢN LÝ SINH VIÊN THỰC TẬP</h2>
              </div>
            </Flex>
          </Col>
        </Row>
      ) : (
        <Row>
          <Col span={10} style={{ marginTop: '20px', marginLeft: '50px' }}>
            <Flex justify="start" align="middle" style={{ height: '61px' }}>
              <img src={process.env.PUBLIC_URL + '/Image/Logo.svg'} alt="Logo" style={{ width: 'auto', height: '60%' }}/>
            </Flex>
          </Col>

          
          <Col span={10} style={{ marginTop: '', marginRight: '50px' }}>
            <Flex justify="end" align="middle">
              <div>
                <h4 style={{ color: '#F26D21'}}>HỆ THỐNG TUYỂN DỤNG <br/> VÀ QUẢN LÝ SINH VIÊN THỰC TẬP</h4>
              </div>
            </Flex>
          </Col>
        </Row>
      )}
    </>
  );
};

export default Header
