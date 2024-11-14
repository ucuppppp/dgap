"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {name: "Home", path: "/"},
    {name: "About", path: "/about"},
    {name: "Projects", path: "/projects"},
    {name: "Contact", path: "/contact"},
  ];

  return (
    <>
      {/* Navbar for larger screens */}
      <nav className="hidden md:flex fixed top-8 left-0 w-full justify-center space-x-8 text-2xl z-50">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            passHref
            className="cursor-none hover:scale-110 transition-all"
          >
            <motion.span
              className={`cursor-none ${
                pathname === item.path ? "text-neutral-900" : "text-neutral-500"
              } hover:scale-110 hover:text-[rgb(253, 126, 29)] transition-all`}
              whileHover={{scale: 1.1}}
              whileTap={{scale: 0.95}}
            >
              {item.name}
            </motion.span>
          </Link>
        ))}
      </nav>

      {/* Hamburger Menu for mobile screens */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <motion.div
          className="cursor-none"
          onClick={() => setIsOpen(!isOpen)}
          animate={{
            rotate: isOpen ? 0 : -180,
            transition: {duration: 0.3},
          }}
          whileHover={{scale: 1.1}}
          style={{
            animation: isOpen ? "none" : "spin 2s linear infinite",
          }}
        >
          {/* SVG Icon for Hamburger */}
          <svg
            width={"32"}
            height={"32"}
            viewBox="0 0 100 100"
            className="w-full h-full text-neutral-900 hover:fill-neutral-900 hover:stroke-[rgb(253, 126, 29)] hover:stroke-2"
            fill="rgb(253, 126, 29)"
            stroke="none" // Tanpa border awal
          >
            <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" />
          </svg>
        </motion.div>
      </div>

      {/* Dropdown menu with animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="menu"
            initial={{clipPath: "circle(0% at 100% 0%)", opacity: 0}}
            animate={{clipPath: "circle(150% at 100% 0%)", opacity: 1}}
            exit={{clipPath: "circle(0% at 100% 0%)", opacity: 0}}
            transition={{duration: 0.5, ease: "easeInOut"}}
            className="fixed inset-0 bg-neutral-800 flex flex-col items-center justify-center space-y-6 text-2xl text-white"
            onClick={() => setIsOpen(false)}
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                passHref
                className="cursor-none"
              >
                <motion.span
                  className={`cursor-none ${
                    pathname === item.path ? "text-white" : "text-neutral-400"
                  }`}
                  whileHover={{scale: 2.1}}
                  whileTap={{scale: 0.95}}
                >
                  {item.name}
                </motion.span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
