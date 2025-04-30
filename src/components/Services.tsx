
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionHeading from './SectionHeading';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  price: string;
  features: string[];
  popular?: boolean;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title, 
  description, 
  icon, 
  price, 
  features,
  popular = false,
  delay
}) => {
  const { ref, isVisible } = useScrollAnimation({ delay });

  return (
    <div
      ref={ref}
      className={cn(
        "bg-italian-charcoal rounded-xl p-6 shadow-xl border relative",
        popular ? "border-italian-gold" : "border-italian-charcoal/50",
        isVisible ? "animate-fade-in" : "opacity-0"
      )}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-italian-gold text-italian-navy px-4 py-1 rounded-full font-medium text-sm">
          Most Popular
        </div>
      )}
      
      <div className="mb-6 text-italian-terracotta text-4xl">
        {icon}
      </div>
      
      <h3 className="text-xl font-bold mb-2 text-italian-cream">
        {title}
      </h3>
      
      <p className="text-italian-cream/70 mb-4 h-20">
        {description}
      </p>
      
      <div className="mb-6">
        <span className="text-2xl font-bold text-italian-gold">{price}</span>
        <span className="text-italian-cream/70"> / lesson</span>
      </div>
      
      <ul className="mb-6 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-italian-cream/80">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-italian-gold shrink-0 mt-0.5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button
        className={cn(
          "w-full",
          popular
            ? "bg-italian-gold hover:bg-italian-gold/90 text-italian-navy"
            : "bg-italian-terracotta hover:bg-italian-terracotta/90 text-white"
        )}
      >
        <a href='https://www.facebook.com/lucia.italianteacher'>
        Book Now
        </a>
      </Button>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: "1-on-1 Private Lessons",
      description: "Personalized attention and customized curriculum to help you progress at your optimal pace.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      ),
      price: "$45",
      features: [
        "60-minute lessons",
        "Customized learning materials",
        "Homework & practice exercises",
        "Progress tracking",
        "Flexible scheduling"
      ],
      popular: true
    },
    {
      title: "Group Classes",
      description: "Learn with peers in a collaborative environment that encourages conversation practice.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      price: "$25",
      features: [
        "90-minute sessions",
        "3-6 students per group",
        "Interactive activities",
        "Cultural discussions",
        "Made-for-group materials"
      ]
    },
    {
      title: "Conversation Practice",
      description: "Focus on speaking fluency, pronunciation, and real-world Italian conversation skills.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      ),
      price: "$35",
      features: [
        "45-minute sessions",
        "Topic-based discussions",
        "Pronunciation feedback",
        "Vocabulary expansion",
        "Cultural context"
      ]
    }
  ];

  return (
    <section id="services" className="bg-gradient-to-b from-italian-navy to-italian-charcoal section-padding">
      <div className="container">
        <SectionHeading 
          title="Services Offered" 
          subtitle="Choose the perfect learning format that fits your goals and schedule"
          center
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              price={service.price}
              features={service.features}
              popular={service.popular}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
