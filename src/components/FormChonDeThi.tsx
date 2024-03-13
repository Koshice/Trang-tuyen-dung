import React from 'react';
import '../css/styles.css';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import { PlusOutlined, CaretDownOutlined } from '@ant-design/icons';
import { Form, Select, Row, Col, Button, } from 'antd';

const { Title } = Typography;

const FormChonDeThi = () => {
  return (
    <>
        <div style={{
            display: 'flex',
            marginTop: '40px',
            alignItems: 'center', 
            flexDirection: 'column',
        }}>
            <div>
                <Title level={3}>
                    Xin chào 
                    <span 
                        style={{ 
                            color: '#F26D21', 
                            marginLeft: '5px', 
                            textTransform: 'uppercase',
                        }}>
                        Nguyễn Đăng Khoa
                    </span>
                </Title>
            </div>
          <div style={{ backgroundColor: 'white' }}>
            <Row style={{ display: 'flex', alignItems: 'center', width: '580px', marginBottom: '-25px' }}>
                <Col span={20}>
                    <div>
                        <Form.Item name="Subject">
                            <Select
                                className='selectSubject'
                                style={{
                                    height: '50px',
                                    width: '460px',
                                }}
                                placeholder="Chọn môn thi"
                                suffixIcon={<CaretDownOutlined style={{ color: '#F26D21' }}/>}
                            >
                                <Select.Option value="frontEnd">Lập trình Front-end</Select.Option>
                                <Select.Option value="backEnd">Lập trình Back-end</Select.Option>
                                <Select.Option value="vfxArtist">VFX Artist</Select.Option>
                                <Select.Option value="uiUxDesign">UI/UX Design</Select.Option>
                            </Select>
                        </Form.Item>
                    </div>
                </Col>

                <Col span={4}>
                    <div>
                        <Form.Item>
                            <Link to='/thiTracNghiem'>
                                <Button
                                    style={{
                                        marginLeft: '-20px',
                                        color: 'white',
                                        width: '120px',
                                        height: '45px',
                                        fontSize: '16px',
                                        backgroundColor: '#F26D21',
                                    }}
                                >
                                    <span>
                                        <i><PlusOutlined /></i> Tạo đề thi
                                    </span>
                                </Button>
                            </Link>
                        </Form.Item>
                    </div>
                </Col>
            </Row>
        </div>
        </div>
    </>
  );
};

export default FormChonDeThi
