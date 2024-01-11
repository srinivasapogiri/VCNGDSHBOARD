// LeftNavbar.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './maincontent.css'

const LeftNavbar = () => {
    const [events, setEvents] = useState([]);
    const [showCreateEventModal, setShowCreateEventModal] = useState(false);
    const [newEvent, setNewEvent] = useState({
        fromDate: '',
        toDate: '',
        name: '',
        hostName: '',
        place: '',
        venue: '',
        location: '',
    });
    const {formDate,toDate,name,hostName,place,venue,location} = newEvent;
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewEvent((prevEvent) => ({ ...prevEvent, [name]: value }));
    };

    const openCreateEventModal = () => {
        setShowCreateEventModal(true);
    };
    const closeCreateEventModal = () => {
        setShowCreateEventModal(false);

    }

    const handleSubmit = async (e) => {
        e.preventDefault();

            axios.post('https://vcng-65a5d-default-rtdb.firebaseio.com/createevent.json',newEvent).then(()=>{
                alert("Submitted")
            })

        // Reset the form and close the modal
        setNewEvent({
            fromDate: '',
            toDate: '',
            name: '',
            hostName: '',
            place: '',
            venue: '',
            location: '',
        });
        console.log(newEvent)
        setShowCreateEventModal(false);


    };



    useEffect(() => {

    }, []); // Fetch data on component mount
    return (
        <div>


            <div className="left-navbar">
                <h4>Main Dashboard</h4>
                <a href="#view-events">View Events</a>
                <a href="#schedule-event">Schedule Event</a>
                <a href="#create-event" onClick={openCreateEventModal}>Create Event</a>
                <a href="#inventory">Inventory</a>
                <a href="#about">About</a>
            </div>


            {showCreateEventModal && (
                <div className="modal-background">

                    <div id="create-events">
                        <span className="close-btn" onClick={closeCreateEventModal}>
                            &#10005;
                        </span>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="fromDate">From Date:</label>
                            <input
                                type="date"
                                id="fromDate"
                                name="fromDate"
                                value={newEvent.fromDate}
                                onChange={handleInputChange}
                                required
                            />
                            <br />

                            <label htmlFor="toDate">To Date:</label>
                            <input
                                type="date"
                                id="toDate"
                                name="toDate"
                                value={newEvent.toDate}
                                onChange={handleInputChange}
                                required
                            />
                            <br />

                            <label htmlFor="eventName">Event:</label>
                            <input
                                type="text"
                                id="eventName"
                                name="name"
                                value={newEvent.name}
                                onChange={handleInputChange}
                                required
                            />
                            <br />

                            <label htmlFor="hostName">Host Name:</label>
                            <input
                                type="text"
                                id="hostName"
                                name="hostName"
                                value={newEvent.hostName}
                                onChange={handleInputChange}
                                required
                            />
                            <br />

                            <label htmlFor="place">Place:</label>
                            <input
                                type="text"
                                id="place"
                                name="place"
                                value={newEvent.place}
                                onChange={handleInputChange}
                                required
                            />
                            <br />

                            <label htmlFor="venue">Venue:</label>
                            <input
                                type="text"
                                id="venue"
                                name="venue"
                                value={newEvent.venue}
                                onChange={handleInputChange}
                                required
                            />
                            <br />

                            <label htmlFor="location">Location:</label>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                value={newEvent.location}
                                onChange={handleInputChange}
                                required
                            />
                            <br />

                            <button type="submit">Create Event</button>
                        </form>
                    </div>


                    <div>
                        {events.map((event, index) => (
                            <div key={index} className="card">
                                <h2>{event.name}</h2>
                                <p>Date: {event.date}</p>
                            </div>
                        ))}
                    </div>

                </div>
            )}

        </div>


    );
};

export default LeftNavbar;
