import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { resume } from "../constants"; // resume is an array of objects

const ResumeDownload = () => {
  // Use the first resume object from your constants
  const myResume = resume[0];

  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Download</p>
        <h2 className={styles.sectionHeadText}>My Resume.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Click the button below to download my resume. It contains details about
        my skills, experience, and projects.
      </motion.p>

      <div className="mt-10 flex justify-center">
        <Tilt className="xs:w-[250px] w-full">
          <motion.div
            variants={fadeIn("right", "spring", 0.5, 0.75)}
            className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
          >
            <div
              options={{ max: 45, scale: 1, speed: 450 }}
              className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[120px] flex justify-center items-center flex-col"
            >
              <a
                href={myResume.filePath} // Make sure the file exists in the public folder
                download={myResume.fileName}
                className="text-white text-[20px] font-bold text-center bg-indigo-500 px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300"
              >
                Download My Resume
              </a>
            </div>
          </motion.div>
        </Tilt>
      </div>
    </div>
  );
};

export default SectionWrapper(ResumeDownload, "resume");
