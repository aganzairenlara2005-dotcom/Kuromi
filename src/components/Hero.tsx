import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row border-b border-brand-ink pt-20 bg-brand-paper/20 backdrop-blur-[2px]">
      {/* Left Column: text */}
      <div className="w-full md:w-[45%] border-b md:border-b-0 md:border-r border-brand-ink flex flex-col justify-between p-8 md:p-12 order-2 md:order-1">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
        >
          <span className="text-[10px] md:text-[11px] uppercase font-bold tracking-[0.2em] mb-4 block opacity-60">
            Est. 2024 — Artisanal Roastery
          </span>
          <h1 className="font-serif text-[60px] md:text-[84px] leading-[0.9] font-light mt-8">
            Precision<br/>in Every<br/><span className="italic">Pour.</span>
          </h1>
        </motion.div>

        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.3, duration: 0.8 }}
           className="mt-12 space-y-8"
        >
          <p className="text-sm md:text-base leading-relaxed max-w-sm opacity-80">
            A dedication to the architecture of flavor. We source single-estate beans and roast in small batches to preserve the unique narrative of every harvest.
          </p>
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="h-[1px] w-12 bg-brand-ink group-hover:w-16 transition-all" />
            <span className="text-[10px] md:text-[11px] uppercase font-bold tracking-[0.2em] group-hover:opacity-60 transition-opacity">
              Explore the Menu
            </span>
          </div>
        </motion.div>
      </div>

      {/* Right Column: visual */}
      <div className="w-full md:w-[55%] flex flex-col order-1 md:order-2">
        <div className="h-[300px] md:h-[60%] bg-zinc-200 relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2000"
            alt="Coffee close-up"
            className="w-full h-full object-cover grayscale contrast-125 opacity-90"
            referrerPolicy="no-referrer"
          />
          {/* Floating Label */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="absolute bottom-8 right-8 bg-brand-paper border border-brand-ink p-4 flex flex-col gap-1 shadow-[4px_4px_0px_0px_rgba(28,28,28,1)]"
          >
            <span className="text-[9px] uppercase font-bold opacity-40 tracking-[0.1em]">Current Showcase</span>
            <span className="text-sm font-serif italic text-brand-accent">Sidama Bensa, Ethiopia</span>
          </motion.div>
        </div>

        {/* Sub-grid Details */}
        <div className="flex-1 grid grid-cols-2 border-t border-brand-ink">
          <div className="border-r border-brand-ink p-6 md:p-8 flex flex-col justify-between hover:bg-brand-ink/[0.02] transition-colors">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-bold tracking-[0.2em] opacity-30 italic">01</span>
              <div className="w-2 h-2 rounded-full bg-brand-ink" />
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase mb-2 tracking-[0.1em]">Seasonal Roasts</h3>
              <p className="text-[11px] opacity-60 leading-relaxed uppercase tracking-tighter">Freshly roasted every Tuesday and Friday. Available for home brew.</p>
            </div>
          </div>
          <div className="p-6 md:p-8 flex flex-col justify-between hover:bg-brand-ink/[0.02] transition-colors">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-bold tracking-[0.2em] opacity-30 italic">02</span>
              <div className="w-2 h-2 rounded-full bg-brand-accent" />
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase mb-2 tracking-[0.1em]">The Workshop</h3>
              <p className="text-[11px] opacity-60 leading-relaxed uppercase tracking-tighter">Public cuppings and brew technique classes every Saturday morning.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
