import React from "react";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";

const Skills = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className="section"
    >
      <div className="flex flex-col justify-center items-center pt-[80px] pb-10">
        <h1 className="flex justify-center drop-shadow-lg ">My Skills</h1>
        <div className="flex hp:flex-col tablet:flex-row laptop:flex-row bg-[#f0f0f0] w-auto  mt-5 rounded-lg drop-shadow-xl gap-10 text-lg p-20 -z-10 ">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-100%" }}
              transition={transition1}
              className=" font-bold"
            >
              Electronic Enginering Skills
            </motion.h2>
            <motion.ul
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={transition1}
              className="list-disc"
            >
              <li>Circuit Design</li>
              <li>Microcontroler Programing</li>
              <li>Embedded System</li>
              <li>Automation</li>
              <li>IoT Development</li>
            </motion.ul>
          </div>
          <div>
            <motion.h2
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-100%" }}
              transition={transition1}
              className="font-bold"
            >
              Web Development
            </motion.h2>
            <motion.ul
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={transition1}
              className="list-disc"
            >
              <li>
                Language: <br />
                HTML,CSS,Js,PHP,dan Golang
              </li>
              <li>Framework: Tailwind dan Bootstrap</li>
              <li>Design: Figma dan Canva</li>
            </motion.ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
