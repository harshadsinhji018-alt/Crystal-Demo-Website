import {Check, ChevronDown, Globe, Menu, X} from 'lucide-react';
import {AnimatePresence, motion} from 'motion/react';
import {useEffect, useRef, useState} from 'react';
import {HOTEL_INFO} from '../data/hotelData';
import {useLanguage} from '../i18n/LanguageContext';
import {LANGUAGE_OPTIONS, LanguageCode} from '../i18n/translations';

interface NavbarProps {
  onOpenEnquiry: () => void;
}

export function Navbar({onOpenEnquiry}: NavbarProps) {
  const {lang, setLang, t} = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement | null>(null);

  const desktopLinks = [
    {label: t.nav.home, href: '#home', id: 'home'},
    {label: t.nav.about, href: '#about', id: 'about'},
    {label: t.nav.rooms, href: '#rooms', id: 'rooms'},
    {label: t.nav.amenities, href: '#amenities', id: 'amenities'},
    {label: t.nav.gallery, href: '#gallery', id: 'gallery'},
    {label: t.nav.contact, href: '#contact', id: 'contact'},
  ];

  const mobileLinks = [
    {label: t.nav.home, href: '#home'},
    {label: t.nav.about, href: '#about'},
    {label: t.nav.rooms, href: '#rooms'},
    {label: t.nav.amenities, href: '#amenities'},
    {label: t.nav.gallery, href: '#gallery'},
    {label: t.nav.attractions, href: '#attractions'},
    {label: t.nav.location, href: '#location'},
    {label: t.nav.faq, href: '#faq'},
    {label: t.nav.contact, href: '#contact'},
  ];

  const activeLanguageOption =
    LANGUAGE_OPTIONS.find((opt) => opt.code === lang) || LANGUAGE_OPTIONS[0];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 64);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, {passive: true});
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ['home', 'about', 'rooms', 'amenities', 'gallery', 'contact'];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        {rootMargin: '-35% 0px -55% 0px', threshold: 0},
      );
      obs.observe(el);
      observers.push(obs);
    });

    const handleTopCheck = () => {
      if (window.scrollY < 260) {
        setActiveSection('home');
      }
    };
    window.addEventListener('scroll', handleTopCheck, {passive: true});

    return () => {
      observers.forEach((o) => o.disconnect());
      window.removeEventListener('scroll', handleTopCheck);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        langDropdownRef.current &&
        !langDropdownRef.current.contains(e.target as Node)
      ) {
        setLangMenuOpen(false);
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLangMenuOpen(false);
        setMobileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  const handleSelectLanguage = (code: LanguageCode) => {
    setLang(code);
    setLangMenuOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'border-b border-[#D4AF37]/25 bg-[#040812]/58 backdrop-blur-xl shadow-[0_10px_36px_rgba(0,0,0,0.32)]'
          : 'border-b border-white/10 bg-gradient-to-b from-[#040812]/60 via-[#040812]/22 to-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:h-[70px] sm:px-6 lg:gap-6 lg:px-8">
        {/* Zone 1: Single-line Luxury Brand Wordmark with Uploaded Hotel Logo */}
        <a
          href="#home"
          className="group inline-flex items-center gap-2.5 font-serif text-lg font-semibold tracking-[0.03em] text-[#F7F3EB] whitespace-nowrap shrink-0 transition-colors hover:text-[#E6CB7A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] sm:gap-3 sm:text-2xl"
        >
          <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-sm border border-[#D4AF37]/65 bg-[#040812] shadow-[0_4px_14px_rgba(212,175,55,0.22)] transition-colors duration-300 group-hover:border-[#E6CB7A] sm:h-10 sm:w-10">
            <img
              src={HOTEL_INFO.logo}
              alt={`${HOTEL_INFO.name} logo`}
              className="h-full w-full object-cover object-[50%_34%] scale-[1.28] transition-transform duration-300 group-hover:scale-[1.35]"
            />
          </span>
          <span>{HOTEL_INFO.name}</span>
        </a>

        {/* Zone 2: Concise single-line navigation links */}
        <nav
          aria-label="Primary navigation"
          className="hidden lg:flex items-center gap-6 xl:gap-7"
        >
          {desktopLinks.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`group relative py-1.5 text-[13.5px] font-medium whitespace-nowrap shrink-0 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
                  isActive
                    ? 'text-[#E6CB7A]'
                    : 'text-[#F7F3EB]/85 hover:text-[#E6CB7A]'
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-0 bottom-0 h-px origin-center bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent transition-transform duration-300 ${
                    isActive
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Language Selector Dropdown, Enquire CTA & Mobile Menu Trigger */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          {/* Accessible Multi-Language Dropdown */}
          <div ref={langDropdownRef} className="relative">
            <button
              type="button"
              aria-haspopup="listbox"
              aria-expanded={langMenuOpen}
              aria-label={t.nav.languageLabel}
              onClick={() => setLangMenuOpen((prev) => !prev)}
              className="luxury-btn-outline inline-flex h-10 items-center gap-1.5 border border-[#D4AF37]/40 bg-[#040812]/55 px-2.5 text-xs font-medium text-[#F7F3EB] whitespace-nowrap shrink-0 transition-colors hover:border-[#D4AF37] hover:text-[#E6CB7A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] sm:px-3 cursor-pointer"
            >
              <Globe className="h-3.5 w-3.5 text-[#D4AF37] shrink-0" />
              <span className="sm:hidden">{activeLanguageOption.shortCode}</span>
              <span className="hidden sm:inline">
                {activeLanguageOption.nativeLabel}
              </span>
              <ChevronDown
                className={`h-3.5 w-3.5 text-[#E6CB7A] transition-transform duration-200 ${
                  langMenuOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            <AnimatePresence>
              {langMenuOpen && (
                <motion.div
                  role="listbox"
                  aria-label={t.nav.languageLabel}
                  initial={{opacity: 0, y: 6, scale: 0.98}}
                  animate={{opacity: 1, y: 0, scale: 1}}
                  exit={{opacity: 0, y: 6, scale: 0.98}}
                  transition={{duration: 0.16, ease: [0.16, 1, 0.3, 1]}}
                  className="absolute right-0 mt-2 w-44 border border-[#D4AF37]/35 bg-[#040812]/95 py-1.5 backdrop-blur-xl shadow-[0_18px_40px_rgba(0,0,0,0.65)] z-50"
                >
                  {LANGUAGE_OPTIONS.map((opt) => {
                    const selected = opt.code === lang;
                    return (
                      <button
                        key={opt.code}
                        type="button"
                        role="option"
                        aria-selected={selected}
                        lang={opt.code}
                        onClick={() => handleSelectLanguage(opt.code)}
                        className={`luxury-btn-ghost flex w-full items-center justify-between px-3.5 py-2.5 text-left text-xs transition-colors cursor-pointer ${
                          selected
                            ? 'bg-[#D4AF37]/15 text-[#E6CB7A] font-semibold'
                            : 'text-[#F7F3EB]/85 hover:bg-white/5 hover:text-[#E6CB7A]'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span>{opt.nativeLabel}</span>
                          {opt.code !== 'en' && (
                            <span className="text-[11px] text-[#E6DFD1]/50">
                              {opt.name}
                            </span>
                          )}
                        </span>
                        {selected && (
                          <Check className="h-3.5 w-3.5 text-[#D4AF37] shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            type="button"
            onClick={onOpenEnquiry}
            className={`hidden sm:inline-flex h-10 items-center justify-center px-4 text-xs font-semibold whitespace-nowrap shrink-0 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F7F3EB] lg:px-5 cursor-pointer ${
              scrolled
                ? 'luxury-btn-primary border border-[#E6CB7A]/60 bg-gradient-to-r from-[#D4AF37] via-[#E6CB7A] to-[#D4AF37] text-[#040812] shadow-sm shadow-[#D4AF37]/20 hover:brightness-105'
                : 'luxury-btn-outline border border-[#D4AF37]/75 bg-[#040812]/35 text-[#F7F3EB] hover:border-[#E6CB7A] hover:bg-[#D4AF37] hover:text-[#040812]'
            }`}
          >
            {t.nav.enquireStay}
          </button>

          <button
            type="button"
            aria-label={mobileOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="luxury-btn-outline inline-flex h-10 w-10 items-center justify-center border border-[#D4AF37]/40 bg-[#040812]/45 text-[#F7F3EB] transition-colors hover:border-[#D4AF37] hover:text-[#E6CB7A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] lg:hidden cursor-pointer"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Functional Translucent Mobile & Tablet Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{opacity: 0, y: -8}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -8}}
            transition={{duration: 0.18}}
            className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-[#D4AF37]/25 bg-[#040812]/90 backdrop-blur-xl px-4 py-5 lg:hidden"
          >
            <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
              {mobileLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  className="flex min-h-[44px] items-center justify-between border-b border-white/8 px-2 text-sm font-medium text-[#F7F3EB]/90 transition-colors hover:text-[#E6CB7A]"
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-[#D4AF37]/75">→</span>
                </a>
              ))}

              {/* Language quick switcher inside drawer */}
              <div className="mt-4 border-b border-white/10 pb-4">
                <p className="mb-2 text-[11px] font-medium text-[#E6CB7A] uppercase">
                  {t.nav.languageLabel}
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {LANGUAGE_OPTIONS.map((opt) => (
                    <button
                      key={opt.code}
                      type="button"
                      lang={opt.code}
                      onClick={() => handleSelectLanguage(opt.code)}
                      className={`luxury-btn-tab min-h-[38px] border px-2 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
                        lang === opt.code
                          ? 'border-[#D4AF37] bg-[#D4AF37]/20 text-[#E6CB7A] shadow-[0_6px_16px_-4px_rgba(212,175,55,0.4)]'
                          : 'border-white/15 bg-white/5 text-[#F7F3EB]/80 hover:border-[#D4AF37]/50'
                      }`}
                    >
                      {opt.nativeLabel}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    onOpenEnquiry();
                  }}
                  className="luxury-btn-primary w-full min-h-[44px] bg-gradient-to-r from-[#D4AF37] via-[#E6CB7A] to-[#D4AF37] px-5 py-2.5 text-sm font-semibold text-[#040812] transition-opacity hover:opacity-95 cursor-pointer"
                >
                  {t.nav.enquireStay}
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
