import React from "react";
import { motion } from "framer-motion";

export default function ContentHome() {
  const h2Variants = {
    hidden: {
      x: -1000,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  const pVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  const divVariants = {
    hidden: {
      x: -1000,
      opacity: 0.5,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <article className="content__home">
      <div className="content__home-text">
        <motion.h2
          initial={"hidden"}
          animate={"visible"}
          transition={{ delay: 0.5, duration: 2 }}
          variants={h2Variants}
        >
          <span>Hello,</span>
          <br /> my name is <br />
          <motion.span
            initial={"hidden"}
            animate={"visible"}
            transition={{ delay: 2.5, duration: 2 }}
            variants={h2Variants}
          >
            Adil Ashurov
          </motion.span>
        </motion.h2>
        <motion.p
          initial={"hidden"}
          animate={"visible"}
          transition={{ delay: 3, duration: 1 }}
          variants={pVariants}
        >
          I`m a <b>front-end developer.</b>
        </motion.p>
      </div>
      <motion.div
        initial={"hidden"}
        animate={"visible"}
        transition={{ delay: 0.5, duration: 2 }}
        variants={divVariants}
        className="content__home-img"
      >
        <img src="../img/Image.png" />
      </motion.div>
    </article>
  );
}
