import '../css/styles.css'
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { SendOutlined, CloudUploadOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Form, Input, Select, Row, Col, Button, Upload, Typography, message } from 'antd';

const { Title } = Typography;

const FormDangKySinhVien: React.FC = () => {
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

    const props = {
        headers: {
        authorization: 'authorization-text',
        },
        onChange(info: any) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };

    return (
        <div style={{ backgroundColor: '#F1F3F5', marginBottom: '60px' }}>
            {isDesktopOrLaptop ? (
                <div style={{ margin: '0 200px 0 200px' }}>
                    <Title level={3} style={{ color: '#F26D21', paddingTop: '10px' }}>ĐIỀN THÔNG TIN ĐĂNG KÝ</Title>
                    
                    <Form>
                        <div style={{marginBottom: '5px', fontWeight: 'bold'}}>Chọn file<span style={{color:'red'}}>*</span></div>
                        <Form.Item 
                            name='file'
                            className='formItem'
                            style={{ position: 'relative', width: '170px' }} 
                            rules={[{ required: true, message: 'Vui lòng upload file'}]}
                        >
                            <div 
                                style={{
                                    width: '140px',
                                    height: '80px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    borderRadius: '10px',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    backgroundColor: 'white',
                                }}
                            >
                                <CloudUploadOutlined style={{ fontSize: '28px', marginBottom: '5px', color:'#F26D21' }} />
                                <Upload {...props} style={{ marginTop: '5px' }}>
                                    <Button 
                                        style={{
                                            background: '#F26D21',
                                            color: 'white' 
                                        }}
                                    >
                                        Chọn File</Button>
                                </Upload>
                            </div>
                            <PlusCircleOutlined style={{ position: 'absolute', right: 0, top: '40%', fontSize: '18px', cursor: 'pointer' }} />
                        </Form.Item>

                        <Row gutter={[16, 16]}>
                            <Col span={12}>

                                <div style={{marginBottom: '5px', fontWeight: 'bold'}}>Họ và tên<span style={{color:'red'}}>*</span></div>
                                <Form.Item
                                    className='formItem'
                                    name="name"
                                    rules={[{ required: true, message: 'Vui lòng nhập họ và tên' }]}
                                >
                                    <Input className="formInput" placeholder='Nhập họ và tên'/>
                                </Form.Item>
                                
                                <div style={{marginBottom: '5px', fontWeight: 'bold'}}>Ngày sinh<span style={{color:'red'}}>*</span></div>
                                <Form.Item
                                    className='formItem'
                                    name="birthday"
                                    rules={[{ required: true, message: 'Vui lòng nhập ngày sinh' }]}
                                >
                                    <Input type="date" className="formInput" />
                                </Form.Item>

                                <div style={{marginBottom: '5px', fontWeight: 'bold'}}>Vị trí ứng tuyển<span style={{color:'red'}}>*</span></div>
                                <Form.Item
                                    className='formItem'
                                    name="position"
                                    rules={[{ required: true, message: 'Vui lòng chọn vị trí ứng tuyển' }]}
                                >
                                    <Select className="formInput" placeholder="Option 1">
                                        <Select.Option value="option1">Option 1</Select.Option>
                                        <Select.Option value="option2">Option 2</Select.Option>
                                    </Select>
                                </Form.Item>
                                
                                <div style={{marginBottom: '5px', fontWeight: 'bold'}}>Địa chỉ email<span style={{color:'red'}}>*</span></div>
                                <Form.Item
                                    className='formItem'
                                    name="email"
                                    rules={[{ required: true, message: 'Vui lòng nhập địa chỉ email' }]}
                                >
                                    <Input className="formInput" placeholder='Nhập email'/>
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
                                <div style={{marginBottom: '5px', fontWeight: 'bold'}}>Trường đang học<span style={{color:'red'}}>*</span></div>
                                <Form.Item
                                    className='formItem'
                                    name="school"
                                    rules={[{ required: true, message: 'Vui lòng nhập trường đang học' }]}
                                >
                                    <Input className="formInput" placeholder='Nhập trường đang học'/>
                                </Form.Item>
                                
                                <div style={{marginBottom: '5px', fontWeight: 'bold'}}>Chuyên ngành<span style={{color:'red'}}>*</span></div>
                                <Form.Item
                                    className='formItem'
                                    name="major"
                                    rules={[{ required: true, message: 'Vui lòng nhập chuyên ngành' }]}
                                >
                                    <Input className="formInput" placeholder='Nhập chuyên ngành'/>
                                </Form.Item>
                                
                                <div style={{marginBottom: '5px', fontWeight: 'bold'}}>Hình thức đăng ký<span style={{color:'red'}}>*</span></div>
                                <Form.Item
                                    className='formItem'
                                    name="typeSignUp"
                                    rules={[{ required: true, message: 'Vui lòng chọn hình thức đăng ký' }]}
                                >
                                    <Select className="formInput" placeholder='Option 1'>
                                        <Select.Option value="option1">Option 1</Select.Option>
                                        <Select.Option value="option2">Option 2</Select.Option>
                                    </Select>
                                </Form.Item>

                                <div style={{marginBottom: '5px', fontWeight: 'bold'}}>Hình thức thực hiện<span style={{color:'red'}}>*</span></div>
                                <Form.Item
                                    className='formItem'
                                    name="type"
                                    rules={[{ required: true, message: 'Vui lòng chọn hình thức thực hiện' }]}
                                >
                                    <Select className="formInput" placeholder='Option 1'>
                                        <Select.Option value="option1">Option 1</Select.Option>
                                        <Select.Option value="option2">Option 2</Select.Option>
                                    </Select>
                                </Form.Item>

                                <div style={{marginBottom: '5px', fontWeight: 'bold'}}>Bạn biết đến Alta Group từ đâu?<span style={{color:'red'}}>*</span></div>
                                <Form.Item
                                    name="source"
                                    rules={[{ required: true, message: 'Vui lòng chọn nguồn thông tin' }]}
                                >
                                    <Select className="formInput" placeholder='Option 1'>
                                        <Select.Option value="option1">Option 1</Select.Option>
                                        <Select.Option value="option2">Option 2</Select.Option>
                                    </Select>
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
                        <div style={{marginBottom: '5px', fontWeight: 'bold'}}>Chọn file<span style={{color:'red'}}>*</span></div>
                        <Form.Item 
                            name='file'
                            className='formItem'
                            style={{ position: 'relative', width: '170px' }} 
                            rules={[{ required: true, message: 'Vui lòng upload file'}]}
                        >
                            <div 
                                style={{
                                    width: '140px',
                                    height: '80px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    borderRadius: '10px',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    backgroundColor: 'white',
                                }}
                            >
                                <CloudUploadOutlined style={{ fontSize: '28px', marginBottom: '5px', color:'#F26D21' }} />
                                <Upload {...props} style={{ marginTop: '5px' }}>
                                    <Button 
                                        style={{
                                            background: '#F26D21',
                                            color: 'white' 
                                        }}
                                    >
                                        Chọn File</Button>
                                </Upload>
                            </div>
                            <PlusCircleOutlined style={{ position: 'absolute', right: 0, top: '40%', fontSize: '18px', cursor: 'pointer' }} />
                        </Form.Item>
                        
                        <div style={{marginBottom: '5px', fontWeight: 'bold'}}>Họ và tên<span style={{color:'red'}}>*</span></div>
                        <Form.Item
                            
                            className='formItem'
                            name="name"
                            rules={[{ required: true, message: 'Vui lòng nhập họ và tên' }]}
                        >
                            <Input style={{ width: '100%' }} placeholder='Nhập họ và tên'/>
                        </Form.Item>
                        
                        <div style={{marginBottom: '5px', fontWeight: 'bold'}}>Ngày sinh<span style={{color:'red'}}>*</span></div>
                        <Form.Item
                            className='formItem'
                            name="birthday"
                            rules={[{ required: true, message: 'Vui lòng nhập ngày sinh' }]}
                        >
                            <Input style={{ width: '100%' }} type="date" />
                        </Form.Item>

                        <div style={{marginBottom: '5px', fontWeight: 'bold'}}>Vị trí ứng tuyển<span style={{color:'red'}}>*</span></div>
                        <Form.Item
                            className='formItem'
                            name="position"
                            rules={[{ required: true, message: 'Vui lòng chọn vị trí ứng tuyển' }]}
                        >
                            <Select style={{ width: '100%' }} placeholder="Option 1">
                                <Select.Option value="option1">Option 1</Select.Option>
                                <Select.Option value="option2">Option 2</Select.Option>
                            </Select>
                        </Form.Item>
                        
                        <div style={{marginBottom: '5px', fontWeight: 'bold'}}>Địa chỉ email<span style={{color:'red'}}>*</span></div>
                        <Form.Item
                            className='formItem'
                            name="email"
                            rules={[{ required: true, message: 'Vui lòng nhập địa chỉ email' }]}
                        >
                            <Input style={{ width: '100%' }} placeholder='Nhập email'/>
                        </Form.Item>
                        
                        <div style={{marginBottom: '5px', fontWeight: 'bold'}}>Điện thoại<span style={{color:'red'}}>*</span></div>
                        <Form.Item
                            name="phone"
                            rules={[{ required: true, message: 'Vui lòng nhập số điện thoại' }]}
                        >
                            <Input style={{ width: '100%' }} placeholder='Nhập số điện thoại'/>
                        </Form.Item>

                        <div style={{marginBottom: '5px', fontWeight: 'bold'}}>Trường đang học<span style={{color:'red'}}>*</span></div>
                        <Form.Item
                            className='formItem'
                            name="school"
                            rules={[{ required: true, message: 'Vui lòng nhập trường đang học' }]}
                        >
                            <Input style={{ width: '100%' }} placeholder='Nhập trường đang học'/>
                        </Form.Item>
                        
                        <div style={{marginBottom: '5px', fontWeight: 'bold'}}>Chuyên ngành<span style={{color:'red'}}>*</span></div>
                        <Form.Item
                            className='formItem'
                            name="major"
                            rules={[{ required: true, message: 'Vui lòng nhập chuyên ngành' }]}
                        >
                            <Input style={{ width: '100%' }} placeholder='Nhập chuyên ngành'/>
                        </Form.Item>
                        
                        <div style={{marginBottom: '5px', fontWeight: 'bold'}}>Hình thức đăng ký<span style={{color:'red'}}>*</span></div>
                        <Form.Item
                            className='formItem'
                            name="typeSignUp"
                            rules={[{ required: true, message: 'Vui lòng chọn hình thức đăng ký' }]}
                        >
                            <Select style={{ width: '100%' }} placeholder='Option 1'>
                                <Select.Option value="option1">Option 1</Select.Option>
                                <Select.Option value="option2">Option 2</Select.Option>
                            </Select>
                        </Form.Item>

                        <div style={{marginBottom: '5px', fontWeight: 'bold'}}>Hình thức thực hiện<span style={{color:'red'}}>*</span></div>
                        <Form.Item
                            className='formItem'
                            name="type"
                            rules={[{ required: true, message: 'Vui lòng chọn hình thức thực hiện' }]}
                        >
                            <Select style={{ width: '100%' }} placeholder='Option 1'>
                                <Select.Option value="option1">Option 1</Select.Option>
                                <Select.Option value="option2">Option 2</Select.Option>
                            </Select>
                        </Form.Item>

                        <div style={{marginBottom: '5px', fontWeight: 'bold'}}>Bạn biết đến Alta Group từ đâu?<span style={{color:'red'}}>*</span></div>
                        <Form.Item
                            name="source"
                            rules={[{ required: true, message: 'Vui lòng chọn nguồn thông tin' }]}
                        >
                            <Select style={{ width: '100%' }} placeholder='Option 1'>
                                <Select.Option value="option1">Option 1</Select.Option>
                                <Select.Option value="option2">Option 2</Select.Option>
                            </Select>
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

export default FormDangKySinhVien