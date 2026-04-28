import { motion } from 'motion/react';
import { ShieldCheck, Wrench, Clock, Trophy } from 'lucide-react';

export default function About() {
  const highlights = [
    { icon: <ShieldCheck className="w-6 h-6" />, title: 'Quality Assured', desc: 'Strict multi-point quality assessment.' },
    { icon: <Wrench className="w-6 h-6" />, title: 'Professional Grade', desc: 'Catering to contractors and homeowners.' },
    { icon: <Clock className="w-6 h-6" />, title: '25+ Years Experience', desc: 'Nanded’s trusted hub since 1995.' },
    { icon: <Trophy className="w-6 h-6" />, title: 'Trusted Partner', desc: 'Distributor for top global brands.' },
  ];

  return (
    <section id="about" className="py-24 bg-brand-black border-y border-border-subtle">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-500 mb-4 block">Legacy & Excellence</span>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8 tracking-tight">
              Nanded’s Most Trusted <br /> <span className="font-serif italic text-gray-500">Hardware Hub</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 font-medium">
              Marathwada Hardware Shop has been the cornerstone of Nanded’s construction and renovation industry since 1995. We don’t just sell tools; we provide industrial solutions that build the city.
            </p>
            
            <div className="flex items-center gap-10 mt-12">
              <div className="flex flex-col">
                <span className="text-3xl font-light text-white leading-none mb-2">25k+</span>
                <span className="text-[8px] font-bold uppercase tracking-widest text-gray-500">Clients Served</span>
              </div>
              <div className="w-px h-8 bg-border-subtle"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-light text-white leading-none mb-2">100k+</span>
                <span className="text-[8px] font-bold uppercase tracking-widest text-gray-500">Products Stocked</span>
              </div>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 border border-border-subtle bg-white/[0.01] hover:bg-white/[0.03] transition-all rounded-sm flex flex-col items-start gap-4"
              >
                <div className="text-gray-400 p-3 bg-white/5 border border-border-subtle rounded-sm">
                  {item.icon}
                </div>
                <h3 className="text-sm font-bold text-white uppercase tracking-[0.1em]">{item.title}</h3>
                <p className="text-gray-600 text-[10px] uppercase font-bold tracking-widest leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
