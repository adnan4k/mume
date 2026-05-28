import { motion } from 'framer-motion';
import { Heart, Activity, Coffee, Users, Stethoscope, Phone, ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { staggerContainer, staggerItem } from '@/animations/variants';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: Heart,
    title: 'Personalized Care',
    description: 'Tailored care plans designed around each individual unique needs, preferences, and health requirements.',
    image: '/hero-caregiver.jpg',
    size: 'large',
    color: 'from-[#5A9D3A]/25 to-[#5A9D3A]/10',
    iconBg: 'bg-[#5A9D3A]/20 text-[#5A9D3A]',
  },
  {
    icon: Activity,
    title: 'Wellness Monitoring',
    description: 'Advanced health tracking with real-time updates for families.',
    image: '/feature-wellness.jpg',
    size: 'medium',
    color: 'from-[#76A83B]/25 to-[#76A83B]/10',
    iconBg: 'bg-[#76A83B]/20 text-[#76A83B]',
  },
  {
    icon: Coffee,
    title: 'Daily Companionship',
    description: 'Meaningful connections and shared moments throughout the day.',
    image: '/feature-companionship.jpg',
    size: 'medium',
    color: 'from-[#76A83B]/25 to-[#76A83B]/10',
    iconBg: 'bg-[#76A83B]/20 text-[#76A83B]',
  },
  {
    icon: Users,
    title: 'Family Support',
    description: 'Regular updates, open communication, and peace of mind for families.',
    size: 'small',
    color: 'from-[#5A9D3A]/25 to-[#5A9D3A]/10',
    iconBg: 'bg-[#5A9D3A]/20 text-[#5A9D3A]',
  },
  {
    icon: Stethoscope,
    title: 'Recovery Assistance',
    description: 'Post-surgery and rehabilitation support from experienced caregivers.',
    size: 'small',
    color: 'from-[#76A83B]/25 to-[#76A83B]/10',
    iconBg: 'bg-[#76A83B]/20 text-[#76A83B]',
  },
  {
    icon: Phone,
    title: 'Emergency Support',
    description: '24/7 emergency response team always ready to help.',
    size: 'small',
    color: 'from-[#5A9D3A]/25 to-[#5A9D3A]/10',
    iconBg: 'bg-[#5A9D3A]/20 text-[#5A9D3A]',
  },
];

function BentoCard({
  feature,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const isLarge = feature.size === 'large';
  const isMedium = feature.size === 'medium';

  return (
    <motion.div
      variants={staggerItem}
      className={cn(
        'group relative rounded-3xl overflow-hidden bg-white border border-border shadow-premium cursor-pointer',
        isLarge && 'md:col-span-2 md:row-span-2',
        isMedium && 'md:col-span-1 md:row-span-1',
        !isLarge && !isMedium && 'md:col-span-1'
      )}
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Background Gradient */}
      <div className={cn('absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500', feature.color)} />

      {feature.image ? (
        <div className={cn('relative', isLarge ? 'h-full min-h-[400px] md:min-h-[500px]' : 'h-full min-h-[240px]')}>
          {/* Image */}
          <img
            src={feature.image}
            alt={feature.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-accent/90 via-accent/40 to-transparent" />
          
          {/* Content */}
          <div className="absolute inset-0 p-6 flex flex-col justify-end">
            <div className={cn('w-12 h-12 rounded-xl flex items-center justify-center mb-3', feature.iconBg)}>
              <feature.icon className="w-6 h-6" />
            </div>
            <h3 className={cn('font-bold text-white mb-2', isLarge ? 'text-2xl' : 'text-xl')}>
              {feature.title}
            </h3>
            <p className={cn('text-white/80 leading-relaxed', isLarge ? 'text-base max-w-md' : 'text-sm')}>
              {feature.description}
            </p>
            <motion.div
              className="flex items-center gap-2 mt-4 text-white/90 text-sm font-medium"
              initial={{ opacity: 0, x: -10 }}
              whileHover={{ x: 5 }}
            >
              Learn more
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </motion.div>
          </div>
        </div>
      ) : (
        <div className="p-6 h-full min-h-[200px] flex flex-col justify-between relative">
          <div>
            <div className={cn('w-12 h-12 rounded-xl flex items-center justify-center mb-4', feature.iconBg)}>
              <feature.icon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-accent mb-2">{feature.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
          </div>
          <motion.div
            className="flex items-center gap-2 mt-4 text-primary text-sm font-medium"
            whileHover={{ x: 5 }}
          >
            Learn more
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </motion.div>
        </div>
      )}

      {/* Hover glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className={cn('absolute inset-0 bg-gradient-to-br', feature.color)} />
      </div>
    </motion.div>
  );
}

export function BentoFeatures() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Our Services"
          title="Comprehensive care for every need"
          description="From daily companionship to specialized medical support, our services are designed to enhance quality of life and provide peace of mind."
          className="mb-16"
        />

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {features.map((feature, index) => (
            <BentoCard key={feature.title} feature={feature} index={index as number} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
