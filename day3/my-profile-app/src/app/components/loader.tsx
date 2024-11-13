'use client'

import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#f5f0e6]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <motion.div
        className="relative w-24 h-24"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 4, ease: "linear", repeat: Infinity }}
      >
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ scale: [0, 7, 0] }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full text-neutral-900"
            fill="currentColor"
          >
            <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" />
          </svg>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
