import React from "react";

export default function EventRegistration() {

  function handleSubmit(e) {
    e.preventDefault();
    alert("Event Registration Successful!");
  }

  return (
    <div>

      {/* Internal CSS */}
      <style>{`
        body {
          background-color: #ffffffff;
        }

        .form-container {
          width: 360px;
          background-color: #488bc6ff;
          padding: 20px;
          margin: 40px auto;
          border-radius: 10px;
          font-family: Arial;
        }

        .form-container h2 {
          text-align: center;
          margin-bottom: 15px;
          color: white;
        }

        .form-container label {
          font-weight: bold;
        }

        .form-container input,
        .form-container select,
        .form-container textarea {
          width: 90%;
          padding: 8px;
          margin-top: 5px;
          margin-bottom: 12px;
          border-radius: 5px;
          border: 1px solid gray;
        }

        .radio-group label,
        .check-group label{
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 8px;
          cursor: pointer;
      }
          

        .radio-group input,
        .check-group input{
          width: auto;
          height: auto;
          margin: 0;
          position: relative;
          left:0;
          transform: scale(1.1);
        }

        .submit-btn {
          background-color: #0ba127ff;
          color: white;
          border: none;
          padding: 10px;
          width: 60%;
          display: block;
          margin: auto;
          border-radius: 6px;
          cursor: pointer;
        }

        }
      `}</style>

      <form className="form-container" onSubmit={handleSubmit}>

        <h2>Event Registration Form</h2>

        {/* TEXT */}
        <input type="text" placeholder="Participant Name" required />

        <input type="email" placeholder="Email Address" required />

        <input type="password" placeholder="Password" />

        <input type="text" placeholder="Phone Number" />
        <br></br>
        <br></br>

        {/* RADIO BUTTON */}
        <label>Gender:</label>
        <div className="radio-group">
          <input type="radio" name="gender" /> Male
          <input type="radio" name="gender" style={{ marginLeft: "10px" }} /> Female
          <input type="radio" name="gender" style={{ marginLeft: "10px" }} /> Other
        </div>
        <br></br>
        

        {/* CHECKBOX */}
        <label>Events Interested In:</label>
        <br></br>
        
        <div className="check-group">
          <input type="checkbox" /> Workshop<br></br>
          <input type="checkbox" /> Hackathon<br></br>
          <input type="checkbox" /> Seminar<br></br>
          <input type="checkbox" /> Tech Talk <br />
          <input type="checkbox" /> Cultural<br></br>
          <input type="checkbox" /> Sports<br></br>
        </div>
        <br></br>

        {/* DROPDOWN */}
        <label>Select Event Type:</label>
        <select>
          <option>--Select Event--</option>
          <option>Technical Event</option>
          <option>Cultural Event</option>
          <option>Sports Event</option>
        </select>
        <br></br>
        <br></br>

        {/* FILE UPLOAD */}
        <label>Upload ID Card:</label>
        <input type="file" />
        <br></br>

        {/* TEXTAREA */}
        <textarea rows="4" placeholder="Why do you want to attend this event?"></textarea>
        <br></br>

        {/* SUBMIT BUTTON */}
        <input type="submit" value="Register Now" className="submit-btn" />

      </form>
    </div>
  );
}
