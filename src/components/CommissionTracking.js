import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faDollarSign, faClipboardList } from '@fortawesome/free-solid-svg-icons';
import './CommissionTracking.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function CommissionTracking({ users }) {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Commission',
        data: [],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  });

  const [totalRides, setTotalRides] = useState(0);
  const [totalEarnings, setTotalEarnings] = useState(0);
  const [totalCommission, setTotalCommission] = useState(0);

  useEffect(() => {
    const labels = ['January', 'February', 'March', 'April', 'May'];
    const commissionData = [120, 150, 180, 200, 230];
    const ridesData = [
      { month: 'January', rides: 10, earnings: 1200 },
      { month: 'February', rides: 15, earnings: 1500 },
      { month: 'March', rides: 20, earnings: 1800 },
      { month: 'April', rides: 25, earnings: 2000 },
      { month: 'May', rides: 30, earnings: 2300 },
    ];

    const totalRides = ridesData.reduce((acc, item) => acc + item.rides, 0);
    const totalEarnings = ridesData.reduce((acc, item) => acc + item.earnings, 0);
    const totalCommission = totalEarnings * 0.05;

    setData({
      labels: labels,
      datasets: [
        {
          label: 'Commission',
          data: commissionData,
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          fill: true,
        },
      ],
    });
    
    setTotalRides(totalRides);
    setTotalEarnings(totalEarnings);
    setTotalCommission(totalCommission);
  }, [users]);

  const options = {
    responsive: true,
    maintainAspectRatio: false, 
    animation: false, 
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="commission-tracking-container">
      <div className="header">
        <FontAwesomeIcon icon={faChartLine} size="2x" color="#4caf50" />
        <h2>Commission Tracking</h2>
      </div>

      <div className="dashboard-summary">
        <div className="summary-item">
          <FontAwesomeIcon icon={faClipboardList} size="2x" color="#007bff" />
          <div className="summary-text">
            <h3>Total Rides</h3>
            <p>{totalRides}</p>
          </div>
        </div>
        <div className="summary-item">
          <FontAwesomeIcon icon={faDollarSign} size="2x" color="#28a745" />
          <div className="summary-text">
            <h3>Total Earnings</h3>
            <p>₹{totalEarnings}</p>
          </div>
        </div>
        <div className="summary-item">
          <FontAwesomeIcon icon={faDollarSign} size="2x" color="#dc3545" />
          <div className="summary-text">
            <h3>Total Commission</h3>
            <p>₹{totalCommission.toFixed(2)}</p>
          </div>
        </div>
      </div>

      <div className="graph-container">
        <Line data={data} options={options} />
      </div>

      <div className="detailed-reports">
        <h3>Detailed Reports</h3>
        <table>
          <thead>
            <tr>
              <th>Month</th>
              <th>Rides</th>
              <th>Earnings</th>
              <th>Commission</th>
            </tr>
          </thead>
          <tbody>
            {data.labels.map((label, index) => (
              <tr key={label}>
                <td>{label}</td>
                <td>{data.datasets[0].data[index]}</td>
                <td>₹{data.datasets[0].data[index] * 20}</td>
                <td>₹{data.datasets[0].data[index] * 0.05}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CommissionTracking;











