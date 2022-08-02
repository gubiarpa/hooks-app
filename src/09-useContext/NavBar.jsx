import React from "react";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand mr-3" to="/">useContext App</Link>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <NavLink
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            to="/">
                            Home
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            to="/about">
                            About
                        </NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
