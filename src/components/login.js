import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setLoggedIn }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Retrieve data from local storage
    const storedUserData = JSON.parse(localStorage.getItem("userData"));

    // Check if the entered credentials match
    if (
      storedUserData &&
      name === storedUserData.name &&
      password === storedUserData.password
    ) {
      // Update the login status
      setLoggedIn(true);

      // Save login status in local storage
      localStorage.setItem("isLoggedIn", "true");

      // Redirect to the movie page
      navigate("/movies");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>User Login</h2>
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
      <button onClick={handleLogin} style={styles.button}>
        Login
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
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 15px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default Login;
