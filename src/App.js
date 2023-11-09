import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Signup from "./components/signup";
import Login from "./components/login";
import Movies from "./components/movielist";
import CompanyInfo from "./components/companyinfo";

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  // Check login status on mount
  useEffect(() => {
    const storedLoggedIn = localStorage.getItem("isLoggedIn");
    if (storedLoggedIn === "true") {
      setLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    // Clear user data from local storage
    localStorage.removeItem("userData");
    localStorage.removeItem("isLoggedIn");

    // Update the login status
    setLoggedIn(false);
  };

  return (
    <Router>
      <div>
        <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />

        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
          <Route path="/movies" element={<Movies isLoggedIn={isLoggedIn} />} />
          <Route
            path="/companyinfo"
            element={<CompanyInfo isLoggedIn={isLoggedIn} />}
          />
          {/* Set the default route to Signup */}
          <Route
            path="/"
            element={
              isLoggedIn ? <Navigate to="/movies" /> : <Navigate to="/signup" />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
