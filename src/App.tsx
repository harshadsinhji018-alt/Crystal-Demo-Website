/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {motion, useReducedMotion} from 'motion/react';
import {useCallback, useEffect, useRef, useState} from 'react';
import {AboutAndRooms} from './components/AboutAndRooms';
import {AmenitiesAndGallery} from './components/AmenitiesAndGallery';
import {AttractionsAndMap} from './components/AttractionsAndMap';
import {ContactAndFooter} from './components/ContactAndFooter';
import {FaqSection} from './components/FaqSection';
import {HeroSection} from './components/HeroSection';
import {Navbar} from './components/Navbar';
import {ScrollProgressBar} from './components/ScrollProgressBar';
import {LanguageProvider} from './i18n/LanguageContext';

export default function App() {
  const [mapsQuotaExceeded, setMapsQuotaExceeded] = useState(false);
  const [isCrossFading, setIsCrossFading] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const fadeTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const handler = () => setMapsQuotaExceeded(true);
    window.addEventListener('gmp-quota-exceeded', handler);
    return () => window.removeEventListener('gmp-quota-exceeded', handler);
  }, []);

  useEffect(() => {
    const timers = new WeakMap<HTMLElement, number>();

    const triggerClickFx = (target: EventTarget | null) => {
      if (!(target instanceof Element)) return;
      const btn = target.closest(
        'button, a.luxury-btn-primary, a.luxury-btn-outline, a.luxury-btn-ivory, a.luxury-btn-ghost',
      ) as HTMLElement | null;
      if (!btn) return;
      if (btn instanceof HTMLButtonElement && btn.disabled) return;

      const existing = timers.get(btn);
      if (existing) window.clearTimeout(existing);

      btn.setAttribute('data-btn-clicked', 'true');
      const timerId = window.setTimeout(() => {
        btn.removeAttribute('data-btn-clicked');
        timers.delete(btn);
      }, 360);
      timers.set(btn, timerId);
    };

    const onPointerDown = (e: PointerEvent) => triggerClickFx(e.target);
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        triggerClickFx(e.target);
      }
    };

    document.addEventListener('pointerdown', onPointerDown, {passive: true});
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  const scrollToSection = useCallback(
    (id: string) => {
      const target = document.getElementById(id);
      if (!target && id !== 'home') return;

      if (prefersReducedMotion) {
        if (id === 'home') {
          window.scrollTo({top: 0, behavior: 'auto'});
        } else {
          target?.scrollIntoView({behavior: 'auto', block: 'start'});
        }
        window.history.replaceState(null, '', `#${id}`);
        return;
      }

      if (fadeTimerRef.current) {
        window.clearTimeout(fadeTimerRef.current);
      }

      setIsCrossFading(true);
      fadeTimerRef.current = window.setTimeout(() => {
        if (id === 'home') {
          window.scrollTo({top: 0, behavior: 'auto'});
        } else {
          target?.scrollIntoView({behavior: 'auto', block: 'start'});
        }
        window.history.replaceState(null, '', `#${id}`);
        window.requestAnimationFrame(() => {
          setIsCrossFading(false);
        });
      }, 170);
    },
    [prefersReducedMotion],
  );

  // Intercept all in-page anchor navigation (#home, #about, #rooms, etc.) & language cross-fade events
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      if (
        e.defaultPrevented ||
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return;
      }
      if (!(e.target instanceof Element)) return;
      const anchor = e.target.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;
      const hash = anchor.getAttribute('href');
      if (!hash || hash.length <= 1) return;
      const id = hash.slice(1);
      if (!document.getElementById(id)) return;

      e.preventDefault();
      scrollToSection(id);
    };

    const handleSectionNavigate = (e: Event) => {
      const detail = (e as CustomEvent<{id?: string}>).detail;
      if (detail?.id) {
        scrollToSection(detail.id);
      }
    };

    const handlePageCrossFade = () => {
      if (prefersReducedMotion) return;
      if (fadeTimerRef.current) {
        window.clearTimeout(fadeTimerRef.current);
      }
      setIsCrossFading(true);
      fadeTimerRef.current = window.setTimeout(() => {
        setIsCrossFading(false);
      }, 160);
    };

    document.addEventListener('click', handleAnchorClick);
    window.addEventListener('crystal-section-navigate', handleSectionNavigate);
    window.addEventListener('crystal-page-crossfade', handlePageCrossFade);
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      window.removeEventListener(
        'crystal-section-navigate',
        handleSectionNavigate,
      );
      window.removeEventListener('crystal-page-crossfade', handlePageCrossFade);
      if (fadeTimerRef.current) {
        window.clearTimeout(fadeTimerRef.current);
      }
    };
  }, [scrollToSection, prefersReducedMotion]);

  return (
    <LanguageProvider>
      <div className="min-h-screen w-full overflow-x-clip bg-[#040812] text-[#F7F3EB]">
        {mapsQuotaExceeded && (
          <div className="bg-amber-50 border-b border-amber-200 text-amber-900 px-4 py-2.5 text-xs md:text-sm text-center sticky top-0 z-50 shadow-sm">
            <span>
              Google Maps Platform quota reached. If you are the app owner, visit{' '}
              <a
                href="https://developers.google.com/maps/ai/ai-studio?utm_campaign=gmp_mcp_codeassist_v1_aistudio#quota_exceeded_errors"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-semibold text-amber-950 hover:text-amber-800"
              >
                maps developer site
              </a>{' '}
              for instructions to update your account.
            </span>
          </div>
        )}

        <ScrollProgressBar />
        <Navbar onOpenEnquiry={() => scrollToSection('contact')} />

        {/* Subtle obsidian atmospheric cross-fade veil below header */}
        <motion.div
          aria-hidden="true"
          initial={false}
          animate={{opacity: isCrossFading ? 1 : 0}}
          transition={{
            duration: prefersReducedMotion ? 0 : isCrossFading ? 0.16 : 0.34,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="pointer-events-none fixed inset-0 z-30 bg-[#040812]/40"
        />

        <motion.main
          initial={false}
          animate={{opacity: isCrossFading ? 0.18 : 1}}
          transition={{
            duration: prefersReducedMotion ? 0 : isCrossFading ? 0.16 : 0.36,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="w-full overflow-x-clip"
        >
          <HeroSection onExploreRooms={() => scrollToSection('rooms')} />
          <AboutAndRooms />
          <AmenitiesAndGallery />
          <AttractionsAndMap />
          <FaqSection />
          <ContactAndFooter />
        </motion.main>
      </div>
    </LanguageProvider>
  );
}
