import { useState, useEffect } from 'react';
import classes from './contact-form.module.css';
import Notification from '../ui/notification';

async function setContactData(contactDetails) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(contactDetails),
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    throw new Error('Someting went wrong');
  }
}

function ContactForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [requestStatus, setRequestStatus] = useState('');

  useEffect(() => {
    let timeout;
    if (requestStatus) {
      timeout = setTimeout(() => {
        setRequestStatus(null);
      }, 3000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [requestStatus]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setRequestStatus('pending');

    try {
      await setContactData({ email, name, message });
      setRequestStatus('success');
    } catch (err) {
      setRequestStatus('error');
    }

    setEmail('');
    setName('');
    setMessage('');
  };

  let notification;

  if (requestStatus === 'pending') {
    notification = {
      title: 'Sending message ...',
      status: 'pending',
      messeage: 'We are sending tour message ...',
    };
  }

  if (requestStatus === 'success') {
    notification = {
      title: 'Success',
      status: 'success',
      messeage: 'Your message was sent',
    };
  }

  if (requestStatus === 'error') {
    notification = {
      title: 'Error',
      status: 'error',
      messeage: 'Something went wrong ...',
    };
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="email">Your Name</label>
            <input
              type="text"
              id="name"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            required
            rows="5"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && <Notification {...notification} />}
    </section>
  );
}

export default ContactForm;
