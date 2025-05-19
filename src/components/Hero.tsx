
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToInternships = () => {
    document.getElementById('internships')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-br from-white via-blue-50 to-blue-100">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
        style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUgMEw2MCA1NVYwSDVaIiBmaWxsPSJjdXJyZW50Q29sb3IiLz4KPHBhdGggZD0iTTAgNUw1NSA2MEgwVjVaIiBmaWxsPSJjdXJyZW50Q29sb3IiLz4KPC9zdmc+')" }}
      />
      <div className="container mx-auto px-4 z-10">
        <div className={`max-w-2xl transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <p className="text-cyber-blue font-semibold text-lg mb-2">Innovate. Create. Transform.</p>
          <h1 className="text-4xl md:text-6xl font-bold text-cyber-charcoal mb-6">
            Welcome to <span className="text-cyber-blue-dark">Cyber</span>
            <span className="text-cyber-blue">Codex</span>
          </h1>
          <div className="h-12 mb-6">
            <span className="hero-animated-text text-xl md:text-2xl text-cyber-charcoal">
              Where Technology Meets Innovation
            </span>
          </div>
          <p className="text-lg text-gray-700 mb-8 max-w-lg">
            We build cutting-edge solutions at the intersection of AI, web technologies, 
            and software development to solve tomorrow's challenges today.
          </p>
          <button 
            onClick={scrollToInternships} 
            className="cta-button group flex items-center"
          >
            Join Our Team
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
