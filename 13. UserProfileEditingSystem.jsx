import React, { useState } from "react";

export default function ProfileEditingSystem () {
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};

    if (!user.name) tempErrors.name = "Name is required";
    if (!user.email) tempErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(user.email))
      tempErrors.email = "Invalid email format";

    if (!user.age) tempErrors.age = "Age is required";
    else if (user.age <= 0) tempErrors.age = "Invalid age";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert(
        `Profile Updated Successfully!\n\nName: ${user.name}\nEmail: ${user.email}\nAge: ${user.age}`
      );
    }
  };

  return (
    <div style={styles.container}>
      <h2>USER PROFILE</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={user.name}
          onChange={handleChange}
          style={styles.input}
        />
        <p style={styles.error}>{errors.name}</p>

        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={user.email}
          onChange={handleChange}
          style={styles.input}
        />
        <p style={styles.error}>{errors.email}</p>

        <input
          type="number"
          name="age"
          placeholder="Enter age"
          value={user.age}
          onChange={handleChange}
          style={styles.input}
        />
        <p style={styles.error}>{errors.age}</p>

        <button type="submit" style={styles.button}>
          Save Profile
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(to right, #a1c4fd, #c2e9fb)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    background: "#fff",
    padding: "30px",
    borderRadius: "10px",
    width: "320px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginTop: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    marginTop: "15px",
    padding: "10px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    fontSize: "13px",
    margin: "2px 0",
  },
};


