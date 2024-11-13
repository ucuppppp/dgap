'use client'

import { motion } from 'framer-motion'

const projects = [
  { title: 'Social Media App', description: 'A social media app like Instagram built with Next.js and Firebase', img: 'https://i.pinimg.com/736x/56/00/d8/5600d8fccba668d42f64b46770267d6c.jpg' },
  { title: 'Game Store App', description: 'A game store app with real-time updates using React and Firebase', img: 'https://i.pinimg.com/736x/c5/2d/cc/c52dcce492102c9944e0cb0d63a2d175.jpg' },
  { title: 'Film and TV Shows App', description: 'A film and TV shows app with real-time updates using React and Firebase', img: 'https://i.pinimg.com/736x/ea/c1/e9/eac1e9df0afa0ea3cca1b35f20f31be5.jpg' },
]

export default function Projects() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col items-center justify-center p-8"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-6xl mb-12 tracking-wider text-center"
      >
        Projects
      </motion.h1>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img src={project.img} alt={project.title} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-neutral-600 text-lg">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.main>
  )
}
