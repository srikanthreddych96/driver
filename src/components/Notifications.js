import React, { useState } from 'react';
import './Notifications.css';

// Sample notification data
const notifications = [
  { id: 1, text: 'New driver registration: srikanth 🚗', icon: '🚗', category: 'Registration' },
  { id: 2, text: 'Payment received for invoice #123 💸', icon: '💸', category: 'Payment' },
  { id: 3, text: 'Commission update: $50 added to your account 💰', icon: '💰', category: 'Commission' },
  { id: 4, text: 'Reminder: Invoice #124 is due soon ⏰', icon: '⏰', category: 'Reminder' },
  { id: 5, text: 'Error processing payment for invoice #125 ❌', icon: '❌', category: 'Error' }
];

const Notifications = () => {
  const [notificationsData, setNotificationsData] = useState(notifications);
  const [showPopup, setShowPopup] = useState(false);

  const handleMarkAllAsRead = () => {
    setNotificationsData(notificationsData.map(notification => ({
      ...notification,
      read: true
    })));
  };

  const unreadCount = notificationsData.filter(notification => !notification.read).length;

  const categories = Array.from(new Set(notificationsData.map(n => n.category)));

  return (
    <div className="notifications-container">
      <div className="notifications-header">
        <h2>Notifications</h2>
        <div className="notifications-header-right">
          <button className="mark-all-button" onClick={handleMarkAllAsRead}>Mark All As Read</button>
          <button className="notifications-popup-button" onClick={() => setShowPopup(!showPopup)}>
            Notifications ({unreadCount})
          </button>
          {showPopup && (
            <div className="notifications-popup">
              <ul>
                {notificationsData.map(notification => (
                  <li key={notification.id} className={notification.read ? 'notification-item read' : 'notification-item'}>
                    <span className="notification-icon">{notification.icon}</span>
                    <span>{notification.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="notifications-body">
        {categories.map(category => (
          <div key={category} className="notification-section">
            <h3>{category}</h3>
            <ul>
              {notificationsData.filter(notification => notification.category === category).map(notification => (
                <li key={notification.id} className={notification.read ? 'notification-item read' : 'notification-item'}>
                  <span className="notification-icon">{notification.icon}</span>
                  <span>{notification.text}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;





