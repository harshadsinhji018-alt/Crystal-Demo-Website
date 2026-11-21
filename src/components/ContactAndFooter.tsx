import {motion} from 'motion/react';
import {CheckCircle2, MessageCircle, Phone, Send} from 'lucide-react';
import {FormEvent, useState} from 'react';
import {HOTEL_INFO, ROOMS_DATA, getWhatsAppUrl} from '../data/hotelData';

interface ContactFormState {
  guestName: string;
  contactInfo: string;
  checkInDate: string;
  suitePreference: string;
  message: string;
}

export function ContactAndFooter() {
  const [form, setForm] = useState<ContactFormState>({
    guestName: '',
    contactInfo: '',
    checkInDate: '',
    suitePreference: ROOMS_DATA[0].name,
    message: '',
  });
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.guestName.trim() || !form.contactInfo.trim()) {
      setErrorMsg('Please enter your name and phone number or email.');
      return;
    }
    setErrorMsg(null);
    setSubmitted(true);
  };

  const whatsappDirectUrl = getWhatsAppUrl(
    form.guestName
      ? `Hello Hotel Crystal N Gandhinagar, I am ${form.guestName} (${form.contactInfo}). I would like to enquire about ${form.suitePreference}${form.checkInDate ? ` for check-in on ${form.checkInDate}` : ''}. ${form.message}`
      : undefined,
  );

  return (
    <>
      {/* CONTACT SECTION — Midnight Blue */}
      <section
        id="contact"
        className="bg-[#060E1E] py-20 text-[#F7F3EB] sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Direct Concierge Actions */}
            <motion.div
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, margin: '-60px'}}
              transition={{duration: 0.55, ease: [0.16, 1, 0.3, 1]}}
              className="flex flex-col justify-between lg:col-span-5"
            >
              <div>
                <p className="text-xs font-medium tracking-[0.2em] text-[#D4AF37] uppercase">
                  Concierge &amp; Reservations Desk
                </p>
                <h2 className="mt-3 font-serif text-3xl font-medium text-[#F7F3EB] sm:text-4xl lg:text-5xl [text-wrap:balance]">
                  Speak Directly with Our 24-Hour Front Desk
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[#E6DFD1]/80">
                  For corporate stays, suite availability, or arrival
                  assistance at Meghmalhar Complex, reach our Gandhinagar desk
                  instantly by phone or WhatsApp.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={HOTEL_INFO.phoneHref}
                    className="inline-flex min-h-[46px] items-center gap-2.5 bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-[#040812] whitespace-nowrap transition-colors hover:bg-[#E6CB7A]"
                  >
                    <Phone className="h-4 w-4" />
                    <span className="tabular-nums">
                      Call {HOTEL_INFO.phoneDisplay}
                    </span>
                  </a>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[46px] items-center gap-2.5 border border-[#D4AF37]/50 bg-[#0A162E] px-6 py-3 text-sm font-medium text-[#F7F3EB] whitespace-nowrap transition-colors hover:border-[#D4AF37] hover:text-[#E6CB7A]"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>WhatsApp Enquiry</span>
                  </a>
                </div>
              </div>

              <div className="mt-10 border-t border-[#D4AF37]/20 pt-6 text-sm text-[#E6DFD1]/80">
                <p className="font-serif text-lg text-[#F7F3EB]">
                  {HOTEL_INFO.name}
                </p>
                <p className="mt-1">
                  {HOTEL_INFO.addressLine1}, {HOTEL_INFO.addressLine2}
                </p>
                <p className="mt-2 text-xs text-[#E6CB7A] tabular-nums">
                  Check-in: {HOTEL_INFO.checkIn} · Check-out:{' '}
                  {HOTEL_INFO.checkOut}
                </p>
              </div>
            </motion.div>

            {/* Demo Enquiry Form */}
            <motion.div
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, margin: '-60px'}}
              transition={{duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1]}}
              className="border border-[#D4AF37]/25 bg-[#040812] p-6 sm:p-9 lg:col-span-7"
            >
              {submitted ? (
                <div className="flex flex-col items-start justify-center py-8">
                  <CheckCircle2 className="h-10 w-10 text-[#D4AF37]" />
                  <h3 className="mt-4 font-serif text-3xl font-medium text-[#F7F3EB]">
                    Enquiry Preview Prepared
                  </h3>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-[#E6DFD1]/80">
                    Thank you, {form.guestName}. This website is a live design
                    demonstration with no automated booking engine—you can send
                    these exact stay details directly to our desk on WhatsApp or
                    call us anytime.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <a
                      href={whatsappDirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center gap-2 bg-[#D4AF37] px-5 py-2.5 text-xs font-semibold text-[#040812] hover:bg-[#E6CB7A]"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>Send via WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="min-h-[44px] border border-white/20 px-4 py-2 text-xs font-medium text-[#F7F3EB] hover:border-[#D4AF37] cursor-pointer"
                    >
                      Edit Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="flex items-baseline justify-between border-b border-[#D4AF37]/15 pb-4">
                    <h3 className="font-serif text-2xl font-medium text-[#F7F3EB]">
                      Request a Stay Enquiry
                    </h3>
                    <span className="text-xs text-[#E6CB7A]">
                      Demo Enquiry Form
                    </span>
                  </div>

                  {errorMsg && (
                    <div
                      role="alert"
                      className="border border-amber-400/50 bg-amber-950/40 px-4 py-2.5 text-xs text-amber-200"
                    >
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="guestName"
                        className="block text-xs font-medium tracking-wider text-[#E6DFD1]/80 uppercase"
                      >
                        Full Name
                      </label>
                      <input
                        id="guestName"
                        type="text"
                        required
                        value={form.guestName}
                        onChange={(e) =>
                          setForm({...form, guestName: e.target.value})
                        }
                        placeholder="Aarav Patel"
                        className="mt-2 w-full border border-[#D4AF37]/25 bg-[#060E1E] px-4 py-2.5 text-sm text-[#F7F3EB] placeholder:text-[#E6DFD1]/35 focus:border-[#D4AF37] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contactInfo"
                        className="block text-xs font-medium tracking-wider text-[#E6DFD1]/80 uppercase"
                      >
                        Phone or Email
                      </label>
                      <input
                        id="contactInfo"
                        type="text"
                        required
                        value={form.contactInfo}
                        onChange={(e) =>
                          setForm({...form, contactInfo: e.target.value})
                        }
                        placeholder="+91 98XXX XXXXX"
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
                        Preferred Check-In Date
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
                        Suite Category
                      </label>
                      <select
                        id="suitePreference"
                        value={form.suitePreference}
                        onChange={(e) =>
                          setForm({...form, suitePreference: e.target.value})
                        }
                        className="mt-2 w-full border border-[#D4AF37]/25 bg-[#060E1E] px-4 py-2.5 text-sm text-[#F7F3EB] focus:border-[#D4AF37] focus:outline-none"
                      >
                        {ROOMS_DATA.map((r) => (
                          <option key={r.id} value={r.name}>
                            {r.name}
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
                      Special Requests
                    </label>
                    <textarea
                      id="enquiryNotes"
                      rows={3}
                      value={form.message}
                      onChange={(e) =>
                        setForm({...form, message: e.target.value})
                      }
                      placeholder="Airport pickup, early arrival, or corporate stay requirements..."
                      className="mt-2 w-full border border-[#D4AF37]/25 bg-[#060E1E] px-4 py-2.5 text-sm text-[#F7F3EB] placeholder:text-[#E6DFD1]/35 focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                    <p className="text-xs text-[#E6DFD1]/60">
                      Demo showcase only · No online payment collected.
                    </p>
                    <button
                      type="submit"
                      className="inline-flex min-h-[44px] items-center gap-2 bg-[#D4AF37] px-6 py-2.5 text-xs font-semibold tracking-wide text-[#040812] whitespace-nowrap transition-colors hover:bg-[#E6CB7A] cursor-pointer"
                    >
                      <Send className="h-3.5 w-3.5" />
                      <span>Submit Enquiry</span>
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* QUIET LUXURY FOOTER */}
      <footer className="border-t border-[#D4AF37]/20 bg-[#040812] py-12 text-[#E6DFD1]/75">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <a
                href="#home"
                className="font-serif text-2xl font-semibold tracking-wide text-[#F7F3EB]"
              >
                {HOTEL_INFO.name}
              </a>
              <p className="mt-1.5 text-xs text-[#E6DFD1]/65">
                {HOTEL_INFO.addressLine1}, {HOTEL_INFO.addressLine2}
              </p>
            </div>

            <nav
              aria-label="Footer navigation"
              className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-[#E6DFD1]/80"
            >
              <a href="#home" className="hover:text-[#E6CB7A]">
                Home
              </a>
              <a href="#about" className="hover:text-[#E6CB7A]">
                About
              </a>
              <a href="#rooms" className="hover:text-[#E6CB7A]">
                Rooms
              </a>
              <a href="#amenities" className="hover:text-[#E6CB7A]">
                Amenities
              </a>
              <a href="#gallery" className="hover:text-[#E6CB7A]">
                Gallery
              </a>
              <a href="#attractions" className="hover:text-[#E6CB7A]">
                Attractions
              </a>
              <a href="#location" className="hover:text-[#E6CB7A]">
                Location
              </a>
              <a href="#contact" className="hover:text-[#E6CB7A]">
                Contact
              </a>
            </nav>
          </div>

          <div className="mt-8 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-[#E6DFD1]/55 sm:flex-row sm:items-center">
            <p>
              © {new Date().getFullYear()} {HOTEL_INFO.name}, Gandhinagar.
              Hospitality Demo Showcase.
            </p>
            <p className="tabular-nums">
              Direct Desk: {HOTEL_INFO.phoneDisplay} · Check-in{' '}
              {HOTEL_INFO.checkIn} · Check-out {HOTEL_INFO.checkOut}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
