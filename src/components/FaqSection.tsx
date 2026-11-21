import {ChevronDown, Phone} from 'lucide-react';
import {AnimatePresence, motion, useReducedMotion} from 'motion/react';
import {useMemo, useState} from 'react';
import {HOTEL_INFO} from '../data/hotelData';
import {useLanguage} from '../i18n/LanguageContext';
import {LuxuryDivider} from './LuxuryDivider';
import {ScrollReveal} from './ScrollReveal';

type FaqFilter = 'all' | 'policies' | 'transport' | 'services';

export function FaqSection() {
  const {t} = useLanguage();
  const prefersReducedMotion = useReducedMotion();
  const [activeFilter, setActiveFilter] = useState<FaqFilter>('all');
  const [openId, setOpenId] = useState<string>('checkin-timings');

  const filteredFaqs = useMemo(() => {
    if (activeFilter === 'all') return t.faq.items;
    return t.faq.items.filter((item) => item.category === activeFilter);
  }, [activeFilter, t.faq.items]);

  const handleFilterChange = (nextFilter: FaqFilter) => {
    setActiveFilter(nextFilter);
    const matching =
      nextFilter === 'all'
        ? t.faq.items
        : t.faq.items.filter((item) => item.category === nextFilter);
    if (matching.length > 0 && !matching.some((item) => item.id === openId)) {
      setOpenId(matching[0].id);
    }
  };

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? '' : id));
  };

  const filterTabs: {id: FaqFilter; label: string}[] = [
    {id: 'all', label: t.faq.filterAll},
    {id: 'policies', label: t.faq.filterPolicies},
    {id: 'transport', label: t.faq.filterTransport},
    {id: 'services', label: t.faq.filterServices},
  ];

  return (
    <>
      <section
        id="faq"
        aria-labelledby="faq-heading"
        className="overflow-x-clip bg-[#040812] py-20 text-[#F7F3EB] sm:py-28"
      >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left Editorial Column: Heading, Topic Filters & Concierge Quick Brief */}
          <ScrollReveal
            variant="fade-right"
            duration={750}
            className="lg:sticky lg:top-24 lg:col-span-5"
          >
            <p className="text-xs font-medium tracking-[0.2em] text-[#D4AF37] uppercase">
              {t.faq.eyebrow}
            </p>
            <h2
              id="faq-heading"
              className="mt-3 font-serif text-3xl font-medium text-[#F7F3EB] sm:text-4xl lg:text-5xl [text-wrap:balance]"
            >
              {t.faq.headline}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#E6DFD1]/80">
              {t.faq.subheadline}
            </p>

            {/* Topic Filter Controls */}
            <div
              role="group"
              aria-label={t.faq.eyebrow}
              className="mt-7 flex flex-wrap gap-2"
            >
              {filterTabs.map((tab) => {
                const isActive = activeFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => handleFilterChange(tab.id)}
                    className={`luxury-btn-tab min-h-[40px] border px-4 py-2 text-xs font-medium whitespace-nowrap transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] cursor-pointer ${
                      isActive
                        ? 'border-[#D4AF37] bg-[#D4AF37] font-semibold text-[#040812] shadow-[0_6px_18px_-4px_rgba(212,175,55,0.45)]'
                        : 'border-[#D4AF37]/25 bg-[#060E1E] text-[#E6DFD1]/85 hover:border-[#D4AF37]/60 hover:text-[#E6CB7A]'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Quiet Luxury Concierge Quick Brief */}
            <div className="mt-9 border border-[#D4AF37]/20 bg-[#060E1E] p-6 sm:p-7">
              <h3 className="font-serif text-2xl font-medium text-[#F7F3EB]">
                {t.faq.quickDeskTitle}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#E6DFD1]/75">
                {t.faq.quickDeskSubtitle}
              </p>

              <LuxuryDivider
                variant="inline"
                theme="dark"
                align="left"
                className="mt-6 mb-5"
              />
              <dl className="grid grid-cols-3 gap-4">
                <div>
                  <dt className="text-[11px] font-medium tracking-wider text-[#D4AF37] uppercase">
                    {t.faq.checkInLabel}
                  </dt>
                  <dd className="mt-1 font-serif text-lg font-medium text-[#F7F3EB] tabular-nums">
                    {HOTEL_INFO.checkIn}
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] font-medium tracking-wider text-[#D4AF37] uppercase">
                    {t.faq.checkOutLabel}
                  </dt>
                  <dd className="mt-1 font-serif text-lg font-medium text-[#F7F3EB] tabular-nums">
                    {HOTEL_INFO.checkOut}
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] font-medium tracking-wider text-[#D4AF37] uppercase">
                    {t.faq.deskHoursLabel}
                  </dt>
                  <dd className="mt-1 font-serif text-lg font-medium text-[#F7F3EB] tabular-nums">
                    {t.faq.deskHoursValue}
                  </dd>
                </div>
              </dl>

              <LuxuryDivider
                variant="inline"
                theme="dark"
                align="left"
                className="mt-6 mb-5"
              />
              <div>
                <a
                  href={HOTEL_INFO.phoneHref}
                  className="luxury-btn-outline inline-flex min-h-[44px] items-center gap-2.5 border border-[#D4AF37]/50 bg-[#081226] px-5 py-2.5 text-xs font-semibold tracking-wide text-[#E6CB7A] whitespace-nowrap transition-colors duration-200 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#040812] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                >
                  <Phone className="h-3.5 w-3.5" />
                  <span className="tabular-nums">
                    {t.faq.askDeskCta} · {HOTEL_INFO.phoneDisplay}
                  </span>
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Accessible Dark-Gold FAQ Accordion */}
          <ScrollReveal
            variant="fade-left"
            duration={750}
            delayStep={1}
            className="lg:col-span-7"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="space-y-3.5"
              >
                {filteredFaqs.map((item, idx) => {
                  const isOpen = openId === item.id;
                  const buttonId = `faq-trigger-${item.id}`;
                  const panelId = `faq-panel-${item.id}`;
                  const displayIndex = String(idx + 1).padStart(2, '0');

                  return (
                    <div
                      key={item.id}
                      className={`border transition-colors duration-300 ${
                        isOpen
                          ? 'border-[#D4AF37]/60 bg-[#081226] shadow-[0_14px_34px_rgba(0,0,0,0.45),0_0_0_1px_rgba(212,175,55,0.12)]'
                          : 'border-[#D4AF37]/20 bg-[#060E1E] hover:border-[#D4AF37]/42'
                      }`}
                    >
                      <h3 className="m-0">
                        <button
                          id={buttonId}
                          type="button"
                          aria-expanded={isOpen}
                          aria-controls={panelId}
                          onClick={() => toggleItem(item.id)}
                          className="luxury-btn-ghost flex min-h-[64px] w-full items-start justify-between gap-4 border border-transparent px-5 py-4.5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#D4AF37] sm:px-7 sm:py-5 cursor-pointer"
                        >
                          <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-center gap-2 text-xs text-[#E6CB7A]/85">
                              <span className="font-serif text-sm font-semibold text-[#D4AF37] tabular-nums">
                                {displayIndex}.
                              </span>
                              <span aria-hidden="true" className="text-[#D4AF37]/45">
                                /
                              </span>
                              <span>{item.categoryLabel}</span>
                            </div>
                            <span
                              className={`mt-1.5 block font-serif text-xl font-medium leading-snug transition-colors duration-200 sm:text-2xl ${
                                isOpen ? 'text-[#F7F3EB]' : 'text-[#F7F3EB]/92'
                              }`}
                            >
                              {item.question}
                            </span>
                          </div>

                          <span
                            aria-hidden="true"
                            className={`mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center border transition-all duration-300 ${
                              isOpen
                                ? 'border-[#D4AF37] bg-[#D4AF37] text-[#040812]'
                                : 'border-[#D4AF37]/30 bg-[#040812]/50 text-[#D4AF37]'
                            }`}
                          >
                            <ChevronDown
                              className={`h-4 w-4 transition-transform duration-300 ${
                                isOpen ? 'rotate-180' : 'rotate-0'
                              }`}
                            />
                          </span>
                        </button>
                      </h3>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            id={panelId}
                            role="region"
                            aria-labelledby={buttonId}
                            initial={
                              prefersReducedMotion
                                ? {opacity: 1}
                                : {height: 0, opacity: 0}
                            }
                            animate={
                              prefersReducedMotion
                                ? {opacity: 1}
                                : {height: 'auto', opacity: 1}
                            }
                            exit={
                              prefersReducedMotion
                                ? {opacity: 0}
                                : {height: 0, opacity: 0}
                            }
                            transition={{
                              duration: prefersReducedMotion ? 0 : 0.28,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                            className="overflow-hidden"
                          >
                            <div className="border-t border-[#D4AF37]/15 px-5 pt-4 pb-5 sm:px-7 sm:pt-4 sm:pb-6">
                              <p className="text-sm leading-relaxed text-[#E6DFD1]/82 sm:text-[15px]">
                                {item.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <LuxuryDivider variant="section" from="obsidian" to="midnight" />
    </>
  );
}
