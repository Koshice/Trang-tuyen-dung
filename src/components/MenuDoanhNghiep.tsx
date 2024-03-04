import '../css/styles.css'
import { Row, Col, Flex } from 'antd';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { FileSearchOutlined, FormOutlined } from '@ant-design/icons';


const Menu = () => {
    const [page, setPage] = useState('');

    useEffect(() => {
        const path = window.location.pathname;

        if (path === '/') {
            setPage('Xem JD');
        } else if (path === '/signUpEnterprise') {
            setPage('Đăng ký');
        }
    }, []);

  return (
    <div className='menu'>
      <Row  style={{ display: 'flex', justifyContent: 'space-between', margin: '-20px 200px -30px 200px' }}>
        <Col span={4} style={{ marginTop: '30px' }}>
          <Flex justify="start" align="middle" style={{height: '61px' }}>
            <img src={process.env.PUBLIC_URL + '/Image/Logo.svg'} alt="Logo" style={{ width: 'auto', height: '65%' }}/>
          </Flex>
        </Col>

        
        <Col span={20} style={{ marginTop: '25px' }}>
          <Flex justify="end" align="middle">
            <div style={{ display: 'flex', alignItems:' center'}}>
                <Link
                    className={page === 'Xem JD' ? 'custom-underline' : ''}
                    to={'/enterprise'}
                    style={{ 
                        color: page === 'Xem JD' ? '#F26D21' : '#6D6D6D',
                        cursor: 'pointer' 
                    }}
                >
                    <h4>
                        <span style={{ marginRight: '10px'}}><FileSearchOutlined /></span> 
                        Xem JD yêu cầu tuyển dụng
                    </h4>
                </Link>
                
                <Link
                    className={page === 'Đăng ký' ? 'custom-underline' : ''}
                    to={'/signUpEnterprise'}
                    style={{ 
                        marginLeft: '20px', 
                        color: page === 'Đăng ký' ? '#F26D21' : '#6D6D6D',
                        cursor: 'pointer' 
                    }}
                >
                    <h4>
                        <span style={{ marginRight: '10px'}}><FormOutlined /></span> 
                        Doanh nghiệp đăng ký
                    </h4>
                </Link>
            </div>
          </Flex>
        </Col>
      </Row>
    </div>
  );
};

export default Menu
