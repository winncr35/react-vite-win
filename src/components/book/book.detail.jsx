import { Button, Drawer, Flex, message, notification } from 'antd'

const ViewBookDetail = (props) => {
    const { dataDetail, setDataDetail, isDetailOpen, setisDetailOpen, loadUser } = props;

    console.log(dataDetail)
    return (<Drawer
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
            <p>Tiêu đề: {dataDetail.mainText}</p>
            <br />
            <p>Tác giả: {dataDetail.author}</p>
            <br />
            <p>Thể loại: {dataDetail.category}</p>
            <br />
            <p>Giá tiền: {dataDetail.price}</p>
            <br />
            <p>Số lượng: {dataDetail.quantity}</p>
            <br />
            <p>Đã bán: {dataDetail.sold}</p>
            <br />
            <p>Thumbnail: </p>

            <div style={{
                marginTop: "10px",
                height: "100px", width: "150px",
                marginLeft: "0",
                marginBottom: "15px"
            }}>
                <img style={{ height: "100%", width: "100%", objectFit: "contain" }}
                    src={`${import.meta.env.VITE_BACKEND_URL}/images/book/${dataDetail.thumbnail}`} alt="" />
            </div >


            {/* {preview &&
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
            } */}



        </> :
            <>
                <p>Không có dữ liệu</p>
            </>
        }
    </Drawer >

    )
}
export default ViewBookDetail