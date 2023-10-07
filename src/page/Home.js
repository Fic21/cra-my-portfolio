import React from "react";
import MyImage from "../img/Home/fic-removebg 1.png";
import Svg1 from "../img/Home/Ellipse 1.svg";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";


const Home = () => {
  return (
    <section className="section hp:px-0 tablet:px-10 laptop:px-40 ">
      <motion.img
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        exit={{ opacity: 0}}
        transition={transition1}
        className="section absolute right-0 -z-10"
        src={Svg1}
      />
      <div className="flex hp:flex-col tablet:flex-row py-0 laptop:flex-row items-center justify-between container  mx-auto h-full w-full">
        <motion.div
        initial={{ opacity: 0, x: "-100%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "-100%" }}
        transition={transition1}
        className="text-[#848484] drop-shadow-lg hp:px-10 pt-[50px] hp:pt-[100px] laptop:pt-0">
          <h1>Hi!!! </h1>
          <h1>I’m Fikra,</h1>
          <h1>Web Developer and IoT Developer</h1>
          <h1>Jakarta Selatan, Indonesia</h1>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "100%" }}
          transition={transition1}
          className="hp:w-[210px] tablet:[350px] laptop:w-[390px] hp:pt-0 laptop:pt-6 drop-shadow-2xl"
          src={MyImage}
        />
      </div>
    </section>
  );
};

export default Home;
