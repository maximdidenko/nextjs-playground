import { createContext, useState, useEffect } from 'react';

const NotificationContext = createContext({
  notification: null,
  showNotification: (notification) => {},
  hideNotification: () => {},
});

export function NotificationContextProvider({ children }) {
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setNotification(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [notification]);

  const showNotification = (notification) => {
    setNotification(notification);
  };

  const hideNotification = () => {
    setNotification(null);
  };

  return (
    <NotificationContext.Provider
      value={{
        showNotification,
        hideNotification,
        notification,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export default NotificationContext;
