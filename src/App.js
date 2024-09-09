import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './UserContext';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ForgotPassword from './components/ForgotPassword';
import CreateUser from './components/CreateUser';
import CommissionTracking from './components/CommissionTracking';
import BillingAndInvoicing from './components/BillingAndInvoicing';
import Notifications from './components/Notifications';
import Support from './components/Support';
//import Home from './components/Home';


function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/createuser" element={<CreateUser />} />
          <Route path="/commissiontracking" element={<CommissionTracking />} />
          <Route path="/billingandinvoicing" element={<BillingAndInvoicing />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;


