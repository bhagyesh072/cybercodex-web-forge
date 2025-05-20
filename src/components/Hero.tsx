
import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Sparkles, RocketIcon } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);

    // Improved mouse movement effect for particles
    const handleMouseMove = (e: MouseEvent) => {
      if (!particlesRef.current) return;

      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;

      particlesRef.current.style.transform = `translate(${mouseX * 15}px, ${mouseY * 15}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToInternships = () => {
    document.getElementById('internships')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden pt-28 md:pt-20">
      {/* 3D Gradient Background - fixed z-index */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue-dark via-cyber-blue-light/30 to-white z-0"></div>

      {/* Animated mesh grid - fixed z-index */}
      <div className="absolute inset-0 z-0">
        <div className="mesh-grid"></div>
      </div>

      {/* Animated particles - improved positioning */}
      <div
        ref={particlesRef}
        className="absolute inset-0 z-1"
      >
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              background: `rgba(33, 150, 243, ${Math.random() * 0.5 + 0.2})`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              boxShadow: '0 0 10px rgba(33, 150, 243, 0.8)',
              filter: 'blur(1px)',
              animation: `float-${i % 5} ${8 + i % 10}s infinite ease-in-out`,
            }}
          />
        ))}
      </div>

      {/* Glowing orbs - fixed positioning */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-cyber-blue/50 to-cyber-blue-light/50 blur-3xl animate-pulse-slow z-0"></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-cyber-blue-light/30 to-cyber-accent/30 blur-3xl animate-pulse-slow z-0"></div>

      {/* Content - improved z-index and spacing */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left side - Text content with improved visibility */}
          <div className={`max-w-2xl transition-all duration-1000 md:w-1/2 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center mb-4 space-x-2">
              <Sparkles className="text-cyber-blue w-6 h-6" />
              <p className="text-cyber-blue font-semibold text-lg">Innovate. Create. Transform.</p>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyber-blue-dark via-cyber-blue to-cyber-accent">
              Welcome to <span className="font-extrabold block md:inline">CyberCodex</span>
            </h1>

            <div className="h-16 md:h-12 mb-6 relative overflow-visible">
              <span className="hero-animated-text text-xl md:text-2xl lg:text-3xl text-cyber-charcoal font-light">
                Where Technology Meets Innovation
              </span>
            </div>

            <p className="text-lg text-gray-700 mb-8 max-w-lg leading-relaxed">
              We build cutting-edge solutions at the intersection of AI, web technologies,
              and software development to solve tomorrow's challenges today.
            </p>

            {/* <div className="flex space-x-4">
              <button
                onClick={scrollToInternships}
                className="cta-button group flex items-center"
              >
                <span className="mr-2">
                  <RocketIcon className="w-5 h-5" />
                </span>
                Join Our Team
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="px-6 py-3 rounded-md border-2 border-cyber-blue text-cyber-blue-dark font-semibold transition-all hover:bg-cyber-blue/10 flex items-center group">
                Learn More
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div> */}
          </div>

          {/* Right side - 3D element - fixed positioning and z-index */}

          {/* <div className="md:w-1/2 mt-12 md:mt-0 hidden md:block"> */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <div className={`cyber-sphere-container transition-all duration-1000 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              <div className="cyber-sphere">
                <div className="cyber-sphere-inner">
                  <div className="cyber-sphere-core"></div>
                </div>
                <div className="cyber-sphere-ring"></div>
                <div className="cyber-sphere-ring" style={{ animationDelay: '0.5s' }}></div>
                <div className="cyber-sphere-ring" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 w-full">
          <button
            onClick={scrollToInternships}
            className="w-full md:w-auto cta-button group flex items-center justify-center"
          >
            <span className="mr-2">
              <RocketIcon className="w-5 h-5" />
            </span>
            Join Our Team
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>

          <button className="w-full md:w-auto px-6 py-3 rounded-md border-2 border-cyber-blue text-cyber-blue-dark font-semibold transition-all hover:bg-cyber-blue/10 flex items-center justify-center group">
            Learn More
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Scroll indicator - improved visibility */}
        <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <div className="w-8 h-12 rounded-full border-2 border-cyber-blue flex items-center justify-center">
            <div className="w-2 h-2 bg-cyber-blue rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
