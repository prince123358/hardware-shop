import { motion, AnimatePresence } from 'motion/react';
import { Hammer, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'Offers', href: '#offers' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 border-b ${scrolled ? 'glass py-3' : 'bg-transparent py-6 border-white/5'}`}>
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-white flex items-center justify-center rounded-sm">
              <span className="text-black font-black text-xl italic leading-none">M</span>
            </div>
            <span className="text-lg font-bold tracking-[0.2em] uppercase text-white hidden sm:block">
              Marathwada <span className="text-gray-500 font-medium">Hardware</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#products"
              className="bg-white text-black px-8 py-3 rounded-sm text-[10px] font-bold uppercase tracking-widest hover:bg-gray-200 transition-all"
            >
              Visit Shop
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden glass absolute top-full left-0 w-full py-8 border-t border-white/10"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-10 py-4 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="px-10 pt-6">
              <a 
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block text-center w-full bg-white text-black py-5 rounded-sm text-xs font-bold uppercase tracking-[0.2em]"
              >
                Visit Shop
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
