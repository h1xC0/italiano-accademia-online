
import React, { useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionHeading from './SectionHeading';
import { cn } from '@/lib/utils';

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  image: string;
}

const testimonials: TestimonialProps[] = [
  {
    quote: "Learning with Sophia has been transformative. Her teaching style makes complex grammar concepts easy to understand, and her cultural insights have given me a deeper appreciation for Italy.",
    name: "Marco Johnson",
    title: "Learning for 8 months",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "The group classes are fantastic! I've not only improved my Italian but made friends with fellow language enthusiasts. The conversations are always engaging and fun.",
    name: "Emma Rodriguez",
    title: "Learning for 1 year",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    quote: "As someone preparing to move to Rome for work, these lessons have been invaluable. The focus on practical, everyday Italian has given me the confidence I need for my relocation.",
    name: "David Chen",
    title: "Learning for 6 months",
    image: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  {
    quote: "Sophia's passion for the Italian language is contagious! Her lessons are the perfect blend of structured learning and casual conversation. I look forward to them every week.",
    name: "Sarah Miller",
    title: "Learning for 3 months",
    image: "https://randomuser.me/api/portraits/women/26.jpg"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, isVisible } = useScrollAnimation();
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section id="testimonials" className="bg-italian-charcoal section-padding">
      <div className="container">
        <SectionHeading 
          title="Student Testimonials" 
          subtitle="Hear what my students have to say about their learning experience"
          center
        />
        
        <div
          ref={ref}
          className={cn(
            "max-w-4xl mx-auto relative py-10",
            isVisible ? "animate-fade-in" : "opacity-0"
          )}
        >
          {/* Testimonial Card */}
          <div className="bg-italian-navy/50 rounded-xl p-8 shadow-xl border border-italian-navy/20">
            <div className="flex flex-col items-center mb-6">
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-italian-terracotta mb-4">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h4 className="text-xl font-semibold text-italian-cream">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-italian-cream/70 text-sm">
                  {testimonials[currentIndex].title}
                </p>
              </div>
            </div>
            
            <blockquote className="text-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-8 w-8 text-italian-terracotta/40 mx-auto mb-2" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              
              <div className="relative overflow-hidden h-32">
                <div className={`transition-all duration-500 ease-in-out`}>
                  <p className="text-italian-cream/90 text-lg italic">
                    "{testimonials[currentIndex].quote}"
                  </p>
                </div>
              </div>
            </blockquote>
            
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full",
                    index === currentIndex ? "bg-italian-terracotta" : "bg-italian-cream/30"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between pointer-events-none px-4">
            <button 
              onClick={prevTestimonial}
              className="bg-italian-navy/70 text-italian-cream w-10 h-10 rounded-full flex items-center justify-center hover:bg-italian-terracotta transition-colors pointer-events-auto"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            <button 
              onClick={nextTestimonial}
              className="bg-italian-navy/70 text-italian-cream w-10 h-10 rounded-full flex items-center justify-center hover:bg-italian-terracotta transition-colors pointer-events-auto"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
