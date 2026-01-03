import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-neutral-950 text-white border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        
        <h2 className="text-2xl font-heading uppercase tracking-[0.2em] mb-8">
          Makeup by Tanya Bhartiya
        </h2>

        <div className="flex space-x-8 mb-12">
          {/* Instagram */}
          <a 
            href="https://www.instagram.com/mua_tanyabhartiya/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center border border-white/20 rounded-full hover:bg-white hover:text-jet transition-all duration-300"
            aria-label="Visit Instagram Profile"
          >
            <i className="fab fa-instagram text-lg"></i>
          </a>
          
          {/* Email */}
          <a 
            href="mailto:tanyabhartiya@yahoo.com" 
            className="w-12 h-12 flex items-center justify-center border border-white/20 rounded-full hover:bg-white hover:text-jet transition-all duration-300"
            aria-label="Send Email"
          >
            <i className="far fa-envelope text-lg"></i>
          </a>
          
          {/* WhatsApp - Note: Replace 919876543210 with the actual WhatsApp number */}
          <a 
            href="https://wa.me/6300913379" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center border border-white/20 rounded-full hover:bg-white hover:text-jet transition-all duration-300"
            aria-label="Chat on WhatsApp"
          >
            <i className="fab fa-whatsapp text-lg"></i>
          </a>
        </div>

        <div className="text-xs text-gray-500 font-light tracking-widest uppercase space-y-2">
          <p>© 2025 Makeup by Tanya Bhartiya. All rights reserved.</p>
          <p>Bengaluru, India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;