import React from 'react';
import { useState, useContext } from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Button, Divider, Row, Form, Input, Col, Flex, message, notification, Descriptions } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { loginAPI } from '../services/api.services';
import { AuthContext } from '../components/context/auth.context';
const LoginPage = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate(); // chuyển trang sang login

    const [loading, setLoading] = useState(false);
    const { setUser } = useContext(AuthContext);

    const onFinish = async (values) => {
        setLoading(true)
        const res = await loginAPI(values.email, values.password);
        if (res.data) {
            message.success("Đăng nhập thành công")
            localStorage.setItem("access_token", res.data.access_token)
            setUser(res.data.user);
            navigate("/")

        }
        else {
            notification.error({
                message: "Error Login",
                description: JSON.stringify(res.message)
            })




        }
        setLoading(false)

    };

    return (

        <Row justify={"center"} style={{ marginTop: "30px" }}>
            <Col xs={24} md={16} lg={8}>
                <fieldset style={{
                    padding: "15px",
                    margin: "5px",
                    border: "1px solid #ccc",
                    borderRadius: "5px"
                }}
                >
                    <legend>Đăng Nhập</legend>
                    <Form
                        form={form}
                        layout="vertical"

                        onFinish={onFinish}
                    // onFinishFailed={onFinishFailed}
                    >


                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: 'Email không được để trống' }]}
                        >
                            <Input />
                        </Form.Item>


                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{
                                required: true,

                                message: 'Password không được để trống'
                            }]}
                        >
                            <Input.Password onKeyDown={(event) => {
                                if (event.key === "Enter") {
                                    form.submit()

                                }
                            }
                            } />
                        </Form.Item>




                        <Flex justify="space-between" align="center">

                            <Button
                                loading={loading}
                                onClick={() => form.submit()} // gọi form.submit() sẽ gọi onFinish trả ra value
                                type="primary" style={{ width: "100px" }}>Login</Button>
                            <Link to="/" >Go to homepage <ArrowRightOutlined /> </Link>

                        </Flex>


                    </Form >
                    <Divider />
                    <div style={{ textAlign: "center" }}>Chưa có tài khoản? <Link to="/register">Đăng ký tại đây</Link></div>
                </fieldset>
            </Col>
        </Row >
    );

}

export default LoginPage;