import {motion} from "framer-motion";

export default function HomePage() {
  return (
    <div className="container mx-auto px-20 min-h-screen flex flex-col justify-center">
      <motion.h1
        initial={{opacity: 0, y: 50}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.8}}
        className="text-6xl font-bold mb-4"
      >
        Welcome to My Creative World
      </motion.h1>
      <motion.p
        initial={{opacity: 0, y: 50}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.8, delay: 0.2}}
        className="text-xl"
      >
        Explore my journey through code and creativity
      </motion.p>
    </div>
  );
}
