import React, { useState } from 'react';
import '../css/styles.css';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { SearchOutlined, FilterOutlined } from '@ant-design/icons';
import { setSearchQuery } from '../redux/slice/collectionSlice';
import { Form, Select, Row, Col, Button, Input } from 'antd';

export default function SearchBar() {
    const dispatch = useDispatch();
    const [query, setQuery] = useState('');

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    });

    const handleSearch = () => {
        dispatch(setSearchQuery(query));
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
                                    placeholder="Chọn lĩnh vực chuyên môn"
                                >
                                    <Select.Option value="option1">Option 1</Select.Option>
                                    <Select.Option value="option2">Option 2</Select.Option>
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
                                >
                                    <Select.Option value="option1">Option 1</Select.Option>
                                    <Select.Option value="option2">Option 2</Select.Option>
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
                                    onClick={handleSearch}
                                >
                                    <span>
                                        Lọc <i><FilterOutlined /></i>
                                    </span>
                                </Button>
                            </Form.Item>
                        </div>
                    </Col>
                </Row>
            )}            
        </div>
    );
}
