import React from "react";
import { motion } from "framer-motion";

export default function ContentAbout() {
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
    <motion.article
      initial={"hidden"}
      animate={"visible"}
      transition={{ duration: 2 }}
      variants={divVariants}
      className="content__about"
    >
      <h2>About me</h2>
      <p>
        <strong>I am a professional web developer</strong> specializing in
        creating amazing and functional websites. My commitment to excellence
        and passion for technology allows me to create unique and innovative web
        projects.
      </p>
      <p>
        When designing websites, I pay special attention to the user experience.
        I strive to create interfaces that are not only visually appealing, but
        also intuitive for all users. My goal is to maximize functionality and
        ease of interaction for every visitor.
      </p>

      <p>
        <strong>
          I am proud of my portfolio, which includes a wide range of projects of
          varying scale and complexity.
        </strong>{" "}
        From small lendings to full-fledged online stores, I always strive for
        the perfect result. You can check out my work on my portfolio page and
        see for yourself the quality and variety of my projects.
      </p>
      <p>
        If you are looking for a talented web developer who is ready to take
        your project and turn it into a reality, I am ready to take on the job.
        Contact me through the contact form on the website and we can discuss
        all the details of your project.
      </p>
      <p>
        <strong>
          Thank you for visiting my portfolio site. I look forward to working
          with you and creating an amazing web project!
        </strong>
      </p>
    </motion.article>
  );
}
