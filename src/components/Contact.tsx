import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-brand-black">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid lg:grid-cols-2 gap-24">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-500 mb-4 block">Get In Touch</span>
            <h2 className="text-5xl font-light text-white mb-8 tracking-tight">
              Visit Our <br /> <span className="font-serif italic text-gray-500">Nanded Store</span>
            </h2>
            <p className="text-gray-400 text-sm mb-12 font-medium leading-relaxed">
              We are located in the heart of Nanded's industrial market. Stop by for expert advice and competitive pricing on all hardware needs.
            </p>

            <div className="grid sm:grid-cols-2 gap-10">
              {[
                { icon: <MapPin size={18} />, label: 'Address', value: 'Mondha Chowk, Nanded, MH' },
                { icon: <Phone size={18} />, label: 'Call Us', value: '+91 87666 33713' },
                { icon: <Mail size={18} />, label: 'Email', value: 'sales@marathwada.com' },
                { icon: <Clock size={18} />, label: 'Hours', value: '09:00 AM - 08:30 PM' },
              ].map((item) => (
                <div key={item.label} className="flex flex-col gap-4 group">
                  <div className="text-gray-500 group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-600 mb-1">{item.label}</div>
                    <div className="text-white text-xs font-medium tracking-tight truncate">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 w-full h-[250px] border border-border-subtle grayscale invert opacity-50 contrast-125 transition-all hover:opacity-100 hover:grayscale-0 hover:invert-0">
              <iframe
                title="Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15065.748536136154!2d77.30752044826135!3d19.15426466723382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd1d66bb9d5d711%3A0x1d7c3bc38a9eb3fd!2sMondha%2C%20Nanded%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1714130000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>

          {/* WhatsApp Inquiry */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-12 bg-white/[0.02] border border-border-subtle rounded-sm flex flex-col justify-center items-center text-center"
          >
            <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-8 border border-green-500/20">
              <MessageCircle size={40} className="text-green-500" />
            </div>
            <h3 className="text-xl font-light text-white mb-4 tracking-tight uppercase">
              Direct <span className="font-serif italic text-gray-500">WhatsApp</span> Inquiry
            </h3>
            <p className="text-gray-500 text-[10px] uppercase font-bold tracking-[0.2em] mb-10 max-w-xs leading-relaxed">
              Skip the forms. Chat with us directly for instant support and project quotes.
            </p>
            <a 
              href="https://wa.me/918766633713"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] text-white py-6 font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-[#20ba59] transition-all flex items-center justify-center gap-4"
            >
              Start Chat on WhatsApp <MessageCircle size={16} />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
