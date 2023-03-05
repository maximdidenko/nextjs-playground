import Head from 'next/head';

import { getFeaturedEvents } from '../helpers/api';
import EventsList from '../components/events/events-list';
import NewsletterRegistration from '../components/input/newsletter-registration';

function HomePage({ featuredEvents }) {
  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta
          name="description"
          content="Some content on upcoming NextJS events"
        />
      </Head>
      <NewsletterRegistration />
      <EventsList items={featuredEvents} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: { featuredEvents },
    revalidate: 1800,
  };
}

export default HomePage;
