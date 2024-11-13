'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Loader from './components/loader'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000)
  }, [])

  if (isLoading) return <Loader />

  const name = "RADITYAYUSUFA.";
  const letterAnimation = {
    initial: { opacity: 0, y: 200 },
    animate: (index : number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 * index, duration: 0.7, ease: "easeOut" },
    }),
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col items-center"
    >
      <motion.h1
        className="text-[30vh] tracking-wider font-bold text-center mt-8 flex space-x-1"
      >
        {name.split("").map((letter, index) => (
          <motion.span
            key={index}
            initial="initial"
            animate="animate"
            variants={letterAnimation}
            custom={index}
            className="inline-block"
          >
            {letter}
          </motion.span>
        ))}
      </motion.h1>

      <motion.img
        src="https://i.pinimg.com/736x/86/fb/0c/86fb0c76625026c979bf41b6f2276082.jpg"
        alt="Large background"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 1.5 }}
        className="w-full h-[50vh] object-cover"
      />
    </motion.main>
  )
}
