import '../../css/styles.css'
import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Props {
    open: boolean;
    onClose: () => void;
}

const PopUpTaoLaiMk: React.FC<Props> = ({ open, onClose }) => {
  return (
    <>
        <Modal
            open={open}
            onCancel={onClose}
            style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
            }}
            footer={null}
        >
            <div style={{ textAlign: 'center' }}>
                <h2 style={{ color: '#F26D21' }}>Tạo mật khẩu thành công</h2>
                <p>Đăng nhập ngay để bắt đầu <br></br> 
                nhận được các cơ hội sự nghiệp lý tưởng</p>
                
                <Link to={'/'}>
                    <Button style={{ 
                        marginTop: '10px',
                        background: '#F26D21',
                        color: 'white',
                        width: '160px',
                        height: '40px' 
                        }}>
                            Đăng nhập ngay
                    </Button>
                </Link>
            </div>
        </Modal>
    </>
  );
};

export default PopUpTaoLaiMk;
