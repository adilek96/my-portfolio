import React from "react";
import { motion } from "framer-motion";

export default function ContentEdu() {
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
      className="content__edu"
    >
      <h2>Education and certification</h2>
      <div className="edu_wrapper">
        <div className="edu_wrapper-content">
          <img src="../img/sertificat-web.jpeg" />
        </div>
      </div>
    </motion.div>
  );
}
