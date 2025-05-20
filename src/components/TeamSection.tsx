
import React, { useEffect } from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  hasAvatar?: boolean;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, bio, hasAvatar = true }) => {
  // Function to get initials from name
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part.charAt(0))
      .join('');
  };

  return (
    <div className="animate-on-scroll flex flex-col items-center p-6">
      {hasAvatar ? (
        <div className="team-avatar">
          {getInitials(name)}
        </div>
      ) : null}
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-cyber-blue font-medium mb-3">{role}</p>
      <p className="text-center text-gray-600">{bio}</p>
    </div>
  );
};

const TeamSection = () => {
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
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-header inline-block mx-auto">Who We Are</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            At CyberCodex, we're on a mission to drive innovation in technology and create
            solutions that make a difference. Our team of passionate experts brings diverse
            skills to every project we undertake.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <TeamMember
            name="Divyansh Dhar Dwivedi"
            role="Founder"
            bio="Tech visionary with expertise in AI and software architecture. Passionate about creating innovative solutions that push technological boundaries."
          />

          <TeamMember
            name="Pratyush Mishra"
            role="Team Leader"
            bio="Experienced developer and team leader who excels at guiding projects from concept to completion with a focus on excellence and innovation."
          />

          <TeamMember
            name="Mr. Abhishek"
            role="Mentor"
            bio="Industry veteran providing guidance and expertise to help shape our technical direction and strategic vision."
          // hasAvatar={false}
          />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
