import React from 'react';
import '../css/styles.css';
import { Row, Col, Flex } from 'antd';
import { ICollection } from '../types';
import { DownloadOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';

interface IProps {
    collection: ICollection
}

const Card: React.FC<IProps> = ({ collection }) => {
  return (
    <div style={{
        width: '380px',
        height: '160px',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '10px',
        flexDirection: 'column',
        backgroundColor: 'white',
    }}>
        <Row style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '10px' }}>
            <Col span={14} style={{ marginLeft: '10px'}}>
                <Flex justify='start' align='middle' style={{ marginBottom: '10px'}}>
                    <img 
                        // src={process.env.PUBLIC_URL + '/Image/Logo1.png'} 
                        // alt="Logo1"
                        src={collection.logo}
                        alt={collection.logo}
                        style={{ width: '36px', height: '15%', marginRight: '10px' }}
                    />
                    <div>
                        <h4 style={{ margin: '0' }}>
                            {/* Thiết kế UI/UX (Figma) */}
                            {collection.nameJob}
                        </h4>
                        <p style={{ margin: '0', color: '#929292' }}>
                            {/* Alta Software */}
                            {collection.company}
                        </p>
                    </div>

                </Flex>
                <div>
                    <span style={{ marginRight: '5px'}}>
                        Yêu cầu: 
                    </span>
                    { collection.requirement } 
                    {/* Có tối thiểu 1 năm kinh nghiệm ReactJS, Typescript */}
                </div>
            </Col>
            <Col span={222} style={{ marginRight: '10px'}}>
                <Flex justify='end' align='middle'>
                    <div style=
                        {{ 
                            width: '35px', 
                            height: '35px', 
                            display: 'flex', 
                            cursor: 'pointer',
                            borderRadius: '5px',
                            alignItems: 'center', 
                            justifyContent: 'center',
                            backgroundColor: '#F26D21', 
                        }}
                    >
                        <DownloadOutlined style={{ color: 'white', fontSize: '24px' }}/>
                    </div>
                </Flex>
            </Col>
        </Row>
        
        <Row
            style={{
                width: '100%',
                display: 'flex',
                paddingTop: '5px',
                margin: '10px 0 0 0',
                justifyContent: 'center',
                borderTop: '1px dashed #888',
            }}
        >
            <Col span={14}>
                <Flex justify='start' align='middle' style={{  borderRight: '1px solid #888', marginLeft: '10px'}}>
                    <p>
                        <i style={{marginRight: '5px'}}><MailOutlined /></i> 
                        {/* tuyendung@alta.com.vn */}
                        {collection.email}
                    </p>
                </Flex>
            </Col>

            <Col span={9}>
                <Flex align='middle' style={{ paddingLeft: '20px'}}>
                    <p>
                        <i style={{marginRight: '5px'}}><PhoneOutlined /></i> 
                        {/* 0282 240 9960 */}
                        {collection.phone}
                    </p>
                </Flex>
            </Col>
        </Row>
    </div>

  );
}

export default Card;
