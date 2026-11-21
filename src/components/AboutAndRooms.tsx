import {AnimatePresence, motion} from 'motion/react';
import {Check, MessageCircle, Phone, X} from 'lucide-react';
import {useState} from 'react';
import {
  HOTEL_FEATURE_IMAGES,
  HOTEL_INFO,
  ROOMS_DATA,
  RoomSuite,
  getWhatsAppUrl,
} from '../data/hotelData';
import {LuxuryDivider} from './LuxuryDivider';
import {ResilientImage} from './ResilientImage';
import {RevealDelayStep, ScrollReveal} from './ScrollReveal';
import {TiltCard} from './TiltCard';
import {useLanguage} from '../i18n/LanguageContext';

export function AboutAndRooms() {
  const {t} = useLanguage();
  const [filter, setFilter] = useState<'All' | 'Business' | 'Luxury'>('All');
  const [selectedRoom, setSelectedRoom] = useState<RoomSuite | null>(null);
  const [modalPhotoIdx, setModalPhotoIdx] = useState(0);

  const visibleRooms =
    filter === 'All'
      ? ROOMS_DATA
      : ROOMS_DATA.filter((room) => room.category === filter);

  const openRoomModal = (room: RoomSuite) => {
    setModalPhotoIdx(0);
    setSelectedRoom(room);
  };

  return (
    <>
      {/* ABOUT SECTION — Warm Ivory Editorial Sanctuary */}
      <section
        id="about"
        className="overflow-x-clip bg-[#F7F3EB] py-20 text-[#0A1428] sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Real Reception Desk & Corridor Imagery */}
            <ScrollReveal
              variant="fade-right"
              duration={750}
              className="flex flex-col gap-4 lg:col-span-6"
            >
              <div className="float-image-2 relative aspect-[16/10] overflow-hidden border border-[#0A1428]/10 bg-[#060E1E] lg:aspect-auto lg:flex-1 lg:min-h-[280px]">
                <ResilientImage
                  src={HOTEL_FEATURE_IMAGES.receptionDesk}
                  alt="Hotel Crystal N 24-hour marble and teak wood reception front desk"
                  fallbackLabel={t.about.receptionFallback}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="float-image-3 aspect-[16/10] overflow-hidden border border-[#0A1428]/10 bg-[#060E1E]">
                  <ResilientImage
                    src={HOTEL_FEATURE_IMAGES.lobbyLounge}
                    alt="Hotel Crystal N guest lounge with sofa seating and marble coffee table"
                    fallbackLabel={t.about.loungeFallback}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="float-image-4 aspect-[16/10] overflow-hidden border border-[#0A1428]/10 bg-[#060E1E]">
                  <ResilientImage
                    src={HOTEL_FEATURE_IMAGES.corridor}
                    alt="Hotel Crystal N illuminated marble guest room corridor"
                    fallbackLabel={t.about.corridorFallback}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Editorial Copy Column */}
            <ScrollReveal
              variant="fade-left"
              duration={750}
              delayStep={1}
              className="flex flex-col justify-center lg:col-span-6"
            >
              <p className="text-xs font-semibold tracking-[0.2em] text-[#8E6F1E] uppercase">
                {t.about.eyebrow}
              </p>
              <h2 className="mt-3 font-serif text-3xl leading-[1.15] font-medium text-[#060E1E] sm:text-4xl lg:text-5xl [text-wrap:balance]">
                {t.about.headline}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[#2C3547]">
                {t.about.paragraph1}
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#2C3547]">
                {t.about.paragraph2}
              </p>

              {/* Editorial Proof Strip */}
              <LuxuryDivider
                variant="inline"
                theme="light"
                align="left"
                className="mt-8 mb-7"
              />
              <div className="grid grid-cols-3 gap-3 sm:gap-6">
                <div>
                  <p className="font-serif text-2xl font-semibold text-[#060E1E] tabular-nums sm:text-3xl">
                    {t.about.proof1Value}
                  </p>
                  <p className="mt-1 text-xs text-[#4A5568]">
                    {t.about.proof1Label}
                  </p>
                </div>
                <div>
                  <p className="font-serif text-2xl font-semibold text-[#060E1E] tabular-nums sm:text-3xl">
                    {t.about.proof2Value}
                  </p>
                  <p className="mt-1 text-xs text-[#4A5568]">
                    {t.about.proof2Label}
                  </p>
                </div>
                <div>
                  <p className="font-serif text-2xl font-semibold text-[#060E1E] tabular-nums sm:text-3xl">
                    {t.about.proof3Value}
                  </p>
                  <p className="mt-1 text-xs text-[#4A5568]">
                    {t.about.proof3Label}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <LuxuryDivider variant="section" from="ivory" to="midnight" />

      {/* ROOMS & SUITES SECTION — Deep Midnight Blue Canvas */}
      <section
        id="rooms"
        className="overflow-x-clip bg-[#060E1E] py-20 text-[#F7F3EB] sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <ScrollReveal variant="fade-up" duration={650} className="max-w-2xl">
              <p className="text-xs font-medium tracking-[0.2em] text-[#D4AF37] uppercase">
                {t.rooms.eyebrow}
              </p>
              <h2 className="mt-3 font-serif text-3xl leading-tight font-medium text-[#F7F3EB] sm:text-4xl lg:text-5xl [text-wrap:balance]">
                {t.rooms.headline}
              </h2>
            </ScrollReveal>

            {/* Interactive Category Filter Controls */}
            <ScrollReveal variant="fade-left" duration={650} delayStep={1}>
              <div
                role="group"
                aria-label="Filter suites by category"
                className="inline-flex w-fit max-w-full flex-wrap items-center gap-1 border border-[#D4AF37]/25 bg-[#040812] p-1"
              >
                {(['All', 'Business', 'Luxury'] as const).map((tab) => {
                  const tabLabel =
                    tab === 'All'
                      ? t.rooms.filterAll
                      : tab === 'Business'
                        ? t.rooms.filterBusiness
                        : t.rooms.filterLuxury;
                  return (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setFilter(tab)}
                      className={`luxury-btn-tab min-h-[40px] px-4 py-2 text-xs font-semibold tracking-wide whitespace-nowrap shrink-0 transition-colors duration-150 cursor-pointer ${
                        filter === tab
                          ? 'bg-[#D4AF37] text-[#040812] shadow-[0_6px_18px_-4px_rgba(212,175,55,0.45)]'
                          : 'text-[#E6DFD1]/75 hover:text-[#F7F3EB]'
                      }`}
                    >
                      {tabLabel}
                    </button>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>

          <LuxuryDivider
            variant="inline"
            theme="dark"
            align="center"
            className="mt-8"
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              transition={{duration: 0.22, ease: [0.16, 1, 0.3, 1]}}
              className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2"
            >
              {visibleRooms.map((room, idx) => {
                const roomCopy = t.rooms.items[room.id];
                return (
                  <ScrollReveal
                    key={room.id}
                    variant="fade-up"
                    duration={650}
                    delayStep={Math.min(idx, 3) as RevealDelayStep}
                    immediate={filter !== 'All'}
                    className="flex"
                  >
                    <TiltCard maxTiltDeg={4.5} className="flex w-full">
                      <article className="luxury-card-dark group flex w-full flex-col justify-between border border-[#D4AF37]/20 bg-[#0A162E]/75">
                        <div>
                          <div className="relative aspect-[16/10] overflow-hidden bg-[#040812]">
                            <ResilientImage
                              src={room.image}
                              alt={`${roomCopy?.name || room.name} at Hotel Crystal N Gandhinagar`}
                              fallbackLabel={
                                roomCopy?.fallbackTitle || room.fallbackTitle
                              }
                              className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                            />
                            <div
                              aria-hidden="true"
                              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#060E1E]/75 via-transparent to-transparent"
                            />
                          </div>

                          <div className="p-6">
                            <div className="flex flex-wrap items-center gap-2 text-xs text-[#E6CB7A] tabular-nums">
                              <span>{roomCopy?.size || room.size}</span>
                              <span aria-hidden="true">·</span>
                              <span>{roomCopy?.bed || room.bed}</span>
                              <span aria-hidden="true">·</span>
                              <span>
                                {room.gallery.length} {t.rooms.photosLabel}
                              </span>
                            </div>

                            <h3 className="mt-3 font-serif text-2xl font-medium text-[#F7F3EB]">
                              {roomCopy?.name || room.name}
                            </h3>

                            <p className="mt-3 text-sm leading-relaxed text-[#E6DFD1]/80">
                              {roomCopy?.description || room.description}
                            </p>
                          </div>
                        </div>

                        <div className="border-t border-[#D4AF37]/15 px-6 py-5">
                          <div className="flex flex-wrap items-baseline justify-between gap-4">
                            <div>
                              <span className="font-serif text-2xl font-semibold text-[#E6CB7A] tabular-nums">
                                {room.tariff}
                              </span>
                              <span className="ml-1.5 text-xs text-[#E6DFD1]/65">
                                {t.rooms.rateSuffix}
                              </span>
                            </div>
                            <button
                              type="button"
                              onClick={() => openRoomModal(room)}
                              className="luxury-btn-outline min-h-[40px] border border-[#D4AF37]/50 px-4 py-2 text-xs font-semibold tracking-wide text-[#F7F3EB] whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#040812] cursor-pointer"
                            >
                              {t.rooms.viewSuiteCta}
                            </button>
                          </div>
                        </div>
                      </article>
                    </TiltCard>
                  </ScrollReveal>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <LuxuryDivider variant="section" from="midnight" to="ivory" />

      {/* Suite Detail & Multi-Photo Modal */}
      <AnimatePresence>
        {selectedRoom &&
          (() => {
            const modalCopy = t.rooms.items[selectedRoom.id];
            return (
              <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{duration: 0.18}}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
                onClick={() => setSelectedRoom(null)}
              >
                <motion.div
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="suite-modal-title"
                  initial={{opacity: 0, scale: 0.97, y: 12}}
                  animate={{opacity: 1, scale: 1, y: 0}}
                  exit={{opacity: 0, scale: 0.97, y: 12}}
                  transition={{duration: 0.2, ease: [0.16, 1, 0.3, 1]}}
                  onClick={(e) => e.stopPropagation()}
                  className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto border border-[#D4AF37]/40 bg-[#060E1E] text-[#F7F3EB] shadow-2xl"
                >
                  <button
                    type="button"
                    aria-label={t.rooms.closeModalLabel}
                    onClick={() => setSelectedRoom(null)}
                    className="luxury-btn-outline absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center border border-white/20 bg-[#040812]/90 text-[#F7F3EB] transition-colors hover:border-[#D4AF37] hover:text-[#E6CB7A] cursor-pointer"
                  >
                    <X className="h-5 w-5" />
                  </button>

                  <div className="aspect-[16/9] w-full overflow-hidden bg-[#040812]">
                    <ResilientImage
                      src={
                        selectedRoom.gallery[modalPhotoIdx] || selectedRoom.image
                      }
                      alt={`${modalCopy?.name || selectedRoom.name} photo ${modalPhotoIdx + 1}`}
                      fallbackLabel={
                        modalCopy?.fallbackTitle || selectedRoom.fallbackTitle
                      }
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Suite Photo Selector Thumbnails */}
                  <div className="grid grid-cols-4 gap-2 border-b border-[#D4AF37]/20 bg-[#040812] p-3">
                    {selectedRoom.gallery.map((photo, index) => (
                      <button
                        key={photo}
                        type="button"
                        onClick={() => setModalPhotoIdx(index)}
                        className={`aspect-[16/10] overflow-hidden border transition-opacity cursor-pointer ${
                          modalPhotoIdx === index
                            ? 'border-[#D4AF37] opacity-100'
                            : 'border-white/10 opacity-55 hover:opacity-90'
                        }`}
                      >
                        <ResilientImage
                          src={photo}
                          alt={`${modalCopy?.name || selectedRoom.name} view ${index + 1}`}
                          fallbackLabel={modalCopy?.name || selectedRoom.name}
                          className="h-full w-full object-cover"
                        />
                      </button>
                    ))}
                  </div>

                  <div className="p-6 sm:p-8">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#E6CB7A] tabular-nums">
                      <span>
                        {modalCopy?.categoryLabel || selectedRoom.category}{' '}
                        {t.rooms.collectionSuffix}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{modalCopy?.size || selectedRoom.size}</span>
                      <span aria-hidden="true">·</span>
                      <span>{modalCopy?.bed || selectedRoom.bed}</span>
                    </div>

                    <h3
                      id="suite-modal-title"
                      className="mt-2 font-serif text-3xl font-medium text-[#F7F3EB]"
                    >
                      {modalCopy?.name || selectedRoom.name}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-[#E6DFD1]/85">
                      {modalCopy?.description || selectedRoom.description}
                    </p>

                    <ul className="mt-6 grid grid-cols-1 gap-2.5 border-y border-[#D4AF37]/20 py-5 sm:grid-cols-2">
                      {(modalCopy?.highlights || selectedRoom.highlights).map(
                        (item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-sm text-[#F7F3EB]/90"
                          >
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#D4AF37]" />
                            <span>{item}</span>
                          </li>
                        ),
                      )}
                    </ul>

                    <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                      <div className="text-xs text-[#E6DFD1]/70 tabular-nums">
                        {t.rooms.checkInPrefix} {HOTEL_INFO.checkIn} ·{' '}
                        {t.rooms.checkOutPrefix} {HOTEL_INFO.checkOut}
                      </div>
                      <div className="flex flex-wrap items-center gap-3">
                        <a
                          href={HOTEL_INFO.phoneHref}
                          className="luxury-btn-outline inline-flex min-h-[44px] items-center gap-2 border border-[#D4AF37]/40 px-4 py-2 text-xs font-semibold text-[#F7F3EB] whitespace-nowrap transition-colors hover:border-[#D4AF37] hover:text-[#E6CB7A]"
                        >
                          <Phone className="h-4 w-4" />
                          <span>{t.rooms.callNow}</span>
                        </a>
                        <a
                          href={getWhatsAppUrl(
                            `Hello Hotel Crystal N Gandhinagar, I would like to enquire about the ${selectedRoom.name} (${selectedRoom.tariff}/night demo reference).`,
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="luxury-btn-primary inline-flex min-h-[44px] items-center gap-2 bg-[#D4AF37] px-5 py-2 text-xs font-semibold text-[#040812] whitespace-nowrap transition-colors hover:bg-[#E6CB7A]"
                        >
                          <MessageCircle className="h-4 w-4" />
                          <span>{t.rooms.enquireWhatsApp}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })()}
      </AnimatePresence>
    </>
  );
}
