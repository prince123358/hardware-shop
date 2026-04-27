import { motion, AnimatePresence } from 'motion/react';
import { Tag, Sparkles, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Offer } from '../types';

export default function Offers() {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const savedOffers = localStorage.getItem('mh_offers');
    if (savedOffers) {
      const parsed = JSON.parse(savedOffers);
      setOffers(parsed);
      if (parsed.some((o: Offer) => o.isActive)) {
        setTimeout(() => setShowPopup(true), 2000);
      }
    } else {
      const defaultOffers: Offer[] = [
        { id: '1', title: 'Asian Paints & Power Tools', discount: '20% OFF', description: 'Valid on all premium brands until Oct 31st.', isActive: true },
      ];
      setOffers(defaultOffers);
      localStorage.setItem('mh_offers', JSON.stringify(defaultOffers));
      setTimeout(() => setShowPopup(true), 2000);
    }
  }, []);

  const activeOffers = offers.filter(o => o.isActive);

  return (
    <section id="offers" className="py-24 bg-brand-black relative">
       <div className="max-w-7xl mx-auto px-10">
          <div className="flex flex-col lg:flex-row items-baseline justify-between mb-16 gap-4">
             <motion.div
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
             >
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-500 mb-4 block">Seasonal Campaign</span>
                <h2 className="text-5xl font-light text-white mb-8 tracking-tight">
                  Exclusive <span className="font-serif italic text-gray-500">Member</span> Benefits
                </h2>
             </motion.div>
             <p className="text-gray-400 text-xs uppercase tracking-widest leading-relaxed max-w-sm">
                Join our professional network to receive early access to new shipments and bulk discounts.
             </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
             {activeOffers.map((offer) => (
               <motion.div 
                 key={offer.id}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="bg-white/[0.03] border border-border-subtle p-10 rounded-sm flex flex-col justify-between"
               >
                  <div>
                    <div className="flex justify-between items-end mb-6">
                      <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white italic">{offer.title}</h3>
                      <span className="text-3xl font-light text-white">{offer.discount}</span>
                    </div>
                    <div className="h-1 w-full bg-border-subtle rounded-full overflow-hidden mb-6">
                      <div className="h-full bg-white w-2/3"></div>
                    </div>
                    <p className="text-[9px] text-gray-500 uppercase tracking-widest font-bold leading-relaxed mb-8">
                      {offer.description}
                    </p>
                  </div>
                  <a 
                    href={`https://wa.me/918766633713?text=I'd%20like%20to%20claim%20the%20offer:%20${encodeURIComponent(offer.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 border border-border-subtle text-[8px] font-bold uppercase tracking-[0.3em] text-gray-400 hover:bg-white hover:text-black hover:border-white transition-all text-center"
                  >
                    Claim Offer
                  </a>
               </motion.div>
             ))}
          </div>
       </div>

      {/* Floating Offer Popup */}
      <AnimatePresence>
        {showPopup && activeOffers.length > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            className="fixed bottom-10 right-10 z-[100] max-w-sm w-full"
          >
            <div className="glass p-10 rounded-sm shadow-2xl relative overflow-hidden backdrop-blur-3xl bg-black/80">
              <button 
                onClick={() => setShowPopup(false)}
                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
              
              <div className="text-brand-accent text-[9px] font-bold uppercase tracking-[0.4em] mb-4">Live Offer</div>
              
              <h4 className="text-3xl font-light text-white mb-4 tracking-tight leading-tight">
                {activeOffers[0].discount} <br /> 
                <span className="font-serif italic text-gray-500 text-2xl">{activeOffers[0].title}</span>
              </h4>
              
              <p className="text-gray-400 text-xs mb-8 leading-relaxed font-medium">
                Limited period availability at our Nanded flagship store.
              </p>

              <a 
                href={`https://wa.me/918766633713?text=I'd%20like%20to%20claim%20the%20offer:%20${encodeURIComponent(activeOffers[0].title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white text-black py-4 rounded-sm text-[10px] font-bold uppercase tracking-widest hover:bg-gray-200 transition-all text-center block"
              >
                Claim Offer
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
