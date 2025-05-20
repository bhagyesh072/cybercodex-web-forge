import React, { useEffect, useState } from 'react';
import { CirclePlay, Layers3, Code, MousePointer, Zap, TrendingUp } from 'lucide-react';

const AnimatedModels = () => {
  const [activeIcon, setActiveIcon] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const technologies = [
    { icon: <Code size={32} />, label: "Clean Code", description: "We write elegant, maintainable code" },
    { icon: <Layers3 size={32} />, label: "Full Stack", description: "End-to-end solutions for complex problems" },
    { icon: <CirclePlay size={32} />, label: "AI & ML", description: "Cutting-edge artificial intelligence" },
    { icon: <MousePointer size={32} />, label: "UX Design", description: "Beautiful, intuitive interfaces" },
    { icon: <Zap size={32} />, label: "Performance", description: "Speed optimized applications" },
    { icon: <TrendingUp size={32} />, label: "Innovation", description: "Pushing boundaries of technology" },
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-cyber-blue-light/5 to-white">
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-gradient-to-tr from-cyber-blue/10 to-cyber-blue-light/20 rounded-full animate-float"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="section-header inline-block mx-auto">Our Technology</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our cutting-edge tech stack and innovative solutions that power
            the future of digital experiences.
          </p>
        </div>

        <div className="perspective-container">
          <div
            className="tech-grid grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto"
            style={{
              transform: `rotateX(${mousePosition.y / 30}deg) rotateY(${-mousePosition.x / 30}deg)`,
              transition: 'transform 0.2s ease-out',
            }}
          >
            {technologies.map((tech, idx) => (
              <div
                key={idx}
                className="tech-card animate-on-scroll"
                style={{ animationDelay: `${idx * 100}ms` }}
                onMouseEnter={() => setActiveIcon(idx)}
                onMouseLeave={() => setActiveIcon(null)}
              >
                <div
                  className={`relative z-10 flex flex-col items-center p-6 rounded-xl bg-white border-2 
                    transition-all duration-300 hover:shadow-xl group overflow-hidden
                    ${activeIcon === idx ? 'border-cyber-blue scale-105' : 'border-gray-100'}`}
                >
                  {/* Decorative gradient blob */}
                  <div className="absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-br from-cyber-blue-dark to-cyber-blue rounded-full opacity-0 group-hover:opacity-50 transition-opacity z-0 pointer-events-none" />

                  {/* Icon */}
                  <div className={`icon-wrapper relative z-10 mb-4 text-cyber-blue transition-transform duration-300 ${activeIcon === idx ? 'scale-110' : ''}`}>
                    {tech.icon}
                  </div>

                  {/* Text */}
                  <h3 className="text-xl font-bold mb-2 text-cyber-blue-dark z-10">{tech.label}</h3>
                  <p className="text-gray-600 text-center z-10">{tech.description}</p>

                  {/* Pulse Ring */}
                  <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${activeIcon === idx ? 'opacity-100' : 'opacity-0'} z-0 pointer-events-none`}>
                    <span className="absolute inset-0 rounded-xl border-2 border-cyber-blue animate-pulse"></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Orb and Lines */}
        <div className="mt-20 relative">
          <div className="code-wave h-40 md:h-60 w-full overflow-hidden relative z-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute h-1 bg-gradient-to-r from-cyber-blue/20 via-cyber-blue to-cyber-blue/20 rounded-full animate-float"
                style={{
                  width: `${Math.random() * 30 + 70}%`,
                  left: `${Math.random() * 20}%`,
                  top: `${(i / 20) * 100}%`,
                }}
              />
            ))}
          </div>

          <div className="cyber-orb absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
            <div className="relative w-40 h-40 md:w-60 md:h-60">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyber-blue-light to-cyber-blue animate-pulse-slow opacity-70"></div>
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-cyber-blue-dark to-cyber-blue opacity-90"></div>
              <div className="absolute inset-8 rounded-full bg-white opacity-30 animate-pulse"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white z-10">
                <Zap size={64} className="animate-float" strokeWidth={1} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedModels;
