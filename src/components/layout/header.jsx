// import './header.css'
import { Link, NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import { useState } from 'react';
import { AuditOutlined, HomeOutlined, UsergroupAddOutlined, SettingOutlined } from '@ant-design/icons';
// dùng Link thay vì thẻ a để không load lại trang

// dùng NavLink để active cái phần header
//NavLink tự động thêm class active ( thư viện react )
// sử dụng nếu muốn dùng css còn ko chỉ cần xài Link

const Header = () => {
    const [current, setCurrent] = useState('');
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
        {
            key: 'Cài đặt',
            label: 'Cài đặt',
            icon: <SettingOutlined />,
            children: [
                { key: 'login', label: <Link to={"/login"}>Đăng nhập</Link> },
                { key: 'logout', label: 'Đăng xuất' },

            ],
        },

    ];

    return (
        <Menu onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items} />
    );
}

export default Header