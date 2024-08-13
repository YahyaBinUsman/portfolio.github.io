import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPython,
  faJsSquare,
  faHtml5,
  faCss3Alt,
  faReact,
  faNodeJs,
  faGithub,
  faWordpress,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faServer,
  faFileAlt,
  faFilePowerpoint,
  faFileExcel,
  faSpider,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

const ExperiencePage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 via-purple-800 to-black text-futuristic-gold">
        <div className="container mx-auto p-10">
          {/* Programming Languages & Frameworks */}
          <motion.h2 
            className="text-3xl text-dragon-gold font-bold mb-5 text-left md:text-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Programming Languages & Frameworks
          </motion.h2>
          <div className="space-y-8">
            {/* Python */}
            <motion.div 
              className="bg-purple-800 text-dragon-gold p-8 rounded-lg shadow-lg relative flex flex-col items-center md:flex-row md:items-start"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-center mb-4 md:mb-0 md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2">
                <FontAwesomeIcon icon={faPython} className="text-5xl text-yellow-400 p-2" />
              </div>
              <div className="md:ml-16 text-left">
                <h3 className="text-2xl font-bold">Python</h3>
                <p>Python is a high-level, interpreted, and general-purpose programming language known for its simplicity and readability. It is extensively used in web development (Django, Flask), data science (Pandas, NumPy), artificial intelligence (TensorFlow, PyTorch), and automation scripting.</p>
              </div>
            </motion.div>
            {/* JavaScript */}
            <motion.div 
              className="bg-purple-800 text-dragon-gold p-8 rounded-lg shadow-lg relative flex flex-col items-center md:flex-row md:items-start"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center justify-center mb-4 md:mb-0 md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2">
                <FontAwesomeIcon icon={faJsSquare} className="text-5xl text-yellow-400 p-2" />
              </div>
              <div className="md:ml-16 text-left">
                <h3 className="text-2xl font-bold">JavaScript</h3>
                <p>JavaScript is a versatile scripting language that powers dynamic and interactive web experiences. It is the foundation of modern web development and is used in conjunction with HTML and CSS to create responsive web pages, interactive user interfaces, and server-side applications (Node.js).</p>
              </div>
            </motion.div>
            {/* HTML */}
            <motion.div 
              className="bg-purple-800 text-dragon-gold p-8 rounded-lg shadow-lg relative flex flex-col items-center md:flex-row md:items-start"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center justify-center mb-4 md:mb-0 md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2">
                <FontAwesomeIcon icon={faHtml5} className="text-5xl text-yellow-400 p-2" />
              </div>
              <div className="md:ml-16 text-left">
                <h3 className="text-2xl font-bold">HTML</h3>
                <p>HTML (Hypertext Markup Language) provides the structure and content of web pages. It defines the elements and their layout, enabling developers to create accessible and well-structured websites. HTML5 introduces new features for multimedia, graphics, and offline web applications.</p>
              </div>
            </motion.div>
            {/* CSS & Tailwind */}
            <motion.div 
              className="bg-purple-800 text-dragon-gold p-8 rounded-lg shadow-lg relative flex flex-col items-center md:flex-row md:items-start"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex items-center justify-center mb-4 md:mb-0 md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2">
                <FontAwesomeIcon icon={faCss3Alt} className="text-5xl text-yellow-400 p-2" />
              </div>
              <div className="md:ml-16 text-left">
                <h3 className="text-2xl font-bold">CSS & Tailwind CSS</h3>
                <p>CSS (Cascading Style Sheets) is responsible for the visual presentation of web pages. It controls the layout, colors, fonts, and overall appearance, ensuring a consistent and appealing user experience across different devices. Tailwind CSS is a utility-first CSS framework for rapid UI development.</p>
              </div>
            </motion.div>
            {/* Django & Flask */}
            <motion.div 
              className="bg-purple-800 text-dragon-gold p-8 rounded-lg shadow-lg relative flex flex-col items-center md:flex-row md:items-start"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div className="flex items-center justify-center mb-4 md:mb-0 md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2">
                <FontAwesomeIcon icon={faServer} className="text-5xl text-yellow-400 p-2" />
              </div>
              <div className="md:ml-16 text-left">
                <h3 className="text-2xl font-bold">Django & Flask</h3>
                <p>Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. Flask is a micro web framework written in Python. It is lightweight, offering the flexibility to scale as needed for your project.</p>
              </div>
            </motion.div>
            {/* SQL & MySQL */}
            <motion.div 
              className="bg-purple-800 text-dragon-gold p-8 rounded-lg shadow-lg relative flex flex-col items-center md:flex-row md:items-start"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="flex items-center justify-center mb-4 md:mb-0 md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2">
                <FontAwesomeIcon icon={faDatabase} className="text-5xl text-yellow-400 p-2" />
              </div>
              <div className="md:ml-16 text-left">
                <h3 className="text-2xl font-bold">SQL & MySQL</h3>
                <p>SQL (Structured Query Language) is the standard language for managing relational databases. It allows developers to store, retrieve, and manipulate data efficiently. MySQL is a popular open-source relational database management system known for its reliability, scalability, and performance.</p>
              </div>
            </motion.div>
          </div>

          {/* Libraries & Frameworks */}
          <motion.h2 
            className="text-3xl text-dragon-gold font-bold mt-12 mb-5 text-left md:text-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Libraries & Frameworks
          </motion.h2>
          <div className="space-y-8">
            {/* React */}
            <motion.div 
              className="bg-purple-800 text-dragon-gold p-8 rounded-lg shadow-lg relative flex flex-col items-center md:flex-row md:items-start"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center justify-center mb-4 md:mb-0 md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2">
                <FontAwesomeIcon icon={faReact} className="text-5xl text-blue-400 p-2" />
              </div>
              <div className="md:ml-16 text-left">
                <h3 className="text-2xl font-bold">React</h3>
                <p>React is a popular JavaScript library for building user interfaces, particularly single-page applications. It allows developers to create reusable UI components and efficiently manage the state of the application.</p>
              </div>
            </motion.div>
            {/* Bootstrap */}
            <motion.div 
              className="bg-purple-800 text-dragon-gold p-8 rounded-lg shadow-lg relative flex flex-col items-center md:flex-row md:items-start"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center justify-center mb-4 md:mb-0 md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2">
                <FontAwesomeIcon icon={faBootstrap} className="text-5xl text-purple-600 p-2" />
              </div>
              <div className="md:ml-16 text-left">
                <h3 className="text-2xl font-bold">Bootstrap</h3>
                <p>Bootstrap is a powerful front-end framework for developing responsive, mobile-first websites. It includes a collection of CSS and JavaScript components, allowing developers to build visually appealing and consistent user interfaces quickly.</p>
              </div>
            </motion.div>
            {/* Node.js */}
            <motion.div 
              className="bg-purple-800 text-dragon-gold p-8 rounded-lg shadow-lg relative flex flex-col items-center md:flex-row md:items-start"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center justify-center mb-4 md:mb-0 md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2">
                <FontAwesomeIcon icon={faNodeJs} className="text-5xl text-green-400 p-2" />
              </div>
              <div className="md:ml-16 text-left">
                <h3 className="text-2xl font-bold">Node.js</h3>
                <p>Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to build server-side and networking applications. It is known for its non-blocking, event-driven architecture, making it ideal for building scalable applications.</p>
              </div>
            </motion.div>
            {/* Git & GitHub */}
            <motion.div 
              className="bg-purple-800 text-dragon-gold p-8 rounded-lg shadow-lg relative flex flex-col items-center md:flex-row md:items-start"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center justify-center mb-4 md:mb-0 md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2">
                <FontAwesomeIcon icon={faGithub} className="text-5xl text-gray-600 p-2" />
              </div>
              <div className="md:ml-16 text-left">
                <h3 className="text-2xl font-bold">Git & GitHub</h3>
                <p>Git is a distributed version control system that allows developers to track changes in their codebase, collaborate with others, and maintain a history of their project. GitHub is a web-based platform for hosting and managing Git repositories, facilitating code sharing and collaboration.</p>
              </div>
            </motion.div>
            {/* Word, Excel & PowerPoint */}
            <motion.div 
              className="bg-purple-800 text-dragon-gold p-8 rounded-lg shadow-lg relative flex flex-col items-center md:flex-row md:items-start"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="flex items-center justify-center mb-4 md:mb-0 md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2">
                <FontAwesomeIcon icon={faFileAlt} className="text-5xl text-blue-500 p-2" />
              </div>
              <div className="md:ml-16 text-left">
                <h3 className="text-2xl font-bold">Word, Excel & PowerPoint</h3>
                <p>Microsoft Word, Excel, and PowerPoint are essential productivity tools widely used in the professional world. Word is a word processing tool for creating and editing documents, Excel is a powerful spreadsheet application for data analysis and visualization, and PowerPoint is a presentation software used to create visually engaging slideshows.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperiencePage;
