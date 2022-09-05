import React from "react";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {

    const classNameWhenActive = (isActive) => `nav-link ${isActive ? "active text-success" : ""}`;

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
            <div className="container-fluid">
                <Link className="navbar-brand mr-3" to="/">useContext App</Link>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <NavLink
                            className={({ isActive }) => classNameWhenActive(isActive)}
                            to="/">
                            Home
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => classNameWhenActive(isActive)}
                            to="/about">
                            About
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => classNameWhenActive(isActive)}
                            to="/login">
                            Login
                        </NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
