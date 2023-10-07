import React from "react";
import CardWork from "../components/CardWork";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";

const Work = () => {
  return (
    <motion.section
      className="section"
    >
      <div className="bg-slate-600 flex flex-col justify-center pt-[60px] pb-[10px]">
        <h1 className="flex justify-center drop-shadow-lg ">My Work</h1>
        <div className="flex justify-center mt-10 gap-x-5">
          <motion.div
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          exit={{ opacity: 0}}
          transition={transition1}
          className="flex flex-wrap justify-center gap-10 mb-20">
            <CardWork />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
