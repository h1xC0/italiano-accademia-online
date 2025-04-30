
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionHeading from './SectionHeading';
import { cn } from '@/lib/utils';

const About: React.FC = () => {
  const animation1 = useScrollAnimation();
  const animation2 = useScrollAnimation({ delay: 100 });
  const animation3 = useScrollAnimation({ delay: 200 });
  const imageAnimation = useScrollAnimation();
  
  return (
    <section id="about" className="bg-italian-navy section-padding">
      <div className="container">
        <SectionHeading 
          title="About Your Teacher" 
          subtitle="Discover the passion and expertise behind your Italian language journey"
        />
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            ref={imageAnimation.ref} 
            className={cn(
              "relative",
              imageAnimation.isVisible ? "animate-fade-in" : "opacity-0"
            )}
          >
            <div className="absolute inset-0 bg-italian-terracotta transform translate-x-4 translate-y-4 rounded-lg"></div>
            <img 
              src="https://thumbs.dreamstime.com/b/online-foreign-languages-tutoring-joyful-female-teacher-giving-italian-class-pointing-blackboard-basic-grammar-rules-209220580.jpg" 
              alt="Italian Teacher" 
              className="relative z-10 rounded-lg shadow-xl w-full h-full object-cover"
            />
          </div>
          
          <div>
            <div 
              ref={animation1.ref} 
              className={cn(
                "mb-6",
                animation1.isVisible ? "animate-fade-in" : "opacity-0"
              )}
            >
              <h3 className="text-2xl font-semibold text-italian-gold mb-4">
                Lucia
              </h3>
              <p className="text-italian-cream/80">
                Ciao! I'm Lucia, a native Italian speaker with over 10 years of teaching experience. 
                Born and raised in Catania, I bring authentic Italian culture and language to each of my lessons.
              </p>
            </div>
            
            <div 
              ref={animation2.ref} 
              className={cn(
                "mb-6",
                animation2.isVisible ? "animate-fade-in" : "opacity-0"
              )}
            >
              <h4 className="text-xl font-semibold text-italian-cream mb-3">
                My Teaching Philosophy
              </h4>
              <p className="text-italian-cream/80">
                I believe language learning should be immersive, practical, and enjoyable. My lessons combine 
                conversational practice with grammar fundamentals, cultural insights, and real-life applications.
                Whether you're learning for travel, work, or personal enrichment, I tailor my approach to your goals.
              </p>
            </div>
            
            <div 
              ref={animation3.ref} 
              className={cn(
                animation3.isVisible ? "animate-fade-in" : "opacity-0"
              )}
            >
              <h4 className="text-xl font-semibold text-italian-cream mb-3">
                Credentials & Experience
              </h4>
              <ul className="list-disc list-inside text-italian-cream/80 space-y-2">
                <li>Master's degree in Language Education from University of Bologna</li>
                <li>Certified language instructor with CELTA qualification</li>
                <li>Former lecturer at Instituto Italiano di Cultura</li>
                <li>Experience teaching students from 20+ countries</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
