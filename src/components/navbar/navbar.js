import React from "react"
import {NavLink} from "react-router-dom";
import "./navbar.css";

export const Navbar = () => (
    <nav className="navbar navbar-expand-md bg-primary navbar-dark fixed-top">
        <a className="navbar-brand" href="/"> Github Search</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"/>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink exact to="/" className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink  to="/about" className="nav-link">About</NavLink>
                </li>
            </ul>
        </div>
    </nav>
)
