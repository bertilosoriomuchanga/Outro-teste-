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
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optimization: stop observing the element once it's visible
          observer.unobserve(entry.target);
        }
      },
      options
    );

    observer.observe(node);

    // Cleanup function to disconnect the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return [ref, isVisible];
};
