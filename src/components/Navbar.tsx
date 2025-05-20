
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-cyber-blue-dark">
            Cyber<span className="text-cyber-blue">Codex</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <button onClick={() => scrollTo('home')} className="nav-link">Home</button>
          <button onClick={() => scrollTo('about')} className="nav-link">About</button>
          <button onClick={() => scrollTo('internships')} className="nav-link">Join Us</button>
          {/* <button onClick={() => scrollTo('projects')} className="nav-link">Projects</button> */}
          <button onClick={() => scrollTo('contact')} className="nav-link">Contact</button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            className="text-cyber-blue-dark hover:text-cyber-blue hover:bg-transparent"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-slide-in">
          <div className="flex flex-col p-4 space-y-3">
            <button onClick={() => scrollTo('home')} className="nav-link text-left p-2">Home</button>
            <button onClick={() => scrollTo('about')} className="nav-link text-left p-2">About</button>
            <button onClick={() => scrollTo('internships')} className="nav-link text-left p-2">Join Us</button>
            <button onClick={() => scrollTo('projects')} className="nav-link text-left p-2">Projects</button>
            <button onClick={() => scrollTo('contact')} className="nav-link text-left p-2">Contact</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
