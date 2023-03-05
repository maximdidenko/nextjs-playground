import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { getEvents } from '../../helpers/api';
import EventsList from '../../components/events/events-list';
import EventsSearch from '../../components/events/events-search';

function EventsPage({ events }) {
  const router = useRouter();

  const handleSearch = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };

  return (
    <Fragment>
      <EventsSearch onSearch={handleSearch} />
      <EventsList items={events} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const events = await getEvents();

  return {
    props: { events },
    revalidate: 60,
  };
}

export default EventsPage;
