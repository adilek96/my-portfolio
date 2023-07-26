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
          <p>
            <strong>This certificate </strong> confirms that user{" "}
            <strong>Adil Ashurov </strong>
            has <mark>successfully completed</mark>{" "}
            <strong>WEB-developer course</strong> 13.07.2023 from teacher Ivan
            Petrichenko on Udemy. The certificate confirms that based on the
            data provided by the student, the course was successfully completed.
            The course duration includes the total number of hours of video in
            the course as of the most recent course completion.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
