import axios from '../../services/axios.customize'
import { Button, Drawer, Flex, message, notification } from 'antd'
import { useState } from 'react';
import { handleUploadFile, updateUserAvatar } from '../../services/api.services';

const ViewUserDetail = (props) => {
    const { dataDetail, setDataDetail, isDetailOpen, setisDetailOpen, loadUser } = props;
    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const handleOnChangeFile = (event) => {
        if (!event.target.files || event.target.files.length === 0) {
            setSelectedFile(null);
            setPreview(null);
            return;
        }


        // I've kept this example simple by using the first image instead of multiple
        const file = event.target.files[0]
        if (file) {
            setSelectedFile(file);
            setPreview(URL.createObjectURL(file))
        }

    }


    const handleUpdateUserAvatar = async () => {
        const resUpload = await handleUploadFile(selectedFile, "avatar")
        if (resUpload.data) {
            const newAvatar = resUpload.data.fileUploaded;
            //update user
            const resUpdateAvatar = await updateUserAvatar(newAvatar, dataDetail._id, dataDetail.fullName, dataDetail.phone)
            if (resUpdateAvatar.data) {
                setisDetailOpen(false);
                setSelectedFile(null);
                setPreview(null);
                await loadUser();
                notification.success({
                    message: "Update use avatar",
                    description: "Cập nhật avatar thành công"
                })

            } else {
                notification.error({
                    message: "Error update avatar",
                    description: JSON.stringify(resUpdateAvatar.message)
                })

            }
        } else {
            notification.error({
                message: "Error upload avatar",
                description: JSON.stringify(resUpload.message)
            })

        }

    }
    return (
        <Drawer
            width={"40vw"}
            title="Basic Drawer"
            closable={{ 'aria-label': 'Close Button' }}
            onClose={() => {
                setDataDetail(null)
                setisDetailOpen(false)
            }}
            open={isDetailOpen}
        >
            {dataDetail ? <>
                <p>Id: {dataDetail._id}</p>
                <br />
                <p>Full name: {dataDetail.fullName}</p>
                <br />
                <p>Email: {dataDetail.email}</p>
                <br />
                <p>Phone number: {dataDetail.phone}</p>
                <br />
                <p>Avatar: </p>

                <div style={{
                    marginTop: "10px",
                    height: "100px", width: "150px",
                    marginLeft: "0",
                    marginBottom: "15px"
                }}>
                    <img style={{ height: "100%", width: "100%", objectFit: "contain" }}
                        src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDetail.avatar}`} alt="" />
                </div >
                <div >
                    <label htmlFor="btnUpload" style={{
                        display: "block",
                        width: "fit-content",
                        marginTop: "15px",
                        padding: "5px 10px",
                        borderRadius: "5px",
                        background: "orange",
                        cursor: "pointer"
                    }}>
                        Upload Avatar
                    </label>
                    <input type='file' hidden id='btnUpload'
                        onChange={(event) => handleOnChangeFile(event)}
                    />
                </div>

                {preview &&
                    <>
                        <div style={{
                            marginTop: "10px",
                            height: "100px", width: "150px",
                            marginBottom: "15px"
                        }}>
                            <img style={{ height: "100%", width: "100%", objectFit: "contain" }}
                                src={preview} alt="" />
                        </div >
                        <Button type="primary"
                            onClick={() => handleUpdateUserAvatar()}>Save</Button>
                    </>
                }



            </> :
                <>
                    <p>Không có dữ liệu</p>
                </>
            }
        </Drawer >)
}



export default ViewUserDetail