import {ReactNode, useEffect, useRef, useState} from 'react';

export type RevealVariant = 'fade-up' | 'fade-left' | 'fade-right' | 'zoom-in';
export type RevealDuration = 550 | 650 | 750 | 850;
export type RevealDelayStep = 0 | 1 | 2 | 3 | 4 | 5 | 6;

interface ScrollRevealProps {
  children: ReactNode;
  variant?: RevealVariant;
  duration?: RevealDuration;
  delayStep?: RevealDelayStep;
  immediate?: boolean;
  className?: string;
}

const VARIANT_CLASS: Record<RevealVariant, string> = {
  'fade-up': 'sr-fade-up',
  'fade-left': 'sr-fade-left',
  'fade-right': 'sr-fade-right',
  'zoom-in': 'sr-zoom-in',
};

const DURATION_CLASS: Record<RevealDuration, string> = {
  550: 'sr-dur-550',
  650: 'sr-dur-650',
  750: 'sr-dur-750',
  850: 'sr-dur-850',
};

const DELAY_CLASS: Record<RevealDelayStep, string> = {
  0: 'sr-delay-0',
  1: 'sr-delay-1',
  2: 'sr-delay-2',
  3: 'sr-delay-3',
  4: 'sr-delay-4',
  5: 'sr-delay-5',
  6: 'sr-delay-6',
};

export function ScrollReveal({
  children,
  variant = 'fade-up',
  duration = 650,
  delayStep = 0,
  immediate = false,
  className = '',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(immediate);

  useEffect(() => {
    if (immediate) {
      setVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    if (prefersReducedMotion) {
      setVisible(true);
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -48px 0px',
      },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`sr-reveal ${VARIANT_CLASS[variant]} ${DURATION_CLASS[duration]} ${DELAY_CLASS[delayStep]} ${
        visible ? 'sr-visible' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
