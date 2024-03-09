import React from 'react';
import '../css/styles.css'
import { Typography } from 'antd';
import { Button, Modal } from 'antd';

const { Title } = Typography;

interface Props {
    open: boolean;
    onClose: () => void;
}

const PopUpUngTuyen: React.FC<Props> = ({ open, onClose }) => {
  return (
    <>
        <Modal
            open={open}
            style={{ 
                display: 'flex', 
                alignItems: 'center', 
                position: 'relative',
                justifyContent: 'center',
            }}
            closable={false}
            footer={null}
        >
            <div style={{ 
                display: 'flex',
                margin: '-10px 0',
                textAlign: 'center', 
                alignItems: 'center', 
                flexDirection: 'column',
            }}>
                <Title level={3} style={{ color: '#F26D21', fontWeight: 'bold', marginBottom: '-5px' }}>Thông báo</Title>
                    <p>Bạn đã nộp đơn ứng tuyển thành công. <br></br>
                Vui lòng đợi phản hồi từ công ty qua mail của bạn!</p>
            </div>
            <div style={{ 
                    marginTop: '10px',
                    width: '100%', 
                    display: 'flex',
                    justifyContent: 'center' 
                }}>
                    <Button onClick={onClose} style={{ 
                        width: '100px',
                        height: '40px',
                        marginTop: '10px',
                        background: '#F0F0F0',
                    }}>
                        <span style={{ fontWeight: 'bold' }}>
                            Đóng
                        </span>
                    </Button>
            </div>

            <img
                style={{
                    right: '0',
                    bottom: '0',
                    height: '120px',
                    position: 'absolute',
                }}
                alt="OBJECT1" 
                src={process.env.PUBLIC_URL + '/Image/Object1.svg'} 
            />

            <img
                style={{
                    top: '0',
                    left: '0',
                    height: '80px',
                    width: '200px',
                    position: 'absolute',
                }}
                alt="OBJECT1" 
                src={process.env.PUBLIC_URL + '/Image/Object2.svg'} 
            />
        </Modal>
    </>
  );
};

export default PopUpUngTuyen;
