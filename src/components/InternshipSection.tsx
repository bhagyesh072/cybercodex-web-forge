
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

interface JobRoleProps {
  title: string;
  requirements: string[];
}

const JobRole: React.FC<JobRoleProps> = ({ title, requirements }) => {
  return (
    <div className="animate-on-scroll bg-white p-6 rounded-lg shadow-md border-l-4 border-cyber-blue">
      <h3 className="text-xl font-semibold text-cyber-blue-dark mb-3">{title}</h3>
      <h4 className="font-medium text-gray-700 mb-2">Requirements:</h4>
      <ul className="list-disc pl-5 space-y-1 text-gray-600">
        {requirements.map((req, idx) => (
          <li key={idx}>{req}</li>
        ))}
      </ul>
    </div>
  );
};

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, role }) => {
  return (
    <div className="animate-on-scroll bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4 text-cyber-blue">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 11L8 17H6L8 11H6V7H10V11ZM18 11L16 17H14L16 11H14V7H18V11Z" fill="currentColor" />
        </svg>
      </div>
      <p className="text-gray-600 mb-4 italic">{quote}</p>
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  );
};

const InternshipSection = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Received",
      description: "Thanks for applying! We'll review your application and get back to you soon.",
    });
  };

  const jobRoles = [
    {
      title: "Frontend Developer Intern",
      requirements: [
        "Knowledge of React.js and modern JavaScript",
        "Understanding of responsive design principles",
        "Familiarity with version control systems",
        "Basic understanding of UI/UX principles"
      ]
    },
    {
      title: "AI/ML Intern",
      requirements: [
        "Experience with Python and data science libraries",
        "Understanding of machine learning algorithms",
        "Knowledge of TensorFlow or PyTorch",
        "Strong analytical and problem-solving skills"
      ]
    },
    {
      title: "Backend Developer Intern",
      requirements: [
        "Knowledge of Python, Node.js, or similar backend technologies",
        "Understanding of RESTful APIs and database design",
        "Familiarity with server deployment and management",
        "Basic understanding of security best practices"
      ]
    }
  ];

  const testimonials = [
    {
      quote: "My internship at CyberCodex was an incredible learning experience. I gained practical skills working on cutting-edge projects that I couldn't have learned elsewhere.",
      name: "Rahul Singh",
      role: "Former Frontend Intern"
    },
    {
      quote: "The mentorship I received at CyberCodex was invaluable. I went from a beginner to confidently contributing to real-world AI projects in just a few months.",
      name: "Priya Sharma",
      role: "Former AI/ML Intern"
    },
    {
      quote: "CyberCodex provided me with the perfect environment to grow my technical skills while working on meaningful projects with real-world impact.",
      name: "Aditya Patel",
      role: "Former Backend Intern"
    }
  ];

  return (
    <section id="internships" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-header inline-block mx-auto">Join Our Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team. As an intern at CyberCodex, 
            you'll work on exciting projects and learn from experienced professionals in the tech industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {jobRoles.map((role, idx) => (
            <JobRole key={idx} title={role.title} requirements={role.requirements} />
          ))}
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-8">What Our Former Interns Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <Testimonial 
                key={idx}
                quote={testimonial.quote}
                name={testimonial.name}
                role={testimonial.role}
              />
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Apply Now</h3>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" required className="form-input" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" required className="form-input" />
              </div>
            </div>
            
            <div className="space-y-2 mb-4">
              <Label htmlFor="role">Role You're Applying For</Label>
              <select id="role" className="form-input" required>
                <option value="">Select a role</option>
                <option value="frontend">Frontend Developer Intern</option>
                <option value="aiml">AI/ML Intern</option>
                <option value="backend">Backend Developer Intern</option>
              </select>
            </div>
            
            <div className="space-y-2 mb-4">
              <Label htmlFor="resume">Resume (PDF)</Label>
              <Input id="resume" type="file" accept=".pdf" required className="form-input" />
            </div>
            
            <div className="space-y-2 mb-6">
              <Label htmlFor="message">Why do you want to join CyberCodex?</Label>
              <Textarea id="message" placeholder="Tell us about yourself and why you're interested in this role..." 
                      required className="form-input min-h-[120px]" />
            </div>
            
            <Button type="submit" className="cta-button w-full">
              Submit Application
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default InternshipSection;
