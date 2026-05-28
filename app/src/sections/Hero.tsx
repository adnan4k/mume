import { motion } from 'framer-motion';
import { ArrowRight, Shield, Users } from 'lucide-react';
import { AnimatedButton } from '@/components/AnimatedButton';
import { heroStagger, heroTextReveal } from '@/animations/variants';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-24 lg:pt-28">
      <div className="absolute inset-0 gradient-mesh opacity-35" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <motion.div
            variants={heroStagger}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left max-w-2xl"
          >
            <motion.div
              variants={heroTextReveal}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm font-medium text-primary-600">MUME CARE</span>
            </motion.div>

            <motion.h1
              variants={heroTextReveal}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08] text-accent"
            >
              Support that feels safe, personal, and reliable.
            </motion.h1>

            <motion.p
              variants={heroTextReveal}
              className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed"
            >
              Mume Care offers practical help, social companionship, and reliable everyday support for
              elderly people, individuals living at home, and families who need relief.
            </motion.p>

            <motion.div
              variants={heroTextReveal}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <AnimatedButton size="lg" href="#cta">
                We Want to Help
                <ArrowRight className="w-5 h-5" />
              </AnimatedButton>
              <AnimatedButton variant="outline" size="lg" href="#services">
                Explore Our Services
              </AnimatedButton>
            </motion.div>

            <motion.div
              variants={heroTextReveal}
              className="mt-8 flex flex-wrap items-center gap-3 justify-center lg:justify-start"
            >
              <div className="rounded-xl bg-white border border-border px-3 py-2">
                <p className="text-sm font-medium text-accent">Home assistance</p>
              </div>
              <div className="rounded-xl bg-white border border-border px-3 py-2">
                <p className="text-sm font-medium text-accent">Social support</p>
              </div>
              <div className="rounded-xl bg-white border border-border px-3 py-2">
                <p className="text-sm font-medium text-accent">Errands and routines</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative h-[420px] sm:h-[500px] lg:h-[560px]"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.div
              className="relative w-full h-full rounded-3xl overflow-hidden shadow-premium-lg border border-white/50"
            >
              <img
                src="/hero-caregiver.jpg"
                alt="Compassionate caregiver with elderly patient"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/25 via-transparent to-transparent" />
            </motion.div>

            <div className="absolute -bottom-5 left-5 right-5 rounded-2xl bg-white/90 backdrop-blur-sm border border-border p-4 shadow-premium">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Care and Safety</p>
                    <p className="text-sm font-semibold text-accent">Reliable Support</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-lg bg-[#5A9D3A]/20 flex items-center justify-center">
                    <Users className="w-4 h-4 text-[#5A9D3A]" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Team Approach</p>
                    <p className="text-sm font-semibold text-accent">Respect and Engagement</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
