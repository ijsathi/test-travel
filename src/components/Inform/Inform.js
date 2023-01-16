import React from 'react';
import { Button, Form, Input, Select, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import './Inform.css';

const Inform = () => {
    const onFinish = (values) => {
        console.log({ values });
    }
    return (
        <div id='destination' className='inform'>
            <h2>Where are you going? </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse consectetur, iusto et perferendis veniam aperiam ea assumenda nemo natus. Quaerat quasi animi similique placeat tenetur unde inventore excepturi blanditiis asperiores. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt nobis laboriosam minima aperiam itaque, atque expedita tenetur qui et, temporibus repudiandae cum natus nam neque rem perspiciatis! Reprehenderit, ipsam et.</p>
            <Form className='i-form' onFinish={onFinish}>
                <Form.Item className='i-input' rules={[{ required: true, message: " City/Airport name required." }]} name={"from_city"} label="From City/Airport">
                    <Select placeholder="City/Airport">
                        {["Dhaka", "Chittagong", "Sylhet", "Barisal"].map(from_city => {
                            return (
                                <Select.Option value={from_city} key={from_city}>
                                    {from_city}
                                </Select.Option>
                            )
                        })}
                    </Select>
                    {/* <Input placeholder='City name' /> */}
                </Form.Item>
                <Form.Item className='i-input' rules={[{ required: true, message: "City/Airport name required." }]} name={"to_city"} label="To City/Airport">
                    <Select placeholder=" City/Airport">
                        {["Verona", "Rome", "Como", "Thailand", "Cox's Bazar", "Maldives", "India"].map(to_city => {
                            return (
                                <Select.Option value={to_city} key={to_city}>
                                    {to_city}
                                </Select.Option>
                            )
                        })}
                    </Select>
                    {/* <Input placeholder='Class name' /> */}
                </Form.Item>
                <Form.List name={"destination"}>
                    {(fields, { add, remove }) => (
                        <>
                            {fields.map((field, index) => {
                                return (
                                    <Space key={field.key} direction='horizontal' size={12} >
                                        <Form.Item
                                            name={[field.name, "first"]}
                                            label={`${index + 1}-People`}
                                            rules={[{ required: true, message: "First name required." }]}>
                                            <Input placeholder='First name' />
                                        </Form.Item>
                                        <Form.Item
                                            name={[field.name, "last"]}
                                            rules={[{ required: true, message: "Last name required." }]}
                                        >
                                            <Input placeholder='Last name' />
                                        </Form.Item>
                                        <Form.Item rules={[{ required: true, message: "Location required." }]} name={[field.name, "location"]}>
                                            <Select placeholder="Select location">
                                                {["Verona", "Rome", "Como", "Thailand", "Cox's Bazar", "Maldives", "India"].map(location => {
                                                    return (
                                                        <Select.Option value={location} key={location}>
                                                            {location}
                                                        </Select.Option>
                                                    )
                                                })}
                                            </Select>
                                        </Form.Item>
                                        <MinusCircleOutlined
                                            style={{ height: 47, color: "red" }}
                                            onClick={() => { remove(field.name) }} />
                                    </Space>
                                )
                            })}
                            <Form.Item className='i-add-input'>
                                <Button icon={<PlusOutlined />} type='dashed' block onClick={() => { add(); }}>
                                    Add People
                                </Button>
                            </Form.Item>
                        </>
                    )}
                </Form.List>
                <Button htmlType='submit' type='primary'>Submit</Button>
            </Form>
        </div>
    );
};

export default Inform;