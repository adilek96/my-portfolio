import React from "react";

import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3,
  FaJsSquare,
  FaReact,
  FaSass,
  FaLess,
  FaBootstrap,
  FaHeadSideMask,
} from "react-icons/fa";
import { SiRedux, SiTailwindcss, SiWebflow } from "react-icons/si";

export default function ContentSkills() {
  const icons = [
    <FaHtml5 />,
    <FaCss3 />,
    <FaJsSquare />,
    <FaReact />,
    <FaSass />,
    <FaLess />,
    <FaBootstrap />,
    <SiRedux />,
    <SiTailwindcss />,
    <SiWebflow />,
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
  const listVariants = {
    hidden: {
      opacity: 0,
    },
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: 2 + i * 0.5,
      },
    }),
  };
  return (
    <motion.div
      initial={"hidden"}
      animate={"visible"}
      transition={{ duration: 2 }}
      variants={divVariants}
      className="content__skills"
    >
      <h2>My skills</h2>
      <p>
        I possess strong skills in front-end web development, including{" "}
        <b>
          HTML, CSS, SCSS, SASS, LESS, JavaScript, React, Redux, Bootstrap,
          Tailwind CSS and Webflow.
        </b>{" "}
        I can create visually appealing and interactive websites, ensuring
        seamless user experiences. I prioritize clean and maintainable code to
        deliver scalable and performant websites.
      </p>
      <ul className="content__skills-list">
        {icons.map((item, i) => {
          return (
            <motion.li
              initial={"hidden"}
              animate={"visible"}
              transition={{ delay: 3, duration: 2 }}
              variants={listVariants}
              custom={i}
              key={i}
            >
              {item}
            </motion.li>
          );
        })}
      </ul>
    </motion.div>
  );
}
