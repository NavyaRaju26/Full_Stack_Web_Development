import React, { useState } from "react";

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = (e) => {
    e.preventDefault();
    if (!task.trim()) return;

    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  };

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const completed = tasks.filter((t) => t.completed).length;
  const pending = tasks.length - completed;

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>📊 Task Dashboard</h1>

      {/* Summary Cards */}
      <div style={styles.cards}>
        <div style={styles.card}>
          <h3>Total Tasks</h3>
          <p>{tasks.length}</p>
        </div>
        <div style={styles.card}>
          <h3>Completed</h3>
          <p>{completed}</p>
        </div>
        <div style={styles.card}>
          <h3>Pending</h3>
          <p>{pending}</p>
        </div>
      </div>

      {/* Task Section */}
      <div style={styles.section}>
        <form onSubmit={addTask} style={styles.form}>
          <input
            type="text"
            placeholder="Add new task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.addButton}>
            Add
          </button>
        </form>

        <ul style={styles.list}>
          {tasks.map((t, index) => (
            <li key={index} style={styles.listItem}>
              <span
                onClick={() => toggleTask(index)}
                style={{
                  textDecoration: t.completed ? "line-through" : "none",
                  cursor: "pointer",
                }}
              >
                {t.text}
              </span>
              <button
                onClick={() => removeTask(index)}
                style={styles.removeButton}
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "Arial, sans-serif",
    padding: "30px",
    backgroundColor: "#f4f6f8",
    minHeight: "100vh",
  },
  title: {
    textAlign: "center",
    marginBottom: "30px",
  },
  cards: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "30px",
  },
  card: {
    background: "#fff",
    padding: "20px",
    width: "150px",
    textAlign: "center",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },
  section: {
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    maxWidth: "500px",
    margin: "0 auto",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },
  form: {
    display: "flex",
    gap: "10px",
    marginBottom: "15px",
  },
  input: {
    flex: 1,
    padding: "8px",
    fontSize: "16px",
  },
  addButton: {
    padding: "8px 14px",
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    padding: "8px",
    borderBottom: "1px solid #eee",
  },
  removeButton: {
    border: "none",
    background: "none",
    cursor: "pointer",
  },
};
