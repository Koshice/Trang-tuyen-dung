import '../../css/styles.css'
import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ReCAPTCHA from 'react-google-recaptcha';
import React, { FormEvent, useState } from 'react';
import { authLogin } from '../../redux/slice/authSlice';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Form, Input, Button, Checkbox, Select, message } from 'antd';

const { Option } = Select;
const { Title } = Typography;

const FormDangNhap: React.FC = () => {
  const [role, setRole] = useState<string | undefined>(undefined);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [remember, setRemember] = useState(false);

  const dispatch = useDispatch()

//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault()

//     const user = { role, username, password, remember }
//     dispatch(authLogin(user))
//   }

  const [error, setError] = useState('');

  const [isVerified, setIsVerified] = useState(false);

  const handleVerification = () => {
    setIsVerified(true);
  };

  const onFinish = (values: any) => {
    const { username, password } = values;

    if (username === 'admin' && password === 'admin') {
      message.success('Đăng nhập thành công!');
    } else {
      setError('Sai tên đăng nhập hoặc mật khẩu.');
    }
  };

  return (
    <div className="login-container">
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
                    value={role}
                    placeholder="Option"
                    allowClear
                    onChange={(value) => setRole(value)}
                >
                    <Option value="option1">Doanh nghiệp</Option>
                    <Option value="option2">Sinh viên</Option>
                    <Option value="other">Other</Option>
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
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
  );
};

export default FormDangNhap;
