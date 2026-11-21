import {AnimatePresence, motion} from 'motion/react';
import {
  ArrowUpDown,
  Bell,
  Car,
  ChevronLeft,
  ChevronRight,
  Clock,
  Coffee,
  Maximize2,
  Pause,
  Play,
  Shirt,
  Sparkles,
  Wifi,
  Wind,
  X,
} from 'lucide-react';
import {useEffect, useState} from 'react';
import {
  FACILITIES_DATA,
  FacilityItem,
  GALLERY_SLIDES,
  HOTEL_FEATURE_IMAGES,
} from '../data/hotelData';
import {ResilientImage} from './ResilientImage';

function FacilityIcon({name}: {name: FacilityItem['iconName']}) {
  const cls =
    'h-5 w-5 text-[#8E6F1E] transition-transform duration-200 group-hover:scale-110 group-hover:-translate-y-0.5';
  switch (name) {
    case 'Wifi':
      return <Wifi className={cls} />;
    case 'Car':
      return <Car className={cls} />;
    case 'Wind':
      return <Wind className={cls} />;
    case 'Coffee':
      return <Coffee className={cls} />;
    case 'Bell':
      return <Bell className={cls} />;
    case 'Clock':
      return <Clock className={cls} />;
    case 'Shirt':
      return <Shirt className={cls} />;
    case 'ArrowUpDown':
      return <ArrowUpDown className={cls} />;
    case 'Sparkles':
      return <Sparkles className={cls} />;
  }
}

export function AmenitiesAndGallery() {
  const [galleryCategory, setGalleryCategory] = useState<
    'All' | 'Lobby & Corridors' | 'Rooms & Suites' | 'Interiors & Bath'
  >('All');
  const [activeSlide, setActiveSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const filteredSlides =
    galleryCategory === 'All'
      ? GALLERY_SLIDES
      : GALLERY_SLIDES.filter((s) => s.category === galleryCategory);

  const safeIndex = activeSlide % filteredSlides.length;
  const currentSlide = filteredSlides[safeIndex] || GALLERY_SLIDES[0];

  useEffect(() => {
    setActiveSlide(0);
  }, [galleryCategory]);

  useEffect(() => {
    if (!autoPlay || lightboxOpen || filteredSlides.length <= 1) return;
    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % filteredSlides.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, [autoPlay, lightboxOpen, filteredSlides.length]);

  const handlePrev = () => {
    setActiveSlide(
      (prev) => (prev - 1 + filteredSlides.length) % filteredSlides.length,
    );
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % filteredSlides.length);
  };

  return (
    <>
      {/* AMENITIES SECTION — Warm Ivory with Real Interior Spotlight */}
      <section
        id="amenities"
        className="bg-[#F7F3EB] py-20 text-[#0A1428] sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12">
            {/* Left: Heading + 9 Facilities Grid */}
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold tracking-[0.2em] text-[#8E6F1E] uppercase">
                Guest Amenities &amp; Services
              </p>
              <h2 className="mt-3 font-serif text-3xl leading-tight font-medium text-[#060E1E] sm:text-4xl lg:text-5xl [text-wrap:balance]">
                Nine Essentials of Unhurried Hospitality
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-[#2C3547]">
                From swift elevator arrival on the third floor to round-the-clock
                room service, modern marble washrooms, and morning breakfast,
                every convenience is quietly orchestrated.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-6 border-t border-[#0A1428]/15 pt-8 sm:grid-cols-2 lg:grid-cols-3">
                {FACILITIES_DATA.map((facility, idx) => (
                  <motion.div
                    key={facility.id}
                    initial={{opacity: 0, y: 14}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, margin: '-40px'}}
                    transition={{
                      duration: 0.4,
                      delay: idx * 0.04,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="group flex flex-col border border-[#0A1428]/10 bg-white/70 p-4 transition-colors duration-200 hover:border-[#8E6F1E]/50 hover:bg-white"
                  >
                    <div className="flex h-10 w-10 items-center justify-center border border-[#8E6F1E]/25 bg-[#F7F3EB]">
                      <FacilityIcon name={facility.iconName} />
                    </div>
                    <h3 className="mt-3.5 font-serif text-xl font-medium text-[#060E1E]">
                      {facility.name}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-[#4A5568]">
                      {facility.detail}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: Real Lounge & Modern Marble Washroom Spotlight */}
            <motion.div
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, margin: '-80px'}}
              transition={{duration: 0.6, ease: [0.16, 1, 0.3, 1]}}
              className="flex flex-col justify-between border border-[#0A1428]/15 bg-[#060E1E] text-[#F7F3EB] lg:col-span-5"
            >
              <div className="grid grid-cols-1 gap-0.5 bg-[#D4AF37]/20 flex-1">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#040812]">
                  <ResilientImage
                    src={HOTEL_FEATURE_IMAGES.bathSuite}
                    alt="Modern marble washroom with rain shower and hot water geyser at Hotel Crystal N"
                    fallbackLabel="Modern Marble Washroom"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="relative aspect-[16/10] overflow-hidden bg-[#040812]">
                  <ResilientImage
                    src={HOTEL_FEATURE_IMAGES.lobbyLounge}
                    alt="Guest lounge seating and marble coffee table at Hotel Crystal N"
                    fallbackLabel="Guest Lounge & Reception"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <p className="text-xs font-medium tracking-[0.2em] text-[#D4AF37] uppercase">
                  Refined Interiors &amp; 24-Hour Care
                </p>
                <h3 className="mt-2 font-serif text-2xl font-medium text-[#F7F3EB]">
                  Marble Washrooms, Smart TVs &amp; Welcoming Lounges
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#E6DFD1]/80">
                  Every room pairs rain-shower marble bathrooms and streaming
                  Smart TVs with attentive housekeeping and complimentary morning
                  breakfast.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* GALLERY SECTION — Obsidian Auto-Sliding Real Photo Tour */}
      <section
        id="gallery"
        className="bg-[#040812] py-20 text-[#F7F3EB] sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 pb-8 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-medium tracking-[0.2em] text-[#D4AF37] uppercase">
                Real Property Gallery
              </p>
              <h2 className="mt-3 font-serif text-3xl font-medium text-[#F7F3EB] sm:text-4xl lg:text-5xl [text-wrap:balance]">
                Inside Hotel Crystal N
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {/* Gallery Category Filter Tabs */}
              <div
                role="group"
                aria-label="Filter gallery images"
                className="inline-flex flex-wrap items-center gap-1 border border-[#D4AF37]/25 bg-[#060E1E] p-1"
              >
                {(
                  [
                    'All',
                    'Lobby & Corridors',
                    'Rooms & Suites',
                    'Interiors & Bath',
                  ] as const
                ).map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setGalleryCategory(cat)}
                    className={`min-h-[36px] px-3 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                      galleryCategory === cat
                        ? 'bg-[#D4AF37] text-[#040812]'
                        : 'text-[#E6DFD1]/75 hover:text-[#F7F3EB]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label={autoPlay ? 'Pause slideshow' : 'Play slideshow'}
                  onClick={() => setAutoPlay((p) => !p)}
                  className="inline-flex h-10 w-10 items-center justify-center border border-[#D4AF37]/30 bg-[#0A162E] text-[#E6CB7A] transition-colors hover:border-[#D4AF37] cursor-pointer"
                >
                  {autoPlay ? (
                    <Pause className="h-4 w-4" />
                  ) : (
                    <Play className="h-4 w-4" />
                  )}
                </button>
                <button
                  type="button"
                  aria-label="Previous gallery image"
                  onClick={handlePrev}
                  className="inline-flex h-10 w-10 items-center justify-center border border-[#D4AF37]/30 bg-[#0A162E] text-[#F7F3EB] transition-colors hover:border-[#D4AF37] hover:text-[#E6CB7A] cursor-pointer"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  aria-label="Next gallery image"
                  onClick={handleNext}
                  className="inline-flex h-10 w-10 items-center justify-center border border-[#D4AF37]/30 bg-[#0A162E] text-[#F7F3EB] transition-colors hover:border-[#D4AF37] hover:text-[#E6CB7A] cursor-pointer"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Main Auto-Sliding Stage */}
          <div className="relative aspect-[16/10] w-full overflow-hidden border border-[#D4AF37]/25 bg-[#060E1E] sm:aspect-[16/9] lg:aspect-[21/10]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.id}
                initial={{opacity: 0, scale: 1.02}}
                animate={{opacity: 1, scale: 1}}
                exit={{opacity: 0}}
                transition={{duration: 0.45, ease: [0.16, 1, 0.3, 1]}}
                className="absolute inset-0"
              >
                <ResilientImage
                  src={currentSlide.image}
                  alt={currentSlide.title}
                  fallbackLabel={currentSlide.title}
                  className="h-full w-full object-cover object-center"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#040812]/90 via-[#040812]/25 to-transparent"
                />
              </motion.div>
            </AnimatePresence>

            {/* Caption Overlay */}
            <div className="absolute inset-x-0 bottom-0 z-10 flex flex-wrap items-end justify-between gap-4 p-5 sm:p-8">
              <div>
                <p className="text-xs font-medium tracking-widest text-[#E6CB7A] uppercase">
                  {currentSlide.category} ·{' '}
                  <span className="tabular-nums">
                    {String(safeIndex + 1).padStart(2, '0')} /{' '}
                    {String(filteredSlides.length).padStart(2, '0')}
                  </span>
                </p>
                <h3 className="mt-1.5 font-serif text-2xl font-medium text-[#F7F3EB] sm:text-3xl">
                  {currentSlide.title}
                </h3>
                <p className="mt-1 text-sm text-[#E6DFD1]/80">
                  {currentSlide.subtitle}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setLightboxOpen(true)}
                className="inline-flex min-h-[40px] items-center gap-2 border border-white/25 bg-[#040812]/80 px-4 py-2 text-xs font-medium text-[#F7F3EB] whitespace-nowrap transition-colors hover:border-[#D4AF37] hover:text-[#E6CB7A] cursor-pointer"
              >
                <Maximize2 className="h-3.5 w-3.5" />
                <span>Expand View</span>
              </button>
            </div>
          </div>

          {/* Thumbnail Selector Strip */}
          <div className="mt-4 grid grid-cols-4 gap-3 sm:grid-cols-6">
            {filteredSlides.map((slide, idx) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setActiveSlide(idx)}
                aria-label={`Select ${slide.title}`}
                className={`group relative aspect-[16/10] overflow-hidden border transition-all duration-150 cursor-pointer ${
                  idx === safeIndex
                    ? 'border-[#D4AF37] opacity-100'
                    : 'border-white/10 opacity-55 hover:opacity-90'
                }`}
              >
                <ResilientImage
                  src={slide.image}
                  alt={slide.title}
                  fallbackLabel={slide.title}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.18}}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 p-4"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              type="button"
              aria-label="Close expanded view"
              onClick={() => setLightboxOpen(false)}
              className="absolute top-5 right-5 z-10 flex h-11 w-11 items-center justify-center border border-white/25 bg-[#040812] text-[#F7F3EB] hover:border-[#D4AF37] hover:text-[#E6CB7A] cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-5xl"
            >
              <div className="aspect-[16/10] w-full overflow-hidden border border-[#D4AF37]/30 bg-[#060E1E]">
                <ResilientImage
                  src={currentSlide.image}
                  alt={currentSlide.title}
                  fallbackLabel={currentSlide.title}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="mt-4 flex items-center justify-between text-sm text-[#F7F3EB]">
                <span>{currentSlide.title}</span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="border border-white/20 px-3 py-1.5 text-xs hover:border-[#D4AF37] cursor-pointer"
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="border border-white/20 px-3 py-1.5 text-xs hover:border-[#D4AF37] cursor-pointer"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
