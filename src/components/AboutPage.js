import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 via-purple-800 to-black text-futuristic-gold p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl rounded-xl shadow-xl overflow-hidden border-4 border-futuristic-gold"
      >
        <motion.div
          initial={{ y: '-100vh' }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 120, duration: 1 }}
          className="p-8 text-futuristic-gold"
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 120 }}
            className="text-5xl font-bold mb-6 border-b-2 border-futuristic-gold pb-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            About Yahya Bin Usman
          </motion.h2>

          <motion.section
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, type: 'spring', stiffness: 120 }}
            className="mb-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3 className="text-3xl font-bold mb-3">Introduction</h3>
            <p>
              Greetings, I am Yahya Bin Usman, a full-stack Python maestro from Lahore, Pakistan. With 8 months at the tech forefront, I innovate and dedicate robustly to projects. My journey began with a passion for technology, and I have relentlessly pursued excellence in my field. Every line of code I write is a testament to my commitment to crafting solutions that are both innovative and efficient. I am constantly seeking new challenges and opportunities to grow, believing that the key to success lies in continuous learning and adaptation.
            </p>
            <p>
              Over the past months, I have honed my skills in various programming languages and frameworks, always seeking to expand my knowledge and push the boundaries of what is possible. My work is driven by a desire to make a tangible impact on the world, leveraging technology to solve real-world problems and enhance the quality of life. I am inspired by the rapidly evolving nature of technology and strive to stay at the cutting edge, ready to embrace new ideas and techniques that can drive innovation and progress.
            </p>
            <p>
              My approach to development is both holistic and meticulous, ensuring that every project I undertake is executed with precision and care. I thrive in collaborative environments where ideas can flourish, and I am always eager to learn from others and share my insights. Together, we can create extraordinary things. I believe that the best results come from open communication and teamwork, where diverse perspectives are valued and creativity is encouraged, leading to solutions that are not only effective but also inspiring.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6, type: 'spring', stiffness: 120 }}
            className="mb-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3 className="text-3xl font-bold mb-3">What I Offer</h3>
            <p>
              Revolutionary full-stack Python development tailored to your needs, providing efficient and scalable solutions for modern web applications. I specialize in creating robust backend systems that seamlessly integrate with dynamic frontend experiences, ensuring a cohesive and engaging user journey. By focusing on both the functionality and aesthetics of web applications, I aim to deliver solutions that not only meet the technical requirements but also provide an intuitive and enjoyable user experience.
            </p>
            <p>
              My expertise in React allows me to develop interactive and responsive interfaces that enhance user engagement and satisfaction. I prioritize clean, maintainable code and adhere to best practices to deliver applications that are both powerful and user-friendly. I am dedicated to creating digital experiences that captivate users and drive results, employing the latest technologies and design principles to ensure that each project is not only cutting-edge but also future-proof.
            </p>
            <p>
              I am committed to continuous learning and staying abreast of the latest technological advancements, ensuring that my solutions remain at the cutting edge. Whether you're looking to build a new application from scratch or enhance an existing system, I am ready to bring your vision to life with precision and creativity. I believe that every project is an opportunity to innovate and explore new possibilities, and I approach each challenge with a fresh perspective, eager to discover the most effective and impactful solutions.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8, type: 'spring', stiffness: 120 }}
            className="mb-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3 className="text-3xl font-bold mb-3">Technical Proficiency</h3>
            <p>
              Proficient in Python (OOP), JavaScript, HTML, CSS, with expertise in React, Django, Bootstrap, and Tailwind. My technical skills enable me to build comprehensive solutions that are both functional and aesthetically pleasing. I am passionate about using technology to create innovative solutions that address complex challenges and deliver tangible results. I am skilled at designing and implementing robust, scalable systems that are capable of handling diverse requirements and delivering seamless performance.
            </p>
            <p>
              I am adept at developing applications that require complex logic and data management, utilizing the full capabilities of modern programming languages and frameworks. My approach to problem-solving is methodical and analytical, ensuring that every challenge is met with a well-thought-out strategy. I strive to create solutions that are not only efficient but also adaptable, allowing for future growth and development as business needs evolve.
            </p>
            <p>
              My commitment to quality and attention to detail is reflected in the code I write, ensuring that it is not only effective but also easy to read and maintain. I believe in the power of collaboration and open-source development, constantly seeking to contribute to the community and learn from others in the field. I am dedicated to fostering an environment of innovation and creativity, where ideas can thrive, and solutions are crafted with care and precision.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0, type: 'spring', stiffness: 120 }}
            className="mb-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3 className="text-3xl font-bold mb-3">Why Choose Me</h3>
            <p>
              My unbounded creativity and solid foundation deliver groundbreaking, scalable solutions, adaptable to technology’s evolution. I am passionate about pushing the boundaries of what is possible and delivering results that exceed expectations. I am committed to understanding the unique needs of each client and tailoring my approach to deliver solutions that are perfectly aligned with their goals and vision.
            </p>
            <p>
              I take pride in my ability to communicate complex technical concepts in a clear and concise manner, making it easy for clients and stakeholders to understand and engage with the development process. My goal is to foster strong, collaborative relationships that lead to successful projects and satisfied clients. I believe that effective communication and collaboration are key to achieving great results, and I am always open to feedback and new ideas that can enhance the final outcome.
            </p>
            <p>
              I am committed to delivering projects on time and within budget, while maintaining the highest standards of quality and performance. My dedication to continuous improvement ensures that I am always evolving and adapting to the ever-changing landscape of technology. I am passionate about exploring new possibilities and pushing the boundaries of what can be achieved, always striving to deliver solutions that are not only innovative but also impactful and meaningful.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2, type: 'spring', stiffness: 120 }}
            className="mb-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3 className="text-3xl font-bold mb-3">Location</h3>
            <p>
              My passion for technology and innovation thrives in the vibrant city of Lahore, Pakistan. The dynamic environment fuels my creativity and drive, providing endless opportunities for growth and exploration. I am inspired by the rich culture and history of Lahore, which serves as a constant reminder of the importance of perseverance and resilience. The city’s bustling tech scene offers a wealth of resources and connections that enable me to stay at the forefront of industry trends and developments.
            </p>
            <p>
              Living in Lahore has given me a unique perspective on the global tech landscape, allowing me to bridge the gap between local and international markets. I am committed to leveraging my skills and experience to contribute to the growth and development of the tech community in Lahore and beyond. I believe that by working together, we can create innovative solutions that have a lasting impact on the world, driving progress and improving the quality of life for people everywhere.
            </p>
            <p>
              I am eager to collaborate with clients and partners from around the world, bringing a fresh perspective and a passion for innovation to every project. My goal is to create meaningful connections and deliver solutions that not only meet but exceed expectations, paving the way for future success and growth. I am dedicated to building a strong network of like-minded professionals who share my commitment to excellence and innovation, working together to shape the future of technology.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4, type: 'spring', stiffness: 120 }}
            className="mb-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3 className="text-3xl font-bold mb-3">Passion and Dedication</h3>
            <p>
              Fueled by a genuine love for technology, my dedication to excellence is unwavering. I am driven by the desire to create solutions that are not only functional but also inspiring, leaving a lasting impact on the world. My passion for innovation is at the heart of everything I do, guiding me in my pursuit of excellence and pushing me to explore new possibilities and ideas.
            </p>
            <p>
              I am committed to continuous improvement and personal growth, always seeking new challenges and opportunities to learn and expand my skill set. I believe that the key to success lies in embracing change and being open to new ideas and approaches. By staying curious and adaptable, I am able to navigate the ever-changing landscape of technology and deliver solutions that are both relevant and impactful.
            </p>
            <p>
              My goal is to inspire others to embrace the power of technology and use it to drive positive change in their own lives and communities. I am passionate about sharing my knowledge and experiences with others, fostering an environment of collaboration and innovation that empowers everyone to achieve their full potential. Together, we can create a brighter future, one project at a time.
            </p>
          </motion.section>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
