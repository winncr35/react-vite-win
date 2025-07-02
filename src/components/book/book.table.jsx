import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Popconfirm, notification } from 'antd';
import { useState } from 'react';
import { Table } from "antd"
import { deleteBookAPI } from '../../services/api.services';
import ViewBookDetail from './book.detail';
import BookUpdate from './book.update';
const BookTable = (props) => {
    const { dataBook, loadBook, current, pageSize, total, setCurrent, setPageSize } = props;
    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
    const [dataUpdate, setDataUpdate] = useState(null);
    const [dataDetail, setDataDetail] = useState(null)
    const [isDetailOpen, setisDetailOpen] = useState(false)
    const columns = [
        {
            title: 'STT',
            render: (_, record, index) => {

                return (
                    <>{(index + 1) + (current - 1) * pageSize}</>

                )
            }

        },
        {
            title: 'ID',
            dataIndex: '_id',
            render: (_, record) => {

                return (
                    <a href='#' onClick={() => {
                        setDataDetail(record);
                        setisDetailOpen(true);
                    }}>{record._id}</a>
                )
            }
        },
        {
            title: 'Tiêu đề ',
            dataIndex: 'mainText',

        },
        {
            title: 'Giá tiền ',
            dataIndex: 'price',

        },
        {
            title: 'Số lượng ',
            dataIndex: 'quantity',

        },
        {
            title: 'Tác giả ',
            dataIndex: 'author',

        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <>

                    <div style={{ display: "flex", gap: "20px" }}>
                        <EditOutlined
                            onClick={() => {
                                setDataUpdate(record)
                                setIsModalUpdateOpen(true);

                            }}
                            style={{ cursor: "pointer", color: "orange" }} />
                        <Popconfirm
                            title="Xoá người dùng "
                            description="Bạn có chắc chắn xoá user này?"
                            onConfirm={() => handleDeteleUser(record._id)}
                            okText="Yes"
                            cancelText="No"
                            placement="left"

                        >
                            <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
                        </Popconfirm>
                    </div>
                </>
            ),
        }
    ];
    const handleDeteleUser = async (id) => {
        const res = await deleteBookAPI(id);
        if (res.data) {
            notification.success({
                message: "Delete user",
                description: "Xoá user thành công"
            })
            await loadBook();
        }
        else {
            notification.error({
                message: "Error delete user",
                description: JSON.stringify(res.message)
            })
        }
    }
    const onChange = (pagination, filters, sorter, extra) => { // phân trang
        if (pagination && pagination.current) {
            if (+pagination.current !== +current) {
                setCurrent(+pagination.current) // "5"=>5 convert dữ liệu string => number

            }

        }
        if (pagination && pagination.pageSize) {
            if (+pagination.pageSize !== +pageSize) {
                setPageSize(+pagination.pageSize) // "5"=>5 convert dữ liệu string => number

            }

        }
    };
    return (<>
        <Table columns={columns} dataSource={dataBook} rowKey={"_id"}
            pagination={
                {
                    current: current,
                    pageSize: pageSize,
                    showSizeChanger: true,
                    total: total,
                    showTotal: (total, range) => { return (<div> {range[0]}-{range[1]} trên {total} rows</div>) }
                }}
            onChange={onChange}
        />
        <ViewBookDetail
            dataDetail={dataDetail}
            setDataDetail={setDataDetail}
            isDetailOpen={isDetailOpen}
            setisDetailOpen={setisDetailOpen}
            loadBook={loadBook}

        />
        <BookUpdate
            dataUpdate={dataUpdate}
            setDataUpdate={setDataUpdate}
            isModalUpdateOpen={isModalUpdateOpen}
            setIsModalUpdateOpen={setIsModalUpdateOpen}
            loadBook={loadBook}
        />



    </>)
}
export default BookTable