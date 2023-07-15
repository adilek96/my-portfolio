import React from "react";
import { HiMail } from "react-icons/hi";
import { FaTelegram, FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContentContact() {
  return (
    <div className="content__contact">
      <h2>Contacts me</h2>
      <p>
        <b>You can use one of the methods listed to contact me:</b>
      </p>
      <ul className="content__contact-list">
        <li>
          <a href="#">
            <HiMail />
          </a>
        </li>
        <li>
          <a href="#">
            <FaTelegram />
          </a>
        </li>
        <li>
          <a href="#">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="#">
            <FaLinkedin />
          </a>
        </li>
      </ul>
      <p>Or leave a message using the contact form:</p>
    </div>
  );
}
