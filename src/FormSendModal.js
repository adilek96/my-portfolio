import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FormSendModal({ showSuccsess, setShowSuccsess }) {
  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const closeHandler = () => {
    setShowSuccsess(false);
  };
  return (
    <AnimatePresence>
      {showSuccsess && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={modalVariants}
          className="sent__modal-succsess"
        >
          <p>Send successfully</p>
          <button onClick={closeHandler}>Close</button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
