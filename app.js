// src/App.js
import React, { useState } from "react";
import "./App.css";

const TrainTicketBooking = () => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [trainList, setTrainList] = useState([]);
  const [selectedTrain, setSelectedTrain] = useState(null);
  const [confirmation, setConfirmation] = useState(false);

  // Simulated train search
  const searchTrains = () => {
    const trains = [
      { id: 1, name: "Express 101", time: "10:00 AM", seats: 50 },
      { id: 2, name: "Intercity 202", time: "1:00 PM", seats: 30 },
      { id: 3, name: "Fasttrack 303", time: "6:00 PM", seats: 25 }
    ];
    setTrainList(trains);
  };

  // Simulated booking
  const bookTrain = (train) => {
    if (train.seats >= passengers) {
      setSelectedTrain(train);
      setConfirmation(true);
    } else {
      alert("Not enough seats available");
    }
  };

  return (
    <div className="container">
      <h1>Train Ticket Booking</h1>

      {/* Booking Form */}
      {!confirmation && (
        <>
          <div className="booking-form">
            <label>Source Station:</label>
            <input
              type="text"
              value={source}
              onChange={(e) => setSource(e.target.value)}
              placeholder="Enter source station"
            />
            <label>Destination Station:</label>
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Enter destination station"
            />
            <label>Travel Date:</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <label>Number of Passengers:</label>
            <input
              type="number"
              value={passengers}
              onChange={(e) => setPassengers(e.target.value)}
              min="1"
            />
            <button onClick={searchTrains}>Search Trains</button>
          </div>

          {/* Train List */}
          {trainList.length > 0 && (
            <div className="train-list">
              <h3>Available Trains</h3>
              {trainList.map((train) => (
                <div key={train.id} className="train-item">
                  <p>
                    <strong>{train.name}</strong> - Departure Time: {train.time}{" "}
                    - Seats Available: {train.seats}
                  </p>
                  <button onClick={() => bookTrain(train)}>Book Now</button>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {/* Confirmation */}
      {confirmation && (
        <div className="confirmation">
          <h2>Booking Confirmation</h2>
          <p>
            <strong>Train:</strong> {selectedTrain.name}
          </p>
          <p>
            <strong>Departure Time:</strong> {selectedTrain.time}
          </p>
          <p>
            <strong>Passengers:</strong> {passengers}
          </p>
          <p>
            <strong>From:</strong> {source}
          </p>
          <p>
            <strong>To:</strong> {destination}
          </p>
          <button onClick={() => window.location.reload()}>Book Another</button>
        </div>
      )}
    </div>
  );
};

export default TrainTicketBooking;
