import { Fragment } from 'react';
import { useRouter } from 'next/router';

import EventsList from '../../components/events/events-list';
import ResultsTitle from '../../components/results-title/results-title';

import { getFilteredEvents } from '../../helpers/api';

function FilteredEventsPage({ events }) {
  const router = useRouter();
  const [year, month] = router.query.args || [];

  if (!year && !month) {
    return <p className="center">Loading ...</p>;
  }

  if (events.length === 0) {
    return <p className="center">No events found.</p>;
  }

  return (
    <Fragment>
      <ResultsTitle date={new Date(year, month - 1)} />
      <EventsList items={events} />
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  const {
    params: {
      args: [year, month],
    },
  } = context;

  const events = await getFilteredEvents({
    year: Number(year),
    month: Number(month),
  });

  return {
    props: { events },
  };
}

export default FilteredEventsPage;
