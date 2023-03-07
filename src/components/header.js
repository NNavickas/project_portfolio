import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          {/* <NavLink className="navbar-item" to="/">My Portfolio</NavLink> */}
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            {/* <NavLink className="navbar-item" to="/">Home</NavLink>
            <NavLink className="navbar-item" to="/projects">Projects</NavLink>
            <NavLink className="navbar-item" to="/contact">Contact</NavLink> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
