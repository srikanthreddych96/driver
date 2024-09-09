import React, { useState } from 'react';
import { useUserContext } from '../UserContext';
import './DriverManagement.css';
import { validateContactNumber, validateLicenseNumber } from './validationUtils'; // Import validation functions

function DriverManagement() {
  const { users, updateUser, deleteUser } = useUserContext();
  const [editingUser, setEditingUser] = useState(null);
  const [editDetails, setEditDetails] = useState({});
  const [ratings, setRatings] = useState({});
  const [activity, setActivity] = useState({});
  const [errors, setErrors] = useState({}); // To track validation errors

  const handleEditClick = (user) => {
    setEditingUser(user);
    setEditDetails({ ...user });
  };

  const handleSaveClick = () => {
    // Validate form data before saving
    const newErrors = {};

    if (!validateLicenseNumber(editDetails.licenseNumber)) {
      newErrors.licenseNumber = 'Please enter a valid license number (6-10 alphanumeric characters).';
    }

    if (!validateContactNumber(editDetails.contactNumber)) {
      newErrors.contactNumber = 'Please enter a valid contact number (10 digits).';
    }

    // Add validation for other fields if necessary
    // For example, if you want to validate password fields:
    // if (!validatePassword(editDetails.password)) {
    //   newErrors.password = 'Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one digit, and one special character.';
    // }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    updateUser(editDetails);
    setEditingUser(null);
    setErrors({}); // Clear errors after successful update
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditDetails({
      ...editDetails,
      [name]: value,
    });
  };

  const handleDropdownChange = (e) => {
    const { name, value } = e.target;
    setEditDetails({
      ...editDetails,
      [name]: value,
    });
  };

  const handleRatingChange = (username, newRating) => {
    setRatings({
      ...ratings,
      [username]: newRating,
    });
  };

  const trackActivity = (username) => {
    const activities = [
      { date: '2024-08-01', status: 'Completed 10 trips' },
      { date: '2024-08-05', status: 'Completed 12 trips' },
      { date: '2024-08-10', status: 'Completed 8 trips' }
    ];
    setActivity({
      ...activity,
      [username]: activities,
    });
  };

  const handleDeleteClick = (username) => {
    deleteUser(username);
  };

  return (
    <div className="driver-management-container">
      <h2>Driver Management</h2>
      <div className="driver-table">
        <table className="user-table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Vehicle Type</th>
              <th>License Number</th>
              <th>Contact</th>
              <th>Location</th>
              <th>Rating</th>
              <th>Activity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.username}>
                <td>{user.username}</td>
                <td>{user.vehicleType}</td>
                <td>{user.licenseNumber}</td>
                <td>{user.contactNumber}</td>
                <td>{user.location}</td>
                <td>
                  <div className="rating">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={`star ${ratings[user.username] >= star ? 'filled' : ''}`}
                        onClick={() => handleRatingChange(user.username, star)}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </td>
                <td>
                  <button className='trackActivityButton' onClick={() => trackActivity(user.username)}>Track Activity</button>
                  <div className="activity-list">
                    {activity[user.username] && activity[user.username].map((entry, idx) => (
                      <div key={idx} className="activity-entry">
                        <span>{entry.date}: </span>
                        <span>{entry.status}</span>
                      </div>
                    ))}
                  </div>
                </td>
                <td>
                  <button className="edit" onClick={() => handleEditClick(user)}>Edit</button>
                  <button className="delete" onClick={() => handleDeleteClick(user.username)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {editingUser && (
        <div className="edit-form">
          <h3>Edit Driver</h3>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={editDetails.username}
              onChange={handleChange}
            />
          </label>
          <label>
            Vehicle Type:
            <select
              name="vehicleType"
              value={editDetails.vehicleType}
              onChange={handleDropdownChange}
            >
              <option value="Car">Car</option>
              <option value="Bike">Bike</option>
              <option value="Truck">Truck</option>
            </select>
          </label>
          <label>
            License Number:
            <input
              type="text"
              name="licenseNumber"
              value={editDetails.licenseNumber}
              onChange={handleChange}
            />
            {errors.licenseNumber && <div className="error">{errors.licenseNumber}</div>}
          </label>
          <label>
            Contact Number:
            <input
              type="text"
              name="contactNumber"
              value={editDetails.contactNumber}
              onChange={handleChange}
            />
            {errors.contactNumber && <div className="error">{errors.contactNumber}</div>}
          </label>
          <label>
            Location:
            <input
              type="text"
              name="location"
              value={editDetails.location}
              onChange={handleChange}
            />
          </label>
          <button onClick={handleSaveClick}>Save</button>
        </div>
      )}
    </div>
  );
}

export default DriverManagement;
