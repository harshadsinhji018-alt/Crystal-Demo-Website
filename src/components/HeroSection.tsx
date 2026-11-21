import {motion, useScroll, useTransform} from 'motion/react';
import {ArrowDownRight, Phone} from 'lucide-react';
import {useRef} from 'react';
import {HOTEL_FEATURE_IMAGES, HOTEL_INFO, getWhatsAppUrl} from '../data/hotelData';
import {LuxuryThreeBackdrop} from './LuxuryThreeBackdrop';
import {LuxuryDivider} from './LuxuryDivider';
import {ResilientImage} from './ResilientImage';
import {ScrollReveal} from './ScrollReveal';
import {useLanguage} from '../i18n/LanguageContext';

interface HeroSectionProps {
  onExploreRooms: () => void;
}

export function HeroSection({onExploreRooms}: HeroSectionProps) {
  const {t} = useLanguage();
  const heroRef = useRef<HTMLElement | null>(null);
  const {scrollYProgress} = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative overflow-hidden bg-[#040812]"
    >
      {/* Full-Screen Hero Viewport */}
      <div className="relative flex w-full flex-col justify-between pt-14 sm:pt-0 lg:min-h-[92vh] lg:flex-row lg:items-center lg:pt-16">
        {/* Parallax Real Hotel Entrance Photography */}
        <motion.div
          style={{y: bgY, scale: bgScale}}
          className="pointer-events-none relative z-0 aspect-[21/10] w-full overflow-hidden sm:aspect-[16/9] lg:absolute lg:inset-0 lg:aspect-auto lg:h-full will-change-transform"
        >
          <div className="h-full w-full lg:scale-[1.05]">
            <ResilientImage
              src={HOTEL_FEATURE_IMAGES.heroFacade}
              alt="Hotel Crystal N grand marble entrance facade in Gandhinagar"
              fallbackLabel={t.hero.facadeFallback}
              loading="eager"
              className="float-image-1 h-full w-full object-cover object-right sm:object-[75%_center] lg:object-center"
            />
          </div>

          {/* Mobile & Tablet Scrims: keep full wide facade crisp like desktop while feathering top & bottom */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#040812]/55 via-[#040812]/15 to-transparent lg:hidden"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#040812] via-[#040812]/40 to-transparent lg:hidden"
          />
        </motion.div>

        {/* Desktop Measured Contrast Scrim */}
        <div
          aria-hidden="true"
          className="pointer-events-none hidden lg:block lg:absolute lg:inset-0 lg:z-[1] bg-gradient-to-r from-[#040812]/95 via-[#060E1E]/82 to-[#040812]/42"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none hidden lg:block lg:absolute lg:inset-0 lg:z-[1] bg-gradient-to-t from-[#040812] via-transparent to-[#040812]/55"
        />

        {/* 3D Animated Crystal Prism & Champagne Dust Particles */}
        <LuxuryThreeBackdrop />

        {/* Foreground Semantic Content */}
        <div className="relative z-10 mx-auto -mt-6 w-full max-w-7xl px-4 pb-16 pt-2 sm:-mt-16 sm:px-6 sm:pb-20 lg:mt-0 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <motion.p
              initial={{opacity: 0, y: 12}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.55, ease: [0.16, 1, 0.3, 1]}}
              className="mb-4 text-xs font-medium tracking-[0.2em] text-[#E6CB7A] uppercase"
            >
              {t.hero.eyebrow}
            </motion.p>

            <motion.h1
              initial={{opacity: 0, y: 18}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1]}}
              className="font-serif text-[clamp(2.25rem,4.6vw,4.4rem)] leading-[1.08] font-medium tracking-tight text-[#F7F3EB] [text-wrap:balance]"
            >
              {t.hero.headline}
            </motion.h1>

            <motion.p
              initial={{opacity: 0, y: 16}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.65, delay: 0.16, ease: [0.16, 1, 0.3, 1]}}
              className="mt-6 max-w-xl text-base leading-relaxed text-[#E6DFD1]/90 sm:text-lg"
            >
              {t.hero.subheadline}
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
                className="luxury-btn-primary inline-flex min-h-[46px] items-center gap-2.5 bg-[#D4AF37] px-7 py-3 text-sm font-semibold tracking-wide text-[#040812] whitespace-nowrap shrink-0 transition-all duration-150 hover:bg-[#E6CB7A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F7F3EB] cursor-pointer"
              >
                <span>{t.hero.exploreSuites}</span>
                <ArrowDownRight className="h-4 w-4" />
              </button>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="luxury-btn-outline inline-flex min-h-[46px] items-center gap-2 border border-[#D4AF37]/50 bg-[#060E1E]/85 px-6 py-3 text-sm font-medium text-[#F7F3EB] whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-[#D4AF37] hover:text-[#E6CB7A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              >
                <span>{t.hero.whatsappConcierge}</span>
              </a>

              <a
                href={HOTEL_INFO.phoneHref}
                className="luxury-btn-ghost inline-flex min-h-[44px] items-center gap-2 border border-transparent px-3 py-2 text-sm font-medium text-[#E6CB7A] tabular-nums whitespace-nowrap shrink-0 transition-colors hover:text-[#F7F3EB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              >
                <Phone className="h-4 w-4" />
                <span>{HOTEL_INFO.phoneDisplay}</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Full-Width 4-Column Stay Essentials Strip Below Hero */}
      <div className="relative z-10 bg-[#060E1E]">
        <div
          aria-hidden="true"
          className="h-px w-full bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent"
        />
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-[#D4AF37]/15 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
          <div className="px-6 py-5 sm:border-b sm:border-[#D4AF37]/15 lg:border-b-0">
            <ScrollReveal variant="fade-up" duration={650} delayStep={0}>
              <p className="text-xs font-medium tracking-widest text-[#D4AF37] uppercase">
                {t.hero.checkInLabel}
              </p>
              <p className="mt-1.5 font-serif text-2xl text-[#F7F3EB] tabular-nums">
                {HOTEL_INFO.checkIn}
              </p>
            </ScrollReveal>
          </div>
          <div className="px-6 py-5 sm:border-b sm:border-l sm:border-[#D4AF37]/15 lg:border-b-0 lg:border-l-0">
            <ScrollReveal variant="fade-up" duration={650} delayStep={1}>
              <p className="text-xs font-medium tracking-widest text-[#D4AF37] uppercase">
                {t.hero.checkOutLabel}
              </p>
              <p className="mt-1.5 font-serif text-2xl text-[#F7F3EB] tabular-nums">
                {HOTEL_INFO.checkOut}
              </p>
            </ScrollReveal>
          </div>
          <div className="px-6 py-5">
            <ScrollReveal variant="fade-up" duration={650} delayStep={2}>
              <p className="text-xs font-medium tracking-widest text-[#D4AF37] uppercase">
                {t.hero.addressLabel}
              </p>
              <p className="mt-1.5 text-sm font-medium leading-snug text-[#F7F3EB]">
                {t.hero.addressValue}
              </p>
            </ScrollReveal>
          </div>
          <div className="px-6 py-5 sm:border-l sm:border-[#D4AF37]/15 lg:border-l-0">
            <ScrollReveal variant="fade-up" duration={650} delayStep={3}>
              <p className="text-xs font-medium tracking-widest text-[#D4AF37] uppercase">
                {t.hero.frontDeskLabel}
              </p>
              <a
                href={HOTEL_INFO.phoneHref}
                className="mt-1.5 inline-block font-serif text-2xl text-[#E6CB7A] tabular-nums transition-colors hover:text-[#F7F3EB]"
              >
                {HOTEL_INFO.phoneDisplay}
              </a>
            </ScrollReveal>
          </div>
        </div>
        <LuxuryDivider variant="section" from="midnight" to="ivory" />
      </div>
    </section>
  );
}
