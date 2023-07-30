import React from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";

export default function ContentForm({ showModal, setShowModal }) {
  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = () => {};
  const handleClosing = () => {
    setShowModal(false);
  };
  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={modalVariants}
          className="content__form"
        >
          <h2>Send me message</h2>
          <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
            <label>
              Your name:
              <input type="text" />
            </label>
            <label>
              Your E-Mail:
              <input type="email" />
            </label>
            <label>
              Your message:
              <input type="text" className="message" />
            </label>
            <div className="content__form-btn-group">
              <button onClick={handleClosing}>Close</button>
              <button type="submit">Send</button>
            </div>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
