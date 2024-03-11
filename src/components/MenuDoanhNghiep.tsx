import '../css/styles.css'
import { Row, Col, Flex } from 'antd';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import React, { useState, useEffect } from 'react';
import { FileSearchOutlined, FormOutlined, MenuOutlined } from '@ant-design/icons';


const Menu = () => {
    const [page, setPage] = useState('');
    const [menuOpen, setMenuOpen] = useState(false);

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    });

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const path = window.location.pathname;

        if (path === '/enterprise') {
            setPage('Xem JD');
        } else if (path === '/signUpEnterprise') {
            setPage('Đăng ký');
        }
    }, []);

  return (
    <div className='menu'>
      {isDesktopOrLaptop ? (
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
      ) : (
        <Row style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: '-20px 50px -30px 50px',
        }}>
            <Col span={4} style={{ marginTop: '35px' }}>
                <Flex justify="start" align="middle" style={{ height: '50px' }}>
                    <img src={process.env.PUBLIC_URL + '/Image/Logo.svg'} alt="Logo" style={{ width: 'auto', height: '70%' }} />
                </Flex>
            </Col>

            <Col span={20} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginTop: '20px' }}>
                <Flex justify="end" align="middle">
                  <MenuOutlined
                      style={{ fontSize: '24px', color: '#F26D21', cursor: 'pointer' }}
                      onClick={handleMenuToggle}
                  />
                </Flex>
            </Col>

            {menuOpen && (
              <Col span={24} style={{ marginBottom: '10px', justifyContent: 'end'}}>
                <Row style={{ display: 'flex', justifyContent: 'end' }}>
                    <Col>
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
                    </Col>
                </Row>
                <Row style={{ display: 'flex', justifyContent: 'end' }}>
                    <Col>
                        <Link
                            className={page === 'Đăng ký' ? 'custom-underline' : ''}
                            to={'/signUpEnterprise'}
                            style={{ 
                                color: page === 'Đăng ký' ? '#F26D21' : '#6D6D6D',
                                cursor: 'pointer' 
                            }}
                        >
                            <h4>
                                <span style={{ marginRight: '10px'}}><FormOutlined /></span> 
                                Doanh nghiệp đăng ký
                            </h4>
                        </Link>
                    </Col>
                </Row>
            </Col>
            )}
        </Row>
      )}

      
    </div>
  );
};

export default Menu
