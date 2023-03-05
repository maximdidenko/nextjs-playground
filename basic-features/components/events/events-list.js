import EventItem from './event-item';
import claases from './events-list.module.css';

function EventsList({ items }) {
  const renderedEvents = items.map((event) => {
    return <EventItem item={event} key={event.id} />;
  });

  return <ul className={claases.list}>{renderedEvents}</ul>;
}

export default EventsList;
