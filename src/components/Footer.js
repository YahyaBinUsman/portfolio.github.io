import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faFacebook, faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons';
import { faTimes as faClose } from '@fortawesome/free-solid-svg-icons'; // Rename faTimes as faClose

const Footer = () => {
  return (
    <footer className="bg-dragon-black text-dragon-gold p-4 text-center w-full">
      <p>Located in Lahore, Pakistan - The nucleus of innovation and progress.</p>
      <p>Let's shape the future together!</p>
      <div className="mt-4 flex justify-center">
        {/* Font Awesome Icons */}
        <a href="https://github.com/YahyaBinUsman" className="mr-4 text-xl lg:text-2xl"><FontAwesomeIcon icon={faGithub} /></a> {/* GitHub */}
        <a href="https://www.linkedin.com/in/yahya-bin-usman-9a4b39290/" className="mr-4 text-xl lg:text-2xl"><FontAwesomeIcon icon={faLinkedin} /></a> {/* LinkedIn */}
        <a href="https://twitter.com/yahya_bin_usman" className="mr-4 text-xl lg:text-2xl">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-8 h-8 fill-current text-dragon-gold">
            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
          </svg>
        </a> {/* X Logo */}
        <a href="https://www.facebook.com/profile.php?id=100092327559516" className="mr-4 text-xl lg:text-2xl"><FontAwesomeIcon icon={faFacebook} /></a> {/* Facebook */}
        <a href="https://www.instagram.com/yahya_bin_usman_445/" className="mr-4 text-xl lg:text-2xl"><FontAwesomeIcon icon={faInstagram} /></a> {/* Instagram */}
        <a href="https://www.youtube.com/channel/UCHUwLuPVsT0vGTmlo7K6coA" className="mr-4 text-xl lg:text-2xl"><FontAwesomeIcon icon={faYoutube} /></a> {/* YouTube */}
       
        {/* Add more icons as needed */}
      </div>
    </footer>
  );
};

export default Footer;
