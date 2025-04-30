
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.95), rgba(15, 23, 42, 0.8)), url("https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80") center/cover no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-italian-navy/30 to-italian-navy"></div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl">
          <h4 className={cn(
            'text-italian-gold font-lato font-light text-xl mb-4 tracking-widest',
            loaded ? 'animate-fade-in' : 'opacity-0'
          )}>
            BENVENUTI
          </h4>
          
          <h1 className={cn(
            'text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight text-shadow',
            loaded ? 'animate-fade-in animate-delay-100' : 'opacity-0'
          )}>
            Learn Italian in an <span className="text-italian-terracotta">Immersive</span> & Authentic Way
          </h1>
          
          <p className={cn(
            'text-lg md:text-xl text-italian-cream/90 mb-8 max-w-2xl',
            loaded ? 'animate-fade-in animate-delay-200' : 'opacity-0'
          )}>
            Experience the beauty of Italian language and culture through personalized lessons 
            tailored to your goals, whether you're a beginner or looking to perfect your skills.
          </p>
          
          <div className={cn(
            'flex flex-col sm:flex-row gap-4',
            loaded ? 'animate-fade-in animate-delay-300' : 'opacity-0'
          )}>
            <Button className="bg-italian-terracotta hover:bg-italian-terracotta/90 text-white text-lg px-8 py-6">
              Book Your First Lesson
            </Button>
            <Button variant="outline" className="border-italian-cream/30 text-italian-cream hover:bg-italian-cream/10 text-lg px-8 py-6">
              Learn More
            </Button>
          </div>
          
          <div className={cn(
            'flex items-center gap-6 mt-12',
            loaded ? 'animate-fade-in animate-delay-400' : 'opacity-0'
          )}>
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-italian-navy bg-gray-300 overflow-hidden">
                  <img 
                    src={`https://randomuser.me/api/portraits/men/${20 + i}.jpg`} 
                    alt="Student" 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="text-italian-cream/90 text-sm">
              <span className="text-italian-gold font-semibold">100+</span> happy students already learning
            </p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-italian-cream/50 hover:text-italian-cream transition-colors">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
