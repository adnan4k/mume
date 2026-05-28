import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Home, HeartPulse, Brain, Accessibility, Sparkles } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { cn } from '@/lib/utils';

const services = [
  {
    icon: Home,
    title: 'In-Home Care',
    description: 'Professional caregivers providing compassionate support in the comfort of your own home. From daily assistance to specialized medical care.',
    image: '/service-homecare.jpg',
    color: 'from-[#5A9D3A] to-[#0E2D5A]',
    bgColor: 'bg-[#5A9D3A]/20',
    features: ['Personal care assistance', 'Medication management', 'Meal preparation', 'Light housekeeping'],
  },
  {
    icon: HeartPulse,
    title: 'Health Monitoring',
    description: 'Advanced wellness tracking and proactive health management to keep your loved ones safe and healthy around the clock.',
    image: '/feature-wellness.jpg',
    color: 'from-[#5A9D3A] to-[#0E2D5A]',
    bgColor: 'bg-[#5A9D3A]/20',
    features: ['Vital signs tracking', 'Emergency alerts', 'Health reports', 'Family updates'],
  },
  {
    icon: Accessibility,
    title: 'Recovery Support',
    description: 'Dedicated post-surgery and rehabilitation care to help patients recover faster and regain their independence.',
    image: '/service-recovery.jpg',
    color: 'from-[#76A83B] to-[#0E2D5A]',
    bgColor: 'bg-[#76A83B]/20',
    features: ['Physical therapy aid', 'Mobility assistance', 'Wound care', 'Recovery tracking'],
  },
  {
    icon: Brain,
    title: 'Memory Care',
    description: 'Specialized care for individuals with Alzheimer is and dementia, focused on maintaining dignity and quality of life.',
    image: '/about-couple.jpg',
    color: 'from-[#5A9D3A] to-[#0E2D5A]',
    bgColor: 'bg-[#5A9D3A]/20',
    features: ['Cognitive activities', 'Safe environment', 'Routine management', 'Family support'],
  },
];

function ServiceCard({
  service,
  index,
  isExpanded,
  onToggle,
}: {
  service: (typeof services)[0];
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      className={cn(
        'relative rounded-3xl overflow-hidden cursor-pointer group',
        'bg-white border border-border shadow-premium'
      )}
      layout
      onClick={onToggle}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -4 }}
    >
      <div className={cn('transition-all duration-500', isExpanded ? 'h-auto' : 'h-auto')}>
        {/* Image */}
        <div className="relative h-48 sm:h-56 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className={cn('absolute inset-0 bg-gradient-to-t opacity-80', service.color)} />
          
          {/* Icon Badge */}
          <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center">
            <service.icon className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-accent mb-2">{service.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {service.description}
          </p>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="overflow-hidden"
              >
                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-medium text-accent mb-3">What is included:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-primary" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            className="flex items-center gap-2 mt-4 text-primary font-medium text-sm"
            whileHover={{ x: 5 }}
          >
            {isExpanded ? 'Show less' : 'Learn more'}
            <motion.div
              animate={{ rotate: isExpanded ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export function Services() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="What We Offer"
          tagClassName="bg-transparent px-0 py-0 rounded-none"
          title="Services designed around your needs"
          description="Explore our comprehensive range of healthcare services, each tailored to provide the highest quality care and support."
          className="mb-16"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              isExpanded={expandedIndex === index}
              onToggle={() => setExpandedIndex(expandedIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
