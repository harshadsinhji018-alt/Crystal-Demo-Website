import {CheckCircle2, MessageCircle, Phone, Send} from 'lucide-react';
import {FormEvent, useState} from 'react';
import {HOTEL_INFO, ROOMS_DATA, getWhatsAppUrl} from '../data/hotelData';
import {useLanguage} from '../i18n/LanguageContext';
import {LuxuryDivider} from './LuxuryDivider';
import {ScrollReveal} from './ScrollReveal';

interface ContactFormState {
  guestName: string;
  contactInfo: string;
  checkInDate: string;
  suiteId: string;
  message: string;
}

export function ContactAndFooter() {
  const {t} = useLanguage();
  const [form, setForm] = useState<ContactFormState>({
    guestName: '',
    contactInfo: '',
    checkInDate: '',
    suiteId: ROOMS_DATA[0].id,
    message: '',
  });
  const [hasError, setHasError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const selectedSuiteName =
    ROOMS_DATA.find((r) => r.id === form.suiteId)?.name || ROOMS_DATA[0].name;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.guestName.trim() || !form.contactInfo.trim()) {
      setHasError(true);
      return;
    }
    setHasError(false);
    setSubmitted(true);
  };

  const whatsappDirectUrl = getWhatsAppUrl(
    form.guestName
      ? `Hello Hotel Crystal N Gandhinagar, I am ${form.guestName} (${form.contactInfo}). I would like to enquire about ${selectedSuiteName}${form.checkInDate ? ` for check-in on ${form.checkInDate}` : ''}. ${form.message}`
      : undefined,
  );

  return (
    <>
      {/* CONTACT SECTION — Midnight Blue */}
      <section
        id="contact"
        className="overflow-x-clip bg-[#060E1E] py-20 text-[#F7F3EB] sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Direct Concierge Actions */}
            <ScrollReveal
              variant="fade-right"
              duration={750}
              className="flex flex-col justify-between lg:col-span-5"
            >
              <div>
                <p className="text-xs font-medium tracking-[0.2em] text-[#D4AF37] uppercase">
                  {t.contact.eyebrow}
                </p>
                <h2 className="mt-3 font-serif text-3xl font-medium text-[#F7F3EB] sm:text-4xl lg:text-5xl [text-wrap:balance]">
                  {t.contact.headline}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[#E6DFD1]/80">
                  {t.contact.subheadline}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={HOTEL_INFO.phoneHref}
                    className="luxury-btn-primary inline-flex min-h-[46px] items-center gap-2.5 bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-[#040812] whitespace-nowrap transition-colors hover:bg-[#E6CB7A]"
                  >
                    <Phone className="h-4 w-4" />
                    <span className="tabular-nums">
                      {t.contact.callPrefix} {HOTEL_INFO.phoneDisplay}
                    </span>
                  </a>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="luxury-btn-outline inline-flex min-h-[46px] items-center gap-2.5 border border-[#D4AF37]/50 bg-[#0A162E] px-6 py-3 text-sm font-medium text-[#F7F3EB] whitespace-nowrap transition-colors hover:border-[#D4AF37] hover:text-[#E6CB7A]"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>{t.contact.whatsappEnquiry}</span>
                  </a>
                </div>
              </div>

              <div>
                <LuxuryDivider
                  variant="inline"
                  theme="dark"
                  align="left"
                  className="mt-10 mb-6"
                />
                <div className="text-sm text-[#E6DFD1]/80">
                  <p className="font-serif text-lg text-[#F7F3EB]">
                    {HOTEL_INFO.name}
                  </p>
                  <p className="mt-1">{t.contact.addressSummary}</p>
                  <p className="mt-2 text-xs text-[#E6CB7A] tabular-nums">
                    {t.contact.checkInPrefix}: {HOTEL_INFO.checkIn} ·{' '}
                    {t.contact.checkOutPrefix}: {HOTEL_INFO.checkOut}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Demo Enquiry Form */}
            <ScrollReveal
              variant="fade-left"
              duration={750}
              delayStep={1}
              className="border border-[#D4AF37]/25 bg-[#040812] p-6 sm:p-9 lg:col-span-7"
            >
              {submitted ? (
                <div className="flex flex-col items-start justify-center py-8">
                  <CheckCircle2 className="h-10 w-10 text-[#D4AF37]" />
                  <h3 className="mt-4 font-serif text-3xl font-medium text-[#F7F3EB]">
                    {t.contact.submittedTitle}
                  </h3>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-[#E6DFD1]/80">
                    {t.contact.submittedGreeting} {form.guestName}.{' '}
                    {t.contact.submittedNote}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <a
                      href={whatsappDirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="luxury-btn-primary inline-flex min-h-[44px] items-center gap-2 bg-[#D4AF37] px-5 py-2.5 text-xs font-semibold text-[#040812] hover:bg-[#E6CB7A]"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>{t.contact.sendViaWhatsApp}</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="luxury-btn-outline min-h-[44px] border border-white/20 px-4 py-2 text-xs font-medium text-[#F7F3EB] hover:border-[#D4AF37] cursor-pointer"
                    >
                      {t.contact.editEnquiry}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="pb-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 pb-4">
                      <h3 className="font-serif text-2xl font-medium text-[#F7F3EB]">
                        {t.contact.formTitle}
                      </h3>
                      <span className="text-xs text-[#E6CB7A]">
                        {t.contact.demoBadge}
                      </span>
                    </div>
                    <LuxuryDivider variant="inline" theme="dark" align="left" />
                  </div>

                  {hasError && (
                    <div
                      role="alert"
                      className="border border-amber-400/50 bg-amber-950/40 px-4 py-2.5 text-xs text-amber-200"
                    >
                      {t.contact.validationError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="guestName"
                        className="block text-xs font-medium tracking-wider text-[#E6DFD1]/80 uppercase"
                      >
                        {t.contact.fullNameLabel}
                      </label>
                      <input
                        id="guestName"
                        type="text"
                        required
                        value={form.guestName}
                        onChange={(e) =>
                          setForm({...form, guestName: e.target.value})
                        }
                        placeholder={t.contact.fullNamePlaceholder}
                        className="mt-2 w-full border border-[#D4AF37]/25 bg-[#060E1E] px-4 py-2.5 text-sm text-[#F7F3EB] placeholder:text-[#E6DFD1]/35 focus:border-[#D4AF37] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contactInfo"
                        className="block text-xs font-medium tracking-wider text-[#E6DFD1]/80 uppercase"
                      >
                        {t.contact.contactInfoLabel}
                      </label>
                      <input
                        id="contactInfo"
                        type="text"
                        required
                        value={form.contactInfo}
                        onChange={(e) =>
                          setForm({...form, contactInfo: e.target.value})
                        }
                        placeholder={t.contact.contactInfoPlaceholder}
                        className="mt-2 w-full border border-[#D4AF37]/25 bg-[#060E1E] px-4 py-2.5 text-sm text-[#F7F3EB] placeholder:text-[#E6DFD1]/35 focus:border-[#D4AF37] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="checkInDate"
                        className="block text-xs font-medium tracking-wider text-[#E6DFD1]/80 uppercase"
                      >
                        {t.contact.checkInDateLabel}
                      </label>
                      <input
                        id="checkInDate"
                        type="date"
                        value={form.checkInDate}
                        onChange={(e) =>
                          setForm({...form, checkInDate: e.target.value})
                        }
                        className="mt-2 w-full border border-[#D4AF37]/25 bg-[#060E1E] px-4 py-2.5 text-sm text-[#F7F3EB] tabular-nums focus:border-[#D4AF37] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="suitePreference"
                        className="block text-xs font-medium tracking-wider text-[#E6DFD1]/80 uppercase"
                      >
                        {t.contact.suiteCategoryLabel}
                      </label>
                      <select
                        id="suitePreference"
                        value={form.suiteId}
                        onChange={(e) =>
                          setForm({...form, suiteId: e.target.value})
                        }
                        className="mt-2 w-full border border-[#D4AF37]/25 bg-[#060E1E] px-4 py-2.5 text-sm text-[#F7F3EB] focus:border-[#D4AF37] focus:outline-none"
                      >
                        {ROOMS_DATA.map((r) => (
                          <option key={r.id} value={r.id}>
                            {t.rooms.items[r.id]?.name || r.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="enquiryNotes"
                      className="block text-xs font-medium tracking-wider text-[#E6DFD1]/80 uppercase"
                    >
                      {t.contact.specialRequestsLabel}
                    </label>
                    <textarea
                      id="enquiryNotes"
                      rows={3}
                      value={form.message}
                      onChange={(e) =>
                        setForm({...form, message: e.target.value})
                      }
                      placeholder={t.contact.specialRequestsPlaceholder}
                      className="mt-2 w-full border border-[#D4AF37]/25 bg-[#060E1E] px-4 py-2.5 text-sm text-[#F7F3EB] placeholder:text-[#E6DFD1]/35 focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                    <p className="text-xs text-[#E6DFD1]/60">
                      {t.contact.demoFooterNote}
                    </p>
                    <button
                      type="submit"
                      className="luxury-btn-primary inline-flex min-h-[44px] items-center gap-2 bg-[#D4AF37] px-6 py-2.5 text-xs font-semibold tracking-wide text-[#040812] whitespace-nowrap transition-colors hover:bg-[#E6CB7A] cursor-pointer"
                    >
                      <Send className="h-3.5 w-3.5" />
                      <span>{t.contact.submitEnquiry}</span>
                    </button>
                  </div>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>

      <LuxuryDivider variant="section" from="midnight" to="obsidian" />

      {/* QUIET LUXURY FOOTER */}
      <footer className="overflow-x-clip bg-[#040812] py-12 text-[#E6DFD1]/75">
        <ScrollReveal
          variant="fade-up"
          duration={650}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <a
                href="#home"
                className="group inline-flex items-center gap-3 font-serif text-2xl font-semibold tracking-wide text-[#F7F3EB] transition-colors hover:text-[#E6CB7A]"
              >
                <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-sm border border-[#D4AF37]/60 bg-[#040812] shadow-[0_4px_14px_rgba(212,175,55,0.18)]">
                  <img
                    src={HOTEL_INFO.logo}
                    alt={`${HOTEL_INFO.name} logo`}
                    className="h-full w-full object-cover object-[50%_34%] scale-[1.28] transition-transform duration-300 group-hover:scale-[1.35]"
                  />
                </span>
                <span>{HOTEL_INFO.name}</span>
              </a>
              <p className="mt-2 text-xs text-[#E6DFD1]/65">
                {t.footer.addressLine}
              </p>
            </div>

            <nav
              aria-label="Footer navigation"
              className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-[#E6DFD1]/80"
            >
              <a href="#home" className="hover:text-[#E6CB7A]">
                {t.nav.home}
              </a>
              <a href="#about" className="hover:text-[#E6CB7A]">
                {t.nav.about}
              </a>
              <a href="#rooms" className="hover:text-[#E6CB7A]">
                {t.nav.rooms}
              </a>
              <a href="#amenities" className="hover:text-[#E6CB7A]">
                {t.nav.amenities}
              </a>
              <a href="#gallery" className="hover:text-[#E6CB7A]">
                {t.nav.gallery}
              </a>
              <a href="#attractions" className="hover:text-[#E6CB7A]">
                {t.nav.attractions}
              </a>
              <a href="#location" className="hover:text-[#E6CB7A]">
                {t.nav.location}
              </a>
              <a href="#faq" className="hover:text-[#E6CB7A]">
                {t.nav.faq}
              </a>
              <a href="#contact" className="hover:text-[#E6CB7A]">
                {t.nav.contact}
              </a>
            </nav>
          </div>

          <LuxuryDivider
            variant="inline"
            theme="dark"
            align="center"
            className="mt-8 mb-6"
          />
          <div className="flex flex-col justify-between gap-3 text-xs text-[#E6DFD1]/55 sm:flex-row sm:items-center">
            <p>
              © {new Date().getFullYear()} {HOTEL_INFO.name},{' '}
              {t.footer.copyrightSuffix}
            </p>
            <p className="tabular-nums">
              {t.footer.directDeskLabel} {HOTEL_INFO.phoneDisplay} ·{' '}
              {t.footer.checkInPrefix} {HOTEL_INFO.checkIn} ·{' '}
              {t.footer.checkOutPrefix} {HOTEL_INFO.checkOut}
            </p>
          </div>
        </ScrollReveal>
      </footer>
    </>
  );
}
