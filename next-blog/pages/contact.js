import Head from 'next/head';
import { Fragment } from 'react';
import ContactForm from '../components/contact/contact-form';

function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Contact Us</title>
      </Head>
      <ContactForm />
    </Fragment>
  );
}

export default ContactPage;
