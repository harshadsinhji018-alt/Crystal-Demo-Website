import {Menu, X} from 'lucide-react';
import {AnimatePresence, motion} from 'motion/react';
import {useEffect, useState} from 'react';
import {HOTEL_INFO} from '../data/hotelData';

interface NavbarProps {
  onOpenEnquiry: () => void;
}

const DESKTOP_LINKS = [
  {label: 'About', href: '#about'},
  {label: 'Rooms', href: '#rooms'},
  {label: 'Amenities', href: '#amenities'},
  {label: 'Gallery', href: '#gallery'},
  {label: 'Contact', href: '#contact'},
];

const MOBILE_LINKS = [
  {label: 'Home', href: '#home'},
  {label: 'About', href: '#about'},
  {label: 'Rooms & Suites', href: '#rooms'},
  {label: 'Amenities', href: '#amenities'},
  {label: 'Gallery', href: '#gallery'},
  {label: 'Nearby Attractions', href: '#attractions'},
  {label: 'Location', href: '#location'},
  {label: 'Contact', href: '#contact'},
];

export function Navbar({onOpenEnquiry}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, {passive: true});
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-200 ${
        scrolled
          ? 'border-b border-[#D4AF37]/20 bg-[#040812]/95 shadow-lg shadow-black/25'
          : 'border-b border-white/10 bg-[#040812]/70'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#home"
          className="font-serif text-xl font-semibold tracking-wide text-[#F7F3EB] whitespace-nowrap shrink-0 transition-colors hover:text-[#E6CB7A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] sm:text-2xl"
        >
          {HOTEL_INFO.name}
        </a>

        {/* Zone 2: 5 concise single-line text links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7"
        >
          {DESKTOP_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative py-1 text-sm font-medium tracking-wide text-[#F7F3EB]/85 whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#E6CB7A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
            >
              {item.label}
              <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-[#D4AF37] transition-transform duration-200 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenEnquiry}
            className="hidden sm:inline-flex items-center justify-center border border-[#D4AF37]/60 bg-[#D4AF37] px-4 py-2 text-xs font-semibold tracking-wide text-[#040812] whitespace-nowrap shrink-0 transition-all duration-150 hover:bg-[#E6CB7A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F7F3EB] cursor-pointer"
          >
            Enquire Stay
          </button>

          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center border border-[#D4AF37]/30 bg-[#0A162E]/80 text-[#F7F3EB] transition-colors hover:border-[#D4AF37] hover:text-[#E6CB7A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] md:hidden cursor-pointer"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Functional Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{opacity: 0, y: -8}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -8}}
            transition={{duration: 0.18}}
            className="border-t border-[#D4AF37]/20 bg-[#060E1E] px-4 py-5 md:hidden"
          >
            <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
              {MOBILE_LINKS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  className="flex min-h-[44px] items-center justify-between border-b border-white/5 px-2 text-sm font-medium text-[#F7F3EB]/90 transition-colors hover:text-[#E6CB7A]"
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-[#D4AF37]/70">→</span>
                </a>
              ))}
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    onOpenEnquiry();
                  }}
                  className="w-full min-h-[44px] bg-[#D4AF37] px-5 py-2.5 text-sm font-semibold text-[#040812] transition-colors hover:bg-[#E6CB7A] cursor-pointer"
                >
                  Enquire Stay
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
