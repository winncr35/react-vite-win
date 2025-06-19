import { Input, notification, Modal, Button } from 'antd'
import { useEffect, useState } from 'react';
import { createUserAPI, updateUserAPI } from '../../services/api.services';
const UpdateUserModal = (props) => {
    const [fullName, setFullName] = useState("")
    const [id, setId] = useState("")
    const [phone, setPhone] = useState("")

    const { loadUser, isModalUpdateOpen, setisModalUpdateOpen
        , setDataUpdate, dataUpdate } = props;

    useEffect(() => {
        if (dataUpdate) {
            setFullName(dataUpdate.fullName);
            setId(dataUpdate._id);
            setPhone(dataUpdate.phone);
        }
    }, [dataUpdate])
    const handleSubmitBtn = async () => {
        const res = await updateUserAPI(id, fullName, phone)

        if (res.data) {
            notification.success({
                message: "Update user",
                description: "Cập nhật thành công"
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
        setisModalUpdateOpen(false);
        setFullName("");
        setId("");
        setPhone("");
        setDataUpdate(null)

    }
    console.log(dataUpdate)
    return (
        <Modal
            title="Update a User"
            open={isModalUpdateOpen}
            onOk={() => handleSubmitBtn()}
            onCancel={() => resetAndCloseModal()}
            maskClosable={false}
            okText={"Save"}

        >

            <div style={{ display: "flex", flexDirection: "column", gap: "15px" }} >
                <div>
                    <span>Id</span>
                    <Input value={id}
                        disabled
                    />
                </div>
                <div>
                    <span>FullName</span>
                    <Input
                        value={fullName}
                        onChange={(event) => { setFullName(event.target.value) }}
                    />
                </div>


                <div>
                    <span>Phone number</span>
                    <Input value={phone}
                        onChange={(event) => { setPhone(event.target.value) }} />
                </div>
            </div>
        </Modal >
    )

}
export default UpdateUserModal
