import { motion } from "motion/react";

export default function About() {
  return (
    <section id="story" className="bg-brand-paper/60 backdrop-blur-sm border-b border-brand-ink">
      <div className="flex flex-col lg:flex-row">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 p-8 md:p-16 border-b lg:border-b-0 lg:border-r border-brand-ink flex flex-col justify-center">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[10px] md:text-[11px] uppercase font-bold tracking-[0.2em] mb-4 opacity-50 block"
            >
              Origins & Ethos
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-serif leading-[0.85] font-light mb-12"
            >
              The Architecture<br />of <span className="italic">Flavor.</span>
            </motion.h2>
            <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ delay: 0.2 }}
               className="space-y-8 text-sm md:text-base opacity-80 leading-relaxed max-w-md"
            >
               <p>
                 A relentless pursuit of the perfect roast. We view coffee roasting as an intersection of chemistry and craft, where every degree of temperature determines a different line of the story.
               </p>
               <div className="h-px w-full bg-brand-ink/10" />
               <p>
                 From the volcanic soils of Sidama to our workshop in the arts district, each bean is treated with the precision of an architect and the reverence of a librarian.
               </p>
            </motion.div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 bg-[#E8E6E1] flex items-center justify-center relative overflow-hidden group min-h-[500px]">
           <img
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=2000"
              alt="Roastery machines"
              className="w-full h-full object-cover grayscale contrast-125 opacity-80 group-hover:scale-105 transition-transform duration-1000"
              referrerPolicy="no-referrer"
           />
           <div className="absolute inset-0 border-[20px] md:border-[40px] border-brand-paper" />
           <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="absolute bottom-16 left-16 right-16 bg-brand-paper border border-brand-ink p-6 md:p-8"
           >
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-4">Core Principles</h4>
              <ul className="text-[10px] uppercase font-bold tracking-widest space-y-3 opacity-60">
                <li className="flex items-center gap-4">
                  <div className="w-1 h-1 bg-brand-ink rounded-full" />
                  Ethical Sourcing Only
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-1 h-1 bg-brand-ink rounded-full" />
                  Micro-Lot Exclusivity
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-1 h-1 bg-brand-ink rounded-full" />
                  Small Batch Roasting
                </li>
              </ul>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
