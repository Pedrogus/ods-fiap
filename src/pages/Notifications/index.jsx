import Navbar from '../../components/Navbar';
import './styles.css';

const notifications = [
  {
    id: 1,
    text: 'Phasellus ultricies ultricies risus id consequat. Proin sit amet scelerisque elit. Vivamus efficitur risus ornare ipsum vehicula luctus.',
  },
  {
    id: 2,
    text: 'Phasellus ultricies ultricies risus id consequat. Proin sit amet scelerisque elit. Vivamus efficitur risus ornare ipsum vehicula luctus.',
  },
  {
    id: 3,
    text: 'Phasellus ultricies ultricies risus id consequat. Proin sit amet scelerisque elit. Vivamus efficitur risus ornare ipsum vehicula luctus.',
  },
];

const Notifications = () => {
  return (
    <>
    <Navbar />
    <div className="notifications-container">
      <h2>Notifications</h2>
      <div className="notifications-list">
        {notifications.map((notification) => (
          <div key={notification.id} className="notification-item">
            <div className="notification-icon"></div>
            <div className="notification-text">{notification.text}</div>
          </div>
        ))}
      </div>
    </div>
    </>
    
  );
};

export default Notifications;
