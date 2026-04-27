/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import NewArrivals from './components/NewArrivals';
import Offers from './components/Offers';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';
import { Settings } from 'lucide-react';

export default function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen selection:bg-white selection:text-black">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        <About />
        <Products />
        <NewArrivals />
        <Offers />
        <Reviews />
        <Contact />
      </main>

      <Footer />

      {/* Admin Toggle - Subtle Float */}
      <button 
        onClick={() => setIsAdminOpen(true)}
        className="fixed bottom-6 right-6 z-[90] w-10 h-10 rounded-full border border-white/5 bg-white/[0.01] flex items-center justify-center text-white/10 hover:text-white/50 hover:bg-white/5 transition-all"
        title="Admin Panel"
      >
        <Settings size={14} />
      </button>

      {/* Admin Overlay */}
      {isAdminOpen && (
        <AdminPanel onClose={() => setIsAdminOpen(false)} />
      )}
    </div>
  );
}

