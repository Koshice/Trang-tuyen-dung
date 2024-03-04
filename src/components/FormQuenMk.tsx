import '../css/styles.css'
import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Select, message } from 'antd';

const { Title } = Typography;

const FormQuenMk: React.FC = () => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  return (
    <div className="login-container">
        <Title level={2} style={{ color: '#F26D21' }}>Quên mật khẩu</Title>
        <p style={{ marginBottom: '50px'}}>Vui lòng nhập lại địa chỉ email đã đăng kí để yêu cầu <br></br> 
        khôi phục lại mật khẩu</p>

        <div>Email</div>
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
            placeholder="Nhập email của bạn"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        </Form.Item>

        <Form.Item>
            <Link to={'/newPassword'}>
                <Button
                    htmlType="submit"
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
            </Link>
        </Form.Item>

        <Form.Item style={{ marginTop: '-20px'}}>
            <div style={{ display: 'flex', justifyContent: 'end' }}>
                <Link to={"/login"} className="login-form-forgot" style={{ color: '#F26D21' }}>
                    Quay lại đăng nhập
                </Link>
            </div>
        </Form.Item>
    </div>
  );
};

export default FormQuenMk;
