import React from 'react';
import '../css/styles.css';
import { Row, Col, Flex } from 'antd';
import { DownloadOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';

const Card = () => {
  return (
    <div style={{
        width: '400px',
        height: '160px',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '10px',
        flexDirection: 'column',
        backgroundColor: 'white',
    }}>
    <Row style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '10px' }}>
        <Col span={12} style={{ marginLeft: '10px'}}>
            <Flex justify='start' align='middle' style={{ marginBottom: '10px'}}>
                <img 
                    alt="Logo1"
                    src={process.env.PUBLIC_URL + '/Image/Logo1.png'} 
                    style={{ width: '36px', height: '15%', marginRight: '10px' }}
                />
                <div>
                    <h4 style={{ margin: '0' }}>Thiết kế UI/UX (Figma)</h4>
                    <p style={{ margin: '0', color: '#929292' }}>Alta Software</p>
                </div>

            </Flex>
            <div>
                Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typescript
            </div>
        </Col>
        <Col span={10} style={{ marginRight: '10px'}}>
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
        <Col span={12}>
                <Flex justify='start' align='middle' style={{  borderRight: '1px solid #888'}}>
                    <p><i><MailOutlined /></i> tuyendung@alta.com.vn</p>
                </Flex>
            </Col>

            <Col span={9}>
                <Flex align='middle' style={{ paddingLeft: '20px'}}>
                    <p><i><PhoneOutlined /></i> 0282 240 9960</p>
                </Flex>
            </Col>
    </Row>

</div>

  );
}

export default Card;
