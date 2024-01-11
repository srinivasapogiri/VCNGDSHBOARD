// AllEvents.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Allevents.css'

const AllEvents = (props) => {
  
  return (
    <div className="events-container">
      <h1>All Events</h1>
      <table className="events-table">
        <thead>
          <tr>
            <th>From Date</th>
            <th>To Date</th>
            <th>Event</th>
            <th>Host Name</th>
            <th>Place</th>
            <th>Venue</th>
            <th>Location</th>
            {/* Add more table headers as needed */}
          </tr>
        </thead>
        <tbody>
          {props.events.map((event, index) => (
            <tr key={index} className="event-row">
              {/* Display event details as needed */}
              <td>{event.fromDate}</td>
              <td>{event.toDate}</td>
              <td>{event.name}</td>
              <td>{event.hostName}</td>
              <td>{event.place}</td>
              <td>{event.venue}</td>
              <td>{event.location}</td>
              {/* Add more table cells as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllEvents;
