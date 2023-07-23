import React from "react";
import { NavLink } from "react-router-dom";
import { GiSkills } from "react-icons/gi";
import { MdShoppingBag } from "react-icons/md";
import { HiAcademicCap, HiClipboard, HiChatAlt } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <ul className="footer__nav-list">
          <li>
            <NavLink to="about">
              <HiClipboard />
            </NavLink>
          </li>
          <li>
            <NavLink to="skills">
              <GiSkills />
            </NavLink>
          </li>
          <li>
            <NavLink to="portfolio">
              <MdShoppingBag />
            </NavLink>
          </li>
          <li>
            <NavLink to="education">
              <HiAcademicCap />
            </NavLink>
          </li>

          <li>
            <NavLink to="contact">
              <HiChatAlt />
            </NavLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
