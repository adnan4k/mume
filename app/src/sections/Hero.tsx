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
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0 gradient-mesh-hero" />

      {/* Floating Blobs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-primary-200/40 rounded-full blur-3xl"
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
        className="absolute bottom-20 right-10 w-96 h-96 bg-primary-100/50 rounded-full blur-3xl"
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
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-50/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 noise-overlay opacity-50" />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={heroStagger}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div
              variants={heroTextReveal}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100/80 backdrop-blur-sm border border-primary-200/50 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary-600">
                Trusted by 10,000+ families
              </span>
            </motion.div>

            <motion.h1
              variants={heroTextReveal}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-accent"
            >
              Care that feels{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-gradient-premium">like family</span>
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
              className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Personalized healthcare services designed around your loved ones needs. 
              Professional caregivers bringing comfort, dignity, and joy to every home.
            </motion.p>

            <motion.div
              variants={heroTextReveal}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <AnimatedButton size="lg" href="#cta">
                Start Your Journey
                <ArrowRight className="w-5 h-5" />
              </AnimatedButton>
              <AnimatedButton variant="outline" size="lg" href="#services">
                Explore Services
              </AnimatedButton>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              variants={heroTextReveal}
              className="mt-12 flex items-center gap-6 justify-center lg:justify-start"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-primary-100 overflow-hidden shadow-md"
                  >
                    <img
                      src={`/caregiver-${i}.jpg`}
                      alt={`Caregiver ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-white bg-primary flex items-center justify-center shadow-md">
                  <span className="text-xs font-bold text-white">+150</span>
                </div>
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-0.5">
                  <span className="font-semibold text-accent">4.9/5</span> from 2,400+ reviews
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Image Composition */}
          <motion.div
            className="relative h-[500px] lg:h-[600px] perspective-1000"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              rotateX: useTransform(rotateX, (v) => v * 0.5),
              rotateY: useTransform(rotateY, (v) => v * 0.5),
            }}
          >
            {/* Main Image */}
            <motion.div
              className="relative z-10 w-full h-full rounded-3xl overflow-hidden shadow-premium-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="/hero-caregiver.jpg"
                alt="Compassionate caregiver with elderly patient"
                className="w-full h-full object-cover"
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 via-transparent to-transparent" />
            </motion.div>

            {/* Floating Cards */}
            <FloatingCard
              className="top-4 -left-4 sm:-left-8 px-4 py-3 flex items-center gap-3"
              delay={0.8}
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Licensed & Insured</p>
                <p className="text-sm font-semibold text-accent">Fully Certified</p>
              </div>
            </FloatingCard>

            <FloatingCard
              className="bottom-20 -right-4 sm:-right-8 px-4 py-3 flex items-center gap-3"
              delay={1.2}
            >
              <div className="w-10 h-10 rounded-xl bg-[#76A83B]/20 flex items-center justify-center">
                <Clock className="w-5 h-5 text-[#76A83B]" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Available Around</p>
                <p className="text-sm font-semibold text-accent">24/7 Support</p>
              </div>
            </FloatingCard>

            <FloatingCard
              className="bottom-4 left-8 px-4 py-3 flex items-center gap-3"
              delay={1.6}
            >
              <div className="w-10 h-10 rounded-xl bg-[#5A9D3A]/20 flex items-center justify-center">
                <Users className="w-5 h-5 text-[#5A9D3A]" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Families Helped</p>
                <p className="text-sm font-semibold text-accent">10,000+</p>
              </div>
            </FloatingCard>

            {/* Decorative Elements */}
            <motion.div
              className="absolute -top-6 -right-6 w-24 h-24 bg-primary-200/50 rounded-2xl -z-10"
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute -bottom-6 -left-6 w-20 h-20 bg-primary-100/60 rounded-full -z-10"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <span className="text-xs text-muted-foreground">Scroll to explore</span>
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-primary-300 flex justify-center pt-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-primary"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
