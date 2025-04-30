
import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionHeading from './SectionHeading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  
  const { toast } = useToast();
  const animation = useScrollAnimation();
  const contactInfo = useScrollAnimation({ delay: 200 });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setLoading(false);
    }, 1500);
  };
  
  return (
    <section id="contact" className="bg-italian-navy section-padding">
      <div className="container">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Have questions or ready to start your Italian journey? Reach out to me!"
          center
        />
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div
            ref={contactInfo.ref}
            className={cn(
              "bg-italian-charcoal rounded-xl p-8 shadow-lg border border-italian-charcoal/50 h-fit",
              contactInfo.isVisible ? "animate-slide-in-left" : "opacity-0"
            )}
          >
            <h3 className="text-2xl font-semibold text-italian-cream mb-6">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-italian-gold p-2 rounded-full bg-italian-navy w-10 h-10 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <p className="text-italian-cream font-medium">Email</p>
                  <a href="mailto:contact@italiano-accademia.com" className="text-italian-cream/70 hover:text-italian-gold transition-colors">
                    contact@italiano-accademia.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="text-italian-gold p-2 rounded-full bg-italian-navy w-10 h-10 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-italian-cream font-medium">Phone</p>
                  <a href="tel:+31273314268" className="text-italian-cream/70 hover:text-italian-gold transition-colors">
                    +31 (273) 314 2680
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="text-italian-gold p-2 rounded-full bg-italian-navy w-10 h-10 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-italian-cream font-medium">Location</p>
                  <p className="text-italian-cream/70">
                    123 Main Street, Suite 456<br />
                    Netherlands, Gronigen
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="text-xl font-semibold text-italian-cream mb-4">
                Follow Me
              </h4>
              <div className="flex gap-4">
                <a 
                  href='https://www.facebook.com/lucia.italianteacher'
                  className="w-10 h-10 rounded-full bg-italian-navy flex items-center justify-center text-italian-cream hover:bg-italian-terracotta transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-italian-navy flex items-center justify-center text-italian-cream hover:bg-italian-terracotta transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-italian-navy flex items-center justify-center text-italian-cream hover:bg-italian-terracotta transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div
            ref={animation.ref}
            className={cn(
              "bg-italian-charcoal rounded-xl p-8 shadow-lg border border-italian-charcoal/50",
              animation.isVisible ? "animate-slide-in-right" : "opacity-0"
            )}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-italian-cream font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="bg-italian-navy/50 border-italian-navy/50 text-italian-cream placeholder:text-italian-cream/50"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-italian-cream font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your email address"
                    className="bg-italian-navy/50 border-italian-navy/50 text-italian-cream placeholder:text-italian-cream/50"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-italian-cream font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What is this regarding?"
                  className="bg-italian-navy/50 border-italian-navy/50 text-italian-cream placeholder:text-italian-cream/50"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-italian-cream font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message"
                  rows={6}
                  className="bg-italian-navy/50 border-italian-navy/50 text-italian-cream placeholder:text-italian-cream/50 resize-none"
                />
              </div>
              
              <Button
                type="submit"
                className="bg-italian-terracotta hover:bg-italian-terracotta/90 text-white w-full py-6"
                disabled={loading}
              >
                {loading ? "Sending Message..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
