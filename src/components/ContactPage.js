import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          apikey: '637b2841-b8d7-45d7-8b07-bd3be967d50e',
          ...formData,
        }),
      });
      const result = await response.json();
      console.log(result);
      // Assuming the API response indicates success
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen text-futuristic-gold p-5">
      <div className="flex flex-col md:flex-row justify-center w-full max-w-6xl">
        {/* Left Card: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="border-4 border-futuristic-gold rounded-lg p-8 md:w-1/2 flex flex-col items-center space-y-4"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Get in Touch
          </motion.h2>
          {isSubmitted ? (
            <motion.p 
              className="text-lg text-green-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Message sent successfully!
            </motion.p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full">
              <motion.input 
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="p-3 md:p-4 bg-transparent border-b-2 border-futuristic-gold focus:outline-none text-lg md:text-xl"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              />
              <motion.input 
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="p-3 md:p-4 bg-transparent border-b-2 border-futuristic-gold focus:outline-none text-lg md:text-xl"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              />
              <motion.textarea 
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className="p-3 md:p-4 bg-transparent border-b-2 border-futuristic-gold focus:outline-none text-lg md:text-xl"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              ></motion.textarea>
              <motion.button 
                type="submit"
                className="bg-futuristic-gold text-futuristic-black p-3 md:p-4 rounded hover:bg-opacity-90 transition-opacity duration-300 text-lg md:text-xl"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                Send Message
              </motion.button>
            </form>
          )}
        </motion.div>

        {/* Right Card: Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="border-4 border-futuristic-gold rounded-lg p-6 md:w-1/2 flex flex-col items-center space-y-4 mt-8 md:mt-0 md:ml-8"
        >
          <motion.h3 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Contact Information
          </motion.h3>
          <motion.div 
            className="flex flex-col space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-lg md:text-xl">Email: yahyabinusman7@gmail.com</p>
            <p className="text-lg md:text-xl">Phone: +92 302 0499289</p>
            <p className="text-lg md:text-xl">Address: PIA Housing Society, Lahore, Pakistan</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
