import { useState } from 'react';
import { useRouter } from 'next/router';

const Events = ({ eventList }) => {
  const [events, setEvents] = useState(eventList);
  const router = useRouter();

  const allCategories = [
    'all',
    ...new Set(eventList.map((event) => event.category))
  ];

  const fetchEvents = async (category) => {
    let response;
    if (category === 'all') {
      setEvents(eventList);
      router.push('/events');
    }

    if (category !== 'all') {
      response = await fetch(
        `http://localhost:4000/events?category=${category}`
      );
      const data = await response.json();
      setEvents(data);
      router.push(`/events?category=${category}`, undefined, { shallow: true });
    }
  };

  return (
    <>
      <h1>List of Events</h1>
      {allCategories.map((category, id) => (
        <button key={id} onClick={() => fetchEvents(category)}>
          {category}
        </button>
      ))}
      {events.map(({ id, title, date, category, description }) => (
        <div key={id}>
          <h2>
            {id} {title} | {date}, <i>{category}</i>
          </h2>
          <p>{description}</p>
          <hr />
        </div>
      ))}
    </>
  );
};

export async function getServerSideProps(context) {
  const { query } = context;
  const { category } = query;
  const queryString = category ? `category=${category}` : '';

  const response = await fetch(`http://localhost:4000/events?${queryString}`);
  const data = await response.json();

  return {
    props: {
      eventList: data
    }
  };
}

export default Events;
