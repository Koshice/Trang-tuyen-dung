import React from 'react';
import Heading from '../components/Auth/Header';
import { Layout, Row, Col, Flex } from 'antd';
import FormTaoLaiMk from '../components/Auth/FormTaoLaiMk';

const TaoLaiMatKhau = () => {
  return (
    <>
      <Heading></Heading>

      <Row>
        <Col span={10} style={{ marginTop: '100px' }}>
          <Flex justify="start" align="middle" style={{ marginLeft: '250px', height: '61px' }}>
            <FormTaoLaiMk></FormTaoLaiMk>
          </Flex>
        </Col>

        
        <Col span={10} style={{ marginTop: '100px' }}>
          <Flex justify="end" align="middle">
            <img src={process.env.PUBLIC_URL + '/Image/JoinUs.svg'} alt="JoinUs" style={{ width: '75%', height: 'auto' }}/>
          </Flex>
        </Col>
      </Row>
    </>
  );
};

export default TaoLaiMatKhau
