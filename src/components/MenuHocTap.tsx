import '../css/styles.css'
import { Row, Col, Flex } from 'antd';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { EditOutlined, ReadOutlined } from '@ant-design/icons';


const MenuHocTap = () => {
    const [page, setPage] = useState('');

    useEffect(() => {
        const path = window.location.pathname;

        if (path === '/tienTrinhHocTap') {
            setPage('Tien trinh hoc tap');
        } else if (path === '/thiTracNghiem' || '/taoDeThi') {
            setPage('Thi trac nghiem');
        }
    }, []);

  return (
    <div className='menu'>
      <Row style={{ display: 'flex', justifyContent: 'space-between', margin: '-20px 200px -30px 200px' }}>
        <Col span={4} style={{ marginTop: '30px' }}>
          <Flex justify="start" align="middle" style={{height: '61px' }}>
            <img src={process.env.PUBLIC_URL + '/Image/Logo.svg'} alt="Logo" style={{ width: 'auto', height: '65%' }}/>
          </Flex>
        </Col>

        
        <Col span={20} style={{ marginTop: '25px' }}>
          <Flex justify="end" align="middle">
            <div style={{ display: 'flex', alignItems:' center'}}>
                <Link
                    to={'/taoDeThi'}
                    className={page === 'Thi trac nghiem' ? 'custom-underline' : ''}
                    style={{ 
                        color: page === 'Thi trac nghiem' ? '#F26D21' : '#6D6D6D',
                        cursor: 'pointer' 
                    }}
                >
                    <h4>
                        <span style={{ marginRight: '10px'}}><EditOutlined /></span> 
                        Thi trắc nghiệm
                    </h4>
                </Link>
                
                <Link
                    to={'/tienTrinhHocTap'}
                    className={page === 'Tien trinh hoc tap' ? 'custom-underline' : ''}
                    style={{ 
                        marginLeft: '20px', 
                        color: page === 'Tien trinh hoc tap' ? '#F26D21' : '#6D6D6D',
                        cursor: 'pointer' 
                    }}
                >
                    <h4>
                        <span style={{ marginRight: '10px'}}><ReadOutlined /></span> 
                        Tiến trình học tập
                    </h4>
                </Link>

                <Link
                    to={''}
                    style={{ 
                        marginLeft: '20px', 
                        cursor: 'pointer' 
                    }}
                >
                    <div 
                      style={{
                        width: '125px', 
                        height: '45px', 
                        display: 'flex',
                        borderRadius: '10px',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#F26D21',
                      }}>
                            <img 
                              alt="avatar" 
                              style={{ height: '34px', borderRadius: '20px', marginRight: '5px', marginLeft: ''}}
                              src={process.env.PUBLIC_URL + '/Image/Avatar.jpg'}  
                            />
                            <div>

                            <h4 style={{color: 'white', paddingBottom: '2px'}}>Đăng Khoa</h4>
                            </div>
                    </div>
                </Link>
            </div>
          </Flex>
        </Col>
      </Row>
    </div>
  );
};

export default MenuHocTap
