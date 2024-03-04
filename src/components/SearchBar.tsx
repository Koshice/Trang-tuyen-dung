import React from 'react';
import '../css/styles.css';
import { Form, Select, Row, Col, Flex, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';



const SeachBar = () => {
  return (
    <div style={{
        width: '1150px', 
        height: '60px',
        backgroundColor: 'white'
    }}>
        <Row style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <Col span={6}>
                <Flex align='middle'>
                    a
                </Flex>
            </Col>
                
            <Col span={6}>
                <Flex align='middle'>
                    a
                </Flex>
            </Col>
                
            <Col span={6}>
                <Flex align='middle'>
                    <Form.Item
                        className='formItem'
                        name="company"
                    >
                        <Select className="formInput" placeholder="Chọn công ty">
                            <Select.Option value="option1">Option 1</Select.Option>
                            <Select.Option value="option2">Option 2</Select.Option>
                        </Select>
                    </Form.Item>
                </Flex>
            </Col>

            <Col span={6}>
                <Flex align='middle'>
                    <Button style={{ 
                        color: 'white',
                        backgroundColor: '#F26D21', 

                    }}> 
                        <i> <SearchOutlined /> </i> Tìm việc
                    </Button>
                </Flex>
            </Col>
                
        </Row>
    
    </div>
  );
}

export default SeachBar;
