import React from 'react';
import '../css/styles.css'
import { Typography } from 'antd';
import { Button, Modal } from 'antd';
import { Link } from 'react-router-dom';

const { Title } = Typography;

interface Props {
    open: boolean;
    onClose: () => void;
}

const PopUpNopBai: React.FC<Props> = ({ open, onClose }) => {
  return (
    <>
        <Modal
            open={open}
            style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
            }}
            footer={null}
        >
            <div style={{ 
                textAlign: 'center', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center' 
            }}>
                <Title level={3} style={{ color: '#F26D21' }}>Nộp bài thi</Title>
                <p>Bạn có chắc muốn nộp bài thi hay không ?</p>
                
                <div style={{ 
                    width: '240px', 
                    display: 'flex', 
                    justifyContent: 'space-between' 
                }}>
                    <Button onClick={onClose} style={{ 
                        width: '100px',
                        height: '40px',
                        marginTop: '10px',
                        background: '#F0F0F0',
                    }}>
                        Đóng
                    </Button>
                    <Link to={'/taoDeThi'}>
                        <Button style={{ 
                            color: 'white',
                            width: '100px',
                            height: '40px',
                            marginTop: '10px',
                            background: '#F26D21',
                        }}>
                            Xác nhận
                        </Button>
                    </Link>
                </div>
            </div>
        </Modal>
    </>
  );
};

export default PopUpNopBai;
