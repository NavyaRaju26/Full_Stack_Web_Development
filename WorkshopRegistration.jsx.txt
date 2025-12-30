import React, { useState } from "react";

function WorkshopRegistration() {
  const [name, setName] = useState("");
  const [topic, setTopic] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h2>Online Workshop Registration</h2>

      <form>
        <div>
          <label>Name:</label><br />
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Email:</label><br />
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Workshop Topic:</label><br />
          <input
            type="text"
            onChange={(e) => setTopic(e.target.value)}
          />
        </div>
      </form>

      <hr />

      <h3>Live Preview</h3>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Workshop Topic:</strong> {topic}</p>
    </div>
  );
}

export default WorkshopRegistration;
