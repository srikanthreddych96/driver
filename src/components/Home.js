import React from 'react';
import { ComposedChart, Bar, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';
import { FaCar, FaDollarSign, FaCalendarAlt, FaUser, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import './Home.css';

const data = [
  { name: 'Jan', earnings: 2400 },
  { name: 'Feb', earnings: 1398 },
  { name: 'Mar', earnings: 9800 },
  { name: 'Apr', earnings: 3908 },
  { name: 'May', earnings: 4800 },
  { name: 'Jun', earnings: 3800 },
  { name: 'Jul', earnings: 4300 },
  { name: 'Aug', earnings: 4600 },
  { name: 'Sep', earnings: 4500 },
  { name: 'Oct', earnings: 5100 },
  { name: 'Nov', earnings: 4700 },
  { name: 'Dec', earnings: 5400 },
];

const driversData = [
  { id: 1, name: 'Srikanth', mobile: '+917702655803', loginTime: '16-Aug-2024 / 04:32 PM', lastUpdate: '29-Jul-2024 / 04:32 PM', lastLocation: 'Hyderabad', logoutTime: '04:32 PM', totalHours: '60 hrs 32 mins' },
  { id: 2, name: 'Pratap', mobile: '+917890123456', loginTime: '20-Dec-2019 / 10:15 AM', lastUpdate: '05-Jul-2020 / 03:20 PM', lastLocation: 'ongole', logoutTime: '03:20 PM', totalHours: '50 hrs 15 mins' },
];

const Home = () => {
  return (
    <div className="home-container">
      <div className="profile-metrics">
        <div className="profile-section1">
          <img src="/profile.jpg" alt="Profile" className="profile-pic" />
          <div className="vehicle-details">
            <h3>Vehicle Details</h3>
            <p><FaCar /> <strong>Make:</strong> Toyota</p>
            <p><FaCar /> <strong>Model:</strong> Camry</p>
            <p><FaCalendarAlt /> <strong>Year:</strong> 2021</p>
            <p><FaUser /> <strong>License:</strong> ABC1234</p>
          </div>
        </div>
        <div className="metrics">
          <div className="metric">
            <FaUser className="metric-icon" />
            <h2>Active Drivers</h2>
            <p className="metric-value">249</p>
          </div>
          <div className="metric">
            <FaMapMarkerAlt className="metric-icon" />
            <h2>Location Enabled</h2>
            <p className="metric-value">143</p>
          </div>
          <div className="metric">
            <FaCar className="metric-icon" />
            <h2>Drivers Today</h2>
            <p className="metric-value">18</p>
          </div>
          <div className="metric">
            <FaClock className="metric-icon" />
            <h2>Total Hours</h2>
            <p className="metric-value">55:25</p>
          </div>
          <div className="metric">
            <FaDollarSign className="metric-icon" />
            <h2>Total Cost</h2>
            <p className="metric-value">388.25</p>
          </div>
        </div>
      </div>
      <div className="chart-section">
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="earnings" barSize={30} fill="url(#gradientBar)" />
            <Line type="monotone" dataKey="earnings" stroke="url(#gradientLine)" />
            <defs>
              <linearGradient id="gradientBar" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4caf50" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#81c784" stopOpacity={0.2} />
              </linearGradient>
              <linearGradient id="gradientLine" x1="0" y1="0" x2="1" y2="1">
                <stop offset="5%" stopColor="#2196f3" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#64b5f6" stopOpacity={0.2} />
              </linearGradient>
            </defs>
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      <div className="recently-enabled-drivers">
        <h3>Recently Location Enabled Drivers</h3>
        <table className="drivers-table">
          <thead>
            <tr>
              <th>S No.</th>
              <th>Driver Name</th>
              <th>Mobile Number</th>
              <th>Login Date & Time</th>
              <th>Last Update Time</th>
              <th>Last Location Address</th>
              <th>Logout Time</th>
              <th>Total Hours</th>
            </tr>
          </thead>
          <tbody>
            {driversData.map(driver => (
              <tr key={driver.id}>
                <td>{driver.id}</td>
                <td>{driver.name}</td>
                <td>{driver.mobile}</td>
                <td>{driver.loginTime}</td>
                <td>{driver.lastUpdate}</td>
                <td>{driver.lastLocation}</td>
                <td>{driver.logoutTime}</td>
                <td>{driver.totalHours}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
