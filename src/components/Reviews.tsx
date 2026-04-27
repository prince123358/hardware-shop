import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Proprietor, RK Constructions",
    comment: "The only shop in Nanded where you can find industrial grade tools at genuine prices. Their service is truly exceptional.",
    rating: 5,
    date: "March 2026"
  },
  {
    name: "Sunita Deshpande",
    role: "Interior Designer",
    comment: "As an interior designer, I need a specific variety of paints and fittings. Maharashtra Hardware never disappoints with their collection.",
    rating: 5,
    date: "February 2026"
  },
  {
    name: "Amit Sharma",
    role: "Contractor",
    comment: "I've been buying pipes and electrical supplies from them for 10 years. The durability is unmatched in the local market.",
    rating: 4,
    date: "April 2026"
  }
];

export default function Reviews() {
  return (
    <section className="py-32 bg-brand-black border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-10">
        <div className="mb-20">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-500 mb-4 block">Voice of Experience</span>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight uppercase">
            Trusted by <span className="font-serif italic text-gray-500">Professionals</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((review, idx) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 border border-border-subtle bg-white/[0.01] hover:bg-white/[0.03] transition-all rounded-sm flex flex-col items-start gap-6"
            >
              <div className="flex gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-white text-sm">★</span>
                ))}
              </div>

              <p className="text-gray-400 text-sm italic leading-relaxed mb-6 font-medium">
                "{review.comment}"
              </p>

              <div>
                <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.2em]">{review.name}</h4>
                <p className="text-gray-600 text-[9px] font-bold uppercase tracking-widest mt-1">— {review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
