import React from "react";
import { NavLink } from "react-router-dom";
import { GiSkills } from "react-icons/gi";
import { HiAcademicCap, HiClipboard, HiChatAlt } from "react-icons/hi";

export default function Aside() {
  return (
    <aside className="aside">
      <nav className="aside__nav">
        <ul className="aside__nav-list">
          <li>
            <NavLink to="/">
              <HiClipboard />
            </NavLink>
          </li>
          <li>
            <NavLink to="skills">
              <GiSkills />
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
    </aside>
  );
}
