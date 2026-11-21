import {motion, useReducedMotion, useScroll, useSpring} from 'motion/react';

export function ScrollProgressBar() {
  const {scrollYProgress} = useScroll();
  const prefersReducedMotion = useReducedMotion();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px] w-full bg-[#D4AF37]/10"
    >
      <motion.div
        style={{scaleX: prefersReducedMotion ? scrollYProgress : smoothProgress}}
        className="h-full w-full origin-left bg-gradient-to-r from-[#9D7B22] via-[#D4AF37] to-[#F3DF98] shadow-[0_0_8px_rgba(212,175,55,0.55)] will-change-transform"
      />
    </div>
  );
}
