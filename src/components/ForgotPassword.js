import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ForgotPassword.css';

function ForgotPassword() {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleVerifyOtp = () => {
    if (otp) {
      alert('You have received a registered link on your email ID.');
      // Redirect to the dashboard after alert is closed
      navigate('/');
    } else {
      alert('Please enter the OTP.');
    }
  };

  return (
    <div className="forgot-password-container">
      <form className="forgot-password-form">
        <h2>Enter OTP</h2>
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
        />
        <button type="button" onClick={handleVerifyOtp}>Verify OTP</button>
      </form>
    </div>
  );
}

export default ForgotPassword;
