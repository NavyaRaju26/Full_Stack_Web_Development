import { useState } from "react";

export default function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    rating: "",
    feedback: "",
  });

  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(form);
    setForm({ name: "", email: "", rating: "", feedback: "" });
  };

  return (
    <div style={styles.page}>
      {/* FORM CARD */}
      <div style={styles.card}>
        <h2 style={styles.title}>Feedback Form</h2>
        <h2>Feedback Form</h2>
        <form onSubmit={handleSubmit}>
          <input
            style={styles.input}
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            style={styles.input}
            name="email"
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <select
            style={styles.input}
            name="rating"
            value={form.rating}
            onChange={handleChange}
            required
          >
            <option value="">Rate Us</option>
            <option>Excellent</option>
            <option>Good</option>
            <option>Average</option>
            <option>Poor</option>
          </select>

          <textarea
            style={styles.textarea}
            name="feedback"
            placeholder="Write your feedback here..."
            value={form.feedback}
            onChange={handleChange}
            required
          />

          <button style={styles.button}>Submit Feedback</button>
        </form>
      </div>

      {/* OUTPUT CARD */}
      <div style={styles.card}>
        <h2 style={styles.title}>Submitted Feedback</h2>

        {submitted ? (
          <div style={styles.output}>
            <p><b>Name:</b> {submitted.name}</p>
            <p><b>Email:</b> {submitted.email}</p>
            <p><b>Rating:</b> {submitted.rating}</p>
            <p><b>Feedback:</b> {submitted.feedback}</p>
          </div>
        ) : (
          <p style={{ color: "#555" }}>No feedback submitted yet.</p>
        )}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "40px",
    background: "linear-gradient(135deg, #7dd3fc, #60a5fa)",
    padding: "30px",
    fontFamily: "Arial, sans-serif",
  },

  card: {
    width: "360px",
    background: "#ffffff",
    padding: "25px",
    borderRadius: "16px",
    boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
  },

  title: {
    textAlign: "center",
    marginBottom: "20px",
  },

  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "14px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "15px",
    color: "#000", // 🔥 text visible
  },

  textarea: {
    width: "100%",
    height: "100px",
    padding: "12px",
    marginBottom: "14px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "15px",
    resize: "none",
    color: "#000",
  },

  button: {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
  },

  output: {
    color: "#000",
    lineHeight: "1.8",
  },
};
