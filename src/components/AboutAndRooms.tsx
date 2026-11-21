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
import {ResilientImage} from './ResilientImage';

export function AboutAndRooms() {
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
        className="bg-[#F7F3EB] py-20 text-[#0A1428] sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Real Reception Desk & Corridor Imagery */}
            <motion.div
              initial={{opacity: 0, y: 24}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, margin: '-80px'}}
              transition={{duration: 0.6, ease: [0.16, 1, 0.3, 1]}}
              className="flex flex-col gap-4 lg:col-span-6"
            >
              <div className="relative flex-1 min-h-[280px] overflow-hidden border border-[#0A1428]/10 bg-[#060E1E]">
                <ResilientImage
                  src={HOTEL_FEATURE_IMAGES.receptionDesk}
                  alt="Hotel Crystal N 24-hour marble and teak wood reception front desk"
                  fallbackLabel="24-Hour Front Desk"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[16/10] overflow-hidden border border-[#0A1428]/10 bg-[#060E1E]">
                  <ResilientImage
                    src={HOTEL_FEATURE_IMAGES.lobbyLounge}
                    alt="Hotel Crystal N guest lounge with sofa seating and marble coffee table"
                    fallbackLabel="Guest Waiting Lounge"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="aspect-[16/10] overflow-hidden border border-[#0A1428]/10 bg-[#060E1E]">
                  <ResilientImage
                    src={HOTEL_FEATURE_IMAGES.corridor}
                    alt="Hotel Crystal N illuminated marble guest room corridor"
                    fallbackLabel="Guest Room Wing"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </motion.div>

            {/* Editorial Copy Column */}
            <motion.div
              initial={{opacity: 0, y: 24}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, margin: '-80px'}}
              transition={{duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1]}}
              className="flex flex-col justify-center lg:col-span-6"
            >
              <p className="text-xs font-semibold tracking-[0.2em] text-[#8E6F1E] uppercase">
                About Hotel Crystal N
              </p>
              <h2 className="mt-3 font-serif text-3xl leading-[1.12] font-medium text-[#060E1E] sm:text-4xl lg:text-5xl [text-wrap:balance]">
                Quiet Architectural Poise in the Heart of Sector 11
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[#2C3547]">
                Positioned on the third floor of Meghmalhar Complex in Sector
                11, Hotel Crystal N blends classic Gujarat warmth with spotless
                marble lobbies, warm cove-lit corridors, and restful rooms built
                for calm restoration.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#2C3547]">
                Whether you are visiting Gandhinagar for summits at Mahatma
                Mandir, corporate engagements in GIFT City, or cultural visits
                to Swaminarayan Akshardham, our 24-hour reception desk ensures
                effortless arrivals and departures.
              </p>

              {/* Editorial Proof Strip */}
              <div className="mt-8 grid grid-cols-3 gap-6 border-t border-[#0A1428]/15 pt-7">
                <div>
                  <p className="font-serif text-2xl font-semibold text-[#060E1E] tabular-nums sm:text-3xl">
                    3rd Floor
                  </p>
                  <p className="mt-1 text-xs text-[#4A5568]">
                    Meghmalhar Complex
                  </p>
                </div>
                <div>
                  <p className="font-serif text-2xl font-semibold text-[#060E1E] tabular-nums sm:text-3xl">
                    24 / 7
                  </p>
                  <p className="mt-1 text-xs text-[#4A5568]">
                    Front Desk &amp; Room Care
                  </p>
                </div>
                <div>
                  <p className="font-serif text-2xl font-semibold text-[#060E1E] tabular-nums sm:text-3xl">
                    6 min
                  </p>
                  <p className="mt-1 text-xs text-[#4A5568]">
                    To Mahatma Mandir
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ROOMS & SUITES SECTION — Deep Midnight Blue Canvas */}
      <section
        id="rooms"
        className="bg-[#060E1E] py-20 text-[#F7F3EB] sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 border-b border-[#D4AF37]/20 pb-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-medium tracking-[0.2em] text-[#D4AF37] uppercase">
                Accommodations
              </p>
              <h2 className="mt-3 font-serif text-3xl leading-tight font-medium text-[#F7F3EB] sm:text-4xl lg:text-5xl [text-wrap:balance]">
                Suites Crafted in Warm Teak &amp; Crisp Ivory Linen
              </h2>
            </div>

            {/* Interactive Category Filter Controls */}
            <div
              role="group"
              aria-label="Filter suites by category"
              className="inline-flex w-fit items-center gap-1 border border-[#D4AF37]/25 bg-[#040812] p-1"
            >
              {(['All', 'Business', 'Luxury'] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setFilter(tab)}
                  className={`min-h-[40px] px-4 py-2 text-xs font-semibold tracking-wide whitespace-nowrap shrink-0 transition-colors duration-150 cursor-pointer ${
                    filter === tab
                      ? 'bg-[#D4AF37] text-[#040812]'
                      : 'text-[#E6DFD1]/75 hover:text-[#F7F3EB]'
                  }`}
                >
                  {tab === 'All' ? 'All Suites' : tab}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {visibleRooms.map((room, idx) => (
              <motion.article
                key={room.id}
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, margin: '-60px'}}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group flex flex-col justify-between border border-[#D4AF37]/20 bg-[#0A162E]/75 transition-colors duration-200 hover:border-[#D4AF37]/60"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#040812]">
                    <ResilientImage
                      src={room.image}
                      alt={`${room.name} at Hotel Crystal N Gandhinagar`}
                      fallbackLabel={room.fallbackTitle}
                      className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#060E1E]/75 via-transparent to-transparent"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#E6CB7A] tabular-nums">
                      <span>{room.size}</span>
                      <span aria-hidden="true">·</span>
                      <span>{room.bed}</span>
                      <span aria-hidden="true">·</span>
                      <span>{room.gallery.length} Photos</span>
                    </div>

                    <h3 className="mt-3 font-serif text-2xl font-medium text-[#F7F3EB]">
                      {room.name}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-[#E6DFD1]/80">
                      {room.description}
                    </p>
                  </div>
                </div>

                <div className="border-t border-[#D4AF37]/15 px-6 py-5">
                  <div className="flex items-baseline justify-between gap-4">
                    <div>
                      <span className="font-serif text-2xl font-semibold text-[#E6CB7A] tabular-nums">
                        {room.tariff}
                      </span>
                      <span className="ml-1.5 text-xs text-[#E6DFD1]/65">
                        / night (demo rate)
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => openRoomModal(room)}
                      className="min-h-[40px] border border-[#D4AF37]/50 px-4 py-2 text-xs font-semibold tracking-wide text-[#F7F3EB] whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#040812] cursor-pointer"
                    >
                      View Suite &amp; Photos
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Suite Detail & Multi-Photo Modal */}
      <AnimatePresence>
        {selectedRoom && (
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
                aria-label="Close suite details"
                onClick={() => setSelectedRoom(null)}
                className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center border border-white/20 bg-[#040812]/90 text-[#F7F3EB] transition-colors hover:border-[#D4AF37] hover:text-[#E6CB7A] cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="aspect-[16/9] w-full overflow-hidden bg-[#040812]">
                <ResilientImage
                  src={selectedRoom.gallery[modalPhotoIdx] || selectedRoom.image}
                  alt={`${selectedRoom.name} photo ${modalPhotoIdx + 1}`}
                  fallbackLabel={selectedRoom.fallbackTitle}
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
                      alt={`${selectedRoom.name} view ${index + 1}`}
                      fallbackLabel={selectedRoom.name}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#E6CB7A] tabular-nums">
                  <span>{selectedRoom.category} Collection</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedRoom.size}</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedRoom.bed}</span>
                </div>

                <h3
                  id="suite-modal-title"
                  className="mt-2 font-serif text-3xl font-medium text-[#F7F3EB]"
                >
                  {selectedRoom.name}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#E6DFD1]/85">
                  {selectedRoom.description}
                </p>

                <ul className="mt-6 grid grid-cols-1 gap-2.5 border-y border-[#D4AF37]/20 py-5 sm:grid-cols-2">
                  {selectedRoom.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-[#F7F3EB]/90"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#D4AF37]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                  <div className="text-xs text-[#E6DFD1]/70 tabular-nums">
                    Check-in {HOTEL_INFO.checkIn} · Check-out{' '}
                    {HOTEL_INFO.checkOut}
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={HOTEL_INFO.phoneHref}
                      className="inline-flex min-h-[44px] items-center gap-2 border border-[#D4AF37]/40 px-4 py-2 text-xs font-semibold text-[#F7F3EB] whitespace-nowrap transition-colors hover:border-[#D4AF37] hover:text-[#E6CB7A]"
                    >
                      <Phone className="h-4 w-4" />
                      <span>Call Now</span>
                    </a>
                    <a
                      href={getWhatsAppUrl(
                        `Hello Hotel Crystal N Gandhinagar, I would like to enquire about the ${selectedRoom.name} (${selectedRoom.tariff}/night demo reference).`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center gap-2 bg-[#D4AF37] px-5 py-2 text-xs font-semibold text-[#040812] whitespace-nowrap transition-colors hover:bg-[#E6CB7A]"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>Enquire on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
