import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { ArrowRight, Shield, Clock, Users } from 'lucide-react';
import { AnimatedButton } from '@/components/AnimatedButton';
import { heroStagger, heroTextReveal } from '@/animations/variants';
import { useMousePosition } from '@/hooks/useScrollProgress';

function FloatingCard({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`absolute glass-strong rounded-2xl shadow-premium-lg ${className}`}
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={{
        opacity: 1,
        y: [0, -12, 0],
        scale: 1,
      }}
      transition={{
        opacity: { duration: 0.8, delay: delay + 0.5 },
        y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay },
        scale: { duration: 0.8, delay: delay + 0.5 },
      }}
    >
      {children}
    </motion.div>
  );
}

export function Hero() {
  const mousePosition = useMousePosition();
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const rotateX = useTransform(y, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-5, 5]);

  useEffect(() => {
    mouseX.set(mousePosition.x);
    mouseY.set(mousePosition.y);
  }, [mousePosition, mouseX, mouseY]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-24 lg:pt-28"
    >
      <div className="absolute inset-0 gradient-mesh-hero" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent" />

      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-primary-200/35 rounded-full blur-3xl"
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          x: useTransform(x, (v) => v * -30),
          y: useTransform(y, (v) => v * -30),
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-primary-100/45 rounded-full blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          x: useTransform(x, (v) => v * -20),
          y: useTransform(y, (v) => v * -20),
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-50/25 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="absolute inset-0 noise-overlay opacity-50" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            variants={heroStagger}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div
              variants={heroTextReveal}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-sm border border-primary-200/60 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary-600">Humanity, Respect, and Care</span>
            </motion.div>

            <motion.h1
              variants={heroTextReveal}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-accent"
            >
              Support that feels{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-gradient-premium">safe and personal</span>
                <motion.svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 1.2 }}
                >
                  <motion.path
                    d="M2 10C50 2 100 2 150 6C200 10 250 4 298 8"
                    stroke="url(#gradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#7DBA3D" />
                      <stop offset="100%" stopColor="#0E2D5A" />
                    </linearGradient>
                  </defs>
                </motion.svg>
              </span>
            </motion.h1>

            <motion.p
              variants={heroTextReveal}
              className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Mume Care offers practical help, social companionship, and reliable everyday support for
              elderly people, individuals living at home, and families who need relief.
            </motion.p>

            <motion.div
              variants={heroTextReveal}
              className="mt-6 flex flex-wrap gap-2 justify-center lg:justify-start"
            >
              {['Home assistance', 'Social support', 'Errands and routines'].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-full text-sm bg-white/70 border border-border text-accent"
                >
                  {item}
                </span>
              ))}
            </motion.div>

            <motion.div
              variants={heroTextReveal}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
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
              className="mt-10 grid grid-cols-3 gap-3 max-w-md mx-auto lg:mx-0"
            >
              <div className="rounded-2xl bg-white/75 border border-border px-3 py-3 text-center">
                <p className="text-xl font-bold text-accent">M</p>
                <p className="text-xs text-muted-foreground">Humanity</p>
              </div>
              <div className="rounded-2xl bg-white/75 border border-border px-3 py-3 text-center">
                <p className="text-xl font-bold text-accent">U</p>
                <p className="text-xs text-muted-foreground">Development</p>
              </div>
              <div className="rounded-2xl bg-white/75 border border-border px-3 py-3 text-center">
                <p className="text-xl font-bold text-accent">M</p>
                <p className="text-xs text-muted-foreground">Motivation</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative h-[520px] lg:h-[620px] perspective-1000"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              rotateX: useTransform(rotateX, (v) => v * 0.5),
              rotateY: useTransform(rotateY, (v) => v * 0.5),
            }}
          >
            <motion.div
              className="absolute inset-0 rounded-[2rem] bg-white/40 border border-white/60 shadow-premium-lg"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />

            <motion.div
              className="relative z-10 w-full h-full rounded-[2rem] overflow-hidden shadow-premium-lg"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="/hero-caregiver.jpg"
                alt="Compassionate caregiver with elderly patient"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/30 via-transparent to-transparent" />
            </motion.div>

            <FloatingCard
              className="top-6 -left-4 sm:-left-8 px-4 py-3 flex items-center gap-3"
              delay={0.8}
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Care and Safety</p>
                <p className="text-sm font-semibold text-accent">Reliable Support</p>
              </div>
            </FloatingCard>

            <FloatingCard
              className="bottom-24 -right-4 sm:-right-8 px-4 py-3 flex items-center gap-3"
              delay={1.2}
            >
              <div className="w-10 h-10 rounded-xl bg-[#76A83B]/20 flex items-center justify-center">
                <Clock className="w-5 h-5 text-[#76A83B]" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Daily Assistance</p>
                <p className="text-sm font-semibold text-accent">At Home and Outside</p>
              </div>
            </FloatingCard>

            <FloatingCard
              className="bottom-6 left-8 px-4 py-3 flex items-center gap-3"
              delay={1.6}
            >
              <div className="w-10 h-10 rounded-xl bg-[#5A9D3A]/20 flex items-center justify-center">
                <Users className="w-5 h-5 text-[#5A9D3A]" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Team Approach</p>
                <p className="text-sm font-semibold text-accent">Respect and Engagement</p>
              </div>
            </FloatingCard>

            <motion.div
              className="absolute -top-5 -right-5 w-20 h-20 rounded-2xl bg-primary-200/45 -z-10"
              animate={{ rotate: [0, 12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-primary-100/65 -z-10"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </div>
      </div>

    
    </section>
  );
}
