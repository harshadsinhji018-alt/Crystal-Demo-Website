export type LanguageCode = 'en' | 'gu' | 'hi';

export interface LanguageOption {
  code: LanguageCode;
  name: string;
  nativeLabel: string;
  shortCode: string;
}

export const LANGUAGE_OPTIONS: LanguageOption[] = [
  {code: 'en', name: 'English', nativeLabel: 'English', shortCode: 'EN'},
  {code: 'gu', name: 'Gujarati', nativeLabel: 'ગુજરાતી', shortCode: 'ગુજ'},
  {code: 'hi', name: 'Hindi', nativeLabel: 'हिन्दी', shortCode: 'हिं'},
];

export interface RoomTranslation {
  name: string;
  categoryLabel: string;
  size: string;
  bed: string;
  fallbackTitle: string;
  description: string;
  highlights: string[];
}

export interface FacilityTranslation {
  name: string;
  detail: string;
}

export interface GallerySlideTranslation {
  title: string;
  subtitle: string;
  categoryLabel: string;
}

export interface AttractionTranslation {
  name: string;
  category: string;
  distance: string;
  driveTime: string;
  description: string;
}

export interface FaqItemTranslation {
  id: string;
  category: 'policies' | 'transport' | 'services';
  categoryLabel: string;
  question: string;
  answer: string;
}

export interface SiteTranslation {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    about: string;
    rooms: string;
    amenities: string;
    gallery: string;
    attractions: string;
    location: string;
    faq: string;
    contact: string;
    enquireStay: string;
    languageLabel: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    exploreSuites: string;
    whatsappConcierge: string;
    facadeFallback: string;
    checkInLabel: string;
    checkOutLabel: string;
    addressLabel: string;
    addressValue: string;
    frontDeskLabel: string;
  };
  about: {
    eyebrow: string;
    headline: string;
    paragraph1: string;
    paragraph2: string;
    proof1Value: string;
    proof1Label: string;
    proof2Value: string;
    proof2Label: string;
    proof3Value: string;
    proof3Label: string;
    receptionFallback: string;
    loungeFallback: string;
    corridorFallback: string;
  };
  rooms: {
    eyebrow: string;
    headline: string;
    filterAll: string;
    filterBusiness: string;
    filterLuxury: string;
    photosLabel: string;
    rateSuffix: string;
    viewSuiteCta: string;
    collectionSuffix: string;
    closeModalLabel: string;
    checkInPrefix: string;
    checkOutPrefix: string;
    callNow: string;
    enquireWhatsApp: string;
    items: Record<string, RoomTranslation>;
  };
  amenities: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    spotlightEyebrow: string;
    spotlightHeadline: string;
    spotlightBody: string;
    bathFallback: string;
    loungeFallback: string;
    items: Record<string, FacilityTranslation>;
  };
  gallery: {
    eyebrow: string;
    headline: string;
    filterAll: string;
    filterLobby: string;
    filterRooms: string;
    filterInteriors: string;
    pauseSlideshow: string;
    playSlideshow: string;
    prevImage: string;
    nextImage: string;
    expandView: string;
    closeExpanded: string;
    previous: string;
    next: string;
    slides: Record<string, GallerySlideTranslation>;
  };
  attractions: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    locateOnMap: string;
    showOnMapPrefix: string;
    items: Record<string, AttractionTranslation>;
  };
  location: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    fullAddressLabel: string;
    fullAddressValue: string;
    checkInLabel: string;
    checkOutLabel: string;
    openInMaps: string;
    centerOnHotel: string;
    openDirections: string;
    mapFallbackAddress: string;
  };
  contact: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    callPrefix: string;
    whatsappEnquiry: string;
    addressSummary: string;
    checkInPrefix: string;
    checkOutPrefix: string;
    formTitle: string;
    demoBadge: string;
    validationError: string;
    submittedTitle: string;
    submittedGreeting: string;
    submittedNote: string;
    sendViaWhatsApp: string;
    editEnquiry: string;
    fullNameLabel: string;
    fullNamePlaceholder: string;
    contactInfoLabel: string;
    contactInfoPlaceholder: string;
    checkInDateLabel: string;
    suiteCategoryLabel: string;
    specialRequestsLabel: string;
    specialRequestsPlaceholder: string;
    demoFooterNote: string;
    submitEnquiry: string;
  };
  faq: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    filterAll: string;
    filterPolicies: string;
    filterTransport: string;
    filterServices: string;
    quickDeskTitle: string;
    quickDeskSubtitle: string;
    checkInLabel: string;
    checkOutLabel: string;
    deskHoursLabel: string;
    deskHoursValue: string;
    askDeskCta: string;
    items: FaqItemTranslation[];
  };
  footer: {
    addressLine: string;
    copyrightSuffix: string;
    directDeskLabel: string;
    checkInPrefix: string;
    checkOutPrefix: string;
  };
}

export const TRANSLATIONS: Record<LanguageCode, SiteTranslation> = {
  en: {
    meta: {
      title: 'Hotel Crystal N, Gandhinagar — Luxury Boutique Stay',
      description:
        'Boutique luxury hospitality sanctuary in Sector 11, Gandhinagar, Gujarat. Explore suites, amenities, gallery, and concierge services.',
    },
    nav: {
      home: 'Home',
      about: 'About',
      rooms: 'Rooms',
      amenities: 'Amenities',
      gallery: 'Gallery',
      attractions: 'Nearby Attractions',
      location: 'Location',
      faq: 'FAQ',
      contact: 'Contact',
      enquireStay: 'Enquire Stay',
      languageLabel: 'Select language',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
    },
    hero: {
      eyebrow: 'Sector 11 · Meghmalhar Complex · Gandhinagar',
      headline: 'Midnight Calm & Champagne Warmth in Gujarat’s Capital',
      subheadline:
        'Elevated on the third floor of Meghmalhar Complex, Hotel Crystal N offers serene suites, attentive 24-hour hospitality, and swift access to Mahatma Mandir and Akshardham.',
      exploreSuites: 'Explore Suites',
      whatsappConcierge: 'WhatsApp Concierge',
      facadeFallback: 'Hotel Crystal N · Grand Entrance',
      checkInLabel: 'Check-In Time',
      checkOutLabel: 'Check-Out Time',
      addressLabel: 'Address',
      addressValue: '3rd Floor, Meghmalhar Complex, Sector 11',
      frontDeskLabel: '24-Hour Front Desk',
    },
    about: {
      eyebrow: 'About Hotel Crystal N',
      headline: 'Quiet Architectural Poise in the Heart of Sector 11',
      paragraph1:
        'Positioned on the third floor of Meghmalhar Complex in Sector 11, Hotel Crystal N blends classic Gujarat warmth with spotless marble lobbies, warm cove-lit corridors, and restful rooms built for calm restoration.',
      paragraph2:
        'Whether you are visiting Gandhinagar for summits at Mahatma Mandir, corporate engagements in GIFT City, or cultural visits to Swaminarayan Akshardham, our 24-hour reception desk ensures effortless arrivals and departures.',
      proof1Value: '3rd Floor',
      proof1Label: 'Meghmalhar Complex',
      proof2Value: '24 / 7',
      proof2Label: 'Front Desk & Room Care',
      proof3Value: '6 min',
      proof3Label: 'To Mahatma Mandir',
      receptionFallback: '24-Hour Front Desk',
      loungeFallback: 'Guest Waiting Lounge',
      corridorFallback: 'Guest Room Wing',
    },
    rooms: {
      eyebrow: 'Accommodations',
      headline: 'Suites Crafted in Warm Teak & Crisp Ivory Linen',
      filterAll: 'All Suites',
      filterBusiness: 'Business',
      filterLuxury: 'Luxury',
      photosLabel: 'Photos',
      rateSuffix: '/ night (demo rate)',
      viewSuiteCta: 'View Suite & Photos',
      collectionSuffix: 'Collection',
      closeModalLabel: 'Close suite details',
      checkInPrefix: 'Check-in',
      checkOutPrefix: 'Check-out',
      callNow: 'Call Now',
      enquireWhatsApp: 'Enquire on WhatsApp',
      items: {
        'crystal-deluxe': {
          name: 'Crystal Deluxe King Room',
          categoryLabel: 'Business',
          size: '280 sq ft',
          bed: 'King Bed',
          fallbackTitle: 'Crystal Deluxe King Room',
          description:
            'Featuring a dramatic diamond-tufted backlit headboard, crisp white linens, split air-conditioning, Smart TV entertainment, and warm teak wood paneling.',
          highlights: [
            'Diamond-tufted backlit headboard & plush King bed',
            'Smart LED TV with Netflix, Prime & Hotstar access',
            'Split AC, high-speed Wi-Fi & bedside intercom',
            'Attached modern marble washroom with rain shower',
          ],
        },
        'executive-business': {
          name: 'Executive Business Suite',
          categoryLabel: 'Business',
          size: '340 sq ft',
          bed: 'King Bed + Study Desk',
          fallbackTitle: 'Executive Business Suite',
          description:
            'Designed for corporate guests visiting Gandhinagar and GIFT City, complete with an ergonomic executive office chair, dedicated workspace, wardrobe, and blackout drapery.',
          highlights: [
            'Ergonomic executive study chair & writing counter',
            'Frosted sliding wardrobe & full-length vanity mirror',
            'Complimentary morning breakfast & express laundry',
            '24-hour room service & multi-plug charging consoles',
          ],
        },
        'premier-king-residence': {
          name: 'Premier Crystal King Suite',
          categoryLabel: 'Luxury',
          size: '380 sq ft',
          bed: 'Signature King Bed',
          fallbackTitle: 'Premier Crystal King Suite',
          description:
            'Our spacious corner residence pairing warm caramel-leather architectural paneling with lounge seating, coffee table service, and ambient cove ceiling lighting.',
          highlights: [
            'Expansive floor plan with dedicated lounge seating',
            'Teak coffee table & complimentary bottled mineral water',
            'Warm ambient cove ceiling illumination & ceiling fan',
            'Daily housekeeping refresh & 24-hour front desk support',
          ],
        },
        'family-twin-suite': {
          name: 'Family & Twin Comfort Suite',
          categoryLabel: 'Luxury',
          size: '420 sq ft',
          bed: 'King + Single / Twin Beds',
          fallbackTitle: 'Family & Twin Comfort Suite',
          description:
            'Thoughtfully configured for families and small groups with separate King and Twin bed arrangements, dual upholstered headboards, Smart TV, and generous wardrobe space.',
          highlights: [
            'Dual-bed comfort (1 King + 1 Single or Twin layout)',
            'Dedicated dining/tea table with twin seating chairs',
            'Full-size wooden wardrobe & dressing mirror',
            'Modern marble bath with hot water geyser & rain shower',
          ],
        },
      },
    },
    amenities: {
      eyebrow: 'Guest Amenities & Services',
      headline: 'Nine Essentials of Unhurried Hospitality',
      subheadline:
        'From swift elevator arrival on the third floor to round-the-clock room service, modern marble washrooms, and morning breakfast, every convenience is quietly orchestrated.',
      spotlightEyebrow: 'Refined Interiors & 24-Hour Care',
      spotlightHeadline: 'Marble Washrooms, Smart TVs & Welcoming Lounges',
      spotlightBody:
        'Every room pairs rain-shower marble bathrooms and streaming Smart TVs with attentive housekeeping and complimentary morning breakfast.',
      bathFallback: 'Modern Marble Washroom',
      loungeFallback: 'Guest Lounge & Reception',
      items: {
        wifi: {
          name: 'High-Speed Wi-Fi',
          detail: 'Seamless fiber connectivity across every suite and lobby.',
        },
        parking: {
          name: 'Dedicated Parking',
          detail: 'Convenient guest parking at Meghmalhar Complex.',
        },
        ac: {
          name: 'Climate Control AC',
          detail: 'Whisper-quiet split AC units in every guest room.',
        },
        breakfast: {
          name: 'Artisanal Breakfast',
          detail: 'Freshly prepared morning breakfast service for guests.',
        },
        'room-service': {
          name: '24-Hour Room Service',
          detail: 'Prompt in-room tea, dining, and essentials anytime.',
        },
        'front-desk': {
          name: '24-Hour Front Desk',
          detail: 'Warm marble reception desk staffed day and night.',
        },
        laundry: {
          name: 'Express Laundry',
          detail: 'Reliable garment care and pressing on request.',
        },
        lift: {
          name: 'High-Speed Lift',
          detail: 'Effortless elevator access directly to the 3rd Floor.',
        },
        housekeeping: {
          name: 'Daily Housekeeping',
          detail: 'Spotless linen refresh and attentive room upkeep.',
        },
      },
    },
    gallery: {
      eyebrow: 'Real Property Gallery',
      headline: 'Inside Hotel Crystal N',
      filterAll: 'All',
      filterLobby: 'Lobby & Corridors',
      filterRooms: 'Rooms & Suites',
      filterInteriors: 'Interiors & Bath',
      pauseSlideshow: 'Pause slideshow',
      playSlideshow: 'Play slideshow',
      prevImage: 'Previous gallery image',
      nextImage: 'Next gallery image',
      expandView: 'Expand View',
      closeExpanded: 'Close expanded view',
      previous: 'Previous',
      next: 'Next',
      slides: {
        facade: {
          title: 'Hotel Crystal Grand Entrance',
          subtitle: 'Gold & black emblem framed in Italian-veined marble',
          categoryLabel: 'Lobby & Corridors',
        },
        reception: {
          title: '24-Hour Marble Reception Desk',
          subtitle: 'Warm teak slatwork and illuminated concierge sanctuary',
          categoryLabel: 'Lobby & Corridors',
        },
        lounge: {
          title: 'Guest Waiting Lounge',
          subtitle: 'Plush velvet seating and marble coffee table near Room 103',
          categoryLabel: 'Lobby & Corridors',
        },
        corridor: {
          title: 'Illuminated Suite Corridor',
          subtitle: 'Polished marble walkway with warm recessed ceiling coves',
          categoryLabel: 'Lobby & Corridors',
        },
        'premier-king': {
          title: 'Premier Crystal King Suite',
          subtitle: 'Caramel diamond-tufted headboard with ambient warm backlighting',
          categoryLabel: 'Rooms & Suites',
        },
        'deluxe-symmetry': {
          title: 'Crystal Deluxe King Room',
          subtitle: 'Symmetrical architectural paneling and split AC comfort',
          categoryLabel: 'Rooms & Suites',
        },
        'exec-work': {
          title: 'Executive Business Suite',
          subtitle: 'Ergonomic office chair, study corner, and frosted wardrobe',
          categoryLabel: 'Rooms & Suites',
        },
        'family-triple': {
          title: 'Family Triple Comfort Suite',
          subtitle: 'Spacious King + Single bedding for families and groups',
          categoryLabel: 'Rooms & Suites',
        },
        'twin-room': {
          title: 'Twin Bedded Residence',
          subtitle: 'Twin beds paired with Smart TV and tea table',
          categoryLabel: 'Rooms & Suites',
        },
        'room-107': {
          title: 'Room 107 Deluxe Interior',
          subtitle: 'Padded leatherette headboard and window seating alcove',
          categoryLabel: 'Rooms & Suites',
        },
        'smart-tv-lounge': {
          title: 'In-Room Entertainment & Vanity',
          subtitle: 'Backlit wooden Smart TV wall, mirror, and full wardrobe',
          categoryLabel: 'Interiors & Bath',
        },
        'marble-bath': {
          title: 'Contemporary Marble Washroom',
          subtitle: 'Rainfall overhead shower, tabletop basin, and hot water geyser',
          categoryLabel: 'Interiors & Bath',
        },
      },
    },
    attractions: {
      eyebrow: 'Gandhinagar Landmarks',
      headline: 'Heritage, Nature & Civic Landmarks Nearby',
      subheadline:
        'Sector 11 places you at the crossroads of Gandhinagar’s monumental temples, green riverfront parks, and Gujarat’s premier business corridors.',
      locateOnMap: 'Locate on Interactive Map',
      showOnMapPrefix: 'Show on map:',
      items: {
        akshardham: {
          name: 'Swaminarayan Akshardham',
          category: 'Monument & Gardens',
          distance: '3.2 km',
          driveTime: '8 min drive',
          description:
            'An extraordinary pink sandstone architectural complex with serene reflecting pools, landscaped gardens, and evening illumination just minutes from Sector 11.',
        },
        adalaj: {
          name: 'Adalaj Stepwell (Rudabai ni Vav)',
          category: '15th-Century Heritage',
          distance: '11.0 km',
          driveTime: '18 min drive',
          description:
            'A five-story intricately carved sandstone subterranean stepwell blending Solanki and Indo-Islamic artistry in tranquil shaded tiers.',
        },
        'mahatma-mandir': {
          name: 'Mahatma Mandir Convention Centre',
          category: 'Business & Summit Hub',
          distance: '2.4 km',
          driveTime: '6 min drive',
          description:
            'Gujarat’s premier international convention, exhibition, and diplomatic summit landmark located directly across Gandhinagar’s central corridor.',
        },
        'sarita-udyan': {
          name: 'Sarita Udyan & Sabarmati Edge',
          category: 'Botanical Promenade',
          distance: '3.8 km',
          driveTime: '9 min drive',
          description:
            'Lush riverside gardens along the Sabarmati bank, ideal for quiet dawn walks beneath mature banyan canopies.',
        },
        'indroda-park': {
          name: 'Indroda Nature Park',
          category: 'Ecological Sanctuary',
          distance: '4.5 km',
          driveTime: '11 min drive',
          description:
            'Sprawling 400-hectare wilderness reserve featuring fossil exhibits, botanical trails, and open aviary habitats.',
        },
        'gift-city': {
          name: 'GIFT City Financial District',
          category: 'International Finance',
          distance: '12.5 km',
          driveTime: '19 min drive',
          description:
            'India’s operational International Financial Services Centre, effortlessly connected via Gandhinagar’s wide express avenues.',
        },
      },
    },
    location: {
      eyebrow: 'Location & Arrival',
      headline: 'Meghmalhar Complex, Sector 11',
      subheadline:
        'Centrally positioned in Gandhinagar’s prime civic sector with lift access directly to the third floor and dedicated guest parking on arrival.',
      fullAddressLabel: 'Full Address',
      fullAddressValue:
        'Hotel Crystal N, 3rd Floor, Meghmalhar Complex, Sector 11, Gandhinagar, Gujarat, India',
      checkInLabel: 'Check-In',
      checkOutLabel: 'Check-Out',
      openInMaps: 'Open in Google Maps',
      centerOnHotel: 'Center on Hotel',
      openDirections: 'Open Directions in Google Maps',
      mapFallbackAddress:
        '3rd Floor, Meghmalhar Complex, Sector 11, Gandhinagar, Gujarat, India',
    },
    contact: {
      eyebrow: 'Concierge & Reservations Desk',
      headline: 'Speak Directly with Our 24-Hour Front Desk',
      subheadline:
        'For corporate stays, suite availability, or arrival assistance at Meghmalhar Complex, reach our Gandhinagar desk instantly by phone or WhatsApp.',
      callPrefix: 'Call',
      whatsappEnquiry: 'WhatsApp Enquiry',
      addressSummary:
        '3rd Floor, Meghmalhar Complex, Sector 11, Gandhinagar, Gujarat, India',
      checkInPrefix: 'Check-in',
      checkOutPrefix: 'Check-out',
      formTitle: 'Request a Stay Enquiry',
      demoBadge: 'Demo Enquiry Form',
      validationError: 'Please enter your name and phone number or email.',
      submittedTitle: 'Enquiry Preview Prepared',
      submittedGreeting: 'Thank you,',
      submittedNote:
        'This website is a live design demonstration with no automated booking engine—you can send these exact stay details directly to our desk on WhatsApp or call us anytime.',
      sendViaWhatsApp: 'Send via WhatsApp',
      editEnquiry: 'Edit Enquiry',
      fullNameLabel: 'Full Name',
      fullNamePlaceholder: 'Aarav Patel',
      contactInfoLabel: 'Phone or Email',
      contactInfoPlaceholder: '+91 98XXX XXXXX',
      checkInDateLabel: 'Preferred Check-In Date',
      suiteCategoryLabel: 'Suite Category',
      specialRequestsLabel: 'Special Requests',
      specialRequestsPlaceholder:
        'Airport pickup, early arrival, or corporate stay requirements...',
      demoFooterNote: 'Demo showcase only · No online payment collected.',
      submitEnquiry: 'Submit Enquiry',
    },
    faq: {
      eyebrow: 'Guest Concierge & Policies',
      headline: 'Frequently Asked Questions',
      subheadline:
        'Essential arrival guidance, Gandhinagar transit connections, and round-the-clock hospitality details for a seamless stay at Meghmalhar Complex.',
      filterAll: 'All Topics',
      filterPolicies: 'Check-In & Policies',
      filterTransport: 'Local Transport',
      filterServices: 'Hotel Services',
      quickDeskTitle: '24-Hour Concierge Assistance',
      quickDeskSubtitle:
        'Need late-night arrival coordination, corporate billing details, or a chauffeur cab from Ahmedabad Airport?',
      checkInLabel: 'Check-In',
      checkOutLabel: 'Check-Out',
      deskHoursLabel: 'Front Desk',
      deskHoursValue: '24 / 7',
      askDeskCta: 'Speak with Front Desk',
      items: [
        {
          id: 'checkin-timings',
          category: 'policies',
          categoryLabel: 'Check-In & Policies',
          question:
            'What are your standard check-in and check-out times, and is early arrival possible?',
          answer:
            'Standard check-in begins at 12:00 PM and check-out is at 10:30 AM. Early check-in or late check-out can be coordinated in advance subject to suite availability, and our 24-hour marble reception welcomes late-night arrivals.',
        },
        {
          id: 'id-requirements',
          category: 'policies',
          categoryLabel: 'Check-In & Policies',
          question:
            'Which identification documents are required upon arrival?',
          answer:
            'All adult guests are required to present an original valid government-issued photo ID at check-in, such as an Aadhaar Card, Passport, Driving Licence, or Voter ID. International guests must provide a valid Passport and Visa.',
        },
        {
          id: 'stay-modifications',
          category: 'policies',
          categoryLabel: 'Check-In & Policies',
          question:
            'How do I enquire about suite availability or modify arrival dates?',
          answer:
            'You can call our reception desk directly on +91 74909 41357 or message our WhatsApp concierge anytime. Our team confirms current tariffs, corporate stay arrangements, and date adjustments promptly.',
        },
        {
          id: 'airport-rail-distance',
          category: 'transport',
          categoryLabel: 'Local Transport',
          question:
            'How far is Hotel Crystal N from Ahmedabad Airport and nearby railway stations?',
          answer:
            'Sardar Vallabhbhai Patel International Airport (AMD) is approximately 22 km away (around 30–35 minutes by cab). Gandhinagar Capital Railway Station is just 10 minutes away (3.5 km), and Sabarmati or Ahmedabad junctions are within a 30-minute drive.',
        },
        {
          id: 'landmarks-transit',
          category: 'transport',
          categoryLabel: 'Local Transport',
          question:
            'How convenient is local travel to Mahatma Mandir, GIFT City, and Akshardham?',
          answer:
            'Located in Sector 11, we are a 6-minute drive (2.4 km) from Mahatma Mandir Convention Centre, 8 minutes (3.2 km) from Swaminarayan Akshardham, and roughly 19 minutes (12.5 km) from GIFT City via wide express avenues.',
        },
        {
          id: 'cabs-and-parking',
          category: 'transport',
          categoryLabel: 'Local Transport',
          question:
            'Does the hotel arrange airport pickups, local cabs, and guest parking?',
          answer:
            'Yes. Dedicated guest parking is available at Meghmalhar Complex, with direct lift access to our 3rd floor lobby. Our front desk also arranges airport transfers, full-day corporate cabs, and local auto-rickshaws on request.',
        },
        {
          id: 'breakfast-dining',
          category: 'services',
          categoryLabel: 'Hotel Services',
          question:
            'Is morning breakfast available, and can I order tea or meals late at night?',
          answer:
            'Freshly prepared morning breakfast service is available for guests, and our 24-hour room service delivers hot tea, coffee, meals, and daily essentials directly to your suite at any hour.',
        },
        {
          id: 'wifi-workspace',
          category: 'services',
          categoryLabel: 'Hotel Services',
          question:
            'What Wi-Fi, entertainment, and business facilities are included in the suites?',
          answer:
            'Every suite includes complimentary high-speed fiber Wi-Fi, whisper-quiet split AC, and a Smart LED TV with Netflix, Prime, and Hotstar access. Executive Business Suites additionally offer an ergonomic study desk and chair.',
        },
        {
          id: 'laundry-housekeeping',
          category: 'services',
          categoryLabel: 'Hotel Services',
          question:
            'Are express laundry, elevator access, and daily housekeeping provided?',
          answer:
            'Yes. High-speed lift service connects the ground parking directly to our 3rd floor rooms. Daily housekeeping refreshes linens and marble rain-shower washrooms, while express laundry and pressing are available upon request.',
        },
      ],
    },
    footer: {
      addressLine:
        '3rd Floor, Meghmalhar Complex, Sector 11, Gandhinagar, Gujarat, India',
      copyrightSuffix: 'Gandhinagar. Hospitality Demo Showcase.',
      directDeskLabel: 'Direct Desk:',
      checkInPrefix: 'Check-in',
      checkOutPrefix: 'Check-out',
    },
  },

  gu: {
    meta: {
      title: 'Hotel Crystal N, ગાંધીનગર — લક્ઝરી બુટિક સ્ટે',
      description:
        'સેક્ટર 11, ગાંધીનગર, ગુજરાતમાં શાંત લક્ઝરી આતિથ્ય. અમારા સ્યુટ્સ, સુવિધાઓ, ગેલેરી અને કોન્સિયર્જ સેવાઓ જુઓ.',
    },
    nav: {
      home: 'હોમ',
      about: 'અમારા વિશે',
      rooms: 'રૂમ્સ',
      amenities: 'સુવિધાઓ',
      gallery: 'ગેલેરી',
      attractions: 'નજીકના સ્થળો',
      location: 'સ્થાન',
      faq: 'પ્રશ્નો (FAQ)',
      contact: 'સંપર્ક',
      enquireStay: 'પૂછપરછ કરો',
      languageLabel: 'ભાષા પસંદ કરો',
      openMenu: 'મેનુ ખોલો',
      closeMenu: 'મેનુ બંધ કરો',
    },
    hero: {
      eyebrow: 'સેક્ટર 11 · Meghmalhar Complex · ગાંધીનગર',
      headline: 'ગુજરાતની રાજધાનીમાં શાંત લક્ઝરી અને શાહી આતિથ્યનો અનુભવ',
      subheadline:
        'Meghmalhar Complex ના ત્રીજા માળે સ્થિત Hotel Crystal N માં આરામદાયક સ્યુટ્સ, 24-કલાક સતત આતિથ્ય અને મહાત્મા મંદિર તેમજ અક્ષરધામની સરળ પહોંચ મળે છે.',
      exploreSuites: 'સ્યુટ્સ જુઓ',
      whatsappConcierge: 'WhatsApp સહાય',
      facadeFallback: 'Hotel Crystal N · મુખ્ય પ્રવેશદ્વાર',
      checkInLabel: 'ચેક-ઇન સમય',
      checkOutLabel: 'ચેક-આઉટ સમય',
      addressLabel: 'સરનામું',
      addressValue: 'ત્રીજો માળ, Meghmalhar Complex, સેક્ટર 11',
      frontDeskLabel: '24-કલાક ફ્રન્ટ ડેસ્ક',
    },
    about: {
      eyebrow: 'Hotel Crystal N વિશે',
      headline: 'સેક્ટર 11 ના હૃદયમાં શાંત અને ભવ્ય સ્થાપત્ય સુંદરતા',
      paragraph1:
        'સેક્ટર 11 સ્થિત Meghmalhar Complex ના ત્રીજા માળે આવેલી Hotel Crystal N, ગુજરાતની ઉષ્માભરી મહેમાનગતિને સ્વચ્છ માર્બલ લોબી, કોવ-લાઇટેડ કોરિડોર અને શાંત આરામદાયક રૂમ્સ સાથે જોડે છે.',
      paragraph2:
        'તમે મહાત્મા મંદિરમાં કોન્ફરન્સ માટે, GIFT City માં કોર્પોરેટ મુલાકાત માટે કે સ્વામિનારાયણ અક્ષરધામના દર્શન માટે ગાંધીનગર આવ્યા હોવ, અમારું 24-કલાક કાર્યરત રિસેપ્શન ડેસ્ક તમારી સુગમતાની સંપૂર્ણ કાળજી રાખે છે.',
      proof1Value: 'ત્રીજો માળ',
      proof1Label: 'Meghmalhar Complex',
      proof2Value: '24 / 7',
      proof2Label: 'ફ્રન્ટ ડેસ્ક અને રૂમ સેવા',
      proof3Value: '6 મિનિટ',
      proof3Label: 'મહાત્મા મંદિરથી અંતર',
      receptionFallback: '24-કલાક રિસેપ્શન ડેસ્ક',
      loungeFallback: 'ગેસ્ટ વેઇટિંગ લાઉન્જ',
      corridorFallback: 'ગેસ્ટ રૂમ કોરિડોર',
    },
    rooms: {
      eyebrow: 'આવાસ અને સ્યુટ્સ',
      headline: 'સાગવાન લાકડા અને સ્વચ્છ આઇવરી લિનનથી સજેલા સ્યુટ્સ',
      filterAll: 'બધા સ્યુટ્સ',
      filterBusiness: 'બિઝનેસ',
      filterLuxury: 'લક્ઝરી',
      photosLabel: 'ફોટા',
      rateSuffix: '/ રાત્રિ (ડેમો દર)',
      viewSuiteCta: 'સ્યુટ અને ફોટા જુઓ',
      collectionSuffix: 'કલેક્શન',
      closeModalLabel: 'સ્યુટ વિગતો બંધ કરો',
      checkInPrefix: 'ચેક-ઇન',
      checkOutPrefix: 'ચેક-આઉટ',
      callNow: 'હવે કૉલ કરો',
      enquireWhatsApp: 'WhatsApp પર પૂછપરછ',
      items: {
        'crystal-deluxe': {
          name: 'ક્રિસ્ટલ ડીલક્સ કિંગ રૂમ',
          categoryLabel: 'બિઝનેસ',
          size: '280 ચો. ફૂટ',
          bed: 'કિંગ બેડ',
          fallbackTitle: 'ક્રિસ્ટલ ડીલક્સ કિંગ રૂમ',
          description:
            'આકર્ષક ડાયમંડ-ટફ્ટેડ બેકલિટ હેડબોર્ડ, સ્વચ્છ સફેદ લિનન, સ્પ્લિટ એર-કન્ડિશનિંગ, Smart TV મનોરંજન અને ઉષ્માભર્યા સાગવાન પેનલિંગથી સજ્જ.',
          highlights: [
            'ડાયમંડ-ટફ્ટેડ બેકલિટ હેડબોર્ડ અને આરામદાયક કિંગ બેડ',
            'Netflix, Prime અને Hotstar સાથે Smart LED TV',
            'સ્પ્લિટ AC, હાઇ-સ્પીડ Wi-Fi અને બેડસાઇડ ઇન્ટરકોમ',
            'રેઇન શાવર સાથેનું આધુનિક માર્બલ બાથરૂમ',
          ],
        },
        'executive-business': {
          name: 'એક્ઝિક્યુટિવ બિઝનેસ સ્યુટ',
          categoryLabel: 'બિઝનેસ',
          size: '340 ચો. ફૂટ',
          bed: 'કિંગ બેડ + સ્ટડી ડેસ્ક',
          fallbackTitle: 'એક્ઝિક્યુટિવ બિઝનેસ સ્યુટ',
          description:
            'ગાંધીનગર અને GIFT City આવતા કોર્પોરેટ મહેમાનો માટે ખાસ ડિઝાઇન કરેલ, જેમાં એર્ગોનોમિક ઓફિસ ચેર, વર્કસ્પેસ, વોર્ડરોબ અને બ્લેકઆઉટ પડદાની સુવિધા છે.',
          highlights: [
            'એર્ગોનોમિક એક્ઝિક્યુટિવ સ્ટડી ચેર અને રાઇટિંગ કાઉન્ટર',
            'ફ્રોસ્ટેડ સ્લાઇડિંગ વોર્ડરોબ અને ફુલ-લેન્થ વેનિટી મિરર',
            'પૂરક સવારનો નાસ્તો અને એક્સપ્રેસ લોન્ડ્રી સુવિધા',
            '24-કલાક રૂમ સર્વિસ અને મલ્ટી-પ્લગ ચાર્જિંગ પોઇન્ટ',
          ],
        },
        'premier-king-residence': {
          name: 'પ્રીમિયર ક્રિસ્ટલ કિંગ સ્યુટ',
          categoryLabel: 'લક્ઝરી',
          size: '380 ચો. ફૂટ',
          bed: 'સિગ્નેચર કિંગ બેડ',
          fallbackTitle: 'પ્રીમિયર ક્રિસ્ટલ કિંગ સ્યુટ',
          description:
            'વિશાળ કોર્નર સ્યુટ જેમાં કેરામેલ-લેધર આર્કિટેક્ચરલ પેનલિંગ, લાઉન્જ સીટિંગ, કોફી ટેબલ સર્વિસ અને શાંત કોવ સીલિંગ લાઇટિંગનો સુમેળ છે.',
          highlights: [
            'લાઉન્જ સીટિંગ સાથે વિશાળ અને આરામદાયક રૂમ વ્યવસ્થા',
            'ટીક કોફી ટેબલ અને પૂરક મિનરલ વોટર બોટલ',
            'સુંદર કોવ સીલિંગ લાઇટિંગ અને સીલિંગ ફેન',
            'દૈનિક હાઉસકીપિંગ અને 24-કલાક ફ્રન્ટ ડેસ્ક સહાય',
          ],
        },
        'family-twin-suite': {
          name: 'ફેમિલી એન્ડ ટ્વિન કમ્ફર્ટ સ્યુટ',
          categoryLabel: 'લક્ઝરી',
          size: '420 ચો. ફૂટ',
          bed: 'કિંગ + સિંગલ / ટ્વિન બેડ',
          fallbackTitle: 'ફેમિલી એન્ડ ટ્વિન કમ્ફર્ટ સ્યુટ',
          description:
            'પરિવાર અને નાના જૂથો માટે વિચારપૂર્વક તૈયાર કરાયેલ, અલગ કિંગ અને ટ્વિન બેડ વ્યવસ્થા, ડ્યુઅલ હેડબોર્ડ, Smart TV અને વિશાળ વોર્ડરોબ સાથે.',
          highlights: [
            'ડ્યુઅલ-બેડ સુવિધા (1 કિંગ + 1 સિંગલ અથવા ટ્વિન વ્યવસ્થા)',
            'બે ચેર સાથેનું ખાસ ડાઇનિંગ અને ટી ટેબલ',
            'ફુલ-સાઇઝ વુડન વોર્ડરોબ અને ડ્રેસિંગ મિરર',
            'હોટ વોટર ગીઝર અને રેઇન શાવર સાથે આધુનિક માર્બલ બાથરૂમ',
          ],
        },
      },
    },
    amenities: {
      eyebrow: 'મહેમાન સુવિધાઓ અને સેવાઓ',
      headline: 'નિરાંતે આરામદાયક રોકાણ માટે નવ મુખ્ય સુવિધાઓ',
      subheadline:
        'ત્રીજા માળે સરળ લિફ્ટ પ્રવેશથી લઈને 24-કલાક રૂમ સર્વિસ, આધુનિક માર્બલ બાથરૂમ અને સવારના તાજા નાસ્તા સુધી દરેક સુવિધાની કાળજી રાખવામાં આવે છે.',
      spotlightEyebrow: 'સુંદર આંતરિક સજાવટ અને 24-કલાક સંભાળ',
      spotlightHeadline: 'માર્બલ બાથરૂમ, Smart TV અને આકર્ષક લાઉન્જ',
      spotlightBody:
        'દરેક રૂમમાં રેઇન-શાવર માર્બલ બાથરૂમ અને સ્ટ્રીમિંગ Smart TV સાથે નિયમિત હાઉસકીપિંગ તેમજ સવારનો નાસ્તો મળે છે.',
      bathFallback: 'આધુનિક માર્બલ બાથરૂમ',
      loungeFallback: 'ગેસ્ટ લાઉન્જ અને રિસેપ્શન',
      items: {
        wifi: {
          name: 'હાઇ-સ્પીડ Wi-Fi',
          detail: 'દરેક સ્યુટ અને લોબીમાં ઝડપી ફાઇબર ઇન્ટરનેટ કનેક્ટિવિટી.',
        },
        parking: {
          name: 'સમર્પિત પાર્કિંગ',
          detail: 'Meghmalhar Complex ખાતે મહેમાનો માટે સુવિધાજનક પાર્કિંગ.',
        },
        ac: {
          name: 'ક્લાઇમેટ કંટ્રોલ AC',
          detail: 'દરેક ગેસ્ટ રૂમમાં શાંત અને અસરકારક સ્પ્લિટ AC યુનિટ.',
        },
        breakfast: {
          name: 'તાજો સવારનો નાસ્તો',
          detail: 'મહેમાનો માટે દરરોજ સવારે તાજો અને સ્વાદિષ્ટ નાસ્તો.',
        },
        'room-service': {
          name: '24-કલાક રૂમ સર્વિસ',
          detail: 'કોઈપણ સમયે રૂમમાં ચા, ભોજન અને જરૂરી સેવા ઉપલબ્ધ.',
        },
        'front-desk': {
          name: '24-કલાક ફ્રન્ટ ડેસ્ક',
          detail: 'દિવસ-રાત સહાય માટે સતત કાર્યરત માર્બલ રિસેપ્શન ડેસ્ક.',
        },
        laundry: {
          name: 'એક્સપ્રેસ લોન્ડ્રી',
          detail: 'વિનંતી પર કપડાં ધોવા અને આયર્નિંગની વિશ્વસનીય સેવા.',
        },
        lift: {
          name: 'હાઇ-સ્પીડ લિફ્ટ',
          detail: 'સીધા ત્રીજા માળે પહોંચવા માટે સરળ એલિવેટર સુવિધા.',
        },
        housekeeping: {
          name: 'દૈનિક હાઉસકીપિંગ',
          detail: 'દરરોજ સ્વચ્છ લિનન અને રૂમની સંપૂર્ણ જાળવણી.',
        },
      },
    },
    gallery: {
      eyebrow: 'વાસ્તવિક પ્રોપર્ટી ગેલેરી',
      headline: 'Hotel Crystal N ની અંદરની ઝલક',
      filterAll: 'બધા',
      filterLobby: 'લોબી અને કોરિડોર',
      filterRooms: 'રૂમ્સ અને સ્યુટ્સ',
      filterInteriors: 'ઇન્ટિરિયર અને બાથ',
      pauseSlideshow: 'સ્લાઇડશો થોભાવો',
      playSlideshow: 'સ્લાઇડશો ચલાવો',
      prevImage: 'પાછળનો ફોટો',
      nextImage: 'આગળનો ફોટો',
      expandView: 'મોટા દૃશ્યમાં જુઓ',
      closeExpanded: 'મોટું દૃશ્ય બંધ કરો',
      previous: 'પાછળ',
      next: 'આગળ',
      slides: {
        facade: {
          title: 'Hotel Crystal ભવ્ય પ્રવેશદ્વાર',
          subtitle: 'ઇટાલિયન-વેઇન્ડ માર્બલમાં સોનેરી અને કાળો પ્રતીક લોકો',
          categoryLabel: 'લોબી અને કોરિડોર',
        },
        reception: {
          title: '24-કલાક માર્બલ રિસેપ્શન ડેસ્ક',
          subtitle: 'સાગવાન લાકડાનું વર્ક અને પ્રકાશિત કોન્સિયર્જ વિસ્તાર',
          categoryLabel: 'લોબી અને કોરિડોર',
        },
        lounge: {
          title: 'ગેસ્ટ વેઇટિંગ લાઉન્જ',
          subtitle: 'રૂમ 103 પાસે આરામદાયક સોફા અને માર્બલ કોફી ટેબલ',
          categoryLabel: 'લોબી અને કોરિડોર',
        },
        corridor: {
          title: 'પ્રકાશિત સ્યુટ કોરિડોર',
          subtitle: 'સૂક્ષ્મ સીલિંગ લાઇટિંગ સાથે પોલિશ્ડ માર્બલ માર્ગ',
          categoryLabel: 'લોબી અને કોરિડોર',
        },
        'premier-king': {
          title: 'પ્રીમિયર ક્રિસ્ટલ કિંગ સ્યુટ',
          subtitle: 'ગરમ બેકલાઇટિંગ સાથે કેરામેલ ડાયમંડ-ટફ્ટેડ હેડબોર્ડ',
          categoryLabel: 'રૂમ્સ અને સ્યુટ્સ',
        },
        'deluxe-symmetry': {
          title: 'ક્રિસ્ટલ ડીલક્સ કિંગ રૂમ',
          subtitle: 'સંતુલિત આર્કિટેક્ચરલ પેનલિંગ અને સ્પ્લિટ AC આરામ',
          categoryLabel: 'રૂમ્સ અને સ્યુટ્સ',
        },
        'exec-work': {
          title: 'એક્ઝિક્યુટિવ બિઝનેસ સ્યુટ',
          subtitle: 'એર્ગોનોમિક ઓફિસ ચેર, સ્ટડી કોર્નર અને વોર્ડરોબ',
          categoryLabel: 'રૂમ્સ અને સ્યુટ્સ',
        },
        'family-triple': {
          title: 'ફેમિલી ટ્રિપલ કમ્ફર્ટ સ્યુટ',
          subtitle: 'પરિવાર અને જૂથો માટે વિશાળ કિંગ + સિંગલ બેડ વ્યવસ્થા',
          categoryLabel: 'રૂમ્સ અને સ્યુટ્સ',
        },
        'twin-room': {
          title: 'ટ્વિન બેડેડ રેસિડેન્સ',
          subtitle: 'Smart TV અને ટી ટેબલ સાથે ટ્વિન બેડની સુવિધા',
          categoryLabel: 'રૂમ્સ અને સ્યુટ્સ',
        },
        'room-107': {
          title: 'રૂમ 107 ડીલક્સ ઇન્ટિરિયર',
          subtitle: 'પેડેડ લેધરેટ હેડબોર્ડ અને વિન્ડો સીટિંગ કોર્નર',
          categoryLabel: 'રૂમ્સ અને સ્યુટ્સ',
        },
        'smart-tv-lounge': {
          title: 'ઇન-રૂમ મનોરંજન અને વેનિટી',
          subtitle: 'બેકલિટ વુડન Smart TV વોલ, મિરર અને સંપૂર્ણ વોર્ડરોબ',
          categoryLabel: 'ઇન્ટિરિયર અને બાથ',
        },
        'marble-bath': {
          title: 'આધુનિક માર્બલ વોશરૂમ',
          subtitle: 'ઓવરહેડ રેઇન શાવર, ટેબલટોપ બેસિન અને ગરમ પાણીનો ગીઝર',
          categoryLabel: 'ઇન્ટિરિયર અને બાથ',
        },
      },
    },
    attractions: {
      eyebrow: 'ગાંધીનગરના જાણીતા સ્થળો',
      headline: 'નજીકના ધાર્મિક, પ્રાકૃતિક અને વ્યાપારિક આકર્ષણો',
      subheadline:
        'સેક્ટર 11 તમને ગાંધીનગરના ભવ્ય મંદિરો, હરિયાળા બગીચાઓ અને ગુજરાતના મુખ્ય બિઝનેસ કેન્દ્રોથી બિલકુલ નજીક રાખે છે.',
      locateOnMap: 'નકશા પર સ્થાન જુઓ',
      showOnMapPrefix: 'નકશા પર બતાવો:',
      items: {
        akshardham: {
          name: 'સ્વામિનારાયણ અક્ષરધામ',
          category: 'મંદિર અને ઉદ્યાન',
          distance: '3.2 કિમી',
          driveTime: '8 મિનિટ ડ્રાઇવ',
          description:
            'સેક્ટર 11 થી માત્ર થોડી જ મિનિટોના અંતરે ગુલાબી પથ્થરની ભવ્ય સ્થાપત્ય રચના, શાંત જળાશયો અને સુંદર બગીચાઓથી સજ્જ અદ્ભુત પરિસર.',
        },
        adalaj: {
          name: 'અડાલજની વાવ (રુદાબાઈની વાવ)',
          category: '15મી સદીનો વારસો',
          distance: '11.0 કિમી',
          driveTime: '18 મિનિટ ડ્રાઇવ',
          description:
            'સોલંકી અને ઇન્ડો-ઇસ્લામિક કોતરણીના અદ્ભુત સમન્વય સમી પાંચ માળની ઐતિહાસિક પથ્થરની વાવ.',
        },
        'mahatma-mandir': {
          name: 'મહાત્મા મંદિર કન્વેન્શન સેન્ટર',
          category: 'બિઝનેસ અને સમિટ હબ',
          distance: '2.4 કિમી',
          driveTime: '6 મિનિટ ડ્રાઇવ',
          description:
            'ગાંધીનગરના કેન્દ્રીય કોરિડોરમાં આવેલું ગુજરાતનું અગ્રણી આંતરરાષ્ટ્રીય સંમેલન અને પ્રદર્શન કેન્દ્ર.',
        },
        'sarita-udyan': {
          name: 'સરિતા ઉદ્યાન અને સાબરમતી કિનારો',
          category: 'બોટનિકલ પ્રોમેનેડ',
          distance: '3.8 કિમી',
          driveTime: '9 મિનિટ ડ્રાઇવ',
          description:
            'સાબરમતી નદીના કિનારે આવેલા હરિયાળા બગીચાઓ, સવારની શાંત લટાર માટે ઉત્તમ સ્થળ.',
        },
        'indroda-park': {
          name: 'ઇન્દ્રોડા નેચર પાર્ક',
          category: 'પ્રાકૃતિક અભયારણ્ય',
          distance: '4.5 કિમી',
          driveTime: '11 મિનિટ ડ્રાઇવ',
          description:
            'ડાયનાસોર અશ્મિ ઉદ્યાન, વનસ્પતિ માર્ગો અને પક્ષી નિરીક્ષણ વિસ્તાર ધરાવતું વિશાળ 400 હેક્ટરનું પ્રકૃતિ ધામ.',
        },
        'gift-city': {
          name: 'GIFT City ફાઇનાન્શિયલ ડિસ્ટ્રિક્ટ',
          category: 'આંતરરાષ્ટ્રીય નાણાકીય કેન્દ્ર',
          distance: '12.5 કિમી',
          driveTime: '19 મિનિટ ડ્રાઇવ',
          description:
            'ગાંધીનગરના પહોળા એક્સપ્રેસ માર્ગો દ્વારા સરળતાથી જોડાયેલું ભારતનું આંતરરાષ્ટ્રીય ફાઇનાન્શિયલ સર્વિસિસ સેન્ટર.',
        },
      },
    },
    location: {
      eyebrow: 'સ્થાન અને પહોંચવાની વિગત',
      headline: 'Meghmalhar Complex, સેક્ટર 11',
      subheadline:
        'ગાંધીનગરના મુખ્ય સેક્ટરમાં કેન્દ્રસ્થાને, ત્રીજા માળે સીધી લિફ્ટ અને આગમન પર પાર્કિંગ સુવિધા સાથે.',
      fullAddressLabel: 'સંપૂર્ણ સરનામું',
      fullAddressValue:
        'Hotel Crystal N, ત્રીજો માળ, Meghmalhar Complex, સેક્ટર 11, ગાંધીનગર, ગુજરાત, ભારત',
      checkInLabel: 'ચેક-ઇન',
      checkOutLabel: 'ચેક-આઉટ',
      openInMaps: 'Google Maps માં ખોલો',
      centerOnHotel: 'હોટેલ પર કેન્દ્રિત કરો',
      openDirections: 'Google Maps માં દિશા મેળવો',
      mapFallbackAddress:
        'ત્રીજો માળ, Meghmalhar Complex, સેક્ટર 11, ગાંધીનગર, ગુજરાત, ભારત',
    },
    contact: {
      eyebrow: 'કોન્સિયર્જ અને રિઝર્વેશન ડેસ્ક',
      headline: 'અમારા 24-કલાક ફ્રન્ટ ડેસ્ક સાથે સીધો સંપર્ક કરો',
      subheadline:
        'કોર્પોરેટ રોકાણ, રૂમ ઉપલબ્ધતા અથવા Meghmalhar Complex ખાતે આગમન સહાય માટે ફોન અથવા WhatsApp દ્વારા તરત જ અમારા ડેસ્કનો સંપર્ક કરો.',
      callPrefix: 'કૉલ કરો',
      whatsappEnquiry: 'WhatsApp પૂછપરછ',
      addressSummary:
        'ત્રીજો માળ, Meghmalhar Complex, સેક્ટર 11, ગાંધીનગર, ગુજરાત, ભારત',
      checkInPrefix: 'ચેક-ઇન',
      checkOutPrefix: 'ચેક-આઉટ',
      formTitle: 'રોકાણ માટે પૂછપરછ મોકલો',
      demoBadge: 'ડેમો પૂછપરછ ફોર્મ',
      validationError: 'કૃપા કરીને તમારું નામ અને ફોન નંબર અથવા ઇમેઇલ દાખલ કરો.',
      submittedTitle: 'પૂછપરછ પૂર્વાવલોકન તૈયાર છે',
      submittedGreeting: 'આભાર,',
      submittedNote:
        'આ વેબસાઇટ માત્ર લાઇવ ડિઝાઇન ડેમો છે અને તેમાં ઓનલાઇન બુકિંગ સિસ્ટમ નથી—તમે આ વિગતો સીધી અમારા WhatsApp ડેસ્ક પર મોકલી શકો છો અથવા કૉલ કરી શકો છો.',
      sendViaWhatsApp: 'WhatsApp પર મોકલો',
      editEnquiry: 'વિગતો સુધારો',
      fullNameLabel: 'પૂરું નામ',
      fullNamePlaceholder: 'આરવ પટેલ',
      contactInfoLabel: 'ફોન નંબર અથવા ઇમેઇલ',
      contactInfoPlaceholder: '+91 98XXX XXXXX',
      checkInDateLabel: 'પસંદગીની ચેક-ઇન તારીખ',
      suiteCategoryLabel: 'સ્યુટ કેટેગરી',
      specialRequestsLabel: 'ખાસ વિનંતી',
      specialRequestsPlaceholder:
        'એરપોર્ટ પિકઅપ, વહેલું આગમન અથવા કોર્પોરેટ રોકાણની વિગતો...',
      demoFooterNote: 'માત્ર ડેમો પ્રદર્શન · કોઈ ઓનલાઇન ચુકવણી લેવામાં આવતી નથી.',
      submitEnquiry: 'પૂછપરછ સબમિટ કરો',
    },
    faq: {
      eyebrow: 'મહેમાન સહાય અને નીતિઓ',
      headline: 'વારંવાર પૂછાતા પ્રશ્નો',
      subheadline:
        'Meghmalhar Complex ખાતે આગમન, ગાંધીનગરમાં સ્થાનિક પરિવહન અને 24-કલાક હોટેલ સેવાઓ અંગે ઝડપી અને સ્પષ્ટ માહિતી.',
      filterAll: 'બધા પ્રશ્નો',
      filterPolicies: 'ચેક-ઇન અને નીતિઓ',
      filterTransport: 'સ્થાનિક પરિવહન',
      filterServices: 'હોટેલ સેવાઓ',
      quickDeskTitle: '24-કલાક કોન્સિયર્જ સહાય',
      quickDeskSubtitle:
        'મોડી રાત્રે આગમન, કોર્પોરેટ બિલિંગ અથવા અમદાવાદ એરપોર્ટથી કેબ પિકઅપ માટે અમારો સીધો સંપર્ક કરો.',
      checkInLabel: 'ચેક-ઇન',
      checkOutLabel: 'ચેક-આઉટ',
      deskHoursLabel: 'ફ્રન્ટ ડેસ્ક',
      deskHoursValue: '24 / 7',
      askDeskCta: 'ફ્રન્ટ ડેસ્ક સાથે વાત કરો',
      items: [
        {
          id: 'checkin-timings',
          category: 'policies',
          categoryLabel: 'ચેક-ઇન અને નીતિઓ',
          question:
            'ચેક-ઇન અને ચેક-આઉટનો નિયમિત સમય શું છે, અને શું વહેલું ચેક-ઇન મળી શકે?',
          answer:
            'નિયમિત ચેક-ઇન સમય બપોરે 12:00 PM અને ચેક-આઉટ સમય સવારે 10:30 AM છે. રૂમની ઉપલબ્ધતા મુજબ અગાઉથી જાણ કરવા પર વહેલું ચેક-ઇન કે મોડું ચેક-આઉટ ગોઠવી શકાય છે, અને અમારું 24-કલાક રિસેપ્શન મોડી રાતના આગમન માટે પણ હંમેશા ખુલ્લું રહે છે.',
        },
        {
          id: 'id-requirements',
          category: 'policies',
          categoryLabel: 'ચેક-ઇન અને નીતિઓ',
          question: 'ચેક-ઇન સમયે કયા ઓળખપત્ર (ID) દસ્તાવેજો જરૂરી છે?',
          answer:
            'દરેક પુખ્ત મહેમાને ચેક-ઇન સમયે અસલ માન્ય સરકારી ફોટો ઓળખપત્ર જેવા કે આધાર કાર્ડ, પાસપોર્ટ, ડ્રાઇવિંગ લાઇસન્સ અથવા વોટર ID રજૂ કરવું ફરજિયાત છે. વિદેશી મહેમાનો માટે માન્ય પાસપોર્ટ અને વિઝા જરૂરી છે.',
        },
        {
          id: 'stay-modifications',
          category: 'policies',
          categoryLabel: 'ચેક-ઇન અને નીતિઓ',
          question:
            'રૂમ ઉપલબ્ધતા તપાસવા અથવા તારીખમાં ફેરફાર કરવા માટે કેવી રીતે સંપર્ક કરવો?',
          answer:
            'તમે અમારા રિસેપ્શન ડેસ્કને +91 74909 41357 પર સીધો કૉલ કરી શકો છો અથવા WhatsApp પર સંદેશ મોકલી શકો છો. અમારી ટીમ રૂમ ટેરિફ, કોર્પોરેટ રોકાણ અને તારીખના ફેરફારમાં તરત જ મદદ કરે છે.',
        },
        {
          id: 'airport-rail-distance',
          category: 'transport',
          categoryLabel: 'સ્થાનિક પરિવહન',
          question:
            'અમદાવાદ એરપોર્ટ અને નજીકના રેલવે સ્ટેશનો Hotel Crystal N થી કેટલા દૂર છે?',
          answer:
            'સરદાર વલ્લભભાઈ પટેલ આંતરરાષ્ટ્રીય એરપોર્ટ (AMD) અંદાજે 22 કિમી (કાર દ્વારા 30–35 મિનિટ) દૂર છે. ગાંધીનગર કેપિટલ રેલવે સ્ટેશન માત્ર 10 મિનિટ (3.5 કિમી) અને સાબરમતી કે અમદાવાદ જંક્શન લગભગ 30 મિનિટના અંતરે છે.',
        },
        {
          id: 'landmarks-transit',
          category: 'transport',
          categoryLabel: 'સ્થાનિક પરિવહન',
          question:
            'મહાત્મા મંદિર, GIFT City અને અક્ષરધામ જવા માટે મુસાફરી કેટલી સરળ છે?',
          answer:
            'સેક્ટર 11 ના કેન્દ્રસ્થાનેથી મહાત્મા મંદિર કન્વેન્શન સેન્ટર માત્ર 6 મિનિટ (2.4 કિમી), સ્વામિનારાયણ અક્ષરધામ 8 મિનિટ (3.2 કિમી) અને GIFT City પહોળા એક્સપ્રેસ માર્ગો દ્વારા લગભગ 19 મિનિટ (12.5 કિમી) દૂર છે.',
        },
        {
          id: 'cabs-and-parking',
          category: 'transport',
          categoryLabel: 'સ્થાનિક પરિવહન',
          question:
            'શું હોટેલ તરફથી એરપોર્ટ પિકઅપ, લોકલ કેબ અને પાર્કિંગની સુવિધા મળે છે?',
          answer:
            'હા. Meghmalhar Complex ખાતે મહેમાનો માટે સમર્પિત પાર્કિંગ ઉપલબ્ધ છે અને ત્યાંથી સીધી લિફ્ટ ત્રીજા માળે આવે છે. અમારું ફ્રન્ટ ડેસ્ક વિનંતી પર એરપોર્ટ ટ્રાન્સફર, કોર્પોરેટ કેબ અને સ્થાનિક રિક્ષાની વ્યવસ્થા પણ કરી આપે છે.',
        },
        {
          id: 'breakfast-dining',
          category: 'services',
          categoryLabel: 'હોટેલ સેવાઓ',
          question:
            'શું સવારનો નાસ્તો ઉપલબ્ધ છે, અને મોડી રાત્રે રૂમ સર્વિસ મળી શકે છે?',
          answer:
            'મહેમાનો માટે દરરોજ સવારે તાજો તૈયાર નાસ્તો ઉપલબ્ધ છે, તેમજ અમારી 24-કલાક રૂમ સર્વિસ કોઈપણ સમયે તમારા સ્યુટમાં ગરમ ચા, કોફી, ભોજન અને જરૂરી ચીજવસ્તુઓ પહોંચાડે છે.',
        },
        {
          id: 'wifi-workspace',
          category: 'services',
          categoryLabel: 'હોટેલ સેવાઓ',
          question:
            'સ્યુટ્સમાં Wi-Fi, મનોરંજન અને બિઝનેસ વર્કસ્પેસની કઈ સુવિધાઓ મળે છે?',
          answer:
            'દરેક સ્યુટમાં ફ્રી હાઇ-સ્પીડ ફાઇબર Wi-Fi, શાંત સ્પ્લિટ AC અને Netflix, Prime તેમજ Hotstar સાથે Smart LED TV ઉપલબ્ધ છે. એક્ઝિક્યુટિવ બિઝનેસ સ્યુટ્સમાં ખાસ એર્ગોનોમિક સ્ટડી ડેસ્ક અને ચેર પણ છે.',
        },
        {
          id: 'laundry-housekeeping',
          category: 'services',
          categoryLabel: 'હોટેલ સેવાઓ',
          question:
            'શું એક્સપ્રેસ લોન્ડ્રી, લિફ્ટ અને દૈનિક હાઉસકીપિંગ સેવાઓ ઉપલબ્ધ છે?',
          answer:
            'હા. હાઇ-સ્પીડ લિફ્ટ પાર્કિંગથી સીધી ત્રીજા માળની લોબી સુધી જોડાયેલી છે. દૈનિક હાઉસકીપિંગ લિનન અને માર્બલ રેઇન-શાવર બાથરૂમની સ્વચ્છતા જાળવે છે, અને વિનંતી પર એક્સપ્રેસ લોન્ડ્રી સેવા ઉપલબ્ધ છે.',
        },
      ],
    },
    footer: {
      addressLine:
        'ત્રીજો માળ, Meghmalhar Complex, સેક્ટર 11, ગાંધીનગર, ગુજરાત, ભારત',
      copyrightSuffix: 'ગાંધીનગર. હોસ્પિટાલિટી ડેમો શોકેસ.',
      directDeskLabel: 'સીધો સંપર્ક:',
      checkInPrefix: 'ચેક-ઇન',
      checkOutPrefix: 'ચેક-આઉટ',
    },
  },

  hi: {
    meta: {
      title: 'Hotel Crystal N, गांधीनगर — लक्ज़री बुटीक स्टे',
      description:
        'सेक्टर 11, गांधीनगर, गुजरात में शांत लक्ज़री आतिथ्य। हमारे सुइट्स, सुविधाएं, गैलरी और कंसीयर्ज सेवाएं देखें।',
    },
    nav: {
      home: 'होम',
      about: 'हमारे बारे में',
      rooms: 'रूम्स',
      amenities: 'सुविधाएं',
      gallery: 'गैलरी',
      attractions: 'नज़दीकी स्थान',
      location: 'लोकेशन',
      faq: 'सवाल-जवाब',
      contact: 'संपर्क',
      enquireStay: 'पूछताछ करें',
      languageLabel: 'भाषा चुनें',
      openMenu: 'मेनू खोलें',
      closeMenu: 'मेनू बंद करें',
    },
    hero: {
      eyebrow: 'सेक्टर 11 · Meghmalhar Complex · गांधीनगर',
      headline: 'गुजरात की राजधानी में शांत लक्ज़री और आत्मीय आतिथ्य',
      subheadline:
        'Meghmalhar Complex की तीसरी मंजिल पर स्थित Hotel Crystal N में शांत सुइट्स, 24-घंटे तत्पर आतिथ्य और महात्मा मंदिर व अक्षरधाम तक सहज पहुंच मिलती है।',
      exploreSuites: 'सुइट्स देखें',
      whatsappConcierge: 'WhatsApp सहायता',
      facadeFallback: 'Hotel Crystal N · मुख्य प्रवेश द्वार',
      checkInLabel: 'चेक-इन समय',
      checkOutLabel: 'चेक-आउट समय',
      addressLabel: 'पता',
      addressValue: 'तीसरी मंजिल, Meghmalhar Complex, सेक्टर 11',
      frontDeskLabel: '24-घंटे फ्रंट डेस्क',
    },
    about: {
      eyebrow: 'Hotel Crystal N के बारे में',
      headline: 'सेक्टर 11 के केंद्र में शांत और सुरुचिपूर्ण स्थापत्य',
      paragraph1:
        'सेक्टर 11 स्थित Meghmalhar Complex की तीसरी मंजिल पर बसी Hotel Crystal N, गुजरात के पारंपरिक सत्कार को स्वच्छ मार्बल लॉबी, गर्म कोव-लाइटेड गलियारों और आरामदायक कमरों के साथ जोड़ती है।',
      paragraph2:
        'चाहे आप महात्मा मंदिर में सम्मेलन के लिए आए हों, GIFT City में कॉर्पोरेट मीटिंग के लिए या स्वामीनारायण अक्षरधाम दर्शन के लिए, हमारा 24-घंटे खुला रिसेप्शन डेस्क आपके सुगम आगमन और प्रस्थान का ध्यान रखता है।',
      proof1Value: 'तीसरी मंजिल',
      proof1Label: 'Meghmalhar Complex',
      proof2Value: '24 / 7',
      proof2Label: 'फ्रंट डेस्क और रूम केयर',
      proof3Value: '6 मिनट',
      proof3Label: 'महात्मा मंदिर से दूरी',
      receptionFallback: '24-घंटे रिसेप्शन डेस्क',
      loungeFallback: 'गेस्ट वेटिंग लाउंज',
      corridorFallback: 'गेस्ट रूम कॉरिडोर',
    },
    rooms: {
      eyebrow: 'आवास एवं सुइट्स',
      headline: 'सागौन की लकड़ी और स्वच्छ आइवरी लिनन से सजे सुइट्स',
      filterAll: 'सभी सुइट्स',
      filterBusiness: 'बिज़नेस',
      filterLuxury: 'लक्ज़री',
      photosLabel: 'फोटो',
      rateSuffix: '/ रात (डेमो दर)',
      viewSuiteCta: 'सुइट व फोटो देखें',
      collectionSuffix: 'कलेक्शन',
      closeModalLabel: 'सुइट विवरण बंद करें',
      checkInPrefix: 'चेक-इन',
      checkOutPrefix: 'चेक-आउट',
      callNow: 'अभी कॉल करें',
      enquireWhatsApp: 'WhatsApp पर पूछताछ',
      items: {
        'crystal-deluxe': {
          name: 'क्रिस्टल डीलक्स किंग रूम',
          categoryLabel: 'बिज़नेस',
          size: '280 वर्ग फुट',
          bed: 'किंग बेड',
          fallbackTitle: 'क्रिस्टल डीलक्स किंग रूम',
          description:
            'आकर्षक डायमंड-टफ्टेड बैकलिट हेडबोर्ड, ताज़ा सफेद लिनन, स्प्लिट एयर-कंडीशनिंग, Smart TV मनोरंजन और गर्म सागौन वुड पैनलिंग से सुसज्जित।',
          highlights: [
            'डायमंड-टफ्टेड बैकलिट हेडबोर्ड और आरामदायक किंग बेड',
            'Netflix, Prime और Hotstar के साथ Smart LED TV',
            'स्प्लिट AC, हाई-स्पीड Wi-Fi और बेडसाइड इंटरकॉम',
            'रेन शॉवर के साथ आधुनिक मार्बल बाथरूम',
          ],
        },
        'executive-business': {
          name: 'एग्जीक्यूटिव बिज़नेस सुइट',
          categoryLabel: 'बिज़नेस',
          size: '340 वर्ग फुट',
          bed: 'किंग बेड + स्टडी डेस्क',
          fallbackTitle: 'एग्जीक्यूटिव बिज़नेस सुइट',
          description:
            'गांधीनगर और GIFT City आने वाले कॉर्पोरेट मेहमानों के लिए विशेष रूप से डिज़ाइन किया गया, जिसमें एर्गोनॉमिक ऑफिस चेयर, वर्कस्पेस, वॉर्डरोब और ब्लैकआउट पर्दे शामिल हैं।',
          highlights: [
            'एर्गोनॉमिक एग्जीक्यूटिव स्टडी चेयर और राइटिंग काउंटर',
            'फ्रॉस्टेड स्लाइडिंग वॉर्डरोब और फुल-लेंथ वैनिटी मिरर',
            'मानार्थ सुबह का नाश्ता और एक्सप्रेस लॉन्ड्री सेवा',
            '24-घंटे रूम सर्विस और मल्टी-प्लग चार्जिंग कंसोल',
          ],
        },
        'premier-king-residence': {
          name: 'प्रीमियर क्रिस्टल किंग सुइट',
          categoryLabel: 'लक्ज़री',
          size: '380 वर्ग फुट',
          bed: 'सिग्नेचर किंग बेड',
          fallbackTitle: 'प्रीमियर क्रिस्टल किंग सुइट',
          description:
            'विशाल कॉर्नर सुइट जो कैरामेल-लेदर आर्किटेक्चरल पैनलिंग, लाउंज सिटिंग, कॉफी टेबल सर्विस और शांत कोव सीलिंग लाइटिंग के साथ अद्भुत आराम देता है।',
          highlights: [
            'समर्पित लाउंज सिटिंग के साथ विशाल फ्लोर प्लान',
            'टीक कॉफी टेबल और मानार्थ मिनरल वॉटर बोतल',
            'गर्म कोव सीलिंग लाइटिंग और सीलिंग फैन',
            'दैनिक हाउसकीपिंग और 24-घंटे फ्रंट डेस्क सहायता',
          ],
        },
        'family-twin-suite': {
          name: 'फैमिली एंड ट्विन कम्फर्ट सुइट',
          categoryLabel: 'लक्ज़री',
          size: '420 वर्ग फुट',
          bed: 'किंग + सिंगल / ट्विन बेड',
          fallbackTitle: 'फैमिली एंड ट्विन कम्फर्ट सुइट',
          description:
            'परिवारों और छोटे समूहों के लिए सोच-समझकर तैयार किया गया, अलग किंग और ट्विन बेड व्यवस्था, ड्यूल हेडबोर्ड, Smart TV और पर्याप्त वॉर्डरोब स्पेस के साथ।',
          highlights: [
            'ड्यूल-बेड सुविधा (1 किंग + 1 सिंगल या ट्विन लेआउट)',
            'दो कुर्सियों के साथ समर्पित डाइनिंग / टी टेबल',
            'फुल-साइज वुडन वॉर्डरोब और ड्रेसिंग मिरर',
            'हॉट वॉटर गीज़र और रेन शॉवर वाला आधुनिक मार्बल बाथरूम',
          ],
        },
      },
    },
    amenities: {
      eyebrow: 'अतिथि सुविधाएं एवं सेवाएं',
      headline: 'सहज और आरामदायक प्रवास की नौ प्रमुख विशेषताएं',
      subheadline:
        'तीसरी मंजिल पर सुगम लिफ्ट आगमन से लेकर 24-घंटे रूम सर्विस, आधुनिक मार्बल बाथरूम और सुबह के ताज़ा नाश्ते तक हर सुविधा का ध्यान रखा जाता है।',
      spotlightEyebrow: 'परिष्कृत इंटीरियर और 24-घंटे देखभाल',
      spotlightHeadline: 'मार्बल बाथरूम, Smart TV और स्वागतपूर्ण लाउंज',
      spotlightBody:
        'प्रत्येक कमरा रेन-शॉवर मार्बल बाथरूम और स्ट्रीमिंग Smart TV के साथ नियमित हाउसकीपिंग और सुबह के नाश्ते से सुसज्जित है।',
      bathFallback: 'आधुनिक मार्बल बाथरूम',
      loungeFallback: 'गेस्ट लाउंज और रिसेप्शन',
      items: {
        wifi: {
          name: 'हाई-स्पीड Wi-Fi',
          detail: 'प्रत्येक सुइट और लॉबी में निर्बाध फाइबर इंटरनेट कनेक्टिविटी।',
        },
        parking: {
          name: 'समर्पित पार्किंग',
          detail: 'Meghmalhar Complex में मेहमानों के लिए सुविधाजनक पार्किंग।',
        },
        ac: {
          name: 'क्लाइमेट कंट्रोल AC',
          detail: 'हर अतिथि कक्ष में शांत और प्रभावी स्प्लिट AC सुविधा।',
        },
        breakfast: {
          name: 'ताज़ा सुबह का नाश्ता',
          detail: 'अतिथियों के लिए प्रतिदिन ताज़ा तैयार सुबह का नाश्ता।',
        },
        'room-service': {
          name: '24-घंटे रूम सर्विस',
          detail: 'किसी भी समय कमरे में चाय, भोजन और आवश्यक सेवा उपलब्ध।',
        },
        'front-desk': {
          name: '24-घंटे फ्रंट डेस्क',
          detail: 'दिन-रात सेवा के लिए तत्पर गर्मजोशी भरा मार्बल रिसेप्शन डेस्क।',
        },
        laundry: {
          name: 'एक्सप्रेस लॉन्ड्री',
          detail: 'अनुरोध पर वस्त्र धुलाई और प्रेस की विश्वसनीय सेवा।',
        },
        lift: {
          name: 'हाई-स्पीड लिफ्ट',
          detail: 'सीधे तीसरी मंजिल तक सहज एलिवेटर पहुंच।',
        },
        housekeeping: {
          name: 'दैनिक हाउसकीपिंग',
          detail: 'प्रतिदिन स्वच्छ लिनन और कमरों की सावधानीपूर्वक देखभाल।',
        },
      },
    },
    gallery: {
      eyebrow: 'वास्तविक प्रॉपर्टी गैलरी',
      headline: 'Hotel Crystal N के भीतर की झलक',
      filterAll: 'सभी',
      filterLobby: 'लॉबी व कॉरिडोर',
      filterRooms: 'रूम्स व सुइट्स',
      filterInteriors: 'इंटीरियर व बाथ',
      pauseSlideshow: 'स्लाइडशो रोकें',
      playSlideshow: 'स्लाइडशो चलाएं',
      prevImage: 'पिछली तस्वीर',
      nextImage: 'अगली तस्वीर',
      expandView: 'बड़ा दृश्य देखें',
      closeExpanded: 'विस्तृत दृश्य बंद करें',
      previous: 'पिछला',
      next: 'अगला',
      slides: {
        facade: {
          title: 'Hotel Crystal भव्य प्रवेश द्वार',
          subtitle: 'इटैलियन-वेन्ड मार्बल में सुनहरा और काला प्रतीक चिह्न',
          categoryLabel: 'लॉबी व कॉरिडोर',
        },
        reception: {
          title: '24-घंटे मार्बल रिसेप्शन डेस्क',
          subtitle: 'सागौन स्लैटवर्क और रोशन कंसीयर्ज स्वागत क्षेत्र',
          categoryLabel: 'लॉबी व कॉरिडोर',
        },
        lounge: {
          title: 'गेस्ट वेटिंग लाउंज',
          subtitle: 'रूम 103 के पास आरामदायक सोफा और मार्बल कॉफी टेबल',
          categoryLabel: 'लॉबी व कॉरिडोर',
        },
        corridor: {
          title: 'रोशन सुइट कॉरिडोर',
          subtitle: 'गर्म कोव सीलिंग लाइटिंग के साथ पॉलिश किया हुआ मार्बल गलियारा',
          categoryLabel: 'लॉबी व कॉरिडोर',
        },
        'premier-king': {
          title: 'प्रीमियर क्रिस्टल किंग सुइट',
          subtitle: 'गर्म बैकलाइटिंग के साथ कैरामेल डायमंड-टफ्टेड हेडबोर्ड',
          categoryLabel: 'रूम्स व सुइट्स',
        },
        'deluxe-symmetry': {
          title: 'क्रिस्टल डीलक्स किंग रूम',
          subtitle: 'संतुलित आर्किटेक्चरल पैनलिंग और स्प्लिट AC आराम',
          categoryLabel: 'रूम्स व सुइट्स',
        },
        'exec-work': {
          title: 'एग्जीक्यूटिव बिज़नेस सुइट',
          subtitle: 'एर्गोनॉमिक ऑफिस चेयर, स्टडी कॉर्नर और फ्रॉस्टेड वॉर्डरोब',
          categoryLabel: 'रूम्स व सुइट्स',
        },
        'family-triple': {
          title: 'फैमिली ट्रिपल कम्फर्ट सुइट',
          subtitle: 'परिवारों और समूहों के लिए विशाल किंग + सिंगल बेड व्यवस्था',
          categoryLabel: 'रूम्स व सुइट्स',
        },
        'twin-room': {
          title: 'ट्विन बेडेड रेजिडेंस',
          subtitle: 'Smart TV और टी टेबल के साथ ट्विन बेड आराम',
          categoryLabel: 'रूम्स व सुइट्स',
        },
        'room-107': {
          title: 'रूम 107 डीलक्स इंटीरियर',
          subtitle: 'पैडेड लेदरेट हेडबोर्ड और विंडो सीटिंग कॉर्नर',
          categoryLabel: 'रूम्स व सुइट्स',
        },
        'smart-tv-lounge': {
          title: 'इन-रूम मनोरंजन व वैनिटी',
          subtitle: 'बैकलिट वुडन Smart TV वॉल, मिरर और पूर्ण वॉर्डरोब',
          categoryLabel: 'इंटीरियर व बाथ',
        },
        'marble-bath': {
          title: 'समकालीन मार्बल वॉशरूम',
          subtitle: 'ओवरहेड रेन शॉवर, टेबलटॉप बेसिन और हॉट वॉटर गीज़र',
          categoryLabel: 'इंटीरियर व बाथ',
        },
      },
    },
    attractions: {
      eyebrow: 'गांधीनगर के प्रमुख स्थल',
      headline: 'नज़दीकी धरोहर, प्रकृति और प्रमुख व्यापारिक केंद्र',
      subheadline:
        'सेक्टर 11 आपको गांधीनगर के भव्य मंदिरों, हरे-भरे उद्यानों और गुजरात के प्रमुख व्यापारिक केंद्रों के बिल्कुल करीब रखता है।',
      locateOnMap: 'इंटरैक्टिव मैप पर देखें',
      showOnMapPrefix: 'मैप पर दिखाएं:',
      items: {
        akshardham: {
          name: 'स्वामीनारायण अक्षरधाम',
          category: 'स्मारक एवं उद्यान',
          distance: '3.2 किमी',
          driveTime: '8 मिनट ड्राइव',
          description:
            'सेक्टर 11 से कुछ ही मिनटों की दूरी पर गुलाबी बलुआ पत्थर से निर्मित भव्य स्थापत्य परिसर, शांत सरोवर और सुंदर उद्यान।',
        },
        adalaj: {
          name: 'अडालज की बावड़ी (रुदाबाई की वाव)',
          category: '15वीं सदी की धरोहर',
          distance: '11.0 किमी',
          driveTime: '18 मिनट ड्राइव',
          description:
            'सोलंकी और इंडो-इस्लामिक शिल्प कला का अद्भुत संगम प्रस्तुत करती पांच मंजिला नक्काशीदार ऐतिहासिक बावड़ी।',
        },
        'mahatma-mandir': {
          name: 'महात्मा मंदिर कन्वेंशन सेंटर',
          category: 'बिज़नेस और समिट हब',
          distance: '2.4 किमी',
          driveTime: '6 मिनट ड्राइव',
          description:
            'गांधीनगर के केंद्रीय गलियारे में स्थित गुजरात का प्रमुख अंतरराष्ट्रीय सम्मेलन और प्रदर्शनी केंद्र।',
        },
        'sarita-udyan': {
          name: 'सरिता उद्यान और साबरमती तट',
          category: 'वानस्पतिक उद्यान',
          distance: '3.8 किमी',
          driveTime: '9 मिनट ड्राइव',
          description:
            'साबरमती नदी के किनारे स्थित हरे-भरे बगीचे, सुबह की शांत सैर के लिए आदर्श स्थान।',
        },
        'indroda-park': {
          name: 'इंद्रोड़ा नेचर पार्क',
          category: 'पारिस्थितिक अभयारण्य',
          distance: '4.5 किमी',
          driveTime: '11 मिनट ड्राइव',
          description:
            'जीवाश्म प्रदर्शनी, वानस्पतिक पगडंडियों और पक्षी आवासों से समृद्ध 400 हेक्टेयर का विस्तृत वन्यजीव उद्यान।',
        },
        'gift-city': {
          name: 'GIFT City फाइनेंशियल डिस्ट्रिक्ट',
          category: 'अंतरराष्ट्रीय वित्त केंद्र',
          distance: '12.5 किमी',
          driveTime: '19 मिनट ड्राइव',
          description:
            'गांधीनगर के चौड़े एक्सप्रेस मार्गों द्वारा सहजता से जुड़ा भारत का अंतरराष्ट्रीय वित्तीय सेवा केंद्र।',
        },
      },
    },
    location: {
      eyebrow: 'लोकेशन और आगमन विवरण',
      headline: 'Meghmalhar Complex, सेक्टर 11',
      subheadline:
        'गांधीनगर के प्रमुख नागरिक सेक्टर में केंद्रित, तीसरी मंजिल पर सीधी लिफ्ट और आगमन पर समर्पित अतिथि पार्किंग के साथ।',
      fullAddressLabel: 'पूरा पता',
      fullAddressValue:
        'Hotel Crystal N, तीसरी मंजिल, Meghmalhar Complex, सेक्टर 11, गांधीनगर, गुजरात, भारत',
      checkInLabel: 'चेक-इन',
      checkOutLabel: 'चेक-आउट',
      openInMaps: 'Google Maps में खोलें',
      centerOnHotel: 'होटल पर केंद्रित करें',
      openDirections: 'Google Maps में दिशा-निर्देश देखें',
      mapFallbackAddress:
        'तीसरी मंजिल, Meghmalhar Complex, सेक्टर 11, गांधीनगर, गुजरात, भारत',
    },
    contact: {
      eyebrow: 'कंसीयर्ज एवं आरक्षण डेस्क',
      headline: 'हमारे 24-घंटे फ्रंट डेस्क से सीधे बात करें',
      subheadline:
        'कॉर्पोरेट प्रवास, सुइट उपलब्धता या Meghmalhar Complex में आगमन सहायता के लिए फोन या WhatsApp द्वारा तुरंत हमारे गांधीनगर डेस्क से संपर्क करें।',
      callPrefix: 'कॉल करें',
      whatsappEnquiry: 'WhatsApp पूछताछ',
      addressSummary:
        'तीसरी मंजिल, Meghmalhar Complex, सेक्टर 11, गांधीनगर, गुजरात, भारत',
      checkInPrefix: 'चेक-इन',
      checkOutPrefix: 'चेक-आउट',
      formTitle: 'प्रवास पूछताछ भेजें',
      demoBadge: 'डेमो पूछताछ फॉर्म',
      validationError: 'कृपया अपना नाम और फोन नंबर या ईमेल दर्ज करें।',
      submittedTitle: 'पूछताछ पूर्वावलोकन तैयार है',
      submittedGreeting: 'धन्यवाद,',
      submittedNote:
        'यह वेबसाइट केवल एक लाइव डिज़ाइन डेमो है और इसमें कोई स्वचालित बुकिंग सिस्टम नहीं है—आप यह विवरण सीधे हमारे WhatsApp डेस्क पर भेज सकते हैं या कभी भी कॉल कर सकते हैं।',
      sendViaWhatsApp: 'WhatsApp से भेजें',
      editEnquiry: 'विवरण संपादित करें',
      fullNameLabel: 'पूरा नाम',
      fullNamePlaceholder: 'आरव पटेल',
      contactInfoLabel: 'फोन नंबर या ईमेल',
      contactInfoPlaceholder: '+91 98XXX XXXXX',
      checkInDateLabel: 'पसंदीदा चेक-इन तिथि',
      suiteCategoryLabel: 'सुइट श्रेणी',
      specialRequestsLabel: 'विशेष अनुरोध',
      specialRequestsPlaceholder:
        'एयरपोर्ट पिकअप, जल्दी आगमन या कॉर्पोरेट प्रवास आवश्यकताएं...',
      demoFooterNote: 'केवल डेमो प्रदर्शन · कोई ऑनलाइन भुगतान नहीं लिया जाता।',
      submitEnquiry: 'पूछताछ सबमिट करें',
    },
    faq: {
      eyebrow: 'अतिथि सहायता एवं नीतियां',
      headline: 'अक्सर पूछे जाने वाले सवाल',
      subheadline:
        'Meghmalhar Complex में सहज आगमन, गांधीनगर स्थानीय परिवहन और हमारी 24-घंटे आतिथ्य सेवाओं से जुड़े त्वरित उत्तर।',
      filterAll: 'सभी विषय',
      filterPolicies: 'चेक-इन व नीतियां',
      filterTransport: 'स्थानीय परिवहन',
      filterServices: 'होटल सेवाएं',
      quickDeskTitle: '24-घंटे कंसीयर्ज सहायता',
      quickDeskSubtitle:
        'देर रात आगमन, कॉर्पोरेट बिलिंग विवरण या अहमदाबाद एयरपोर्ट से कैब पिकअप के लिए हमारे फ्रंट डेस्क से बात करें।',
      checkInLabel: 'चेक-इन',
      checkOutLabel: 'चेक-आउट',
      deskHoursLabel: 'फ्रंट डेस्क',
      deskHoursValue: '24 / 7',
      askDeskCta: 'फ्रंट डेस्क से बात करें',
      items: [
        {
          id: 'checkin-timings',
          category: 'policies',
          categoryLabel: 'चेक-इन व नीतियां',
          question:
            'चेक-इन और चेक-आउट का मानक समय क्या है, और क्या अर्ली चेक-इन संभव है?',
          answer:
            'मानक चेक-इन समय दोपहर 12:00 PM और चेक-आउट सुबह 10:30 AM है। सुइट उपलब्धता के आधार पर पूर्व अनुरोध करने पर अर्ली चेक-इन या लेट चेक-आउट की व्यवस्था की जा सकती है, और हमारा 24-घंटे रिसेप्शन देर रात आने वाले मेहमानों का भी स्वागत करता है।',
        },
        {
          id: 'id-requirements',
          category: 'policies',
          categoryLabel: 'चेक-इन व नीतियां',
          question: 'आगमन के समय किन पहचान पत्रों की आवश्यकता होती है?',
          answer:
            'चेक-इन के समय सभी वयस्क अतिथियों के लिए मूल सरकारी फोटो पहचान पत्र जैसे आधार कार्ड, पासपोर्ट, ड्राइविंग लाइसेंस या वोटर ID प्रस्तुत करना आवश्यक है। अंतरराष्ट्रीय अतिथियों के लिए वैध पासपोर्ट और वीज़ा अनिवार्य है।',
        },
        {
          id: 'stay-modifications',
          category: 'policies',
          categoryLabel: 'चेक-इन व नीतियां',
          question:
            'सुइट की उपलब्धता जानने या आगमन की तिथि बदलने के लिए कैसे संपर्क करें?',
          answer:
            'आप किसी भी समय हमारे रिसेप्शन डेस्क को +91 74909 41357 पर सीधे कॉल कर सकते हैं या WhatsApp कंसीयर्ज पर संदेश भेज सकते हैं। हमारी टीम कमरे के शुल्क, कॉर्पोरेट बुकिंग और तिथि संशोधन में तुरंत सहायता करती है।',
        },
        {
          id: 'airport-rail-distance',
          category: 'transport',
          categoryLabel: 'स्थानीय परिवहन',
          question:
            'अहमदाबाद एयरपोर्ट और नज़दीकी रेलवे स्टेशन Hotel Crystal N से कितनी दूर हैं?',
          answer:
            'सरदार वल्लभभाई पटेल अंतरराष्ट्रीय हवाई अड्डा (AMD) लगभग 22 किमी दूर है (कैब से लगभग 30–35 मिनट)। गांधीनगर कैपिटल रेलवे स्टेशन केवल 10 मिनट (3.5 किमी) की दूरी पर है, और साबरमती या अहमदाबाद जंक्शन 30 मिनट के भीतर हैं।',
        },
        {
          id: 'landmarks-transit',
          category: 'transport',
          categoryLabel: 'स्थानीय परिवहन',
          question:
            'महात्मा मंदिर, GIFT City और अक्षरधाम तक स्थानीय यात्रा कितनी सुविधाजनक है?',
          answer:
            'सेक्टर 11 में स्थित होने के कारण महात्मा मंदिर कन्वेंशन सेंटर मात्र 6 मिनट (2.4 किमी), स्वामीनारायण अक्षरधाम 8 मिनट (3.2 किमी) और GIFT City चौड़े एक्सप्रेस मार्गों से लगभग 19 मिनट (12.5 किमी) की दूरी पर है।',
        },
        {
          id: 'cabs-and-parking',
          category: 'transport',
          categoryLabel: 'स्थानीय परिवहन',
          question:
            'क्या होटल एयरपोर्ट पिकअप, स्थानीय कैब और मेहमानों की पार्किंग की व्यवस्था करता है?',
          answer:
            'जी हां। Meghmalhar Complex में मेहमानों के लिए समर्पित पार्किंग उपलब्ध है, जहां से सीधी लिफ्ट तीसरी मंजिल के रिसेप्शन तक आती है। हमारा फ्रंट डेस्क अनुरोध पर एयरपोर्ट ट्रांसफर, कॉर्पोरेट कैब और स्थानीय ऑटो की व्यवस्था भी करता है।',
        },
        {
          id: 'breakfast-dining',
          category: 'services',
          categoryLabel: 'होटल सेवाएं',
          question:
            'क्या सुबह का नाश्ता उपलब्ध है, और क्या देर रात रूम सर्विस मिल सकती है?',
          answer:
            'अतिथियों के लिए प्रतिदिन ताज़ा तैयार सुबह का नाश्ता उपलब्ध है, और हमारी 24-घंटे रूम सर्विस किसी भी समय आपके सुइट में गर्म चाय, कॉफी, भोजन और दैनिक आवश्यकताएं पहुंचाती है।',
        },
        {
          id: 'wifi-workspace',
          category: 'services',
          categoryLabel: 'होटल सेवाएं',
          question:
            'सुइट्स में Wi-Fi, मनोरंजन और बिज़नेस कार्यक्षेत्र की क्या सुविधाएं मिलती हैं?',
          answer:
            'प्रत्येक सुइट में निःशुल्क हाई-स्पीड फाइबर Wi-Fi, शांत स्प्लिट AC और Netflix, Prime तथा Hotstar के साथ Smart LED TV शामिल है। एग्जीक्यूटिव बिज़नेस सुइट्स में एर्गोनॉमिक स्टडी डेस्क और चेयर भी उपलब्ध हैं।',
        },
        {
          id: 'laundry-housekeeping',
          category: 'services',
          categoryLabel: 'होटल सेवाएं',
          question:
            'क्या एक्सप्रेस लॉन्ड्री, लिफ्ट और दैनिक हाउसकीपिंग की सुविधा उपलब्ध है?',
          answer:
            'जी हां। हाई-स्पीड लिफ्ट ग्राउंड पार्किंग को सीधे तीसरी मंजिल के कमरों से जोड़ती है। दैनिक हाउसकीपिंग ताज़ा लिनन और मार्बल रेन-शॉवर बाथरूम की स्वच्छता सुनिश्चित करती है, और अनुरोध पर एक्सप्रेस लॉन्ड्री व प्रेसिंग उपलब्ध है।',
        },
      ],
    },
    footer: {
      addressLine:
        'तीसरी मंजिल, Meghmalhar Complex, सेक्टर 11, गांधीनगर, गुजरात, भारत',
      copyrightSuffix: 'गांधीनगर। हॉस्पिटैलिटी डेमो शोकेस।',
      directDeskLabel: 'सीधा संपर्क:',
      checkInPrefix: 'चेक-इन',
      checkOutPrefix: 'चेक-आउट',
    },
  },
};
