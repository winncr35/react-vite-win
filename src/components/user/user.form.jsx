import { Input } from 'antd'
import { Button } from "antd";
import { useState } from 'react';
const UserForm = () => {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [passWord, setPassWord] = useState("")
    const [phone, setPhone] = useState("")


    const handleClickBtn = () => {
        console.log("Check state: ", { fullName, email, passWord, phone })

    }

    return (
        <div className="user-form" style={{ margin: "20px 0" }} >
            <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
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
                    <Input.Password value={passWord}
                        onChange={(event) => { setPassWord(event.target.value) }} />
                </div>
                <div>
                    <span>Phone number</span>
                    <Input value={phone}
                        onChange={(event) => { setPhone(event.target.value) }} />
                </div>
                <div>
                    <Button type="primary"
                        onClick={handleClickBtn} > Create User</Button>
                </div>
            </div>
        </div>
    )
}
export default UserForm;