
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TeamSection from '../components/TeamSection';
import InternshipSection from '../components/InternshipSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.8) {
          element.classList.add('animated');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once to check elements in view on load
    setTimeout(handleScroll, 200);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="min-h-screen">
      <div id="home">
        <Navbar />
        <Hero />
      </div>
      <TeamSection />
      <InternshipSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
