import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li>
            <NavLink to="/">Introducing</NavLink>
          </li>
          <li>
            <NavLink to="portfolio">Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="contact">Contacts</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
