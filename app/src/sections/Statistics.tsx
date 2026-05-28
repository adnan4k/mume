import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Clock, Users, HeartHandshake } from 'lucide-react';
import { FloatingBlob } from '@/components/FloatingBlob';
import { staggerContainer, staggerItem } from '@/animations/variants';

interface StatItemProps {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  color: string;
  delay: number;
}

function AnimatedCounter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startTime: number;
    const duration = 2000;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, value]);

  return (
    <span className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

function StatItem({ icon: Icon, value, suffix, label, color, delay }: StatItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      variants={staggerItem}
      className="relative group"
    >
      <motion.div
        className="relative glass rounded-3xl p-8 text-center overflow-hidden"
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.4 }}
      >
        {/* Hover glow */}
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${color}`} />
        
        <div className="relative z-10">
          <div className={`w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center bg-gradient-to-br ${color}`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          
          <motion.p
            className="text-4xl sm:text-5xl font-bold text-accent mb-2"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: delay * 0.1 + 0.3, duration: 0.6, type: 'spring' }}
          >
            <AnimatedCounter value={value} suffix={suffix} inView={isInView} />
          </motion.p>
          
          <p className="text-muted-foreground font-medium">{label}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

const stats = [
  { icon: TrendingUp, value: 98, suffix: '%', label: 'Client Satisfaction', color: 'from-rose-400 to-rose-600' },
  { icon: Clock, value: 24, suffix: '/7', label: 'Support Available', color: 'from-primary-400 to-primary-600' },
  { icon: Users, value: 150, suffix: '+', label: 'Expert Caregivers', color: 'from-blue-400 to-blue-600' },
  { icon: HeartHandshake, value: 10000, suffix: '+', label: 'Families Supported', color: 'from-green-400 to-green-600' },
];

export function Statistics() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 gradient-mesh opacity-40" />
      <FloatingBlob color="bg-primary-200" size={300} className="top-10 left-10" delay={0} />
      <FloatingBlob color="bg-blue-200" size={250} className="bottom-10 right-10" delay={2} />
      <FloatingBlob color="bg-rose-200" size={200} className="top-1/2 left-1/2" delay={4} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.span
            variants={staggerItem}
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary-100 text-primary-600 mb-4"
          >
            Our Impact
          </motion.span>
          <motion.h2
            variants={staggerItem}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent tracking-tight"
          >
            Numbers that speak{' '}
            <span className="text-gradient-premium">for themselves</span>
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {stats.map((stat, index) => (
            <StatItem key={stat.label} {...stat} delay={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
