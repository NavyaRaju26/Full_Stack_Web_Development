import React from "react";

export default function FlightBooking() {
  const bookTicket = () => {
    // Step 1: Get user name
    const name = prompt("Enter your name:");
    if (!name) {
      alert("Booking cancelled! Name is required.");
      return;
    }

    // Step 2: Get destination
    const destination = prompt("Enter your destination:");
    if (!destination) {
      alert("Booking cancelled! Destination is required.");
      return;
    }

    // Step 3: Get number of tickets
    const tickets = prompt("Enter number of tickets:");
    if (!tickets || isNaN(tickets)) {
      alert("Invalid ticket count!");
      return;
    }

    // Step 4: Confirm booking
    const confirmBooking = confirm(
      `Please confirm your booking:\n\nName: ${name}\nDestination: ${destination}\nTickets: ${tickets}`
    );

    if (confirmBooking) {
      alert(`🎉 Booking Successful!\n\nHappy Journey, ${name}!`);
    } else {
      alert("Booking Cancelled.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Flight Ticket Booking System</h2>
      <button
        onClick={bookTicket}
        style={{
          padding: "12px 20px",
          fontSize: "16px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Book Ticket
      </button>
    </div>
  );
}


