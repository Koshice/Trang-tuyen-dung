import '../../css/styles.css'
import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import PopUpTaoLaiMk from './PopUpTaoLaiMk';
import { useMediaQuery } from 'react-responsive';
import { Form, Input, Button, Modal } from 'antd';

const { Title } = Typography;

const FormTaoLaiMk: React.FC = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
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
    <div>
        {isDesktopOrLaptop ? (
            <div style={{ marginLeft: '250px', height: '61px' }}>
                <Title level={2} style={{ color: '#F26D21', marginBottom: '20px' }}>Tạo lại mật khẩu</Title>

                <div>Mật khẩu</div>
                <Form.Item
                    name="password"
                    rules={[
                        {
                        required: true,
                        message: 'Vui lòng nhập mật khẩu!',
                        },
                    ]}
                >
                    <Input.Password
                        type="password"
                        placeholder="Nhập mật khẩu"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Item>

                <div>Xác nhận mật khẩu</div>
                <Form.Item
                    name="confirmPassword"
                    dependencies={['password']}
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập lại mật khẩu!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('Mật khẩu xác nhận không khớp!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password
                        type="password"
                        placeholder="Nhập lại mật khẩu"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </Form.Item>

                <Form.Item>
                    <Button
                        htmlType="submit"
                        onClick={showModal}
                        style={{
                            margin: '3px',
                            background: '#F26D21',
                            color: 'white',
                            width: '420px',
                            height: '40px'
                        }}
                    >
                        Xác nhận
                    </Button>
                </Form.Item>

                <PopUpTaoLaiMk open={isModalOpen} onClose={closeModal}></PopUpTaoLaiMk>

                <Form.Item style={{ marginTop: '-20px'}}>
                    <div style={{ display: 'flex', justifyContent: 'end' }}>

                        <Link to={"/login"} className="login-form-forgot" style={{ color: '#F26D21' }}>
                            Quay lại đăng nhập
                        </Link>
                    </div>
                </Form.Item>
            </div>
        ) : (
            <div style={{ marginLeft: '50px', height: '61px', width: '500px' }}>
                <Title level={2} style={{ color: '#F26D21', marginBottom: '20px' }}>Tạo lại mật khẩu</Title>

                <div>Mật khẩu</div>
                <Form.Item
                    name="password"
                    rules={[
                        {
                        required: true,
                        message: 'Vui lòng nhập mật khẩu!',
                        },
                    ]}
                >
                    <Input.Password
                        style={{ width: '100%' }}
                        type="password"
                        placeholder="Nhập mật khẩu"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Item>

                <div>Xác nhận mật khẩu</div>
                <Form.Item
                    name="confirmPassword"
                    dependencies={['password']}
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập lại mật khẩu!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('Mật khẩu xác nhận không khớp!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password
                        style={{ width: '100%' }}
                        type="password"
                        placeholder="Nhập lại mật khẩu"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </Form.Item>

                <Form.Item>
                    <Button
                        htmlType="submit"
                        onClick={showModal}
                        style={{
                            margin: '3px',
                            color: 'white',
                            width: '500px',
                            height: '40px',
                            background: '#F26D21',
                        }}
                    >
                        Xác nhận
                    </Button>
                </Form.Item>

                <PopUpTaoLaiMk open={isModalOpen} onClose={closeModal}></PopUpTaoLaiMk>

                <Form.Item style={{ marginTop: '-20px'}}>
                    <div style={{ display: 'flex', justifyContent: 'end' }}>

                        <Link to={"/login"} className="login-form-forgot" style={{ color: '#F26D21' }}>
                            Quay lại đăng nhập
                        </Link>
                    </div>
                </Form.Item>
            </div>
        )}
    </div>
  );
};

export default FormTaoLaiMk;
