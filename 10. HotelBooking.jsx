import React from "react";

export default function HotelBooking(){
  const reserveRoom = () => {
    // Get customer name
    const name = prompt("Enter your name:");
    if (!name) {
      alert("Reservation cancelled! Name is required.");
      return;
    }

    // Get room type
    const roomType = prompt("Enter room type (Single / Double / Deluxe):");
    if (!roomType) {
      alert("Room type is required!");
      return;
    }

    // Get number of days
    const days = prompt("Enter number of days to stay:");
    if (!days || isNaN(days)) {
      alert("Invalid number of days!");
      return;
    }

    // Confirmation
    const confirmBooking = confirm(
      `Please confirm your reservation:\n\nName: ${name}\nRoom Type: ${roomType}\nDays: ${days}`
    );

    if (confirmBooking) {
      alert(
        `✅ Reservation Confirmed!\n\nThank you ${name}.\nEnjoy your stay in our ${roomType} room.`
      );
    } else {
      alert("Reservation Cancelled.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Hotel Reservation System</h2>
      <button
        onClick={reserveRoom}
        style={{
          padding: "12px 20px",
          fontSize: "16px",
          backgroundColor: "#28a745",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        Reserve Room
      </button>
    </div>
  );
}


