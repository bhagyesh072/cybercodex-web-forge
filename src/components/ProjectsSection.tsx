
import React from 'react';
import { Code, Image, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  featured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, techStack, image, featured = false }) => {
  return (
    <div className={`project-card animate-on-scroll ${featured ? 'md:col-span-2' : ''}`}>
      <div className="h-48 bg-gray-200 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
          <h3 className="text-white text-xl font-bold">{title}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, idx) => (
            <Badge key={idx} variant="outline" className="bg-blue-50 text-cyber-blue border-cyber-blue">
              {tech}
            </Badge>
          ))}
        </div>
        <button className="group flex items-center text-cyber-blue font-semibold hover:text-cyber-blue-dark">
          View Project <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "AI Meme Generator",
      description: "An innovative tool that combines OpenCV, Reddit API, and React to automatically generate memes based on trending topics and image recognition.",
      techStack: ["Python", "TensorFlow", "React", "OpenCV", "Reddit API"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      title: "Smart Inventory System",
      description: "An IoT-based inventory management system that uses sensors and machine learning to track stock levels in real-time.",
      techStack: ["Python", "IoT", "Machine Learning", "React"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Health Monitoring Dashboard",
      description: "A comprehensive dashboard for healthcare professionals to monitor patient vitals and medication adherence in real-time.",
      techStack: ["React", "Node.js", "MongoDB", "D3.js"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-header inline-block mx-auto">Our Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We build innovative solutions using cutting-edge technologies. Here's a showcase of 
            some of the exciting projects we've been working on.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard
              key={idx}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              image={project.image}
              featured={project.featured}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
