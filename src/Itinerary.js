// src/Itinerary.js

import React from 'react';

const itineraryDetails = [
    { date: "26th June", activity: "Check into Airbnb", departure: "", tourDeparture: "", notes: "" },
    { date: "27th June", activity: "Anchorage City Roamaround", departure: "", tourDeparture: "", notes: "" },
    { date: "28th June", activity: "Matanushka Glacier Tour", departure: "Bus at 7:30 am from Hotel Captain Cook", tourDeparture: "", notes: "BOOKED" },
    { date: "29th June", activity: "Kenai Fjords Cruise", departure: "Bus at 7 am from Dena’ina Civic Center", tourDeparture: "Cruise departs at 11:30 am", notes: "Reach at 9:45 am, BOOKED" },
    { date: "30th June", activity: "Mckinley Train to Talkeetna, Flightseeing Tour, Bus to Denali", departure: "Train at 9:15 am from Train Depot", tourDeparture: "", notes: "Flightseeing at 1:30 pm - 3:30 pm, Bus at 5:45 pm, BOOKED" },
    { date: "1st July", activity: "Wildlife tour in Denali", departure: "", tourDeparture: "", notes: "Evening shift: 12:30 pm - 5:30 pm, Need to confirm from hotel after reaching" },
    { date: "2nd July", activity: "Train back to Anchorage", departure: "Denali Depot at 12:30 pm", tourDeparture: "", notes: "Glass dome train 12:30 pm, Normal train 5:30 pm, BOOKED" },
    { date: "3rd July", activity: "Prince William’s Sound Cruise", departure: "Hotel Captain Cook at 9:15 am", tourDeparture: "", notes: "All inclusive in tour, BOOKED" },
];

const Itinerary = () => {
    return (
        <div className="container">
            <header>
                <h1>Alaska Itinerary</h1>
            </header>
            <nav>
                <ul>
                    {itineraryDetails.map((day, index) => (
                        <li key={index}>
                            <a href={`#day${index + 1}`}>Day {index + 1}</a>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="main-content">
                <h2>Overview</h2>
                {itineraryDetails.map((day, index) => (
                    <div key={index} id={`day${index + 1}`} className="day-item">
                        <h3>{day.date}</h3>
                        <p><strong>Activity:</strong> {day.activity}</p>
                        {day.departure && <p><strong>Departure:</strong> {day.departure}</p>}
                        {day.tourDeparture && <p><strong>Tour/Cruise Departure:</strong> {day.tourDeparture}</p>}
                        {day.notes && <p><strong>Notes:</strong> {day.notes}</p>}
                    </div>
                ))}
            </div>
            <footer>
                <p>&copy; 2024 Alaska Itinerary</p>
            </footer>
        </div>
    );
};

export default Itinerary;