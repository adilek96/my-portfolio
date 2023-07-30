import React, { useState } from "react";
import { HiMail } from "react-icons/hi";
import { FaTelegram, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContentContact() {
  const icons = [<HiMail />, <FaTelegram />, <FaGithub />, <FaLinkedin />];
  const itemLinksName = [
    "https://ashurovadil96@gmail.com",
    "https://t.me/adilek96",
    "https://github.com/adilek96",
    "https://www.linkedin.com/in/adil-ashurov",
  ];

  const divVariants = {
    hidden: {
      y: -1000,
      opacity: 0.5,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div
      initial={"hidden"}
      animate={"visible"}
      transition={{ duration: 2 }}
      variants={divVariants}
      className="content__contact"
    >
      <h2>Contacts me</h2>
      <p>
        <b>You can use one of the methods listed to contact me:</b>
      </p>
      <ul className="content__contact-list">
        {icons.map((item, i) => {
          return (
            <li key={i}>
              <a href={itemLinksName[i]}>{item}</a>
            </li>
          );
        })}
      </ul>
      <p>
        Or leave a message using the <button>contact form</button>
      </p>
    </motion.div>
  );
}
