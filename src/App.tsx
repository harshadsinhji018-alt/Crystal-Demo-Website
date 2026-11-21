/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {useEffect, useState} from 'react';
import {AboutAndRooms} from './components/AboutAndRooms';
import {AmenitiesAndGallery} from './components/AmenitiesAndGallery';
import {AttractionsAndMap} from './components/AttractionsAndMap';
import {ContactAndFooter} from './components/ContactAndFooter';
import {HeroSection} from './components/HeroSection';
import {Navbar} from './components/Navbar';

export default function App() {
  const [mapsQuotaExceeded, setMapsQuotaExceeded] = useState(false);

  useEffect(() => {
    const handler = () => setMapsQuotaExceeded(true);
    window.addEventListener('gmp-quota-exceeded', handler);
    return () => window.removeEventListener('gmp-quota-exceeded', handler);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({behavior: 'smooth'});
    }
  };

  return (
    <div className="min-h-screen bg-[#040812] text-[#F7F3EB]">
      {mapsQuotaExceeded && (
        <div className="bg-amber-50 border-b border-amber-200 text-amber-900 px-4 py-2.5 text-xs md:text-sm text-center sticky top-0 z-50 shadow-sm">
          <span>
            Google Maps Platform quota reached. If you are the app owner, visit{' '}
            <a
              href="https://developers.google.com/maps/ai/ai-studio?utm_campaign=gmp_mcp_codeassist_v1_aistudio#quota_exceeded_errors"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold text-amber-950 hover:text-amber-800"
            >
              maps developer site
            </a>{' '}
            for instructions to update your account.
          </span>
        </div>
      )}

      <Navbar onOpenEnquiry={() => scrollToSection('contact')} />

      <main>
        <HeroSection onExploreRooms={() => scrollToSection('rooms')} />
        <AboutAndRooms />
        <AmenitiesAndGallery />
        <AttractionsAndMap />
        <ContactAndFooter />
      </main>
    </div>
  );
}
