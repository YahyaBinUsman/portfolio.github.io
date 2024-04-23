import React from 'react';
import { motion } from 'framer-motion';

const ExperiencePage = () => {
  return (
    <>
      <br/>
      <br/>

      <div className="container mx-auto p-10">
        <motion.h2 
          className="text-3xl text-dragon-gold font-bold mb-5" 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Programming Languages & Frameworks
        </motion.h2>
        <div className="space-y-8">
          {/** Python */}
          <motion.div 
            className="bg-dragon-black text-dragon-gold p-8 rounded-lg"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold">Python</h3>
            <p>Python is a high-level, interpreted, and general-purpose programming language known for its simplicity and readability. It is extensively used in web development (Django, Flask), data science (Pandas, NumPy), artificial intelligence (TensorFlow, PyTorch), and automation scripting.</p>
          </motion.div>
          {/** JavaScript */}
          <motion.div 
            className="bg-dragon-black text-dragon-gold p-8 rounded-lg"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold">JavaScript</h3>
            <p>JavaScript is a versatile scripting language that powers dynamic and interactive web experiences. It is the foundation of modern web development and is used in conjunction with HTML and CSS to create responsive web pages, interactive user interfaces, and server-side applications (Node.js).</p>
          </motion.div>
          {/** HTML */}
          <motion.div 
            className="bg-dragon-black text-dragon-gold p-8 rounded-lg"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold">HTML</h3>
            <p>HTML (Hypertext Markup Language) provides the structure and content of web pages. It defines the elements and their layout, enabling developers to create accessible and well-structured websites. HTML5 introduces new features for multimedia, graphics, and offline web applications.</p>
          </motion.div>
          {/** CSS */}
          <motion.div 
            className="bg-dragon-black text-dragon-gold p-8 rounded-lg"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold">CSS</h3>
            <p>CSS (Cascading Style Sheets) is responsible for the visual presentation of web pages. It controls the layout, colors, fonts, and overall appearance, ensuring a consistent and appealing user experience across different devices. CSS frameworks like Bootstrap and Tailwind CSS facilitate rapid development and styling of web applications.</p>
          </motion.div>
          {/** SQL & MySQL */}
          <motion.div 
            className="bg-dragon-black text-dragon-gold p-8 rounded-lg"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <h3 className="text-2xl font-bold">SQL & MySQL</h3>
            <p>SQL (Structured Query Language) is the standard language for managing relational databases. It allows developers to store, retrieve, and manipulate data efficiently. MySQL is a popular open-source relational database management system known for its reliability, scalability, and performance.</p>
          </motion.div>
          {/* Add other programming languages and frameworks with animations */}
        </div>

        <motion.h2 
          className="text-3xl text-dragon-gold font-bold mt-12 mb-5" 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Libraries & Frameworks
        </motion.h2>
        <div className="space-y-8">
          {/** React */}
          <motion.div 
            className="bg-dragon-black text-dragon-gold p-8 rounded-lg"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold">React</h3>
            <p>React is a JavaScript library for building user interfaces, offering a component-based architecture for creating reusable UI elements. It enables the development of fast and interactive web applications, providing a virtual DOM for efficient rendering and state management through props and state.</p>
          </motion.div>
          {/** Django */}
          <motion.div 
            className="bg-dragon-black text-dragon-gold p-8 rounded-lg"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold">Django</h3>
            <p>Django is a high-level Python web framework known for its simplicity, scalability, and versatility. It follows the Model-View-Template (MVT) pattern and provides built-in features for authentication, database management, and security, enabling rapid development of complex web applications.</p>
          </motion.div>
          {/** Tailwind */}
          <motion.div 
            className="bg-dragon-black text-dragon-gold p-8 rounded-lg"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold">Tailwind</h3>
            <p>Tailwind CSS is a utility-first CSS framework that streamlines the process of building custom designs by providing a set of pre-defined utility classes. It promotes a low-level approach to styling, allowing developers to create responsive and visually appealing user interfaces without writing custom CSS.</p>
          </motion.div>
          {/** Bootstrap */}
          <motion.div 
            className="bg-dragon-black text-dragon-gold p-8 rounded-lg"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold">Bootstrap</h3>
            <p>Bootstrap is a popular CSS framework that simplifies the development of responsive and mobile-first websites. It offers a comprehensive set of pre-designed components, such as buttons, forms, and navigation bars, along with a responsive grid system, making it ideal for rapid prototyping and development.</p>
          </motion.div>
          {/* Add other libraries and frameworks with animations */}
        </div>

        <motion.h2 
          className="text-3xl text-dragon-gold font-bold mt-12 mb-5" 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Other Expertise
        </motion.h2>
        <div className="space-y-8">
          {/** Microsoft Word */}
          <motion.div 
            className="bg-dragon-black text-dragon-gold p-8 rounded-lg"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold">Microsoft Word</h3>
            <p>Microsoft Word is a widely used word processing application that allows users to create, edit, and format documents. It offers features such as spell checking, grammar checking, and document templates, making it essential for business, academic, and personal use.</p>
          </motion.div>
          {/** Microsoft PowerPoint */}
          <motion.div 
            className="bg-dragon-black text-dragon-gold p-8 rounded-lg"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold">Microsoft PowerPoint</h3>
            <p>Microsoft PowerPoint is a presentation program used to create dynamic and engaging slideshows. It provides tools for adding text, images, animations, and multimedia content to slides, allowing users to communicate ideas effectively in meetings, conferences, and educational settings.</p>
          </motion.div>
          {/** Microsoft Excel */}
          <motion.div 
            className="bg-dragon-black text-dragon-gold p-8 rounded-lg"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold">Microsoft Excel</h3>
            <p>Microsoft Excel is a powerful spreadsheet application used for data analysis, calculation, and visualization. It offers a wide range of functions and tools for managing and manipulating numerical data, making it indispensable for financial analysis, budgeting, and statistical analysis.</p>
          </motion.div>
          {/** Web Scraper */}
          <motion.div 
            className="bg-dragon-black text-dragon-gold p-8 rounded-lg"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold">Web Scraper</h3>
            <p>Web scraping is the automated process of extracting data from websites. It involves fetching and parsing HTML content to extract relevant information using tools like Beautiful Soup (Python) or Puppeteer (JavaScript). Web scraping is used for various purposes, including market research, data analysis, and content aggregation.</p>
          </motion.div>
          {/* Add other expertise with animations */}
        </div>
        {/* Add animations for new sections */}
      </div>
    </>
  );
};

export default ExperiencePage;
