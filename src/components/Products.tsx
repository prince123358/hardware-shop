import { motion, AnimatePresence } from 'motion/react';
import { Drill, Droplet, PaintBucket, Zap, Filter, ArrowUpDown } from 'lucide-react';
import { useState, useMemo } from 'react';

type CategoryType = 'Tools' | 'Pipes' | 'Paints' | 'Electrical' | 'All';
type SortType = 'default' | 'alphabetical';

const categories = [
  {
    id: 'Tools',
    title: 'Professional Tools',
    icon: <Drill className="w-8 h-8" />,
    items: ['Power Drills', 'Hand Tools', 'Wrenches', 'Measuring Tapes'],
    desc: 'Heavy-duty tools for industrial and domestic use.'
  },
  {
    id: 'Pipes',
    title: 'Industrial Pipes',
    icon: <Droplet className="w-8 h-8" />,
    items: ['PVC Pipes', 'Steel Pipes', 'Pipe Fittings', 'Water Tanks'],
    desc: 'Leak-proof durable solutions for plumbing and drainage.'
  },
  {
    id: 'Paints',
    title: 'Premium Paints',
    icon: <PaintBucket className="w-8 h-8" />,
    items: ['Interior Emulsion', 'Exterior Paints', 'Sprays', 'Wood Polish'],
    desc: 'Vibrant colors with long-lasting finish.'
  },
  {
    id: 'Electrical',
    title: 'Electrical Supplies',
    icon: <Zap className="w-8 h-8" />,
    items: ['Copper Wires', 'MCB Switches', 'LED Lighting', 'Conduit Pipes'],
    desc: 'Safe and efficient electrical items for modern homes.'
  }
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('All');
  const [sortOrder, setSortOrder] = useState<SortType>('default');

  const filteredAndSortedCategories = useMemo(() => {
    let result = [...categories];

    if (activeCategory !== 'All') {
      result = result.filter(cat => cat.id === activeCategory);
    }

    if (sortOrder === 'alphabetical') {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
  }, [activeCategory, sortOrder]);

  return (
    <section id="products" className="py-32 bg-brand-black">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-500 mb-4 block">Product Range</span>
            <h2 className="text-5xl font-light text-white mb-6 tracking-tight">
              Curated <span className="font-serif italic text-gray-500">Categories</span>
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            {/* Filter */}
            <div className="flex items-center gap-3">
              <Filter size={14} className="text-gray-500" />
              <div className="flex gap-2 bg-white/5 p-1 rounded-sm border border-border-subtle">
                {(['All', 'Tools', 'Pipes', 'Paints', 'Electrical'] as CategoryType[]).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest rounded-sm transition-all ${
                      activeCategory === cat ? 'bg-white text-black' : 'text-gray-500 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div className="flex items-center gap-3">
              <ArrowUpDown size={14} className="text-gray-500" />
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as SortType)}
                className="bg-white/5 border border-border-subtle text-[9px] font-bold uppercase tracking-widest text-white px-4 py-2 outline-none cursor-pointer focus:border-white transition-colors"
              >
                <option value="default">Default Order</option>
                <option value="alphabetical">A - Z</option>
              </select>
            </div>
          </div>
        </div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredAndSortedCategories.map((cat, idx) => (
              <motion.div
                layout
                key={cat.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white/[0.02] border border-border-subtle p-10 flex flex-col justify-between group cursor-pointer hover:bg-white/[0.05] transition-all min-h-[300px]"
              >
                <div className="text-gray-600 group-hover:text-white transition-colors font-mono text-sm tracking-widest">
                  0{categories.findIndex(c => c.id === cat.id) + 1}.
                </div>
                <div>
                  <div className="text-gray-400 mb-6 group-hover:scale-110 group-hover:text-white transition-all duration-500 origin-left">
                    {cat.icon}
                  </div>
                  <h4 className="text-xl text-white font-medium mb-3 uppercase tracking-tight">{cat.title}</h4>
                  <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold leading-relaxed">{cat.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredAndSortedCategories.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-gray-500 uppercase tracking-widest text-xs">No products found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
