
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { cn } from '../lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  center = false,
  className
}) => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <div 
      ref={ref} 
      className={cn(
        'mb-12',
        center ? 'text-center' : '',
        isVisible ? 'opacity-100' : 'opacity-0',
        className
      )}
    >
      <h2 className={cn(
        'text-3xl md:text-4xl lg:text-5xl font-bold mb-4',
        isVisible ? 'animate-fade-in' : ''
      )}>
        {title}
      </h2>
      
      {subtitle && (
        <p className={cn(
          'text-lg text-italian-cream/80 max-w-3xl',
          center ? 'mx-auto' : '',
          isVisible ? 'animate-fade-in animate-delay-200' : ''
        )}>
          {subtitle}
        </p>
      )}
      
      <div className={cn(
        'h-1 w-24 bg-italian-terracotta mt-6',
        center ? 'mx-auto' : '',
        isVisible ? 'animate-fade-in animate-delay-300' : ''
      )} />
    </div>
  );
};

export default SectionHeading;
