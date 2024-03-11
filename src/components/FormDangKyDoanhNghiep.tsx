import '../css/styles.css'
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { SendOutlined } from '@ant-design/icons';
import { Form, Input, Row, Col, Button, Typography } from 'antd';


const { Title } = Typography;

const FormDangKyDoanhNghiep: React.FC = () => {
    const [fileList, setFileList] = useState([]);

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const handleChange = (info: any) => {
        setFileList(info.fileList);
    };

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    });

    return (
        <div style={{ backgroundColor: '#F1F3F5', marginBottom: '60px'}}>
            {isDesktopOrLaptop ? (
                <div style={{ margin: '0 200px 0 200px' }}>
                <Title level={3} style={{ color: '#F26D21', paddingTop: '10px' }}>ĐIỀN THÔNG TIN ĐĂNG KÝ</Title>
                
                <Form>
                    <Row gutter={[16, 16]}>
                        <Col span={12}>

                            <div style={{marginBottom: '5px', fontWeight: 'bold'}}>Tên doanh nghiệp<span style={{color:'red'}}>*</span></div>
                            <Form.Item
                                className='formItem'
                                name="name"
                                rules={[{ required: true, message: 'Vui lòng nhập tên doanh nghiệp' }]}
                            >
                                <Input className="formInput" placeholder='Nhập tên doanh nghiệp'/>
                            </Form.Item>
                            
                            <div style={{marginBottom: '5px', fontWeight: 'bold'}}>Email liên hệ<span style={{color:'red'}}>*</span></div>
                            <Form.Item
                                className='formItem'
                                name="email"
                                rules={[{ required: true, message: 'Vui lòng nhập email liên hệ' }]}
                            >
                                <Input className="formInput" placeholder='Nhập email liên hệ'/>
                            </Form.Item>
                            
                            <div style={{marginBottom: '5px', fontWeight: 'bold'}}>Điện thoại<span style={{color:'red'}}>*</span></div>
                            <Form.Item
                                name="phone"
                                rules={[{ required: true, message: 'Vui lòng nhập số điện thoại' }]}
                            >
                                <Input className="formInput" placeholder='Nhập số điện thoại'/>
                            </Form.Item>
                            <p style={{ marginTop: '-20px'}}><span style={{color:'red'}}>*</span> là những trường thông tin bắt buộc</p>
                        </Col>

                        <Col span={12}>
                            <div style={{marginBottom: '5px', fontWeight: 'bold'}}>Địa chỉ công ty<span style={{color:'red'}}>*</span></div>
                            <Form.Item
                                className='formItem'
                                name="address"
                                rules={[{ required: true, message: 'Vui lòng nhập địa chỉ công ty' }]}
                            >
                                <Input className="formInput" placeholder='Nhập địa chỉ công ty'/>
                            </Form.Item>

                            <div style={{marginBottom: '5px', fontWeight: 'bold'}}>Người quản lý<span style={{color:'red'}}>*</span></div>
                            <Form.Item
                                className='formItem'
                                name="manager"
                                rules={[{ required: true, message: 'Vui lòng nhập người quản lý' }]}
                            >
                                <Input className="formInput" placeholder='Nhập người quản lý'/>
                            </Form.Item>

                            <div style={{marginBottom: '5px', fontWeight: 'bold'}}>Điện thoại người quản lý<span style={{color:'red'}}>*</span></div>
                            <Form.Item
                                className='formItem'
                                name="phoneManager"
                                rules={[{ required: true, message: 'Vui lòng nhập điện thoại người quản lý' }]}
                            >
                                <Input className="formInput" placeholder='Nhập điện thoại người quản lý'/>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Form.Item style={{ paddingBottom: '10px'}}>
                        <Button
                            htmlType="submit"
                            style={{
                                margin: '3px',
                                background: '#F26D21',
                                color: 'white',
                                width: '100px',
                                height: '40px',
                            }}
                            >
                            Gửi <i style={{ marginLeft: '5px'}}><SendOutlined /></i>
                        </Button>
                    </Form.Item>
                </Form>
                </div>
            ) : (
                <div style={{ margin: '0 50px 0 50px' }}>
                    <Title level={3} style={{ color: '#F26D21', paddingTop: '10px' }}>ĐIỀN THÔNG TIN ĐĂNG KÝ</Title>
                    
                    <Form>
                        <div style={{marginBottom: '5px', fontWeight: 'bold'}}>Tên doanh nghiệp<span style={{color:'red'}}>*</span></div>
                        <Form.Item
                            className='formItem'
                            name="name"
                            rules={[{ required: true, message: 'Vui lòng nhập tên doanh nghiệp' }]}
                        >
                            <Input style={{ width: '100%' }} placeholder='Nhập tên doanh nghiệp'/>
                        </Form.Item>
                        
                        <div style={{marginBottom: '5px', fontWeight: 'bold'}}>Email liên hệ<span style={{color:'red'}}>*</span></div>
                        <Form.Item
                            className='formItem'
                            name="email"
                            rules={[{ required: true, message: 'Vui lòng nhập email liên hệ' }]}
                        >
                            <Input style={{ width: '100%' }} placeholder='Nhập email liên hệ'/>
                        </Form.Item>
                        
                        <div style={{marginBottom: '5px', fontWeight: 'bold'}}>Điện thoại<span style={{color:'red'}}>*</span></div>
                        <Form.Item
                            name="phone"
                            rules={[{ required: true, message: 'Vui lòng nhập số điện thoại' }]}
                        >
                            <Input style={{ width: '100%' }} placeholder='Nhập số điện thoại'/>
                        </Form.Item>

                        <div style={{marginBottom: '5px', fontWeight: 'bold'}}>Địa chỉ công ty<span style={{color:'red'}}>*</span></div>
                        <Form.Item
                            className='formItem'
                            name="address"
                            rules={[{ required: true, message: 'Vui lòng nhập địa chỉ công ty' }]}
                        >
                            <Input style={{ width: '100%' }} placeholder='Nhập địa chỉ công ty'/>
                        </Form.Item>

                        <div style={{marginBottom: '5px', fontWeight: 'bold'}}>Người quản lý<span style={{color:'red'}}>*</span></div>
                        <Form.Item
                            className='formItem'
                            name="manager"
                            rules={[{ required: true, message: 'Vui lòng nhập người quản lý' }]}
                        >
                            <Input style={{ width: '100%' }} placeholder='Nhập người quản lý'/>
                        </Form.Item>

                        <div style={{marginBottom: '5px', fontWeight: 'bold'}}>Điện thoại người quản lý<span style={{color:'red'}}>*</span></div>
                        <Form.Item
                            className='formItem'
                            name="phoneManager"
                            rules={[{ required: true, message: 'Vui lòng nhập điện thoại người quản lý' }]}
                        >
                            <Input style={{ width: '100%' }} placeholder='Nhập điện thoại người quản lý'/>
                        </Form.Item>

                        <p><span style={{color:'red'}}>*</span> là những trường thông tin bắt buộc</p>

                        <Form.Item style={{ paddingBottom: '10px'}}>
                            <Button
                                htmlType="submit"
                                style={{
                                    margin: '3px',
                                    background: '#F26D21',
                                    color: 'white',
                                    width: '100px',
                                    height: '40px',
                                }}
                                >
                                Gửi <i style={{ marginLeft: '5px'}}><SendOutlined /></i>
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            )}
        </div>
    )
}

export default FormDangKyDoanhNghiep