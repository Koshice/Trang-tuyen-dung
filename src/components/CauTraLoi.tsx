import React, { useState } from 'react';
import { Checkbox, Input, Radio } from 'antd';
import { IQuestion } from '../types';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';

interface Props {
    question: IQuestion;
}

const CauTraLoi: React.FC<Props> = ({ question }) => {
    const [selectedOption, setSelectedOption] = useState<number | undefined>(undefined);

    const convertIndexToChar = (index: number) => {
        return String.fromCharCode(65 + index);
    };

    return (
        <div>
            {question && ( 
                <div>
                    <div>
                        <p>{question.questionText}</p>
                    </div>
                    {question.questionType === 'multiple choice' && (
                        <Radio.Group 
                            onChange={(e) => setSelectedOption(e.target.value)} value={selectedOption}
                        >
                            {question.options?.map((option, optionIndex) => (
                                <div 
                                    key={optionIndex} 
                                    className='answer'
                                >
                                    <Radio value={optionIndex} style={{ marginLeft: '10px'}}>
                                        {convertIndexToChar(optionIndex)}. {option}
                                    </Radio>
                                </div>
                            ))}
                        </Radio.Group>
                    )}

                    {question.questionType === 'multiple answers' && (
                        <div>
                            {question.options?.map((option, optionIndex) => (
                                <div key={optionIndex} className='answer'>
                                    <i style={{ margin: '0 10px'}}>
                                        <Checkbox></Checkbox>
                                    </i>
                                    <span>
                                        {convertIndexToChar(optionIndex)}. {option}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
                    

                    {question.questionType === 'short answer' && (
                        <div>
                            <Input.TextArea 
                                rows={4} 
                                style={{ width: '450px' }} 
                                placeholder="Nhập câu trả lời" 
                            />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default CauTraLoi;
