import { motion } from "motion/react";
import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';

const GOOGLE_MAPS_API_KEY =
  process.env.GOOGLE_MAPS_PLATFORM_KEY ||
  (import.meta as any).env?.VITE_GOOGLE_MAPS_PLATFORM_KEY ||
  (globalThis as any).GOOGLE_MAPS_PLATFORM_KEY ||
  '';

const hasValidKey = Boolean(GOOGLE_MAPS_API_KEY) && GOOGLE_MAPS_API_KEY !== 'YOUR_API_KEY';

export default function Footer() {
  const shopLocation = { lat: 34.0416, lng: -118.2325 };

  const MapSection = () => {
    if (!hasValidKey) {
      return (
        <div className="w-full h-[300px] bg-brand-paper/5 border border-white/10 flex items-center justify-center p-8 text-center">
          <div className="max-w-xs">
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4">Map Key Required</h4>
            <p className="text-[10px] uppercase tracking-tighter opacity-50 leading-relaxed mb-4">
              Add GOOGLE_MAPS_PLATFORM_KEY to Secrets to enable the interactive location map.
            </p>
            <a 
              href="https://console.cloud.google.com/google/maps-apis/start" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[10px] font-bold underline hover:opacity-100 opacity-60 underline-offset-4"
            >
              Get API Key
            </a>
          </div>
        </div>
      );
    }

    return (
      <div className="w-full h-[300px] border border-white/10 grayscale contrast-125 invert opacity-80 hover:invert-0 hover:grayscale-0 transition-all duration-700">
        <APIProvider apiKey={GOOGLE_MAPS_API_KEY} version="weekly">
          <Map
            defaultCenter={shopLocation}
            defaultZoom={15}
            mapId="CREMA_CO_MAP"
            internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
            style={{ width: '100%', height: '100%' }}
            disableDefaultUI={true}
          >
            <AdvancedMarker position={shopLocation}>
              <Pin 
                background="#1C1C1C" 
                glyphColor="#FAF9F6" 
                borderColor="#FAF9F6"
              />
            </AdvancedMarker>
          </Map>
        </APIProvider>
      </div>
    );
  };

  return (
    <footer id="visit" className="bg-brand-ink text-brand-paper py-16 md:py-24 border-t border-brand-ink">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex flex-col mb-8">
                <span className="font-serif text-[40px] md:text-[54px] font-light tracking-tighter italic leading-none">Crema & Co.</span>
                <span className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] opacity-40">Roastery & Slow Bar</span>
              </div>
              <p className="text-brand-paper/50 text-sm md:text-base leading-relaxed max-w-sm mb-12">
                A dedication to the architecture of flavor. Serving exceptional coffee and fostering community in the Arts District.
              </p>
            </div>
            
            <div className="flex gap-4">
              {['IG', 'TW', 'FB'].map((label) => (
                <motion.div
                  key={label}
                  whileHover={{ backgroundColor: "#FAF9F6", color: "#1C1C1C" }}
                  className="h-12 w-12 border border-white/20 flex items-center justify-center cursor-pointer transition-colors"
                >
                  <span className="text-[10px] font-bold tracking-widest">{label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
             <span className="text-[10px] uppercase font-bold tracking-[0.3em] opacity-30 mb-8 block">Schedule</span>
             <div className="space-y-6 text-xs md:text-sm uppercase tracking-widest font-bold">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="opacity-60 italic">Mon — Thu</span>
                  <span>07:00 — 18:00</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="opacity-60 italic">Fri — Sat</span>
                  <span>07:00 — 20:00</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="opacity-60 italic">Sunday</span>
                  <span>08:00 — 16:00</span>
                </div>
             </div>
          </div>

          <div className="lg:col-span-4">
             <span className="text-[10px] uppercase font-bold tracking-[0.3em] opacity-30 mb-8 block">Reach</span>
             <div className="space-y-8">
                <div className="font-serif italic text-lg md:text-xl space-y-4">
                  <p className="hover:opacity-60 transition-opacity cursor-pointer">
                    42 Roastery Lane, <br />
                    Arts District, CA 90210
                  </p>
                  <p className="hover:opacity-60 transition-opacity cursor-pointer">
                    (555) 123-ROAST
                  </p>
                </div>
                
                <MapSection />

                <div className="pt-4">
                   <button className="h-12 px-10 border border-brand-paper text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-brand-paper hover:text-brand-ink transition-colors w-full md:w-auto">
                     Book a Table
                   </button>
                </div>
             </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] uppercase tracking-[0.3em] opacity-30 pt-12 border-t border-white/5">
          <p>© 2024 Crema & Co. Roastery. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Sustainability</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
