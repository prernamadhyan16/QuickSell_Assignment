import React, { useState } from "react";
import { TiThList } from "react-icons/ti";
import "./NavBar.css";

const NavBar = ({ grouping, setGrouping, sortOption, setSortOption }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="navbar">
      <button
        className="display-button"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <TiThList /> Display
      </button>
      {showDropdown && (
        <div className="dropdown-menu">
          <div className="dropdown-item selectGroup">
            <label>Grouping</label>
            <select
              value={grouping}
              onChange={(e) => setGrouping(e.target.value)}
              className="selectStyle"
            >
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="dropdown-item selectGroup">
            <label>Sorting</label>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="selectStyle"
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
