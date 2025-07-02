import { Button, Select, Input, message, Modal, notification, InputNumber } from "antd"
import { useState } from "react"
import { createBookAPI } from "../../services/api.services"
import { handleUploadFile } from "../../services/api.services"

const BookForm = (props) => {
    const { loadBook } = props;
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [mainText, setMainText] = useState("")
    const [author, setAuthor] = useState("")
    const [price, setPrice] = useState("")
    const [quantity, setQuantity] = useState("")
    const [category, setCategory] = useState("")
    const [preview, setPreview] = useState(null)
    const [selectedFile, setSelectedFile] = useState(null);

    const handleOnChangeFile = async (event) => {
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





    const handleSubmitBtn = async () => {
        if (!selectedFile) {
            notification.error({
                message: "Error create book",
                description: "Vui lòng upload ảnh thumbnail"
            })
            return;
        }
        const resUpload = await handleUploadFile(selectedFile, "book");
        if (resUpload.data) {
            const newThumbnail = resUpload.data.fileUploaded;

            const resBook = await createBookAPI(newThumbnail, mainText, author, price, quantity, category);

            if (resBook.data) {
                notification.success({
                    message: "Create Book",
                    description: "Tạo mới book thành công"
                })
                resetAndCloseModal();
                await loadBook();
            }
            else {
                notification.error({
                    message: "Error create book",
                    description: JSON.stringify(resBook.message)
                })
            }

        }
        else {
            notification.error({
                message: "Error create book",
                description: "Không có dữ liệu"
            })
        }
    }
    const resetAndCloseModal = () => {
        setIsModalOpen(false)
        setMainText("")
        setAuthor("")
        setPrice("")
        setQuantity("")
        setCategory("")
        setPreview("")
        setSelectedFile(null);

    }





    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "15px" }}>
                <h2>Table Book</h2>
                <div >
                    <Button type="primary"
                        onClick={() => setIsModalOpen(true)} > Create Book</Button>
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
                        <span>Tiêu đề</span>
                        <Input
                            value={mainText}
                            onChange={(event) => { setMainText(event.target.value) }}
                        />
                    </div>
                    <div>
                        <span>Tác giả </span>
                        <Input value={author}
                            onChange={(event) => { setAuthor(event.target.value) }} />
                    </div>
                    <div>

                        <span>Giá tiền</span>
                        <InputNumber addonAfter="đ" value={price} style={{ width: "100%" }}
                            onChange={(event) => { setPrice(event) }} />

                    </div>
                    <div>
                        <span>Số lượng</span>
                        <InputNumber value={quantity}
                            style={{ width: "100%" }}
                            onChange={(event) => { setQuantity(event) }} />
                    </div>
                    <div>
                        <span>Thể loại</span>
                        <Select value={category}
                            style={{ width: "100%" }}
                            onChange={(value) => { setCategory(value) }}
                            options={[
                                { value: 'Arts', label: 'Arts' },
                                { value: 'Business', label: 'Business' },
                                { value: 'Comic', label: 'Comic' },
                                { value: 'Cooking', label: 'Cooking' },
                                { value: 'Entertainment', label: 'Entertainment' },
                                { value: 'History', label: 'History' },
                                { value: 'Music', label: 'Music' },
                                { value: 'Sports', label: 'Sports' },
                                { value: 'Teen', label: 'Teen' },
                                { value: 'Travel', label: 'Travel' },



                            ]} />
                    </div>
                    <div>
                        <div>Ảnh thumbnail</div>
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
                                Upload
                            </label>
                            <input type='file' hidden id='btnUpload'
                                onChange={(event) => handleOnChangeFile(event)}
                                onClick={(event) => event.target.value = null}
                            />
                        </div>
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

                        </>
                    }


                </div>
            </Modal >
        </div>
    )
}

export default BookForm