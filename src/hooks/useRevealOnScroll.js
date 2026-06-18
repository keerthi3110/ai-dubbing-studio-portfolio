import { useEffect, useRef, useState } from 'react';

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
};

export function useRevealOnScroll(delay = 0) {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(true);
        }
      });
    }, observerOptions);

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const className = `reveal-on-scroll${active ? ' active' : ''}`;
  const style = delay ? { transitionDelay: `${delay}ms` } : undefined;

  return { ref, className, style };
}
