
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={cn(
      'fixed top-0 left-0 w-full z-50 transition-all duration-300',
      isScrolled ? 'bg-italian-navy/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'
    )}>
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="text-italian-terracotta text-2xl font-bold font-playfair">
            Italiano
          </span>
          <span className="hidden sm:inline text-italian-cream text-xl">Accademia</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-italian-cream/80 hover:text-italian-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button className="bg-italian-terracotta hover:bg-italian-terracotta/90 text-white">
            <a href="https://www.facebook.com/lucia.italianteacher" >
              Book Lesson
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-italian-cream p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-italian-navy/95 backdrop-blur-md">
          <div className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-italian-cream/80 hover:text-italian-gold transition-colors py-2 px-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button className="bg-italian-terracotta hover:bg-italian-terracotta/90 text-white w-full mt-2">
              Book Lesson
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
