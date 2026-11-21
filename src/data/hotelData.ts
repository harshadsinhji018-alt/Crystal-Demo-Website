export interface RoomSuite {
  id: string;
  name: string;
  category: 'Business' | 'Luxury';
  size: string;
  bed: string;
  view: string;
  tariff: string;
  image: string;
  gallery: string[];
  fallbackTitle: string;
  description: string;
  highlights: string[];
}

export interface FacilityItem {
  id: string;
  name: string;
  detail: string;
  iconName:
    | 'Wifi'
    | 'Car'
    | 'Wind'
    | 'Coffee'
    | 'Bell'
    | 'Clock'
    | 'Shirt'
    | 'ArrowUpDown'
    | 'Sparkles';
}

export interface GallerySlide {
  id: string;
  title: string;
  subtitle: string;
  category: 'Lobby & Corridors' | 'Rooms & Suites' | 'Interiors & Bath';
  image: string;
}

export interface NearbyAttraction {
  id: string;
  index: string;
  name: string;
  distance: string;
  driveTime: string;
  category: string;
  description: string;
  searchQuery: string;
  fallbackCoords: {lat: number; lng: number};
}

export const HOTEL_INFO = {
  name: 'Hotel Crystal N',
  city: 'Gandhinagar',
  tagline: 'A Private Sanctuary of Midnight Luxury in Gandhinagar',
  addressLine1: '3rd Floor, Meghmalhar Complex',
  addressLine2: 'Sector 11, Gandhinagar, Gujarat, India',
  fullAddress:
    'Hotel Crystal N, 3rd Floor, Meghmalhar Complex, Sector 11, Gandhinagar, Gujarat, India',
  phoneDisplay: '+91 74909 41357',
  phoneHref: 'tel:+917490941357',
  whatsappNumber: '917490941357',
  checkIn: '12:00 PM',
  checkOut: '10:30 AM',
  coordinates: {lat: 23.2156, lng: 72.6369},
  mapsSearchQuery: 'Meghmalhar Complex Sector 11 Gandhinagar Gujarat India',
  directionsUrl:
    'https://www.google.com/maps/search/?api=1&query=Meghmalhar+Complex+Sector+11+Gandhinagar+Gujarat+India',
};

export const HOTEL_FEATURE_IMAGES = {
  heroFacade: '/assets/aistudio/image_224ce73c.png',
  receptionDesk: '/assets/aistudio/image_bea0861a.png',
  lobbyLounge: '/assets/aistudio/image_c428fd25.png',
  corridor: '/assets/aistudio/image_d25177b4.png',
  bathSuite: '/assets/aistudio/image_29d3c7dd.png',
};

export function getWhatsAppUrl(customMessage?: string): string {
  const defaultMsg =
    'Hello Hotel Crystal N Gandhinagar, I would like to enquire about room availability and stay tariffs.';
  const text = encodeURIComponent(customMessage || defaultMsg);
  return `https://wa.me/${HOTEL_INFO.whatsappNumber}?text=${text}`;
}

export const ROOMS_DATA: RoomSuite[] = [
  {
    id: 'crystal-deluxe',
    name: 'Crystal Deluxe King Room',
    category: 'Business',
    size: '280 sq ft',
    bed: 'King Bed',
    view: 'Sector 11 Corridor & Window',
    tariff: '₹2,800',
    image: '/assets/aistudio/image_447558ae.png',
    gallery: [
      '/assets/aistudio/image_447558ae.png',
      '/assets/aistudio/image_c5869f41.png',
      '/assets/aistudio/image_37a26968.png',
      '/assets/aistudio/image_29d3c7dd.png',
    ],
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
  {
    id: 'executive-business',
    name: 'Executive Business Suite',
    category: 'Business',
    size: '340 sq ft',
    bed: 'King Bed + Study Desk',
    view: 'Avenue Window View',
    tariff: '₹3,400',
    image: '/assets/aistudio/image_bcd57a12.png',
    gallery: [
      '/assets/aistudio/image_bcd57a12.png',
      '/assets/aistudio/image_1a5ca3c8.png',
      '/assets/aistudio/image_9c2dc38f.png',
      '/assets/aistudio/image_644b850c.png',
    ],
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
  {
    id: 'premier-king-residence',
    name: 'Premier Crystal King Suite',
    category: 'Luxury',
    size: '380 sq ft',
    bed: 'Signature King Bed',
    view: 'Corner Panoramic Window',
    tariff: '₹4,200',
    image: '/assets/aistudio/image_54bd3b14.png',
    gallery: [
      '/assets/aistudio/image_54bd3b14.png',
      '/assets/aistudio/image_4b7e22c7.png',
      '/assets/aistudio/image_7a5ab5fe.png',
      '/assets/aistudio/image_895b522c.png',
    ],
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
  {
    id: 'family-twin-suite',
    name: 'Family & Twin Comfort Suite',
    category: 'Luxury',
    size: '420 sq ft',
    bed: 'King + Single / Twin Beds',
    view: 'Quiet Wing',
    tariff: '₹4,600',
    image: '/assets/aistudio/image_925f8463.png',
    gallery: [
      '/assets/aistudio/image_925f8463.png',
      '/assets/aistudio/image_ef0864b0.png',
      '/assets/aistudio/image_d8ae6f46.png',
      '/assets/aistudio/image_b98c51ea.png',
    ],
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
];

export const FACILITIES_DATA: FacilityItem[] = [
  {
    id: 'wifi',
    name: 'High-Speed Wi-Fi',
    detail: 'Seamless fiber connectivity across every suite and lobby.',
    iconName: 'Wifi',
  },
  {
    id: 'parking',
    name: 'Dedicated Parking',
    detail: 'Convenient guest parking at Meghmalhar Complex.',
    iconName: 'Car',
  },
  {
    id: 'ac',
    name: 'Climate Control AC',
    detail: 'Whisper-quiet split AC units in every guest room.',
    iconName: 'Wind',
  },
  {
    id: 'breakfast',
    name: 'Artisanal Breakfast',
    detail: 'Freshly prepared morning breakfast service for guests.',
    iconName: 'Coffee',
  },
  {
    id: 'room-service',
    name: '24-Hour Room Service',
    detail: 'Prompt in-room tea, dining, and essentials anytime.',
    iconName: 'Bell',
  },
  {
    id: 'front-desk',
    name: '24-Hour Front Desk',
    detail: 'Warm marble reception desk staffed day and night.',
    iconName: 'Clock',
  },
  {
    id: 'laundry',
    name: 'Express Laundry',
    detail: 'Reliable garment care and pressing on request.',
    iconName: 'Shirt',
  },
  {
    id: 'lift',
    name: 'High-Speed Lift',
    detail: 'Effortless elevator access directly to the 3rd Floor.',
    iconName: 'ArrowUpDown',
  },
  {
    id: 'housekeeping',
    name: 'Daily Housekeeping',
    detail: 'Spotless linen refresh and attentive room upkeep.',
    iconName: 'Sparkles',
  },
];

export const GALLERY_SLIDES: GallerySlide[] = [
  {
    id: 'facade',
    title: 'Hotel Crystal Grand Entrance',
    subtitle: 'Gold & black emblem framed in Italian-veined marble',
    category: 'Lobby & Corridors',
    image: '/assets/aistudio/image_224ce73c.png',
  },
  {
    id: 'reception',
    title: '24-Hour Marble Reception Desk',
    subtitle: 'Warm teak slatwork and illuminated concierge sanctuary',
    category: 'Lobby & Corridors',
    image: '/assets/aistudio/image_bea0861a.png',
  },
  {
    id: 'lounge',
    title: 'Guest Waiting Lounge',
    subtitle: 'Plush velvet seating and marble coffee table near Room 103',
    category: 'Lobby & Corridors',
    image: '/assets/aistudio/image_c428fd25.png',
  },
  {
    id: 'corridor',
    title: 'Illuminated Suite Corridor',
    subtitle: 'Polished marble walkway with warm recessed ceiling coves',
    category: 'Lobby & Corridors',
    image: '/assets/aistudio/image_d25177b4.png',
  },
  {
    id: 'premier-king',
    title: 'Premier Crystal King Suite',
    subtitle: 'Caramel diamond-tufted headboard with ambient warm backlighting',
    category: 'Rooms & Suites',
    image: '/assets/aistudio/image_54bd3b14.png',
  },
  {
    id: 'deluxe-symmetry',
    title: 'Crystal Deluxe King Room',
    subtitle: 'Symmetrical architectural paneling and split AC comfort',
    category: 'Rooms & Suites',
    image: '/assets/aistudio/image_447558ae.png',
  },
  {
    id: 'exec-work',
    title: 'Executive Business Suite',
    subtitle: 'Ergonomic office chair, study corner, and frosted wardrobe',
    category: 'Rooms & Suites',
    image: '/assets/aistudio/image_bcd57a12.png',
  },
  {
    id: 'family-triple',
    title: 'Family Triple Comfort Suite',
    subtitle: 'Spacious King + Single bedding for families and groups',
    category: 'Rooms & Suites',
    image: '/assets/aistudio/image_925f8463.png',
  },
  {
    id: 'twin-room',
    title: 'Twin Bedded Residence',
    subtitle: 'Twin beds paired with Smart TV and tea table',
    category: 'Rooms & Suites',
    image: '/assets/aistudio/image_ef0864b0.png',
  },
  {
    id: 'room-107',
    title: 'Room 107 Deluxe Interior',
    subtitle: 'Padded leatherette headboard and window seating alcove',
    category: 'Rooms & Suites',
    image: '/assets/aistudio/image_c5869f41.png',
  },
  {
    id: 'smart-tv-lounge',
    title: 'In-Room Entertainment & Vanity',
    subtitle: 'Backlit wooden Smart TV wall, mirror, and full wardrobe',
    category: 'Interiors & Bath',
    image: '/assets/aistudio/image_644b850c.png',
  },
  {
    id: 'marble-bath',
    title: 'Contemporary Marble Washroom',
    subtitle: 'Rainfall overhead shower, tabletop basin, and hot water geyser',
    category: 'Interiors & Bath',
    image: '/assets/aistudio/image_29d3c7dd.png',
  },
];

export const NEARBY_ATTRACTIONS: NearbyAttraction[] = [
  {
    id: 'akshardham',
    index: '01',
    name: 'Swaminarayan Akshardham',
    distance: '3.2 km',
    driveTime: '8 min drive',
    category: 'Monument & Gardens',
    description:
      'An extraordinary pink sandstone architectural complex with serene reflecting pools, landscaped gardens, and evening illumination just minutes from Sector 11.',
    searchQuery: 'BAPS Swaminarayan Akshardham Gandhinagar Gujarat',
    fallbackCoords: {lat: 23.2297, lng: 72.674},
  },
  {
    id: 'adalaj',
    index: '02',
    name: 'Adalaj Stepwell (Rudabai ni Vav)',
    distance: '11.0 km',
    driveTime: '18 min drive',
    category: '15th-Century Heritage',
    description:
      'A five-story intricately carved sandstone subterranean stepwell blending Solanki and Indo-Islamic artistry in tranquil shaded tiers.',
    searchQuery: 'Adalaj Stepwell Gandhinagar Gujarat',
    fallbackCoords: {lat: 23.1667, lng: 72.5801},
  },
  {
    id: 'mahatma-mandir',
    index: '03',
    name: 'Mahatma Mandir Convention Centre',
    distance: '2.4 km',
    driveTime: '6 min drive',
    category: 'Business & Summit Hub',
    description:
      'Gujarat’s premier international convention, exhibition, and diplomatic summit landmark located directly across Gandhinagar’s central corridor.',
    searchQuery: 'Mahatma Mandir Convention Centre Sector 13 Gandhinagar',
    fallbackCoords: {lat: 23.2241, lng: 72.6258},
  },
  {
    id: 'sarita-udyan',
    index: '04',
    name: 'Sarita Udyan & Sabarmati Edge',
    distance: '3.8 km',
    driveTime: '9 min drive',
    category: 'Botanical Promenade',
    description:
      'Lush riverside gardens along the Sabarmati bank, ideal for quiet dawn walks beneath mature banyan canopies.',
    searchQuery: 'Sarita Udyan Sector 9 Gandhinagar Gujarat',
    fallbackCoords: {lat: 23.2089, lng: 72.6562},
  },
  {
    id: 'indroda-park',
    index: '05',
    name: 'Indroda Nature Park',
    distance: '4.5 km',
    driveTime: '11 min drive',
    category: 'Ecological Sanctuary',
    description:
      'Sprawling 400-hectare wilderness reserve featuring fossil exhibits, botanical trails, and open aviary habitats.',
    searchQuery: 'Indroda Nature Park Gandhinagar Gujarat',
    fallbackCoords: {lat: 23.1999, lng: 72.6407},
  },
  {
    id: 'gift-city',
    index: '06',
    name: 'GIFT City Financial District',
    distance: '12.5 km',
    driveTime: '19 min drive',
    category: 'International Finance',
    description:
      'India’s operational International Financial Services Centre, effortlessly connected via Gandhinagar’s wide express avenues.',
    searchQuery: 'GIFT City Gandhinagar Gujarat',
    fallbackCoords: {lat: 23.1605, lng: 72.6838},
  },
];
