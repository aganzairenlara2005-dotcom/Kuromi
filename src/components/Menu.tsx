import { motion } from "motion/react";

const MENU_CATEGORIES = [
  {
    name: "Classic Brews",
    items: [
      { name: "Single Origin Batch", price: "$4.50", desc: "Rotating seasonal beans" },
      { name: "Pour Over (V60)", price: "$6.00", desc: "Precise extraction" },
      { name: "Cold Brew", price: "$5.50", desc: "18-hour slow steep" },
    ]
  },
  {
    name: "Espresso Bar",
    items: [
      { name: "Double Espresso", price: "$3.50", desc: "Complex depth" },
      { name: "Cortado", price: "$4.25", desc: "1:1 ratio" },
      { name: "Velvet Flat White", price: "$5.00", desc: "Silky micro-foam" },
    ]
  },
  {
    name: "Signatures",
    items: [
      { name: "Honey Lavender Latte", price: "$6.50", desc: "Local honey" },
      { name: "Miso Caramel Macchiato", price: "$6.75", desc: "Salty-sweet" },
      { name: "Smoked Vanilla Oat", price: "$6.25", desc: "House-smoked" },
    ]
  },
  {
    name: "Bakery",
    items: [
      { name: "Sourdough Croissant", price: "$5.25", desc: "3-day fermented" },
      { name: "Pistachio Morning Bun", price: "$4.75", desc: "Twisted cardamom" },
      { name: "Vegan Sea Salt Cookie", price: "$3.50", desc: "Dark chocolate" },
    ]
  }
];

export default function Menu() {
  return (
    <section id="menu" className="bg-brand-paper/40 backdrop-blur-sm">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 border-b border-brand-ink">
        {MENU_CATEGORIES.map((category, idx) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className={`p-8 md:p-12 border-b md:border-b-0 ${idx < 3 ? 'md:border-r border-brand-ink' : ''}`}
          >
            <div className="flex justify-between items-start mb-12">
              <span className="text-[10px] font-bold tracking-[0.2em] opacity-30">0{idx + 1}</span>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em]">{category.name}</h3>
            </div>

            <div className="space-y-10">
              {category.items.map((item) => (
                <div key={item.name} className="group">
                  <div className="flex justify-between items-baseline gap-4 mb-1">
                    <h4 className="text-lg font-serif italic">{item.name}</h4>
                    <span className="text-sm font-bold opacity-60">{item.price}</span>
                  </div>
                  <p className="text-[10px] uppercase font-bold tracking-widest opacity-40 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="p-12 border-b border-brand-ink flex flex-col md:flex-row items-center justify-between gap-8">
        <h2 className="text-5xl md:text-7xl font-serif font-light leading-none tracking-tighter italic">
          Taste the Balance.
        </h2>
        <div className="flex items-center gap-6">
           <span className="text-[11px] uppercase font-bold tracking-[0.2em] opacity-60">Wholesale & Catering</span>
           <button className="h-12 px-8 border border-brand-ink bg-brand-ink text-brand-paper text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-transparent hover:text-brand-ink transition-colors">
             Inquire Now
           </button>
        </div>
      </div>
    </section>
  );
}
