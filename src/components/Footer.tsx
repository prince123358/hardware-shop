import { Hammer, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-black overflow-hidden sticky-footer">
      <div className="max-w-7xl mx-auto px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12 w-full md:w-auto">
          <div className="flex flex-col gap-2">
            <span className="text-gray-500 text-[10px] uppercase font-bold tracking-[0.2em]">Location</span>
            <span className="text-white text-xs font-medium uppercase tracking-widest">Mondha Chowk, Nanded, MH</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-gray-500 text-[10px] uppercase font-bold tracking-[0.2em]">Contact</span>
            <a href="tel:+918766633713" className="text-white text-xs font-medium uppercase tracking-widest hover:text-gray-400 transition-colors">+91 87666 33713</a>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-gray-500 text-[10px] uppercase font-bold tracking-[0.2em]">Social</span>
            <div className="flex gap-4">
               {['IG', 'FB', 'TW'].map(s => (
                 <a key={s} href="#" className="text-white text-xs font-medium uppercase tracking-widest hover:text-gray-400 transition-colors">{s}</a>
               ))}
            </div>
          </div>
        </div>

        <div className="text-[10px] tracking-[0.3em] uppercase text-gray-500 font-bold w-full md:w-auto text-center md:text-right">
          © 2024 Marathwada Hardware • All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
