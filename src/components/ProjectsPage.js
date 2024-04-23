import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaChrome } from 'react-icons/fa'; // Import Font Awesome icons
// Import all project images
import screenshot66 from '../images/Screenshot (66).png';
import screenshot137 from '../images/Screenshot (137).png';
import screenshot75 from '../images/Screenshot (75).png';
import screenshot116 from '../images/Screenshot (116).png';
import screenshot138 from '../images/Screenshot (138).png';
import screenshot139 from '../images/Screenshot (139).png';
import screenshot140 from '../images/Screenshot (140).png';
import screenshot141 from '../images/Screenshot (141).png';
import screenshot142 from '../images/Screenshot (142).png';
import screenshot145 from '../images/Screenshot (145).png';
import screenshot146 from '../images/Screenshot (146).png';
import screenshot147 from '../images/Screenshot (147).png';
import screenshot148 from '../images/Screenshot (148).png';
import screenshot150 from '../images/Screenshot (150).png';
import screenshot151 from '../images/Screenshot (151).png';
import screenshot152 from '../images/Screenshot (152).png';
const projectData = [
  {
    category: "Websites",
    projects: [
      {
        title: "Yahya's Departmental Store",
        description: "The first project of mine I ever made. It is a Departmental / Grocery store that uses simple HTML, CSS, and JS.",
        imageUrl: screenshot66,
        githubUrl: "https://github.com/YahyaBinUsman/YahyaDepartmentalStore.github.io",
        liveUrl: "https://yahyabinusman.github.io/YahyaDepartmentalStore.github.io/index.html"
      },
      {
        title: "Pet Adoption Center",
        description: "Second website of mine. It is a frontend design for a pet adoption center, made in React.",
        imageUrl: screenshot137,
        githubUrl: "https://github.com/YahyaBinUsman/pet-adoption-center.github.io",
        liveUrl: "https://yahyabinusman.github.io/pet-adoption-center.github.io/"
      },
      {
        title: "TechPro Gearhub",
        description: "The third project is an E-commerce platform that is fully functional and has both frontend and backend with a database. Made in Django.",
        imageUrl: screenshot75,
        githubUrl: "https://github.com/YahyaBinUsman/Techpro-Gearhub.github.io",
        liveUrl: "https://yahyabinusman.github.io/Techpro-Gearhub.github.io/"
      },
      {
        title: "Employee Management System",
        description: "The fourth project is an employee management system that is fully functional and has both frontend and backend with a database. Made in Django.",
        imageUrl: screenshot116,
        githubUrl: "https://github.com/YahyaBinUsman/Techpro-Gearhub.github.io",
        liveUrl: "https://yahyabinusman.github.io/Techpro-Gearhub.github.io/"
      }
    ]
  },
  {
    category: "Python",
    projects: [
      {
        title: "Tic Tac Toe",
        description: "Tic Tac Toe game with a graphical user interface, made in Python with the tkinter library.",
        imageUrl: screenshot138,
        githubUrl: "https://github.com/YahyaBinUsman/tic-tac-toe"
      },
      {
        title: "Rock Paper Scissors",
        description: "Rock Paper Scissors game played against the computer. Very simple and fun.",
        imageUrl: screenshot139,
        githubUrl: "https://github.com/YahyaBinUsman/rock-paper-scissors"
      },
      {
        title: "Quiz Game",
        description: "A quiz game that asks a question and then gives 4 options. The user selects an option, and it checks if it's correct, giving points accordingly.",
        imageUrl: screenshot140,
        githubUrl: "https://github.com/YahyaBinUsman/quiz-game"
      },
      {
        title: "Password Generator",
        description: "Password generator that creates passwords based on the entered difficulty. Made in Python.",
        imageUrl: screenshot141,
        githubUrl: "https://github.com/YahyaBinUsman/password-generator"
      },
      {
        title: "Fighting Warrior Game",
        description: "Asks for a weapon first, then 3 enemies appear, and it fights them by asking for an attack or giving up. No GUI.",
        imageUrl: screenshot142,
        githubUrl: "https://github.com/YahyaBinUsman/fun-games"
      },
      {
        title: "Face Recognition",
        description: "A face recognition program that can detect faces in front of the camera smoothly. Made in Python.",
        imageUrl: screenshot145,
        githubUrl: "https://github.com/YahyaBinUsman/face-recognition"
      },
      {
        title: "Expense Splitter",
        description: "A program that takes all friends' names as input and divides the bill among them equally. Made in Python.",
        imageUrl: screenshot146,
        githubUrl: "https://github.com/YahyaBinUsman/expense_splitter"
      },
      {
        title: "Chat Bot",
        description: "By placing your API key of OpenAI, you can talk by voice with this program. It listens and uses Chat-GPT for results.",
        imageUrl: screenshot147,
        githubUrl: "https://github.com/YahyaBinUsman/chat-bot"
      },
      {
        title: "GUI Calculator",
        description: "A working calculator in Python that uses GUI using tkinter library and is very effective.",
        imageUrl: screenshot148,
        githubUrl: "https://github.com/YahyaBinUsman/GUI-calculator"
      },
      {
        title: "Alarm Clock",
        description: "A working alarm clock in Python that you can set time in 24-hour format, and it will beep on the desired time.",
        imageUrl: screenshot150,
        githubUrl: "https://github.com/YahyaBinUsman/alarm-clock"
      }
    ]
  },
  {
    category: "JavaScript",
    projects: [
      {
        title: "Currency Rates Converter",
        description: "This project converts currencies like 'USD', 'EUR', 'GBP', 'AUD', 'PKR', 'INR'.",
        imageUrl: screenshot152,
        githubUrl: "https://github.com/YahyaBinUsman/currency-converter.github.io", // Update with actual URL
      },
      {
        title: "Weather App",
        description: "This project retrieves the current weather for any city using the OpenWeatherMap API.",
        imageUrl: screenshot151,
        githubUrl: "https://github.com/YahyaBinUsman/weather-app.github.io"
      }
      // Add additional JavaScript projects here following the same format
    ]
  }
];

const ProjectsPage = () => {
  return (
    <>
      <br/>
      <br/>
      <div className="container mx-auto px-8 py-20">
        <h1 className="text-6xl font-bold text-center text-futuristic-gold mb-12">Projects</h1>
        {projectData.map((section, index) => (
          <div key={index} className="mb-16"> {/* Add margin bottom to separate sections */}
            <h2 className="text-4xl font-bold text-futuristic-gold mb-8">{section.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {section.projects.map((project, idx) => (
                <motion.div
                  key={idx}
                  className="rounded-lg border-4 border-futuristic-gold shadow-xl p-8 transform hover:scale-105 transition-transform duration-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 * idx }}
                  style={{ backgroundColor: 'transparent' }} // Set background color to transparent
                >
                  <h3 className="text-2xl font-semibold mb-4 text-futuristic-gold">{project.title}</h3>
                  <img src={project.imageUrl} alt={project.title} className="mb-4 rounded-lg"/>
                  <p className="text-lg text-white">{project.description}</p>
                  <div className="flex justify-between mt-4">
                    <a href={project.githubUrl} className="text-futuristic-gold hover:text-neon-blue transition-colors duration-300">
                      <FaGithub size={24} />
                    </a>
                    {project.liveUrl && (
                      <a href={project.liveUrl} className="text-futuristic-gold hover:text-neon-blue transition-colors duration-300">
                        <FaChrome size={24} />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectsPage;