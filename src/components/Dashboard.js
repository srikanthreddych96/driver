import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../UserContext';
import './Dashboard.css';
import Home from './Home'; 
import CreateUser from './CreateUser';
import DriverManagement from './DriverManagement';
import CommissionTracking from './CommissionTracking';
import BillingAndInvoicing from './BillingAndInvoicing';
import Notifications from './Notifications';
import Support from './Support';
import { FaUserPlus, FaCar, FaDollarSign, FaFileInvoice, FaBell, FaHeadset, FaHome, FaSignOutAlt } from 'react-icons/fa';

function Dashboard() {
  const { users, addUser } = useUserContext();
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();

  const handleAddUser = (user) => {
    addUser(user);
    setActiveSection('driverManagement');
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="profile-section">
          <img src="/profile.jpg" alt="Profile" className="profile" />
          <span className="employee-name">Srikanth Manmun</span>
        </div>
        <hr />
        <ul className="menu">
          <li onClick={() => setActiveSection('home')}><FaHome className="icon" /> Home</li>
          <li onClick={() => setActiveSection('createUser')}><FaUserPlus className="icon" /> Create User</li>
          <li onClick={() => setActiveSection('driverManagement')}><FaCar className="icon" /> Driver Management</li>
          <li onClick={() => setActiveSection('commissionTracking')}><FaDollarSign className="icon" /> Commission Tracking</li>
          <li onClick={() => setActiveSection('billingAndInvoicing')}><FaFileInvoice className="icon" /> Billing & Invoicing</li>
          <li onClick={() => setActiveSection('notifications')}><FaBell className="icon" /> Notifications</li>
          <li onClick={() => setActiveSection('support')}><FaHeadset className="icon" /> Support</li>
        </ul>
        <button className="logout" onClick={handleLogout}><FaSignOutAlt className="icon" /> Logout</button>
      </aside>
      <main className="main-content">
        {activeSection === 'createUser' && (
          <CreateUser onAddUser={handleAddUser} />
        )}
        {activeSection === 'driverManagement' && (
          <DriverManagement />
        )}
        {activeSection === 'commissionTracking' && (
          <CommissionTracking users={users} />
        )}
        {activeSection === 'billingAndInvoicing' && (
          <BillingAndInvoicing />
        )}
        {activeSection === 'notifications' && (
          <Notifications />
        )}
        {activeSection === 'support' && (
          <Support />
        )}
        {activeSection === 'home' && (
          <Home />
        )}
      </main>
    </div>
  );
}

export default Dashboard;






