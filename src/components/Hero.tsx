import { motion } from 'motion/react';
import { ArrowRight, Drill } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden border-b border-border-subtle bg-brand-black">
      {/* Subtle Background Accent Pattern */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/[0.03] to-transparent pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-10 text-left w-full grid lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-8"
        >
          <div className="mb-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-500 mb-4 block">Since 1995 • Nanded’s Hardware Excellence</span>
            <h1 className="text-6xl md:text-8xl font-light text-white leading-[0.95] mb-8 tracking-tight">
              Marathwada <br/>
              <span className="font-serif italic text-gray-500">Hardware</span>
            </h1>
            <p className="max-w-md text-sm md:text-base text-gray-400 font-medium mb-12 leading-relaxed">
              Experience premium quality and unmatched reliability. Managed by <span className="text-white">Syed Danish Affan</span> & <span className="text-white">Syed Haji</span>, we provide industry-standard tools and supplies across Central India.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-start gap-6">
            <a 
              href="#products"
              className="px-10 py-5 bg-white text-black font-bold uppercase tracking-[0.2em] text-[10px] rounded-sm hover:bg-gray-200 transition-all text-center min-w-[200px]"
            >
              Explore Shop
            </a>
            <a 
              href="tel:+918766633713"
              className="px-10 py-5 border border-border-subtle text-white font-bold uppercase tracking-[0.2em] text-[10px] rounded-sm hover:bg-white/5 transition-all text-center min-w-[200px]"
            >
              Call Now
            </a>
          </div>
        </motion.div>

        {/* Decorative Grid Element */}
        <div className="hidden lg:block lg:col-span-4 h-full relative">
           <div className="absolute inset-0 border-l border-white/5 flex flex-col justify-center gap-8 pl-12 text-gray-600">
              <div className="text-4xl font-light italic font-serif">Quality</div>
              <div className="text-4xl font-light italic font-serif opacity-50">Trust</div>
              <div className="text-4xl font-light italic font-serif opacity-20">Support</div>
           </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-10"
      >
        <span className="text-[8px] font-bold uppercase tracking-[0.5em] text-gray-600 [writing-mode:vertical-lr] mb-4">Scroll to discover</span>
        <div className="w-px h-16 bg-gradient-to-b from-gray-600 to-transparent"></div>
      </motion.div>
    </section>
  );
}
