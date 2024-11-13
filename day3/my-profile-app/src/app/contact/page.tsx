'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', { name, email, message })
    // Reset form fields
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col items-center justify-center p-4"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-6xl mb-8 tracking-wider"
      >
        Contact Me
      </motion.h1>
      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        onSubmit={handleSubmit}
        className="w-full max-w-md"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-2xl mb-2">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-2 text-xl bg-white border border-neutral-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-2xl mb-2">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 text-xl bg-white border border-neutral-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-2xl mb-2">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={4}
            className="w-full p-2 text-xl bg-white border border-neutral-300 rounded"
          ></textarea>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full p-2 text-2xl text-white bg-neutral-900 rounded hover:bg-neutral-700 transition-colors duration-300"
        >
          Send Message
        </motion.button>
      </motion.form>
    </motion.main>
  )
}