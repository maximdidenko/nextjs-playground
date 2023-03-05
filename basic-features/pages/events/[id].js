import { Fragment } from 'react';
import Head from 'next/head';

import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import Comments from '../../components/input/comments';

import { getFeaturedEvents, getEventById } from '../../helpers/api';

function EventPage({ event }) {
  if (!event) {
    return <p>No event found</p>;
  }

  return (
    <Fragment>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
      <Comments eventId={event.id} />
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const { params } = context;

  const event = await getEventById(params.id);

  return {
    props: { event },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents();

  const paths = events.map((event) => {
    return { params: { id: event.id } };
  });

  return {
    paths,
    fallback: true,
  };
}

export default EventPage;
