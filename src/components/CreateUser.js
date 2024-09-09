import React, { useState } from 'react';
import './CreateUser.css';
import { validateContactNumber, validateLicenseNumber, validatePassword } from './validationUtils';

function CreateUser({ onAddUser }) {
  const [formData, setFormData] = useState({
    username: '',
    vehicleType: '',
    licenseNumber: '',
    contactNumber: '',
    location: '',
    password: '',
    confirmPassword: ''
  });

  const vehicleTypes = ['Car', 'Bike', 'Truck'];
  const locations = ['Hyderabad', 'Vijayawada', 'Vizag'];

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'contactNumber') {
      const cleanedValue = value.replace(/\D/g, ''); // Remove non-digit characters
      if (cleanedValue.length <= 10) {
        setFormData((prevData) => ({ ...prevData, [name]: cleanedValue }));
      }
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateLicenseNumber(formData.licenseNumber)) {
      alert('Please enter a valid license number (6-10 alphanumeric characters).');
      return;
    }

    if (!validateContactNumber(formData.contactNumber)) {
      alert('Please enter a valid contact number (10 digits).');
      return;
    }

    if (!validatePassword(formData.password)) {
      alert('Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one digit, and one special character.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    onAddUser(formData);
    setFormData({
      username: '',
      vehicleType: '',
      licenseNumber: '',
      contactNumber: '',
      location: '',
      password: '',
      confirmPassword: ''
    });
  };

  return (
    <div className="create-user-container">
      <form className="create-user-form" onSubmit={handleSubmit}>
        <h2>Create User</h2>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </label>
        <div className="form-row">
          <label>
            Vehicle Type:
            <select
              name="vehicleType"
              value={formData.vehicleType}
              onChange={handleChange}
              required
            >
              <option value="">Select Vehicle Type</option>
              {vehicleTypes.map((type, index) => (
                <option key={index} value={type}>{type}</option>
              ))}
            </select>
          </label>
          <label>
            Location:
            <select
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            >
              <option value="">Select Location</option>
              {locations.map((loc, index) => (
                <option key={index} value={loc}>{loc}</option>
              ))}
            </select>
          </label>
        </div>
        <label>
          License Number:
          <input
            type="text"
            name="licenseNumber"
            value={formData.licenseNumber}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Contact Number:
          <input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default CreateUser;
