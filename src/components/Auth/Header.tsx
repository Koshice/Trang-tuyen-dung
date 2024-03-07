import React from 'react';
import { Row, Col, Flex } from 'antd';

const Header = () => {
  return (
    <>
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
    </>
  );
};

export default Header
