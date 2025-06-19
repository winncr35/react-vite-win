import { Drawer } from 'antd'
const ViewUserDetail = (props) => {
    const { dataDetail, setDataDetail, isDetailOpen, setisDetailOpen } = props;
    return (
        <Drawer

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
            </> :
                <>
                    <p>Không có dữ liệu</p>
                </>
            }
        </Drawer>)
}
export default ViewUserDetail