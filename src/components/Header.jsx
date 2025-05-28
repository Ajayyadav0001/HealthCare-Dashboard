import React from "react";
import "../styles/header.css";





function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="logo">HealthCare.</h1>
        <div className="search-bar">
          <input type="text" placeholder="Search..." disabled />
        </div>
      </div>

      <div className="header-right">
        <button className="add-btn"> + </button>
        <span className="notification-icon">🔔</span>
        <div className="profile">
          <img
            src="src/assets/myPic.jpg"
            alt="User Avatar"
            className="avatar"
          />
          <span className="username">Ajay yadav</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
