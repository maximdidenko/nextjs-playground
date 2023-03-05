import { useState, useContext } from 'react';
import NotificationContext from '../../store/notification-context';
import classes from './newsletter-registration.module.css';

function NewsletterRegistration() {
  const [email, setEmail] = useState('');
  const { showNotification } = useContext(NotificationContext);

  function registrationHandler(event) {
    event.preventDefault();

    showNotification({
      title: 'Signing up ...',
      message: 'Registering for newsletter',
      status: 'pending',
    });

    fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => {
        showNotification({
          title: 'Success!',
          message: 'Successfully registered for newsletter',
          status: 'success',
        });
      })
      .catch(() => {
        showNotification({
          title: 'Error!',
          message: 'Something went wrong',
          status: 'error',
        });
      });

    setEmail('');
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
