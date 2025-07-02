import BookTable from "../components/book/book.table";
import BookForm from "../components/book/book.form";
import { useState, useEffect } from "react";
import { getBookAPI } from "../services/api.services";
const BookPage = () => {
    const [dataBook, setDataBook] = useState([]);
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(10)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        loadBook();

    }, [current, pageSize]);//[] + condition phân trang khi user thay đổi

    const loadBook = async () => {

        const res = await getBookAPI(current, pageSize)
        // console.log(res.data)
        if (res.data) {
            setDataBook(res.data.result)
            setCurrent(res.data.meta.current);
            setPageSize(res.data.meta.pageSize);
            setTotal(res.data.meta.total);
        }
    }

    return (
        <>
            <BookForm loadBook={loadBook} />
            <BookTable dataBook={dataBook}
                loadBook={loadBook}
                current={current}
                pageSize={pageSize}
                total={total}
                setCurrent={setCurrent}
                setPageSize={setPageSize} />
        </>
    )
}

export default BookPage;