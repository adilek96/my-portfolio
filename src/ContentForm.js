import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";

export default function ContentForm({
  showModal,
  setShowModal,
  setShowSuccsess,
  setShowError,
}) {
  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    fetch("https://formspree.io/f/xzbldezk", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          reset();
          setShowSuccsess(true);
          setShowModal(false);
          // Здесь вы можете добавить обработку успешной отправки, например, очистить форму
        } else {
          setShowError(true);
          setShowModal(false);
          // Здесь вы можете добавить обработку ошибки отправки
        }
      })
      .catch((error) => {
        setShowError(true);
        setShowModal(false);
        // Здесь вы можете добавить обработку ошибки отправки
      });
  };

  const handleClosing = () => {
    setShowModal(false);
    reset();
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
              <input
                type="text"
                {...register("name", {
                  required: true,
                })}
              />
              <div style={{ height: 20 }}>
                {errors?.name && (
                  <p style={{ fontSize: 12, color: `rgb(255, 0, 0)` }}>
                    This field must be filled in
                  </p>
                )}
              </div>
            </label>

            <label>
              Your E-Mail:
              <input type="email" />
            </label>
            <label>
              Your message:
              <input
                type="text"
                className="message"
                {...register("message", {
                  required: true,
                })}
              />
              <div style={{ height: 20 }}>
                {errors?.message && (
                  <p style={{ fontSize: 12, color: `rgb(255, 0, 0)` }}>
                    This field must be filled in
                  </p>
                )}
              </div>
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
