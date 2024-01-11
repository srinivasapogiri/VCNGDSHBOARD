// MainContent.js

import React,{useState,useEffect} from 'react';
import AllEvents from '../Allevents/Allevents';
import axios from'axios';
const MainContent = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            // Replace 'YOUR_FIREBASE_DATABASE_URL' with your actual Firebase Realtime Database URL
            const response = await axios.get('https://vcng-65a5d-default-rtdb.firebaseio.com/createevent.json');
    
            // The response.data will contain the events from the Firebase database
            if (response.data) {
              const eventData = Object.values(response.data);
              setEvents(eventData);
             
            } 
          } catch (error) {
            console.error('Error fetching data from Firebase:', error);
          }
        };
    
        fetchData();
    
      }, []); // Fetch data on component mount
  return (
    <div className="main-content">
        <div className="card-container">
      <div class="card">
                <h3>Total Events</h3>
                <p>{events.length}</p>
      </div>
      <div class="card">
                <p>card1</p>
      </div>
      <div class="card">
                <p>card1</p>
      </div>
      <div class="card">
                <p>card1</p>
      </div>
      </div>
      <div>

      
      {
        <AllEvents events={events} />
      }
    </div>
    </div>
  );
};

export default MainContent;
