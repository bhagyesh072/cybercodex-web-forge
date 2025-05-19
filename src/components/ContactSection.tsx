
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactSection = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thanks for contacting us! We'll get back to you as soon as possible.",
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-header inline-block mx-auto">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a question or want to work with us? Reach out using the form below 
            or contact us directly through any of the provided channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold text-cyber-blue-dark mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-cyber-blue bg-opacity-10 p-3 rounded-full mr-4">
                  <Mail className="text-cyber-blue" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-gray-600">contact@cybercodex.tech</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-cyber-blue bg-opacity-10 p-3 rounded-full mr-4">
                  <MapPin className="text-cyber-blue" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-gray-600">Bengaluru, Karnataka, India</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-cyber-blue bg-opacity-10 p-3 rounded-full mr-4">
                  <Phone className="text-cyber-blue" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-gray-600">+91 9876543210</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-cyber-blue bg-opacity-10 p-3 rounded-full text-cyber-blue hover:bg-opacity-20 transition-all">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a href="#" className="bg-cyber-blue bg-opacity-10 p-3 rounded-full text-cyber-blue hover:bg-opacity-20 transition-all">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold text-cyber-blue-dark mb-6">Send Us A Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="contact-name">Name</Label>
                  <Input id="contact-name" placeholder="Your name" required className="form-input" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-email">Email</Label>
                  <Input id="contact-email" type="email" placeholder="Your email" required className="form-input" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="contact-subject">Subject</Label>
                <Input id="contact-subject" placeholder="How can we help you?" required className="form-input" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="contact-message">Message</Label>
                <Textarea
                  id="contact-message"
                  placeholder="Your message..."
                  required
                  className="form-input min-h-[150px]"
                />
              </div>
              
              <Button type="submit" className="cta-button w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
