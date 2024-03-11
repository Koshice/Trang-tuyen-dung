import React from 'react';
import { Layout, Row, Col, Flex } from 'antd';
import Heading from '../components/Auth/Header';
import { useMediaQuery } from 'react-responsive';
import FormDangNhap from '../components/Auth/FormDangNhap';

const DangNhap = () => {
  const isDesktopOrLaptop = useMediaQuery({
      query: '(min-device-width: 1224px)'
  });

  return (
    <>
      <Heading></Heading>

      <Row>
        <Col span={ isDesktopOrLaptop ? 10 : 24 } style={{ marginTop: '0px' }}>
          <Flex justify="start" align="middle">
            <FormDangNhap></FormDangNhap>
          </Flex>
        </Col>

        
        <Col span={10} style={{ marginTop: '100px', display: isDesktopOrLaptop ? 'block' : 'none'  }}>
          <Flex justify="end" align="middle">
            <img src={process.env.PUBLIC_URL + '/Image/JoinUs.svg'} alt="JoinUs" style={{ width: '75%', height: 'auto' }}/>
          </Flex>
        </Col>
      </Row>
    </>
  );
};

export default DangNhap
