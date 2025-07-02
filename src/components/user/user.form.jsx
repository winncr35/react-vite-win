import { Input, notification, Modal, Button } from 'antd'
import { useState } from 'react';
import { createUserAPI } from '../../services/api.services';
const UserForm = (props) => {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { loadUser } = props;


    const handleSubmitBtn = async () => {
        const res = await createUserAPI(fullName, email, password, phone)

        if (res.data) {
            notification.success({
                message: "create user",
                description: "Tạo user thành công"
            })
            resetAndCloseModal();
            await loadUser();
        }
        else {
            notification.error({
                message: "Error create user",
                description: JSON.stringify(res.message)
            })
        }
        // // //di vao nhanh con data

    }
    const resetAndCloseModal = () => {
        setIsModalOpen(false);
        setFullName("");
        setEmail("");
        setPassword("");
        setPhone("");

    }

    return (
        <div className="user-form" style={{ margin: "20px 0" }} >

            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>Table Users</h3>
                <div>
                    <Button type="primary"
                        onClick={() => setIsModalOpen(true)} > Create User</Button>
                </div>
            </div>
            <Modal
                title="Create User"
                open={isModalOpen}
                onOk={() => handleSubmitBtn()}
                onCancel={() => resetAndCloseModal()}
                maskClosable={false}
                okText={"Create"}

            >

                <div style={{ display: "flex", flexDirection: "column", gap: "15px" }} >
                    <div>
                        <span>FullName</span>
                        <Input
                            value={fullName}
                            onChange={(event) => { setFullName(event.target.value) }}
                        />
                    </div>
                    <div>
                        <span>Email</span>
                        <Input value={email}
                            onChange={(event) => { setEmail(event.target.value) }} />
                    </div>
                    <div>
                        <span>Password</span>
                        <Input.Password value={password}
                            onChange={(event) => { setPassword(event.target.value) }} />
                    </div>
                    <div>
                        <span>Phone number</span>
                        <Input value={phone}
                            onChange={(event) => { setPhone(event.target.value) }} />
                    </div>
                    <div>
                        <span>Phone number</span>
                        <Input value={phone}
                            onChange={(event) => { setPhone(event.target.value) }} />
                    </div>
                </div>
            </Modal >



        </div >
    )
}
export default UserForm;