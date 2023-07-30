import React, { useState } from "react";
import ContentForm from "./ContentForm";
import FormSendModal from "./FormSendModal";
import FormSendError from "./FormSendError";
import { HiMail } from "react-icons/hi";
import { FaTelegram, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContentContact() {
  const [showModal, setShowModal] = useState(false);
  const [showSuccsess, setShowSuccsess] = useState(false);
  const [showError, setShowError] = useState(false);
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

  const handleModal = () => {
    setShowModal(true);
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
        Or leave a message using the{" "}
        <button onClick={handleModal}>contact form</button>
      </p>
      <ContentForm
        showModal={showModal}
        setShowModal={setShowModal}
        setShowSuccsess={setShowSuccsess}
        setShowError={setShowError}
      />
      <FormSendModal
        showSuccsess={showSuccsess}
        setShowSuccsess={setShowSuccsess}
      />
      <FormSendError showError={showError} setShowError={setShowError} />
    </motion.div>
  );
}
