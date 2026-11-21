import {motion, useScroll, useTransform} from 'motion/react';
import {ArrowDownRight, Phone} from 'lucide-react';
import {useRef} from 'react';
import {HOTEL_FEATURE_IMAGES, HOTEL_INFO, getWhatsAppUrl} from '../data/hotelData';
import {LuxuryThreeBackdrop} from './LuxuryThreeBackdrop';
import {ResilientImage} from './ResilientImage';

interface HeroSectionProps {
  onExploreRooms: () => void;
}

export function HeroSection({onExploreRooms}: HeroSectionProps) {
  const heroRef = useRef<HTMLElement | null>(null);
  const {scrollYProgress} = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.1]);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative overflow-hidden bg-[#040812] pt-16"
    >
      {/* Full-Screen Hero Viewport */}
      <div className="relative flex min-h-[86vh] w-full items-center">
        {/* Parallax Real Hotel Entrance Photography */}
        <motion.div
          style={{y: bgY, scale: bgScale}}
          className="pointer-events-none absolute inset-0 z-0 will-change-transform"
        >
          <ResilientImage
            src={HOTEL_FEATURE_IMAGES.heroFacade}
            alt="Hotel Crystal N grand marble entrance facade in Gandhinagar"
            fallbackLabel="Hotel Crystal N · Grand Entrance"
            loading="eager"
            className="h-full w-full object-cover object-center"
          />
        </motion.div>

        {/* Measured Contrast Scrim */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-[#040812]/95 via-[#060E1E]/82 to-[#040812]/42"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-[#040812] via-transparent to-[#040812]/55"
        />

        {/* 3D Animated Crystal Prism & Champagne Dust Particles */}
        <LuxuryThreeBackdrop />

        {/* Foreground Semantic Content */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <motion.p
              initial={{opacity: 0, y: 12}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.55, ease: [0.16, 1, 0.3, 1]}}
              className="mb-4 text-xs font-medium tracking-[0.2em] text-[#E6CB7A] uppercase"
            >
              Sector 11 · Meghmalhar Complex · Gandhinagar
            </motion.p>

            <motion.h1
              initial={{opacity: 0, y: 18}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1]}}
              className="font-serif text-[clamp(2.5rem,4.8vw,4.5rem)] leading-[1.06] font-medium tracking-tight text-[#F7F3EB] [text-wrap:balance]"
            >
              Midnight Calm &amp; Champagne Warmth in Gujarat’s Capital
            </motion.h1>

            <motion.p
              initial={{opacity: 0, y: 16}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.65, delay: 0.16, ease: [0.16, 1, 0.3, 1]}}
              className="mt-6 max-w-xl text-base leading-relaxed text-[#E6DFD1]/90 sm:text-lg"
            >
              Elevated on the third floor of Meghmalhar Complex, Hotel Crystal N
              offers serene suites, attentive 24-hour hospitality, and swift
              access to Mahatma Mandir and Akshardham.
            </motion.p>

            <motion.div
              initial={{opacity: 0, y: 16}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.65, delay: 0.24, ease: [0.16, 1, 0.3, 1]}}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <button
                type="button"
                onClick={onExploreRooms}
                className="inline-flex min-h-[46px] items-center gap-2.5 bg-[#D4AF37] px-7 py-3 text-sm font-semibold tracking-wide text-[#040812] whitespace-nowrap shrink-0 transition-all duration-150 hover:bg-[#E6CB7A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F7F3EB] cursor-pointer"
              >
                <span>Explore Suites</span>
                <ArrowDownRight className="h-4 w-4" />
              </button>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[46px] items-center gap-2 border border-[#D4AF37]/50 bg-[#060E1E]/85 px-6 py-3 text-sm font-medium text-[#F7F3EB] whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-[#D4AF37] hover:text-[#E6CB7A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              >
                <span>WhatsApp Concierge</span>
              </a>

              <a
                href={HOTEL_INFO.phoneHref}
                className="inline-flex min-h-[44px] items-center gap-2 px-3 py-2 text-sm font-medium text-[#E6CB7A] tabular-nums whitespace-nowrap shrink-0 transition-colors hover:text-[#F7F3EB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              >
                <Phone className="h-4 w-4" />
                <span>{HOTEL_INFO.phoneDisplay}</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Full-Width 4-Column Stay Essentials Strip Below Hero */}
      <div className="relative z-10 border-y border-[#D4AF37]/20 bg-[#060E1E]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-[#D4AF37]/15 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
          <div className="px-6 py-5 sm:border-b sm:border-[#D4AF37]/15 lg:border-b-0">
            <p className="text-xs font-medium tracking-widest text-[#D4AF37] uppercase">
              Check-In Time
            </p>
            <p className="mt-1.5 font-serif text-2xl text-[#F7F3EB] tabular-nums">
              {HOTEL_INFO.checkIn}
            </p>
          </div>
          <div className="px-6 py-5 sm:border-b sm:border-l sm:border-[#D4AF37]/15 lg:border-b-0 lg:border-l-0">
            <p className="text-xs font-medium tracking-widest text-[#D4AF37] uppercase">
              Check-Out Time
            </p>
            <p className="mt-1.5 font-serif text-2xl text-[#F7F3EB] tabular-nums">
              {HOTEL_INFO.checkOut}
            </p>
          </div>
          <div className="px-6 py-5">
            <p className="text-xs font-medium tracking-widest text-[#D4AF37] uppercase">
              Address
            </p>
            <p className="mt-1.5 text-sm font-medium leading-snug text-[#F7F3EB]">
              3rd Floor, Meghmalhar Complex, Sector 11
            </p>
          </div>
          <div className="px-6 py-5 sm:border-l sm:border-[#D4AF37]/15 lg:border-l-0">
            <p className="text-xs font-medium tracking-widest text-[#D4AF37] uppercase">
              24-Hour Front Desk
            </p>
            <a
              href={HOTEL_INFO.phoneHref}
              className="mt-1.5 inline-block font-serif text-2xl text-[#E6CB7A] tabular-nums transition-colors hover:text-[#F7F3EB]"
            >
              {HOTEL_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
