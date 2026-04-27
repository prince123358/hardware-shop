import { motion } from 'motion/react';
import { ShoppingCart, Plus } from 'lucide-react';

const newArrivals = [
  {
    id: 'na1',
    name: 'Precision Laser Level',
    description: 'Ultra-accurate horizontal and vertical cross-line laser for professional alignment.',
    image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?q=80&w=800&auto=format&fit=crop',
    price: '₹2,499',
    category: 'Tools'
  },
  {
    id: 'na2',
    name: 'Industrial Torque Wrench',
    description: 'High-strength steel wrench with adjustable torque settings for heavy mechanical work.',
    image: 'https://images.unsplash.com/photo-1621905252507-b35482cd34b4?q=80&w=800&auto=format&fit=crop',
    price: '₹1,850',
    category: 'Tools'
  },
  {
    id: 'na3',
    name: 'Weather-Shield Exterior',
    description: 'Advanced waterproof paint with UV protection, specially formulated for Nanded heat.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop',
    price: '₹4,200',
    category: 'Paints'
  }
];

export default function NewArrivals() {
  return (
    <section id="new-arrivals" className="py-24 bg-brand-black border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 gap-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-500 mb-4 block underline decoration-gray-800 underline-offset-8 decoration-1">Latest Inventory</span>
            <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight uppercase">
              New <span className="font-serif italic text-gray-500">Arrivals</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm font-medium text-xs uppercase tracking-widest leading-relaxed">
            Engineered for precision. Built for professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {newArrivals.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col bg-white/[0.01] border border-border-subtle hover:bg-white/[0.03] transition-all overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-brand-black">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover opacity-30 group-hover:opacity-70 group-hover:scale-105 transition-all duration-1000 pointer-events-none"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black to-transparent opacity-80"></div>
                
                {/* Category Badge */}
                <div className="absolute top-6 left-6 px-3 py-1 bg-white text-black text-[8px] font-bold uppercase tracking-widest">
                  {product.category}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-10 flex flex-col flex-grow">
                <div className="flex justify-between items-baseline mb-4">
                  <h3 className="text-lg font-light text-white uppercase tracking-tight">{product.name}</h3>
                  <span className="text-gray-500 font-bold text-[10px] tracking-widest">{product.price}</span>
                </div>
                <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest leading-relaxed mb-8 flex-grow">
                  {product.description}
                </p>
                <a 
                  href={`https://wa.me/918766633713?text=I'm%20interested%20in%20the%20${encodeURIComponent(product.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 border border-border-subtle text-[8px] font-bold uppercase tracking-[0.3em] text-gray-400 hover:bg-white hover:text-black hover:border-white transition-all text-center"
                >
                  Inquire Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
