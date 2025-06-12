import './header.css'
import { Link, NavLink } from 'react-router-dom';
// dùng Link thay vì thẻ a để không load lại trang

// dùng NavLink để active cái phần header
//NavLink tự động thêm class active ( thư viện react )
// sử dụng nếu muốn dùng css còn ko chỉ cần xài Link

const Header = () => {
    return (
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/users">Users</NavLink></li>
            <li><NavLink to="/books">Books</NavLink></li>

        </ul>
    );
}

export default Header