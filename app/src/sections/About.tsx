import { motion } from 'framer-motion';
import { Heart, TrendingUp, Users, Award } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { GlassCard } from '@/components/GlassCard';
import { staggerContainer, staggerItem, slideInLeft } from '@/animations/variants';

const stats = [
  { icon: Heart, value: '98%', label: 'Client Satisfaction', color: 'bg-rose-50 text-rose-500' },
  { icon: TrendingUp, value: '15+', label: 'Years Experience', color: 'bg-primary-50 text-primary-500' },
  { icon: Users, value: '150+', label: 'Expert Caregivers', color: 'bg-blue-50 text-blue-500' },
  { icon: Award, value: '50+', label: 'Industry Awards', color: 'bg-amber-50 text-amber-500' },
];

export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-mesh opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image Composition */}
          <motion.div
            className="relative"
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="relative">
              {/* Main Image */}
              <motion.div
                className="relative z-10 rounded-3xl overflow-hidden shadow-premium-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src="/about-couple.jpg"
                  alt="Happy elderly couple enjoying quality care"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </motion.div>

              {/* Decorative Frame */}
              <motion.div
                className="absolute -top-4 -left-4 w-full h-full border-2 border-primary-200 rounded-3xl -z-0"
                initial={{ opacity: 0, x: -20, y: -20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              />

              {/* Floating Stat Card */}
              <motion.div
                className="absolute -bottom-6 -right-4 lg:right-8 z-20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <GlassCard className="flex items-center gap-4" hover>
                  <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shadow-glow">
                    <Heart className="w-7 h-7 text-white" fill="white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-accent">10,000+</p>
                    <p className="text-sm text-muted-foreground">Families Cared For</p>
                  </div>
                </GlassCard>
              </motion.div>

              {/* Decorative blob */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary-100/60 rounded-full blur-2xl -z-10" />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <SectionHeading
              tag="Our Story"
              title="Bringing warmth & dignity to every home"
              description="For over 15 years, Medora has been redefining what it means to provide exceptional care. We believe every person deserves to age with grace, surrounded by compassion and professional support."
              align="left"
              className="mb-8"
            />

            <motion.p
              variants={staggerItem}
              className="text-muted-foreground leading-relaxed mb-8"
            >
              Our team of dedicated caregivers goes beyond medical assistance — we build genuine 
              relationships, creating moments of joy and connection. From daily companionship to 
              specialized recovery support, we treat your family like our own.
            </motion.p>

            {/* Stats Grid */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat) => (
                <motion.div key={stat.label} variants={staggerItem}>
                  <GlassCard
                    className="flex items-center gap-3"
                    padding="sm"
                    hover
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${stat.color}`}>
                      <stat.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-accent">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
