// src/components/EventList.js
import React from 'react';
import { Link } from 'react-router-dom';

function EventList({ events }) {
  return (
    <div>
      <h2>Event List</h2>
      <ul className="list-group">
        {events.map((event) => (
          <Link to={`/events/${event.id}`} key={event.id}>
            <li className="list-group-item">{event.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default EventList;