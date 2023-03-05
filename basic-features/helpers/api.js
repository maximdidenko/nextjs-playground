export async function getEvents() {
  const response = await fetch(
    'https://nextjs-playground-a1ad7-default-rtdb.firebaseio.com/events.json'
  );
  const data = await response.json();

  const transformedData = [];

  for (let key in data) {
    transformedData.push({ id: key, ...data[key] });
  }

  return transformedData;
}

export async function getFeaturedEvents() {
  const events = await getEvents();

  return events.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
  const events = await getEvents();

  return events.find((event) => event.id === id);
}

export async function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  const events = await getEvents();

  let filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}
