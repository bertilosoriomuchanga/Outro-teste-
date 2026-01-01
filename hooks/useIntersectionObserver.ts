
import { useState, useEffect, useRef, RefObject } from 'react';

type IntersectionObserverOptions = {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
};

export const useIntersectionObserver = (
  options: IntersectionObserverOptions
): [RefObject<HTMLDivElement>, boolean] => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optional: unobserve after it becomes visible to avoid re-triggering
          // observer.unobserve(entry.target);
        }
      },
      {
        ...options,
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
  }, [ref, options]);

  return [ref, isVisible];
};
