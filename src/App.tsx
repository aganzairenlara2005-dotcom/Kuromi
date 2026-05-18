/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import About from "./components/About";
import Footer from "./components/Footer";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative scroll-smooth selection:bg-brand-ink selection:text-brand-paper overflow-x-hidden min-h-screen">
      {/* Base Paper Layer (behind blobs) */}
      <div className="fixed inset-0 bg-brand-paper z-[-1]" />
      
      {/* Creative Background Blobs */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-chroma-berry/20 rounded-full blur-[120px]"
        />
        <motion.div
           animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-chroma-matcha/20 rounded-full blur-[120px]"
        />
        <motion.div
           animate={{
            x: [0, 50, 0],
            y: [0, 50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-[40%] left-[20%] w-[40%] h-[40%] bg-chroma-honey/20 rounded-full blur-[140px]"
        />
      </div>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-brand-ink z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <div className="relative z-10 space-y-0 border-x border-brand-ink/5 max-w-[1920px] mx-auto">
        <Hero />
        <Menu />
        <About />
        <Footer />
      </div>

      {/* Background grain effect for artisanal feel */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.06] z-[100] mix-blend-multiply">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.8" 
              numOctaves="4" 
              stitchTiles="stitch" 
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>
    </main>
  );
}
