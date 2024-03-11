import '../css/styles.css';
import React, { useState } from 'react';
import PopUpUngTuyen from './PopUpUngTuyen';
import { SendOutlined } from '@ant-design/icons';
import { useMediaQuery } from 'react-responsive';
import { Typography, Form, Select, Input, Button } from 'antd';

const { Title } = Typography;
const { TextArea } = Input;

const FormTienTrinhHocTap = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

     const closeModal = () => {
        setIsModalOpen(false);
    };
    
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    });
    
    return (
        <>
            {isDesktopOrLaptop ? (
                <div style={{
                    width: '1120px',
                    height: '500px',
                    margin: '0 200px',
                    position: 'relative',
                }}>
                    <div style={{
                        display: 'flex',
                        marginTop: '40px',
                        alignItems: 'start', 
                        flexDirection: 'column',
                    }}>
                        <Title level={3}>
                            Xin chào 
                            <span style={{ 
                                color: '#F26D21', 
                                textTransform: 'uppercase',
                            }}> Nguyễn Đăng Khoa 
                            </span>
                        </Title>
                    </div>
                    <Form>
                        <div style={{
                            width: '100%',
                            height: '50px',
                        }}>
                            <Form.Item name="class">
                                <div style={{marginBottom: '5px'}}>Chọn lớp / Chọn nhóm thực tập</div>
                                <Select
                                    style={{
                                        height: '40px',
                                        width: '450px',
                                    }}
                                    placeholder="Chọn lớp / Chọn nhóm thực tập"
                                >
                                    <Select.Option value="Lập trình Front-end">Lập trình Front-end</Select.Option>
                                    <Select.Option value="Lập trình Back-end">Lập trình Back-end</Select.Option>
                                    <Select.Option value="VFX Artist">VFX Artist</Select.Option>
                                    <Select.Option value="UI/UX Design">UI/UX Design</Select.Option>
                                </Select>
                            </Form.Item>

                            <Form.Item name="fileLink">
                                <div style={{marginBottom: '5px'}}>Link file</div>
                                <Input style={{
                                        height: '40px',
                                        width: '450px',
                                    }} placeholder="Link file"/>
                            </Form.Item>

                            <Form.Item name="reportContent">
                                <div style={{marginBottom: '5px'}}>Nội dung báo cáo</div>
                                <TextArea 
                                    style={{ width: '450px' }} 
                                    placeholder="Nội dung báo cáo" rows={4} 
                                />
                            </Form.Item>

                            <Form.Item>
                                <Button
                                    onClick={showModal}
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
                        </div>
                            <PopUpUngTuyen open={isModalOpen} onClose={closeModal}></PopUpUngTuyen>
                    </Form>
                </div>  
            ) : (
                <div style={{
                    margin: '0 50px',
                    position: 'relative',
                }}>
                    <div style={{
                        display: 'flex',
                        marginTop: '40px',
                        alignItems: 'start', 
                        flexDirection: 'column',
                    }}>
                        <Title level={3}>
                            Xin chào 
                            <span style={{ 
                                color: '#F26D21', 
                                textTransform: 'uppercase',
                            }}> Nguyễn Đăng Khoa 
                            </span>
                        </Title>
                    </div>
                    <Form>
                        <div style={{
                            width: '100%',
                            height: '50px',
                        }}>
                            <Form.Item name="class">
                                <div style={{marginBottom: '5px'}}>Chọn lớp / Chọn nhóm thực tập</div>
                                <Select
                                    style={{ width: '100%' }}
                                    placeholder="Chọn lớp / Chọn nhóm thực tập"
                                >
                                    <Select.Option value="Lập trình Front-end">Lập trình Front-end</Select.Option>
                                    <Select.Option value="Lập trình Back-end">Lập trình Back-end</Select.Option>
                                    <Select.Option value="VFX Artist">VFX Artist</Select.Option>
                                    <Select.Option value="UI/UX Design">UI/UX Design</Select.Option>
                                </Select>
                            </Form.Item>

                            <Form.Item name="fileLink">
                                <div style={{marginBottom: '5px'}}>Link file</div>
                                <Input 
                                    style={{ width: '100%' }} 
                                    placeholder="Link file"
                                />
                            </Form.Item>

                            <Form.Item name="reportContent">
                                <div style={{marginBottom: '5px'}}>Nội dung báo cáo</div>
                                <TextArea 
                                    style={{ width: '100%' }}
                                    placeholder="Nội dung báo cáo" rows={4} 
                                />
                            </Form.Item>

                            <Form.Item>
                                <Button
                                    onClick={showModal}
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
                        </div>
                            <PopUpUngTuyen open={isModalOpen} onClose={closeModal}></PopUpUngTuyen>
                    </Form>
                </div> 
            )}
        </>
        
    );
};

export default FormTienTrinhHocTap;
