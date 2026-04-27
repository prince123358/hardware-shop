import { motion } from 'motion/react';
import { Save, Plus, Trash2, X, Settings } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Offer } from '../types';

interface AdminPanelProps {
  onClose: () => void;
}

export default function AdminPanel({ onClose }: AdminPanelProps) {
  const [offers, setOffers] = useState<Offer[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('mh_offers');
    if (saved) setOffers(JSON.parse(saved));
  }, []);

  const saveOffers = (newOffers: Offer[]) => {
    setOffers(newOffers);
    localStorage.setItem('mh_offers', JSON.stringify(newOffers));
  };

  const addOffer = () => {
    const newOffer: Offer = {
      id: Date.now().toString(),
      title: 'New Offer',
      discount: '10% OFF',
      description: 'Add description here...',
      isActive: true
    };
    saveOffers([...offers, newOffer]);
  };

  const updateOffer = (id: string, field: keyof Offer, value: any) => {
    const updated = offers.map(o => o.id === id ? { ...o, [field]: value } : o);
    saveOffers(updated);
  };

  const deleteOffer = (id: string) => {
    saveOffers(offers.filter(o => o.id !== id));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[200] bg-brand-black/95 backdrop-blur-xl p-8 overflow-y-auto"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter flex items-center gap-4">
              <Settings className="w-8 h-8 text-brand-medium" /> Store Management
            </h2>
            <p className="text-gray-500 font-medium">Update prices, deals, and announcements globally.</p>
          </div>
          <button 
            onClick={onClose}
            className="w-12 h-12 flex items-center justify-center border border-white/10 text-white hover:bg-white/5"
          >
            <X />
          </button>
        </div>

        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-medium">Current Active Offers</h3>
            <button 
              onClick={addOffer}
              className="px-4 py-2 bg-white text-brand-black text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-brand-light transition-all"
            >
              <Plus size={14} /> Add New
            </button>
          </div>

          {offers.map((offer) => (
            <div key={offer.id} className="p-8 border border-white/10 bg-white/[0.02] grid md:grid-cols-4 gap-6 items-start">
              <div className="md:col-span-2 space-y-4">
                <input 
                  value={offer.title}
                  onChange={(e) => updateOffer(offer.id, 'title', e.target.value)}
                  className="w-full bg-white/5 border border-white/5 p-4 text-white font-bold uppercase italic outline-none focus:border-white/20"
                  placeholder="Offer Title"
                />
                <textarea 
                  value={offer.description}
                  onChange={(e) => updateOffer(offer.id, 'description', e.target.value)}
                  className="w-full bg-white/5 border border-white/5 p-4 text-gray-400 text-sm h-24 outline-none focus:border-white/20 resize-none"
                  placeholder="Short description..."
                />
              </div>
              <div className="space-y-4">
                <input 
                  value={offer.discount}
                  onChange={(e) => updateOffer(offer.id, 'discount', e.target.value)}
                  className="w-full bg-white/5 border border-white/5 p-4 text-brand-accent font-black tracking-tighter text-xl outline-none focus:border-white/20"
                  placeholder="Discount %"
                />
                <button 
                  onClick={() => updateOffer(offer.id, 'isActive', !offer.isActive)}
                  className={`w-full py-3 text-[10px] font-bold uppercase tracking-widest border transition-all ${offer.isActive ? 'border-brand-medium text-brand-medium' : 'border-red-900 text-red-900'}`}
                >
                  {offer.isActive ? 'Active' : 'Draft'}
                </button>
              </div>
              <div className="flex justify-end">
                <button 
                  onClick={() => deleteOffer(offer.id)}
                  className="p-4 text-red-900 hover:text-red-500 hover:bg-red-950/20 transition-all"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))}

          {offers.length === 0 && (
            <div className="py-20 text-center border border-dashed border-white/10">
              <p className="text-gray-600 uppercase tracking-widest text-xs font-bold">No offers found. Create one to get started.</p>
            </div>
          )}
        </div>

        <div className="mt-12 pt-12 border-t border-white/5 text-center">
          <p className="text-gray-700 text-[10px] uppercase font-bold tracking-[0.2em] mb-6">
            Changes are saved automatically to the local store.
          </p>
          <button 
            onClick={onClose}
            className="px-10 py-5 border border-white/20 text-white font-bold uppercase tracking-[0.3em] text-xs hover:bg-white/5 transition-all"
          >
            Return to Storefront
          </button>
        </div>
      </div>
    </motion.div>
  );
}
