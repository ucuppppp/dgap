'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

export default function Navbar() {
  const pathname = usePathname()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="fixed top-8 left-0 w-full flex justify-center space-x-8 text-2xl z-50">
      {navItems.map((item) => (
        <Link key={item.name} href={item.path} passHref>
          <motion.span
            className={`cursor-pointer ${
              pathname === item.path ? 'text-neutral-900' : 'text-neutral-500'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {item.name}
          </motion.span>
        </Link>
      ))}
    </nav>
  )
}