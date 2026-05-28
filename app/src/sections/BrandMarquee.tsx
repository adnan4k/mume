import { motion } from 'framer-motion';
import { Building2, HeartPulse, Stethoscope, ShieldPlus, Leaf, Award } from 'lucide-react';

const brands = [
  { name: 'HealthFirst', icon: HeartPulse },
  { name: 'MediCare Plus', icon: ShieldPlus },
  { name: 'VitalCore', icon: Stethoscope },
  { name: 'GreenLife', icon: Leaf },
  { name: 'CareExcellence', icon: Award },
  { name: 'UnityHealth', icon: Building2 },
];

function BrandItem({ name, icon: Icon }: { name: string; icon: React.ElementType }) {
  return (
    <div className="flex items-center gap-3 px-8 py-4">
      <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center">
        <Icon className="w-5 h-5 text-primary-400" />
      </div>
      <span className="text-lg font-semibold text-muted-foreground/60 whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export function BrandMarquee() {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Gradient Fades */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-cream to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-cream to-transparent z-10" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-wider">
          Trusted by leading healthcare organizations
        </p>

        <div className="relative flex overflow-hidden">
          <motion.div
            className="flex items-center"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {[...brands, ...brands, ...brands, ...brands].map((brand, index) => (
              <BrandItem key={`${brand.name}-${index}`} name={brand.name} icon={brand.icon} />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
