import {PointerEvent, ReactNode, useEffect, useRef} from 'react';

interface TiltCardProps {
  children: ReactNode;
  maxTiltDeg?: number;
  className?: string;
}

export function TiltCard({
  children,
  maxTiltDeg = 4.8,
  className = '',
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const canTiltRef = useRef(false);

  useEffect(() => {
    const hoverQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const updateCapability = () => {
      canTiltRef.current = hoverQuery.matches && !motionQuery.matches;
      if (!canTiltRef.current && cardRef.current) {
        cardRef.current.classList.remove('tilt-active');
        cardRef.current.style.setProperty('--tilt-rx', '0deg');
        cardRef.current.style.setProperty('--tilt-ry', '0deg');
      }
    };

    updateCapability();
    hoverQuery.addEventListener('change', updateCapability);
    motionQuery.addEventListener('change', updateCapability);

    return () => {
      hoverQuery.removeEventListener('change', updateCapability);
      motionQuery.removeEventListener('change', updateCapability);
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!canTiltRef.current || e.pointerType !== 'mouse') return;
    const node = cardRef.current;
    if (!node) return;

    const rect = node.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;

    const clampedX = Math.max(-1, Math.min(1, nx));
    const clampedY = Math.max(-1, Math.min(1, ny));

    const rotateY = (clampedX * maxTiltDeg).toFixed(2);
    const rotateX = (-clampedY * maxTiltDeg).toFixed(2);

    if (rafRef.current !== null) {
      window.cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = window.requestAnimationFrame(() => {
      node.classList.add('tilt-active');
      node.style.setProperty('--tilt-rx', `${rotateX}deg`);
      node.style.setProperty('--tilt-ry', `${rotateY}deg`);
      rafRef.current = null;
    });
  };

  const handlePointerLeave = () => {
    if (rafRef.current !== null) {
      window.cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    const node = cardRef.current;
    if (!node) return;
    node.classList.remove('tilt-active');
    node.style.setProperty('--tilt-rx', '0deg');
    node.style.setProperty('--tilt-ry', '0deg');
  };

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={`tilt-card-shell ${className}`}
    >
      {children}
    </div>
  );
}
