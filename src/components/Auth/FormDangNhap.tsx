import '../../css/styles.css'
import { Typography } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useMediaQuery } from 'react-responsive';
import { useAppDispatch } from '../../redux/hooks';
import { authLogin } from '../../redux/slice/authSlice';
import { Form, Input, Button, Checkbox, Select, message } from 'antd';
import { ExclamationCircleOutlined, CaretDownOutlined } from '@ant-design/icons';

const { Option } = Select;
const { Title } = Typography;


const FormDangNhap: React.FC = () => {
    const [role, setRole] = useState<string | undefined>(undefined);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    const [error, setError] = useState('');
    const [isVerified, setIsVerified] = useState(false);

    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const handleVerification = () => {
        setIsVerified(true);
    };

    const onFinish = async () => {
        try {
            if (isVerified) {
                // await dispatch(authLogin({ email, password, remember }));

                const userRole = determineUserRole(email, password); // Xác định role của người dùng
                if (userRole === 'enterprise') {
                    navigate('/enterprise'); // Chuyển hướng đến '/enterprise'
                } else if (userRole === 'student') {
                    navigate('/'); // Chuyển hướng đến '/'
                }
                message.success('Đăng nhập thành công!');
            } else {
                message.error('Vui lòng xác nhận bạn không phải là robot.');
            }
        } catch (error) {
            setError('Sai tên đăng nhập hoặc mật khẩu.');
        }
    };

    const determineUserRole = (email: string, password: string) => {
        if (email === 'admin@gmail.com' && password === '123123') {
            return 'enterprise';
        } else if (email === 'khoa@gmail.com' && password === '123123') {
            return 'student';
        }
        setError('Sai tên đăng nhập hoặc mật khẩu.');
        return null;
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
                            sitekey="6LeCxIQpAAAAAP_6WuXAeccik_VR0GW9nr4Eo09p"
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
                            sitekey="6LeCxIQpAAAAAP_6WuXAeccik_VR0GW9nr4Eo09p"
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
