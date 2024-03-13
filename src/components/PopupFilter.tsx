import React, { useState } from 'react';
import '../css/styles.css'
import { Typography } from 'antd';
import { Button, Checkbox } from 'antd';

const { Title } = Typography;

interface Props {
    open: boolean;
    onClose: () => void;
    companies: string[];
    onCompanyChange: (company: string) => void;
    nameJobs: string[];
    onJobChange: (company: string) => void;
}

const PopupFilter: React.FC<Props> = ({ open, onClose, companies, onCompanyChange, nameJobs, onJobChange }) => {
    const [showAll, setShowAll] = useState(false);

    const handleCompanyChange = (value: string) => {
        if (value === 'All') {
            onCompanyChange('');
        } else {
            onCompanyChange(value);
        }
    };

    const handleNameJobChange = (value: string) => {
        if (value === 'All') {
            onJobChange('');
        } else {
            onJobChange(value);
        }
    };

    const visibleCompanies = showAll ? companies : companies.slice(0, 7);

  return (
    <>
        <div className={open ? "modal-overlay open" : "modal-overlay"} onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div>
                    <Title level={5} style={{ color: '#F26D21' }}>Chọn công ty</Title>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {visibleCompanies.map((company, index) => (
                            <Button 
                                key={index} 
                                value={company}
                                style={{ margin: '5px' }} 
                                onClick={() => handleCompanyChange(company)}
                            >
                                {company}
                            </Button>
                        ))}
                    </div>
                </div>
                <div>
                    <Title level={5} style={{ color: '#F26D21' }}>Chọn lĩnh vực chuyên môn</Title>
                    <div style={{ display: 'flex', flexDirection: 'column', maxHeight: '200px', overflowY: 'auto' }}>
                        {nameJobs.map((nameJob, index) => (
                            <div 
                                key={index}
                                style={{ margin: '5px', display: 'flex', justifyContent: 'space-between' }} 
                                onClick={() => handleNameJobChange(nameJob)}
                            >
                                <div>{nameJob}</div>
                                <Checkbox></Checkbox>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <Button 
                            style={{
                                margin: '3px',
                                width: '100px',
                                height: '40px',
                                color: '#F26D21',
                                borderColor: '#F26D21',
                            }}
                            onClick={onClose}
                        >
                            Hủy bỏ
                        </Button>
                        <Button 
                            style={{
                                margin: '3px',
                                color: 'white',
                                width: '100px',
                                height: '40px',
                                background: '#F26D21',
                            }}
                            onClick={onClose}
                        >
                            Áp dụng
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default PopupFilter;
