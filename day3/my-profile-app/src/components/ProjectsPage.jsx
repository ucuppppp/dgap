import {motion} from "framer-motion";

export default function ProjectsPage() {
  const projects = [
    {title: "Project 1", description: "A cool React app"},
    {title: "Project 2", description: "An innovative API"},
    {title: "Project 3", description: "A sleek mobile app"},
  ];

  return (
    <div className="container mx-auto px-20 min-h-screen flex flex-col justify-center">
      <h2 className="text-4xl font-bold mb-8">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{opacity: 0, scale: 0.8}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.5, delay: index * 0.1}}
            className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-lg hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105"
          >
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
