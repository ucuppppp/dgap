"use client";

import {useState, useEffect} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import {motion, AnimatePresence} from "framer-motion";
import {Home, User, Briefcase, Mail} from "lucide-react";

// Components
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ProjectsPage from "./components/ProjectsPage";
import ContactPage from "./components/ContactPage";

export default function App() {
  return (
    <Router>
      <div className="bg-gradient-to-br from-purple-900 to-indigo-900 min-h-screen text-white">
        <Navigation />
        <ParticleBackground />
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

function Navigation() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState(
    location.pathname.slice(1) || "home"
  );

  useEffect(() => {
    setActiveSection(location.pathname.slice(1) || "home");
  }, [location]);

  return (
    <nav className="fixed left-0 top-0 h-full w-16 bg-black bg-opacity-50 flex flex-col items-center justify-center space-y-8 z-50">
      {[
        {id: "home", Icon: Home, path: "/"},
        {id: "about", Icon: User, path: "/about"},
        {id: "projects", Icon: Briefcase, path: "/projects"},
        {id: "contact", Icon: Mail, path: "/contact"},
      ].map(({id, Icon, path}) => (
        <Link
          key={id}
          to={path}
          className={`p-2 rounded-full transition-all duration-300 ${
            activeSection === id
              ? "bg-white text-purple-900"
              : "text-white hover:bg-white hover:text-purple-900"
          }`}
        >
          <Icon className="w-6 h-6" />
        </Link>
      ))}
    </nav>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <AnimatedPage>
              <HomePage />
            </AnimatedPage>
          }
        />
        <Route
          path="/about"
          element={
            <AnimatedPage>
              <AboutPage />
            </AnimatedPage>
          }
        />
        <Route
          path="/projects"
          element={
            <AnimatedPage>
              <ProjectsPage />
            </AnimatedPage>
          }
        />
        <Route
          path="/contact"
          element={
            <AnimatedPage>
              <ContactPage />
            </AnimatedPage>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function AnimatedPage({children}) {
  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      exit={{opacity: 0, y: -20}}
      transition={{duration: 0.5}}
    >
      {children}
    </motion.div>
  );
}

function ParticleBackground() {
  return (
    <div className="fixed inset-0 z-0">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white opacity-30"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            width: Math.random() * 5 + "px",
            height: Math.random() * 5 + "px",
          }}
        />
      ))}
    </div>
  );
}
