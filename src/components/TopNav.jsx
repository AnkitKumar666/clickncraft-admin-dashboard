import { FiMenu, FiBell, FiUser, FiSearch, FiX } from 'react-icons/fi';

const TopNav = ({ toggleSidebar, toggleMobileMenu }) => {
    return (
        <header className="top-nav">
            <div className="nav-left">
                <button className="menu-btn desktop-only" onClick={toggleSidebar}>
                    <FiMenu />
                </button>
                <button className="menu-btn mobile-only" onClick={toggleMobileMenu}>
                    <FiMenu />
                </button>
                <div className="search-bar">
                    <FiSearch className="search-icon" />
                    <input type="text" placeholder="Search dashboard..." />
                </div>
            </div>
            <div className="nav-right">
                <button className="notification-btn">
                    <FiBell />
                    <span className="badge">3</span>
                </button>
                <div className="user-profile">
                    <div className="user-avatar">
                        <FiUser />
                    </div>
                    <span className="username">Admin User</span>
                </div>
            </div>
        </header>
    );
};

export default TopNav;