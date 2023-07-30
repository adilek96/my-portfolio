import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FormSendError({ showError, setShowError }) {
  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const closeHandler = () => {
    setShowError(false);
  };
  return (
    <AnimatePresence>
      {showError && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={modalVariants}
          className="sent__modal-error"
        >
          <p>Sending error...</p>
          <button onClick={closeHandler}>Close</button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
