import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Orders from './pages/Orders';
import Users from './pages/Users';
import './styles/main.css';
import './styles/responsive.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // return
  return (
    <Router>
      <div className="app-container">
        <Sidebar
          isOpen={sidebarOpen}
          mobileOpen={mobileMenuOpen}
          closeMobileMenu={() => setMobileMenuOpen(false)}
        />
        <div className={`main-content ${sidebarOpen ? '' : 'collapsed'}`}>
          <TopNav
            toggleSidebar={toggleSidebar}
            toggleMobileMenu={toggleMobileMenu}
          />
          <div className="content-wrapper">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/users" element={<Users />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
