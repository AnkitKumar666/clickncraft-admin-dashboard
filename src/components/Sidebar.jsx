import { NavLink } from 'react-router-dom';
import {
    FiHome,
    FiBox,
    FiShoppingCart,
    FiUsers,
    FiSettings,
    FiLogOut
} from 'react-icons/fi';

const Sidebar = ({ isOpen, mobileOpen, closeMobileMenu }) => {
    return (
        <div className={`sidebar ${isOpen ? '' : 'collapsed'} ${mobileOpen ? 'mobile-open' : ''}`}>
            <div className="sidebar-header">
                <h2>{isOpen ? 'ClicknCraft' : 'CC'}</h2>
            </div>
            <nav className="sidebar-nav">
                <ul>
                    <li>
                        <NavLink to="/" onClick={closeMobileMenu}>
                            <FiHome className="icon" />
                            {isOpen && <span>Dashboard</span>}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/products" onClick={closeMobileMenu}>
                            <FiBox className="icon" />
                            {isOpen && <span>Products</span>}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/orders" onClick={closeMobileMenu}>
                            <FiShoppingCart className="icon" />
                            {isOpen && <span>Orders</span>}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/users" onClick={closeMobileMenu}>
                            <FiUsers className="icon" />
                            {isOpen && <span>Users</span>}
                        </NavLink>
                    </li>
                </ul>

                <ul className="sidebar-bottom">
                    <li>
                        <NavLink to="/settings" onClick={closeMobileMenu}>
                            <FiSettings className="icon" />
                            {isOpen && <span>Settings</span>}
                        </NavLink>
                    </li>
                    <li>
                        <a href="#logout" onClick={closeMobileMenu}>
                            <FiLogOut className="icon" />
                            {isOpen && <span>Logout</span>}
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;