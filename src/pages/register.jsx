import { Input, Button, Form, notification, Row, Col, Divider } from 'antd'
import { registerUserAPI } from '../services/api.services';
import { useNavigate, Link } from 'react-router-dom';
const RegisterPage = () => {
    //Uncontrol component / ko dung state
    const [form] = Form.useForm();
    const navigate = useNavigate(); // chuyển trang sang login
    const onFinish = async (values) => {
        const res = await registerUserAPI(
            values.fullName,
            values.email,
            values.password,
            values.phone);
        if (res.data) {
            notification.success({
                message: "Register user",
                description: " Đăng ký user thành công"
            })
            navigate("/login");// chuyển trang sang login
        }
        else {
            notification.error({
                message: "Register user error",
                description: JSON.stringify(res.message)
            })
        }
    }

    return (
        <Form
            layout="vertical"
            form={form}
            onFinish={onFinish}
            style={{ margin: "30px" }}
        // onFinishFailed={onFinishFailed}
        >
            <h3 style={{ textAlign: "center" }}>Đăng ký tài khoản</h3>
            <Row justify={"center"}>
                <Col xs={24} md={6}>
                    <Form.Item
                        label="Full Name"
                        name="fullName"
                        rules={[{
                            required: true,
                            message: 'Please input your username!'
                        }]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row >
            <Row justify={"center"}>
                <Col xs={24} md={6}>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row  >
            <Row justify={"center"}>
                <Col xs={24} md={6}>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                </Col>
            </Row >
            <Row justify={"center"}>
                <Col xs={24} md={6}>
                    <Form.Item
                        label="Phone Number"
                        name="phone"
                        rules={[
                            {

                                required: true,
                                pattern: new RegExp(/\d+/g),
                                message: "Wrong format!"
                            }

                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col >
            </Row >
            <Row justify={"center"} >
                <Col xs={24} md={6}>


                    <Button
                        onClick={() => form.submit()} // gọi form.submit() sẽ gọi onFinish trả ra value
                        type="primary" style={{ width: "100px" }}>Register</Button>

                    <Divider />
                    <div>Đã có tài khoản? <Link to="/login">Đăng nhập tại đây</Link></div>
                </Col >
            </Row >
        </Form >

    )
}

export default RegisterPage;