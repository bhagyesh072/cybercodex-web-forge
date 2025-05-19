
import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cyber-charcoal text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Cyber<span className="text-cyber-blue">Codex</span>
            </h3>
            <p className="text-gray-300 max-w-xs">
              Innovating at the intersection of technology and creativity to build tomorrow's digital solutions.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-cyber-blue transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#internships" className="text-gray-300 hover:text-cyber-blue transition-colors">
                  Join Our Team
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-cyber-blue transition-colors">
                  Our Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-cyber-blue transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Connect With Us</h4>
            <p className="text-gray-300 mb-4">
              Email: <a href="mailto:contact@cybercodex.tech" className="text-cyber-blue hover:underline">
                contact@cybercodex.tech
              </a>
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/cybercodex" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyber-blue transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com/company/cybercodex" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyber-blue transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} CyberCodex. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
