
import { useState, useEffect, useRef } from 'react';

interface ScrollAnimationProps {
  threshold?: number;
  delay?: number;
}

export function useScrollAnimation({ threshold = 0.1, delay = 0 }: ScrollAnimationProps = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the element enters the viewport
        if (entry.isIntersecting) {
          // Add a delay if needed
          if (delay > 0) {
            const timeout = setTimeout(() => {
              setIsVisible(true);
            }, delay);
            return () => clearTimeout(timeout);
          } else {
            setIsVisible(true);
          }
        }
      },
      {
        threshold,
      }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, delay]);

  return { ref, isVisible };
}
