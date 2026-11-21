import {
  APIProvider,
  APILoadingStatus,
  AdvancedMarker,
  InfoWindow,
  Map as GoogleMap,
  Pin,
  useAdvancedMarkerRef,
  useApiLoadingStatus,
  useMap,
  useMapsLibrary,
} from '@vis.gl/react-google-maps';
import {motion} from 'motion/react';
import {Clock, ExternalLink, MapPin, Navigation} from 'lucide-react';
import {useCallback, useEffect, useState} from 'react';
import {
  HOTEL_INFO,
  NEARBY_ATTRACTIONS,
  NearbyAttraction,
} from '../data/hotelData';

interface ResolvedPlace {
  name: string;
  address: string;
  position: {lat: number; lng: number};
}

interface MapInnerProps {
  selectedAttraction: NearbyAttraction | null;
}

function isQuotaError(err: unknown): boolean {
  const msg = err instanceof Error ? err.message : String(err);
  return /RESOURCE_EXHAUSTED|OVER_QUERY_LIMIT|429|Quota/i.test(msg);
}

function HotelMapCanvas({selectedAttraction}: MapInnerProps) {
  const map = useMap();
  const placesLib = useMapsLibrary('places');
  const status = useApiLoadingStatus();

  const [hotelPlace, setHotelPlace] = useState<ResolvedPlace>({
    name: HOTEL_INFO.name,
    address: `${HOTEL_INFO.addressLine1}, ${HOTEL_INFO.addressLine2}`,
    position: HOTEL_INFO.coordinates,
  });
  const [attractionPin, setAttractionPin] = useState<ResolvedPlace | null>(
    null,
  );
  const [openWindow, setOpenWindow] = useState<'hotel' | 'attraction' | null>(
    'hotel',
  );

  const [hotelMarkerRef, hotelMarker] = useAdvancedMarkerRef();
  const [attrMarkerRef, attrMarker] = useAdvancedMarkerRef();

  // Resolve Meghmalhar Complex, Sector 11 via Places API (New)
  useEffect(() => {
    if (!placesLib) return;
    let active = true;

    (async () => {
      try {
        const {places} = await placesLib.Place.searchByText({
          textQuery: HOTEL_INFO.mapsSearchQuery,
          fields: ['displayName', 'formattedAddress', 'location'],
          maxResultCount: 1,
        });
        if (!active || !places || places.length === 0) return;
        const top = places[0];
        if (top.location) {
          const lat = top.location.lat();
          const lng = top.location.lng();
          setHotelPlace({
            name: HOTEL_INFO.name,
            address:
              top.formattedAddress ||
              `${HOTEL_INFO.addressLine1}, ${HOTEL_INFO.addressLine2}`,
            position: {lat, lng},
          });
          if (map && !selectedAttraction) {
            map.panTo({lat, lng});
          }
        }
      } catch (err) {
        if (isQuotaError(err)) {
          window.dispatchEvent(new CustomEvent('gmp-quota-exceeded'));
        }
      }
    })();

    return () => {
      active = false;
    };
  }, [placesLib, map, selectedAttraction]);

  // Resolve and pan to selected nearby Gandhinagar attraction via Places API (New)
  useEffect(() => {
    if (!selectedAttraction) {
      setAttractionPin(null);
      return;
    }

    let active = true;
    const fallback: ResolvedPlace = {
      name: selectedAttraction.name,
      address: `${selectedAttraction.distance} · ${selectedAttraction.driveTime}`,
      position: selectedAttraction.fallbackCoords,
    };

    if (!placesLib) {
      setAttractionPin(fallback);
      setOpenWindow('attraction');
      map?.panTo(fallback.position);
      map?.setZoom(13);
      return;
    }

    (async () => {
      try {
        const {places} = await placesLib.Place.searchByText({
          textQuery: selectedAttraction.searchQuery,
          fields: ['displayName', 'formattedAddress', 'location'],
          maxResultCount: 1,
        });
        if (!active) return;
        if (places && places.length > 0 && places[0].location) {
          const pos = {
            lat: places[0].location.lat(),
            lng: places[0].location.lng(),
          };
          setAttractionPin({
            name: places[0].displayName || selectedAttraction.name,
            address:
              places[0].formattedAddress ||
              `${selectedAttraction.distance} from Hotel Crystal N`,
            position: pos,
          });
          setOpenWindow('attraction');
          map?.panTo(pos);
          map?.setZoom(13);
        } else {
          setAttractionPin(fallback);
          setOpenWindow('attraction');
          map?.panTo(fallback.position);
          map?.setZoom(13);
        }
      } catch (err) {
        if (isQuotaError(err)) {
          window.dispatchEvent(new CustomEvent('gmp-quota-exceeded'));
        }
        if (active) {
          setAttractionPin(fallback);
          setOpenWindow('attraction');
          map?.panTo(fallback.position);
          map?.setZoom(13);
        }
      }
    })();

    return () => {
      active = false;
    };
  }, [selectedAttraction, placesLib, map]);

  if (
    status === APILoadingStatus.FAILED ||
    status === APILoadingStatus.AUTH_FAILURE
  ) {
    return (
      <div className="flex h-[460px] w-full flex-col items-center justify-center bg-[#060E1E] p-8 text-center text-[#F7F3EB]">
        <MapPin className="h-9 w-9 text-[#D4AF37]" />
        <h3 className="mt-4 font-serif text-2xl font-medium">
          {HOTEL_INFO.name}
        </h3>
        <p className="mt-2 max-w-md text-sm text-[#E6DFD1]/80">
          {HOTEL_INFO.fullAddress}
        </p>
        <a
          href={HOTEL_INFO.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex min-h-[44px] items-center gap-2 bg-[#D4AF37] px-5 py-2.5 text-xs font-semibold text-[#040812] hover:bg-[#E6CB7A]"
        >
          <span>Open in Google Maps</span>
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    );
  }

  return (
    <div className="h-[460px] w-full">
      <GoogleMap
        defaultCenter={HOTEL_INFO.coordinates}
        defaultZoom={15}
        mapId="DEMO_MAP_ID"
        gestureHandling="cooperative"
        internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
        style={{width: '100%', height: '100%'}}
      >
        <AdvancedMarker
          ref={hotelMarkerRef}
          position={hotelPlace.position}
          title={HOTEL_INFO.name}
          onClick={() => setOpenWindow('hotel')}
        >
          <Pin
            background="#060E1E"
            borderColor="#D4AF37"
            glyphColor="#E6CB7A"
            scale={1.25}
          />
        </AdvancedMarker>

        {openWindow === 'hotel' && hotelMarker && (
          <InfoWindow
            anchor={hotelMarker}
            maxWidth={260}
            onCloseClick={() => setOpenWindow(null)}
          >
            <div className="p-1 text-[#060E1E]">
              <p className="font-serif text-base font-semibold">
                {hotelPlace.name}
              </p>
              <p className="mt-1 text-xs leading-snug text-[#334155]">
                {HOTEL_INFO.addressLine1}, {HOTEL_INFO.addressLine2}
              </p>
              <p className="mt-1.5 text-xs font-medium text-[#8E6F1E] tabular-nums">
                {HOTEL_INFO.phoneDisplay}
              </p>
            </div>
          </InfoWindow>
        )}

        {attractionPin && (
          <AdvancedMarker
            ref={attrMarkerRef}
            position={attractionPin.position}
            title={attractionPin.name}
            onClick={() => setOpenWindow('attraction')}
          >
            <Pin
              background="#D4AF37"
              borderColor="#060E1E"
              glyphColor="#060E1E"
              scale={1.15}
            />
          </AdvancedMarker>
        )}

        {openWindow === 'attraction' && attrMarker && attractionPin && (
          <InfoWindow
            anchor={attrMarker}
            maxWidth={240}
            onCloseClick={() => setOpenWindow(null)}
          >
            <div className="p-1 text-[#060E1E]">
              <p className="font-serif text-base font-semibold">
                {attractionPin.name}
              </p>
              <p className="mt-1 text-xs leading-snug text-[#334155]">
                {attractionPin.address}
              </p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
}

export function AttractionsAndMap() {
  const [selectedAttraction, setSelectedAttraction] =
    useState<NearbyAttraction | null>(null);

  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string | undefined;

  const focusOnMap = useCallback((attraction: NearbyAttraction) => {
    setSelectedAttraction(attraction);
    const locSection = document.getElementById('location');
    if (locSection) {
      locSection.scrollIntoView({behavior: 'smooth'});
    }
  }, []);

  const flagshipAttractions = NEARBY_ATTRACTIONS.slice(0, 2);
  const directoryAttractions = NEARBY_ATTRACTIONS.slice(2);

  return (
    <>
      {/* NEARBY ATTRACTIONS SECTION — Midnight Blue */}
      <section
        id="attractions"
        className="bg-[#081226] py-20 text-[#F7F3EB] sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.2em] text-[#D4AF37] uppercase">
              Gandhinagar Landmarks
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium text-[#F7F3EB] sm:text-4xl lg:text-5xl [text-wrap:balance]">
              Heritage, Nature &amp; Civic Landmarks Nearby
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#E6DFD1]/80">
              Sector 11 places you at the crossroads of Gandhinagar’s monumental
              temples, green riverfront parks, and Gujarat’s premier business
              corridors.
            </p>
          </div>

          {/* Flagship 2-Column Landmark Spotlight */}
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {flagshipAttractions.map((item, idx) => (
              <motion.article
                key={item.id}
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, margin: '-60px'}}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex flex-col justify-between border border-[#D4AF37]/25 bg-[#060E1E] p-7 sm:p-9"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D4AF37]/15 pb-4">
                    <span className="text-xs font-medium tracking-wider text-[#E6CB7A] uppercase">
                      {item.category}
                    </span>
                    <span className="text-xs text-[#E6DFD1]/75 tabular-nums">
                      {item.distance} · {item.driveTime}
                    </span>
                  </div>
                  <h3 className="mt-5 font-serif text-2xl font-medium text-[#F7F3EB] sm:text-3xl">
                    {item.index}. {item.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#E6DFD1]/80">
                    {item.description}
                  </p>
                </div>
                <div className="mt-7 border-t border-[#D4AF37]/15 pt-5">
                  <button
                    type="button"
                    onClick={() => focusOnMap(item)}
                    className="inline-flex min-h-[40px] items-center gap-2 text-xs font-semibold tracking-wide text-[#E6CB7A] transition-colors hover:text-[#F7F3EB] cursor-pointer"
                  >
                    <Navigation className="h-3.5 w-3.5" />
                    <span>Locate on Interactive Map</span>
                  </button>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Editorial Numbered Directory for Civic & Natural Landmarks */}
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
            {directoryAttractions.map((item) => (
              <div
                key={item.id}
                className="flex items-start justify-between gap-4 border border-[#D4AF37]/15 bg-[#060E1E]/80 p-5 transition-colors hover:border-[#D4AF37]/45"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#E6CB7A] tabular-nums">
                    <span>{item.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.distance}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.driveTime}</span>
                  </div>
                  <h3 className="mt-1.5 font-serif text-xl font-medium text-[#F7F3EB]">
                    {item.index}. {item.name}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#E6DFD1]/75">
                    {item.description}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => focusOnMap(item)}
                  aria-label={`Show ${item.name} on map`}
                  className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center border border-[#D4AF37]/30 text-[#E6CB7A] transition-colors hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#040812] cursor-pointer"
                >
                  <MapPin className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION & GOOGLE MAPS SECTION — Warm Ivory */}
      <section
        id="location"
        className="bg-[#F7F3EB] py-20 text-[#0A1428] sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12">
            {/* Left: Address & Arrival Brief */}
            <div className="flex flex-col justify-between border border-[#0A1428]/12 bg-white p-7 sm:p-9 lg:col-span-5">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-[#8E6F1E] uppercase">
                  Location &amp; Arrival
                </p>
                <h2 className="mt-3 font-serif text-3xl font-medium text-[#060E1E] sm:text-4xl [text-wrap:balance]">
                  Meghmalhar Complex, Sector 11
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-[#2C3547]">
                  Centrally positioned in Gandhinagar’s prime civic sector with
                  lift access directly to the third floor and dedicated guest
                  parking on arrival.
                </p>

                <dl className="mt-8 space-y-5 border-t border-[#0A1428]/12 pt-6 text-sm">
                  <div>
                    <dt className="text-xs font-semibold tracking-wider text-[#8E6F1E] uppercase">
                      Full Address
                    </dt>
                    <dd className="mt-1 font-medium text-[#060E1E]">
                      {HOTEL_INFO.name}, {HOTEL_INFO.addressLine1},{' '}
                      {HOTEL_INFO.addressLine2}
                    </dd>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <dt className="flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#8E6F1E] uppercase">
                        <Clock className="h-3.5 w-3.5" />
                        <span>Check-In</span>
                      </dt>
                      <dd className="mt-1 font-serif text-xl font-semibold text-[#060E1E] tabular-nums">
                        {HOTEL_INFO.checkIn}
                      </dd>
                    </div>
                    <div>
                      <dt className="flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#8E6F1E] uppercase">
                        <Clock className="h-3.5 w-3.5" />
                        <span>Check-Out</span>
                      </dt>
                      <dd className="mt-1 font-serif text-xl font-semibold text-[#060E1E] tabular-nums">
                        {HOTEL_INFO.checkOut}
                      </dd>
                    </div>
                  </div>
                </dl>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-[#0A1428]/12 pt-6">
                <a
                  href={HOTEL_INFO.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-2 bg-[#060E1E] px-5 py-2.5 text-xs font-semibold tracking-wide text-[#F7F3EB] whitespace-nowrap transition-colors hover:bg-[#102040]"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
                {selectedAttraction && (
                  <button
                    type="button"
                    onClick={() => setSelectedAttraction(null)}
                    className="min-h-[44px] border border-[#0A1428]/25 px-4 py-2 text-xs font-medium text-[#060E1E] hover:border-[#060E1E] cursor-pointer"
                  >
                    Center on Hotel
                  </button>
                )}
              </div>
            </div>

            {/* Right: Google Maps Platform Interactive Map */}
            <div className="overflow-hidden border border-[#0A1428]/15 bg-[#060E1E] shadow-sm lg:col-span-7">
              {apiKey ? (
                <APIProvider
                  apiKey={apiKey}
                  language="en"
                  region="IN"
                  libraries={['places', 'marker']}
                >
                  <HotelMapCanvas selectedAttraction={selectedAttraction} />
                </APIProvider>
              ) : (
                <div className="flex h-[460px] w-full flex-col items-center justify-center bg-[#060E1E] p-8 text-center text-[#F7F3EB]">
                  <MapPin className="h-9 w-9 text-[#D4AF37]" />
                  <h3 className="mt-4 font-serif text-2xl font-medium">
                    {HOTEL_INFO.name}
                  </h3>
                  <p className="mt-2 max-w-md text-sm text-[#E6DFD1]/80">
                    {HOTEL_INFO.fullAddress}
                  </p>
                  <a
                    href={HOTEL_INFO.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex min-h-[44px] items-center gap-2 bg-[#D4AF37] px-5 py-2.5 text-xs font-semibold text-[#040812] hover:bg-[#E6CB7A]"
                  >
                    <span>Open Directions in Google Maps</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
