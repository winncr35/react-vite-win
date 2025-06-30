// import './header.css'
import { Link, NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import { useState, useContext } from 'react';
import {
    AuditOutlined,
    HomeOutlined, UsergroupAddOutlined, SettingOutlined,
    LoginOutlined, AliwangwangOutlined

} from '@ant-design/icons';
import { AuthContext } from '../context/auth.context';
// dùng Link thay vì thẻ a để không load lại trang

// dùng NavLink để active cái phần header
//NavLink tự động thêm class active ( thư viện react )
// sử dụng nếu muốn dùng css còn ko chỉ cần xài Link

const Header = () => {
    const [current, setCurrent] = useState('');
    const { user } = useContext(AuthContext);
    console.log(user)
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    }
    const items = [
        {
            label: <Link to={"/"}>Home</Link>,
            key: 'home',
            icon: <HomeOutlined />,
        },
        {
            label: <Link to={"users"}>Users</Link>,
            key: 'users',
            icon: <UsergroupAddOutlined />,

        },
        {
            label: <Link to={"/books"}>Books</Link>,
            key: 'books',
            icon: <AuditOutlined />,

        },
        ...(!user.id ? [{
            label: <Link to={"/login"}>Đăng nhập</Link>,
            key: 'login',
            icon: <LoginOutlined />,

        }] : []),
        ...(user.id ? [{
            key: 'setting',
            label: `Welcome ${user.fullName}`, //auth context
            icon: <AliwangwangOutlined />,
            children: [
                { key: 'logout', label: 'Đăng xuất' },

            ],


        }] : []),


    ];

    return (
        <Menu onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items} />
    );
}

export default Header