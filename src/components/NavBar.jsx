import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    const setActiveClass = ({ isActive }) => (isActive ? "active" : "nav-link");
    return (
    <nav className="navbar bg-light">
    <div className="container-fluid d-flex justify-content-between">
      <NavLink to="/" className="navbar-brand">
        <img src="\src\img\location_icon.png" alt="Icono" width="30" height="30" />
      </NavLink>
      <div className="d-flex">
        <div className="mr-2">
          <NavLink exact to="/" className={ setActiveClass } activeClassName="active">Home</NavLink>
        </div>
        <div>
          <NavLink to="/pokemon" className={ setActiveClass } activeClassName="active">Pokemon</NavLink>
        </div>
      </div>
    </div>
  </nav>
    );
}