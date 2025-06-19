import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { useState, useEffect } from 'react';
import { fetchAllUserAPI } from '../services/api.services';


const UsersPage = () => {
    //lift up state
    const [dataUsers, setDataUsers] = useState([]);
    useEffect(() => {
        loadUser();
    }, []);
    const loadUser = async () => {

        const res = await fetchAllUserAPI()
        setDataUsers(res.data)
    }

    return (
        <div style={{ padding: "20px" }}>
            <UserForm loadUser={loadUser} />
            <UserTable
                dataUsers={dataUsers}
                loadUser={loadUser}
            />

        </div>
    )
}

export default UsersPage;