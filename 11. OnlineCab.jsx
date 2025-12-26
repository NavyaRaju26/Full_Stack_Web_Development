import React from "react";

export default function OnlineCab() {
  const bookCab = () => {
    const name = prompt("Enter your name:");
    if (!name) {
      alert("Name is required!");
      return;
    }

    const pickup = prompt("Enter pickup location:");
    if (!pickup) {
      alert("Pickup location is required!");
      return;
    }

    const drop = prompt("Enter drop location:");
    if (!drop) {
      alert("Drop location is required!");
      return;
    }

    const cabType = prompt("Choose cab type: Mini / Sedan / SUV");
    if (!cabType) {
      alert("Cab type is required!");
      return;
    }

    const confirmBooking = confirm(
      `Confirm your ride:\n\nName: ${name}\nFrom: ${pickup}\nTo: ${drop}\nCab Type: ${cabType}`
    );

    if (confirmBooking) {
      alert(
        `🚕 Booking Confirmed!\n\nDriver will reach ${pickup} shortly.\nHave a safe ride, ${name}!`
      );
    } else {
      alert("Cab booking cancelled.");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Online Cab Booking</h1>
      <button style={styles.button} onClick={bookCab}>
        Book a Cab
      </button>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    background: "linear-gradient(135deg, #1d2671, #c33764)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
  },
  heading: {
    marginBottom: "25px",
    fontSize: "32px",
    letterSpacing: "1px",
  },
  button: {
    padding: "14px 28px",
    fontSize: "18px",
    backgroundColor: "#ffcc00",
    color: "#000",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

