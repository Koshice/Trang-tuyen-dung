import '../css/styles.css';
import PopupFilter from './PopupFilter';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../redux/hooks';
import { useMediaQuery } from 'react-responsive';
import React, { useEffect, useState } from 'react';
import { Form, Select, Row, Col, Button, Input } from 'antd';
import { setSearchQuery } from '../redux/slice/collectionSlice';
import { SearchOutlined, FilterOutlined, CaretDownOutlined } from '@ant-design/icons';

const { Option } = Select;

interface SearchBarProps {
    onJobChange: (value: string) => void;
    onCompanyChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onJobChange, onCompanyChange }) => {
    const dispatch = useDispatch();
    const [query, setQuery] = useState('');
    
    const { collections: allCollections } = useAppSelector(state => state.collections);
    const [companies, setCompanies] = useState<string[]>([]);
    const [jobNames, setJobNames] = useState<string[]>([]);

    useEffect(() => {
        if (allCollections && allCollections.length > 0) {
            const uniqueCompanies = Array.from(
                new Set(allCollections.map(collection => collection.company || ''))
            );
            const uniqueNameJob = Array.from(
                new Set(allCollections.map(collection => collection.nameJob || ''))
            );
            setCompanies(['All', ...uniqueCompanies]);
            setJobNames(['All', ...uniqueNameJob]);
        }
    }, [allCollections]);


    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    });

    const handleSearch = () => {
        dispatch(setSearchQuery(query));
    };

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

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

     const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div style={{ backgroundColor: 'white' }}>
            {isDesktopOrLaptop ? (
                <Row style={{ display: 'flex', alignItems: 'between', width: '100%', marginBottom: '-25px' }}>
                    <Col span={7}>
                        <div>
                            <Form.Item name="searchInput">
                                <Input
                                    size="large"
                                    value={query}
                                    style={{ borderRadius: 0 }}
                                    onPressEnter={handleSearch}
                                    className='searchComponent'
                                    placeholder="Nhập vị trí muốn ứng tuyển"
                                    onChange={(e) => setQuery(e.target.value)}
                                    prefix={<SearchOutlined style={{ color: '#F26D21', marginRight: '5px' }} />}
                                />
                            </Form.Item>
                        </div>
                    </Col>

                    <Col span={7}>
                        <div>
                            <Form.Item name="expertise">
                                <Select
                                    className='searchComponent'
                                    placeholder="Chọn chuyên môn"
                                    onChange={handleNameJobChange}
                                    suffixIcon={<CaretDownOutlined style={{ color: '#F26D21' }}/>}
                                >
                                    {jobNames.map((jobName, index) => (
                                        <Option key={index} value={jobName}>{jobName}</Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </div>
                    </Col>

                    <Col span={7}>
                        <div>
                            <Form.Item name="company">
                                <Select
                                    className='searchComponent'
                                    placeholder="Chọn công ty"
                                    onChange={handleCompanyChange}
                                    suffixIcon={<CaretDownOutlined style={{ color: '#F26D21' }}/>}
                                >
                                    {companies.map((company, index) => (
                                        <Option key={index} value={company}>{company}</Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </div>
                    </Col>

                    <Col span={3}>
                        <div>
                            <Form.Item>
                                <Button
                                    style={{
                                        color: 'white',
                                        width: '120px',
                                        height: '45px',
                                        fontSize: '16px',
                                        backgroundColor: '#F26D21',
                                    }}
                                    onClick={handleSearch}
                                >
                                    <span>
                                        <i><SearchOutlined /></i> Tìm việc
                                    </span>
                                </Button>
                            </Form.Item>
                        </div>
                    </Col>
                </Row>
            ) : (
                <Row style={{ display: 'flex', width: '450px', marginBottom: '-25px' }}>
                    <Col span={20}>
                        <div>
                            <Form.Item name="searchInput" >
                                <Input
                                    size="large"
                                    value={query}
                                    style={{ height: '50px'}}
                                    onPressEnter={handleSearch}
                                    placeholder="Nhập vị trí muốn ứng tuyển"
                                    onChange={(e) => setQuery(e.target.value)}
                                    prefix={<SearchOutlined style={{ color: '#F26D21', marginRight: '5px' }} />}
                                />
                            </Form.Item>
                        </div>
                    </Col>

                    <Col span={4}>
                        <div>
                            <Form.Item>
                                <Button
                                    style={{
                                        color: 'white',
                                        width: '120px',
                                        height: '50px',
                                        fontSize: '16px',
                                        backgroundColor: '#F26D21',
                                    }}
                                    onClick={showModal}
                                >
                                    <span>
                                        Lọc <i><FilterOutlined /></i>
                                    </span>
                                </Button>
                            </Form.Item>
                            <PopupFilter 
                                open={isModalOpen} 
                                nameJobs={jobNames}
                                onClose={closeModal} 
                                companies={companies} 
                                onJobChange={handleNameJobChange}
                                onCompanyChange={handleCompanyChange}
                            />
                        </div>
                    </Col>
                </Row>
            )}
        </div>
    );
}

export default SearchBar;