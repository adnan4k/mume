import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, CheckCircle2, Heart } from 'lucide-react';

const pricingItems = [
  {
    image: '/service-homecare.jpg',
    title: 'Cleaning & Practical Help',
    description: 'Professional cleaning and practical household support tailored to your schedule.',
    points: [
      'Fixed monthly support by agreement',
      'Minimum 2 hours per visit',
    ],
    price: 'From 299 NOK / hour',
    featured: false,
  },
  {
    image: '/caregiver-1.jpg',
    title: 'Errands & Affairs',
    description: 'Errands, escort services, and transport arranged conveniently for you.',
    points: [
      'Escort services by appointment',
      'Transport can be arranged separately',
    ],
    price: 'From 299 NOK / hour',
    featured: false,
  },
  {
    image: '/feature-companionship.jpg',
    title: 'Help for the Elderly',
    description: 'Personal and flexible care adapted to individual needs, available evenings and weekends.',
    points: [
      'Personalised help adapted to needs',
      'Evening & weekend availability',
    ],
    price: 'From 349 NOK / hour',
    featured: true,
  },
  {
    image: '/caregiver-2.jpg',
    title: 'Technical Assistance',
    description: 'Simple technical support and device repairs with fully transparent pricing.',
    points: [
      'Screen replacement & repairs',
      'Setup and basic technical support',
    ],
    price: 'From 399 NOK / task',
    featured: false,
  },
];

export function PricesOverview() {
  return (
    <section id="prices" className="relative py-24 lg:py-32 overflow-hidden bg-[#f5f4f0]">
      {/* Subtle dot pattern background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(circle, #1a2e4a 1px, transparent 1px)', backgroundSize: '28px 28px' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Logo mark */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-6"
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-11 h-11 rounded-2xl bg-primary flex items-center justify-center shadow-glow">
            <Heart className="w-5 h-5 text-white" fill="white" />
          </div>
          <span className="text-2xl font-bold text-accent tracking-tight">MUME CARE</span>
        </motion.div>

        {/* Section heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary-100 text-primary-600 mb-4">
            PRICES OVERVIEW
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-accent leading-tight">
            Our Main Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Transparent pricing — adapted to your needs, no hidden fees.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {pricingItems.map((item, index) => (
            <motion.article
              key={item.title}
              className="group relative flex flex-col rounded-3xl p-6 bg-white border border-border shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:bg-accent hover:shadow-2xl hover:border-accent"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: index * 0.09 }}
            >
              {item.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full shadow opacity-0 group-hover:opacity-100 transition-all duration-300">
                  Most Popular
                </span>
              )}

              {/* Circular image */}
              <div className="w-24 h-24 rounded-full mx-auto mb-5 overflow-hidden ring-4 ring-primary/20 group-hover:ring-white/30 shadow-lg transition-all duration-300">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="text-base font-bold leading-snug text-center mb-2 text-accent group-hover:text-white transition-colors duration-300">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-center mb-5 text-muted-foreground group-hover:text-white/70 transition-colors duration-300">
                {item.description}
              </p>

              {/* Bullet points */}
              <ul className="space-y-2 mb-6 flex-1">
                {item.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground group-hover:text-white/80 transition-colors duration-300">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-primary group-hover:text-white/50 transition-colors duration-300" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Footer */}
              <div className="mt-auto flex items-center justify-between pt-4 border-t border-dashed border-border group-hover:border-white/20 transition-colors duration-300">
                <div>
                  <p className="text-[10px] uppercase tracking-widest mb-0.5 text-muted-foreground group-hover:text-white/40 transition-colors duration-300">Starting at</p>
                  <p className="text-sm font-bold text-primary group-hover:text-white transition-colors duration-300">{item.price}</p>
                </div>
                <button
                  type="button"
                  className="w-9 h-9 rounded-full border border-border bg-white flex items-center justify-center text-accent group-hover:bg-white group-hover:text-accent group-hover:border-white transition-colors duration-300 shadow-sm"
                  aria-label={`Read more about ${item.title}`}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom banner */}
        <motion.div
          className="mt-8 rounded-3xl bg-accent text-white px-8 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shrink-0">
              <Heart className="w-4 h-4 text-white" fill="white" />
            </div>
            <p className="text-lg sm:text-xl font-semibold">First assistance hour is free</p>
          </div>
          <p className="text-sm text-white/70 sm:text-right">For all new customers</p>
        </motion.div>

      </div>
    </section>
  );
}
