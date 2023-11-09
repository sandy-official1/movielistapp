import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file

const Navbar = ({ isLoggedIn, handleLogout }) => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/companyinfo">Companyinfo</Link>
        </li>
        {!isLoggedIn && (
          <>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
        {isLoggedIn && (
          <>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
