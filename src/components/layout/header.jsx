import './header.css'
import { Link, NavLink } from 'react-router-dom';
// dùng Link thay vì thẻ a để không load lại trang

// dùng NavLink để active cái phần header
//Navlink tự động thêm class active ( thư viện react )

const Header = () => {
    return (
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/users">Users</NavLink></li>
            <li><NavLink to="/products">Products</NavLink></li>

        </ul>
    );
}

export default Header