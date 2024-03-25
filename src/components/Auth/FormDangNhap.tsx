import '../../css/styles.css'
import { Typography } from 'antd';
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useMediaQuery } from 'react-responsive';
import { useAppDispatch } from '../../redux/hooks';
import { Link, useNavigate } from 'react-router-dom';
import { loginApi } from '../../redux/actions/authActions';
import { Form, Input, Button, Checkbox, Select, message } from 'antd';
import { ExclamationCircleOutlined, CaretDownOutlined } from '@ant-design/icons';

const { Option } = Select;
const { Title } = Typography;


const FormDangNhap: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const [isVerified, setIsVerified] = useState(false);
    const [role, setRole] = useState<string | undefined>(undefined); // Initialize with undefined for better handling
    const [error, setError] = useState('');

    const handleVerification = () => {
        setIsVerified(true);
    };

    const onFinish = async () => {
        try {
            // Check if all required fields are filled
            if (!role || !email || !password) {
                setError('Vui lòng điền đầy đủ thông tin.');
                return;
            }

            if (isVerified) {
                // Authenticate user with email, password, and role
                await loginApi(email, password, role);

                // Redirect based on role
                if (role === 'student') {
                    navigate('/'); // Redirect to '/'
                } else if (role === 'enterprise') {
                    navigate('/enterprise'); // Redirect to '/enterprise'
                }

                message.success('Đăng nhập thành công!');
            } else {
                message.error('Vui lòng xác nhận bạn không phải là robot.');
            }
        } catch (error: any) {
            if (error.message === 'Wrong Role') {
                setError('Vai trò không hợp lệ');
            } else {
                setError('Sai tên đăng nhập hoặc mật khẩu.');
            }
        }
    };


  const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    });

  return (
    <div>
        {isDesktopOrLaptop ? (
            <div style={{ marginLeft: '250px', height: '61px' }}>
                <Title level={2} style={{ color: '#F26D21' }}>Đăng nhập</Title>

                <div style={{marginBottom: '5px'}}>Vai trò <span style={{color:'red'}}>*</span></div>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="role"
                        rules={[
                            {
                            required: true,
                            message: 'Vui lòng chọn vai trò!',
                            },
                        ]}
                    >
                        <Select
                            allowClear
                            value={role}
                            placeholder="Option"
                            onChange={(value) => setRole(value)}
                            suffixIcon={<CaretDownOutlined style={{ color: '#F26D21' }}/>}
                        >
                            <Option value="enterprise">Doanh nghiệp</Option>
                            <Option value="student">Sinh viên</Option>
                        </Select>
                    </Form.Item>

                <div style={{marginBottom: '5px'}}>Email<span style={{color:'red'}}>*</span></div>
                    <Form.Item
                        name="username"
                        rules={[
                            {
                            required: true,
                            message: 'Vui lòng nhập tên đăng nhập!',
                            },
                        ]}
                    >
                    <Input
                        placeholder="Tên đăng nhập"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    </Form.Item>
                
                <div style={{marginBottom: '5px'}}>Mật khẩu<span style={{color:'red'}}>*</span></div>
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
                            placeholder="Mật khẩu"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Item>

                    {error && (
                        <div style={{ color: 'red', margin: '-15px 0 25px 0'}}>
                            <ExclamationCircleOutlined  style={{ marginRight: '5px' }}/>
                            <span>{error}</span>
                        </div>
                    )}

                    <Form.Item style={{ marginTop: '-20px'}}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Form.Item name="remember" valuePropName="unchecked" noStyle>
                            <Checkbox checked={remember} onChange={() => setRemember(!remember)}>
                                Ghi nhớ mật khẩu
                            </Checkbox>
                        </Form.Item>

                        <Link to={"/forgotPassword"} className="login-form-forgot" style={{ color: '#F26D21' }}>
                            Quên mật khẩu?
                        </Link>
                        </div>
                    </Form.Item>
                    
                    <Form.Item>
                        <ReCAPTCHA
                            sitekey="6LeKuaMpAAAAAFLTDKwnomOZ-Z-glluIElA5yF2F"
                            onChange={handleVerification}
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            htmlType="submit"
                            style={{
                                margin: '3px',
                                background: '#F26D21',
                                color: 'white',
                                width: '420px',
                                height: '40px'
                            }}
                            disabled={!isVerified}
                            >
                            Đăng nhập
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        ) : (
            <div style={{ marginLeft: '50px', height: '61px', width: '500px' }}>
                <Title level={2} style={{ color: '#F26D21' }}>Đăng nhập</Title>

                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                    remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <div style={{marginBottom: '5px'}}>Vai trò <span style={{color:'red'}}>*</span></div>
                    <Form.Item
                        name="role"
                        rules={[
                            {
                            required: true,
                            message: 'Vui lòng chọn vai trò!',
                            },
                        ]}
                    >
                        <Select
                            value={role}
                            allowClear
                            placeholder="Option"
                            style={{ width: '100%' }}
                            onChange={(value) => setRole(value)}
                            suffixIcon={<CaretDownOutlined style={{ color: '#F26D21' }}/>}
                        >
                            <Option value="enterprise">Doanh nghiệp</Option>
                            <Option value="student">Sinh viên</Option>
                        </Select>
                    </Form.Item>

                    <div style={{marginBottom: '5px'}}>Email<span style={{color:'red'}}>*</span></div>
                    <Form.Item
                        name="username"
                        rules={[
                            {
                            required: true,
                            message: 'Vui lòng nhập tên đăng nhập!',
                            },
                        ]}
                    >
                    <Input
                        placeholder="Tên đăng nhập"
                        style={{ width: '100%' }}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    </Form.Item>
                
                    <div style={{marginBottom: '5px'}}>Mật khẩu<span style={{color:'red'}}>*</span></div>
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
                            placeholder="Mật khẩu"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Item>

                    {error && (
                        <div style={{ color: 'red', margin: '-15px 0 25px 0'}}>
                            <ExclamationCircleOutlined  style={{ marginRight: '5px' }}/>
                            <span>{error}</span>
                        </div>
                    )}

                    <Form.Item style={{ marginTop: '-20px'}}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Form.Item name="remember" valuePropName="unchecked" noStyle>
                            <Checkbox checked={remember} onChange={() => setRemember(!remember)}>
                                Ghi nhớ mật khẩu
                            </Checkbox>
                        </Form.Item>

                        <Link to={"/forgotPassword"} className="login-form-forgot" style={{ color: '#F26D21' }}>
                            Quên mật khẩu?
                        </Link>
                        </div>
                    </Form.Item>
                    
                    <Form.Item>
                        <ReCAPTCHA
                            sitekey="6LeKuaMpAAAAAFLTDKwnomOZ-Z-glluIElA5yF2F"
                            onChange={handleVerification}
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            htmlType="submit"
                            style={{
                                margin: '3px',
                                color: 'white',
                                width: '100%',
                                height: '40px',
                                background: '#F26D21',
                            }}
                            disabled={!isVerified}
                            >
                            Đăng nhập
                        </Button>
                    </Form.Item>
                </Form>  
            </div>
        )}
    </div>
  );
};

export default FormDangNhap;
