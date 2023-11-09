import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [profession, setProfession] = useState("");

  // Access the navigate function to navigate
  const navigate = useNavigate();

  const handleSignup = () => {
    // Validation logic goes here

    // Save data to local storage
    const userData = { name, password, email, phoneNumber, profession };
    localStorage.setItem("userData", JSON.stringify(userData));

    // Redirect to login page
    navigate("/login");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>User Signup</h2>
      <label style={styles.label}>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={styles.input}
      />
      <label style={styles.label}>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />
      <label style={styles.label}>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={styles.input}
      />
      <label style={styles.label}>Phone Number:</label>
      <input
        type="tel"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        style={styles.input}
      />
      <label style={styles.label}>Profession:</label>
      <input
        type="text"
        value={profession}
        onChange={(e) => setProfession(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleSignup} style={styles.button}>
        Signup
      </button>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#fff",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    marginBottom: "20px",
  },
  label: {
    display: "block",
    marginBottom: "8px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "8px",
    marginBottom: "16px",
    boxSizing: "border-box",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  button: {
    backgroundColor: "#28a745",
    color: "#fff",
    padding: "10px 15px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default Signup;
