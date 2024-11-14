"use client";

import {motion} from "framer-motion";
import {useEffect, useState} from "react";

export default function About() {


  return (
    <motion.main
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 1}}
      className="min-h-screen flex flex-col items-center justify-center p-4"
    >
      <motion.h1
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 0.5, duration: 1}}
        className="text-6xl mb-8 tracking-wider"
      >
        About Me
      </motion.h1>

      <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl">
        {/* Left Image */}
        <motion.img
          src="https://i.pinimg.com/236x/b3/9e/7f/b39e7ff346ab901239fb699683a5e33f.jpg"
          alt="Left image"
          initial={{opacity: 0, y: -50}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1}}
          whileHover={{
            scale: 1.05,
            rotateY: 25,
            rotateX: 45,
            transition: {duration: 0.3},
          }}
          className="w-full md:w-[25%] aspect-[2/3] object-cover rounded-lg shadow-lg"
        />

        {/* Text Content */}
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: 0.8, duration: 1}}
          className="w-full text-center md:text-left"
        >
          <p className="text-2xl mb-4">
            I'm a passionate developer with a keen eye for design and a love for
            creating beautiful, functional websites.
          </p>
          <p className="text-2xl mb-4">
            With months of experience in both front-end and back-end
            technologies, I strive to build applications that not only look
            great but also provide an excellent user experience.
          </p>
          <p className="text-2xl">
            When I'm not coding, you can find me exploring new design trends,
            experimenting with creative coding, or contributing to open-source
            projects.
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.img
          src="https://i.pinimg.com/736x/de/b5/40/deb540358824662b6caf08c4e4891f19.jpg"
          alt="Right image"
          initial={{opacity: 0, y: 50}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1}} 
          whileHover={{
            scale: 1.05,
            rotateY: -25,
            rotateX: 45,
            transition: {duration: 0.3}, 
          }}
          className="w-full md:w-[25%] aspect-[2/3] object-cover rounded-lg shadow-lg"
        />
      </div>
    </motion.main>
  );
}
