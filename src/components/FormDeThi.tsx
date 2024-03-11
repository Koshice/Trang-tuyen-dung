import '../css/styles.css';
import { Button } from 'antd';
import { Typography } from 'antd';
import CauTraLoi from './CauTraLoi';
import PopUpNopBai from './PopUpNopBai';
import { useAppSelector } from '../redux/hooks';
import { useMediaQuery } from 'react-responsive';
import React, { useEffect, useState } from 'react';
import { ClockCircleOutlined, ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';


const { Title } = Typography;

const FormDeThi = () => {
    const { questions: allQuestions } = useAppSelector(state => state.questions);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const prevPage = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const nextPage = () => {
        if (currentQuestionIndex < allQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const [remainingTime, setRemainingTime] = useState<number>(300); 

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime(prevTime => prevTime - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    });

    const formatTime = (timeInSeconds: number): string => { 
        const hours: number = Math.floor(timeInSeconds / 3600);
        const minutes: number = Math.floor((timeInSeconds % 3600) / 60);
        const seconds: number = timeInSeconds % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

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
                        <div style={{ marginBottom: '-30px'}}>
                            <Title level={5}>
                                Đề thi môn
                            </Title>
                        </div>
                        <div>
                            <Title level={3}>
                                Lập trình Back-end
                            </Title>
                        </div>
                    </div>

                    <div style={{
                        width: '100%',
                        height: '50px',
                        display: 'flex',
                        borderRadius: '10px',
                        backgroundColor: 'white',
                    }}>
                        <div style={{
                            width: '100%',
                            display: 'flex',
                            margin: '0 10px',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}>
                            <div>
                                Tổng câu hỏi:
                                <span style={{marginLeft: '10px', color: '#F26D21', fontWeight: 'bold'}}>
                                    { allQuestions.length }
                                </span>
                            </div>
                            <div>
                                Hoàn thành:
                                <span style={{marginLeft: '10px', color: '#F26D21', fontWeight: 'bold'}}>
                                    {currentQuestionIndex + 1} / { allQuestions.length }
                                </span>
                            </div>
                            <div>
                                <i><ClockCircleOutlined /></i>
                                <span style={{marginLeft: '10px', color: '#F26D21', fontWeight: 'bold'}}>
                                    {formatTime(remainingTime)}
                                </span>
                            </div>
                            <Button
                                htmlType='submit'
                                onClick={showModal}
                                style={{
                                    color: 'white',
                                    width: '100px',
                                    height: '40px',
                                    fontSize: '16px',
                                    marginLeft: '-20px',
                                    backgroundColor: '#F26D21',
                                }}
                            >
                                <span>
                                    Nộp bài
                                </span>
                            </Button>

                            <PopUpNopBai open={isModalOpen} onClose={closeModal}></PopUpNopBai>
                        </div>
                    </div>

                    <div style={{
                        width: '100%',
                        height: '50px',
                        alignItems: 'start', 
                        flexDirection: 'column',
                    }}>
                        <div>
                            <Title level={4}>
                                Câu {currentQuestionIndex + 1}: 
                            </Title>
                        </div>

                        <CauTraLoi question={allQuestions[currentQuestionIndex]} />

                        <div style={{
                            right: '0',
                            bottom: '0',
                            marginTop: '40px',
                            alignItems: 'end', 
                            position: 'absolute',
                            flexDirection: 'column',
                        }}>
                            <div style={{
                                width: '100%',
                                display: 'flex',
                                margin: '0 10px',
                                alignItems: 'center',
                                justifyContent: 'end',
                            }}>
                                <ArrowLeftOutlined
                                    style={{ color: '#F26D21', cursor: 'pointer', margin: '0 10px' }}
                                    onClick={prevPage}
                                    disabled={currentQuestionIndex === 0}
                                />

                                <ArrowRightOutlined
                                    style={{ color: '#F26D21', cursor: 'pointer', margin: '0 10px' }}
                                    onClick={nextPage}
                                    disabled={currentQuestionIndex === allQuestions.length - 1}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div style={{
                    height: '500px',
                    margin: '0 50px',
                    position: 'relative',
                }}>
                    <div style={{
                        display: 'flex',
                        marginTop: '40px',
                        alignItems: 'start', 
                        flexDirection: 'column',
                    }}>
                        <div style={{ marginBottom: '-30px'}}>
                            <Title level={5}>
                                Đề thi môn
                            </Title>
                        </div>
                        <div>
                            <Title level={3}>
                                Lập trình Back-end
                            </Title>
                        </div>
                    </div>

                    <div style={{
                        width: '100%',
                        height: '50px',
                        display: 'flex',
                        borderRadius: '10px',
                        backgroundColor: 'white',

                    }}>
                        <div style={{
                            width: '100%',
                            display: 'flex',
                            margin: '0 10px',
                            alignItems: 'center',
                            justifyContent: 'space-between',

                        }}>
                            <div>
                                Tổng câu hỏi:
                                <span style={{marginLeft: '10px', color: '#F26D21', fontWeight: 'bold'}}>
                                    { allQuestions.length }
                                </span>
                            </div>
                            <div>
                                Hoàn thành:
                                <span style={{marginLeft: '10px', color: '#F26D21', fontWeight: 'bold'}}>
                                    {currentQuestionIndex + 1} / { allQuestions.length }
                                </span>
                            </div>
                            <div>
                                <i><ClockCircleOutlined /></i>
                                <span style={{marginLeft: '10px', color: '#F26D21', fontWeight: 'bold'}}>
                                    {formatTime(remainingTime)}
                                </span>
                            </div>
                            <Button
                                htmlType='submit'
                                onClick={showModal}
                                style={{
                                    color: 'white',
                                    width: '100px',
                                    height: '40px',
                                    fontSize: '16px',
                                    marginLeft: '-20px',
                                    backgroundColor: '#F26D21',
                                }}
                            >
                                <span>
                                    Nộp bài
                                </span>
                            </Button>

                            <PopUpNopBai open={isModalOpen} onClose={closeModal}></PopUpNopBai>
                        </div>
                    </div>

                    <div style={{
                        width: '100%',
                        height: '50px',
                        alignItems: 'start', 
                        flexDirection: 'column',
                    }}>
                        <div>
                            <Title level={4}>
                                Câu {currentQuestionIndex + 1}: 
                            </Title>
                        </div>

                        <CauTraLoi question={allQuestions[currentQuestionIndex]} />

                        <div style={{
                            right: '0',
                            bottom: '0',
                            marginTop: '40px',
                            alignItems: 'end', 
                            position: 'absolute',
                            flexDirection: 'column',
                        }}>
                            <div style={{
                                width: '100%',
                                display: 'flex',
                                margin: '0 10px',
                                alignItems: 'center',
                                justifyContent: 'end',
                            }}>
                                <ArrowLeftOutlined
                                    style={{ color: '#F26D21', cursor: 'pointer', margin: '0 30px' }}
                                    onClick={prevPage}
                                    disabled={currentQuestionIndex === 0}
                                />

                                <ArrowRightOutlined
                                    style={{ color: '#F26D21', cursor: 'pointer', margin: '0 30px' }}
                                    onClick={nextPage}
                                    disabled={currentQuestionIndex === allQuestions.length - 1}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
            
        </>
    );
};

export default FormDeThi;
