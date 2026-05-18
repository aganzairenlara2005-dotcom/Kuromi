import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { auth, signInWithGoogle, logout } from "../lib/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import { User as UserIcon, LogOut, LogIn } from "lucide-react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [user, setUser] = useState<User | null>(null);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const sections = ["story", "menu", "visit"];
    const observers = sections.map((id) => {
      const element = document.getElementById(id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach((obs) => obs?.disconnect());
    };
  }, []);

  const navItem = (name: string, href: string, sectionId: string) => {
    const isActive = activeSection === sectionId;
    return (
      <a 
        href={href} 
        className={`relative transition-all duration-300 hover:opacity-100 ${
          isActive ? "opacity-100" : "opacity-40"
        }`}
      >
        {name}
        {isActive && (
          <motion.div 
            layoutId="nav-active"
            className="absolute -bottom-1 left-0 right-0 h-[2px] bg-brand-ink"
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
      </a>
    );
  };

  return (
    <nav className="h-20 border-b border-brand-ink flex items-center justify-between px-6 md:px-12 bg-brand-paper fixed top-0 w-full z-50">
      <div className="flex gap-4 md:gap-8 text-[10px] md:text-[11px] uppercase font-bold tracking-[0.2em] items-center">
        {navItem("Origins", "#story", "story")}
        {navItem("The Bar", "#menu", "menu")}
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none"
      >
        <span className="font-serif text-2xl md:text-3xl font-light tracking-tighter italic">Crema & Co.</span>
        <span className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] -mt-1 opacity-60">Roastery & Slow Bar</span>
      </motion.div>

      <div className="flex gap-4 md:gap-8 text-[10px] md:text-[11px] uppercase font-bold tracking-[0.2em] items-center">
        {navItem("Journal", "#visit", "visit")}
        
        {user ? (
          <div className="relative">
            <button 
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              className="flex items-center gap-2 hover:opacity-60 transition-opacity"
            >
              <div className="w-8 h-8 rounded-full overflow-hidden border border-brand-ink/20">
                {user.photoURL ? (
                  <img src={user.photoURL} alt={user.displayName || ""} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-brand-accent flex items-center justify-center">
                    <UserIcon size={14} className="text-brand-paper" />
                  </div>
                )}
              </div>
            </button>

            <AnimatePresence>
              {isUserMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 w-48 bg-brand-paper border border-brand-ink p-4 shadow-[4px_4px_0px_0px_rgba(28,28,28,1)]"
                >
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-3 truncate">
                    {user.email}
                  </p>
                  <button 
                    onClick={() => {
                      logout();
                      setIsUserMenuOpen(false);
                    }}
                    className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest hover:text-brand-accent transition-colors w-full"
                  >
                    <LogOut size={14} />
                    Sign Out
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : (
          <div className="relative group">
            <button 
              onClick={() => signInWithGoogle().catch(err => alert(err.message))}
              className="flex items-center gap-2 text-[10px] md:text-[11px] uppercase font-bold tracking-[0.2em] hover:opacity-50 transition-opacity"
            >
              <LogIn size={14} />
              Login
            </button>
            {/* Setup hint if config is missing */}
            {!auth.app.options.apiKey || auth.app.options.apiKey === 'PASTE_YOUR_API_KEY_HERE' ? (
              <div className="absolute top-full right-0 mt-2 w-48 p-2 bg-brand-ink text-brand-paper text-[8px] uppercase tracking-widest leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Setup Required: Add Firebase credentials to firebase-applet-config.json
              </div>
            ) : null}
          </div>
        )}

        <a href="#" className="hidden md:block hover:opacity-50 transition-opacity underline underline-offset-4">Order</a>
      </div>
    </nav>
  );
}
