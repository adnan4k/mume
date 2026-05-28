import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { GlassCard } from '@/components/GlassCard';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    name: 'Margaret Thompson',
    role: 'Family Member',
    image: '/testimonial-1.jpg',
    rating: 5,
    text: 'Medora transformed our experience with elderly care. Their caregivers are not just professionals — they became family. My mother looks forward to their visits every day, and I have complete peace of mind knowing she is in the best hands.',
  },
  {
    name: 'Robert Chen',
    role: 'Client',
    image: '/testimonial-2.jpg',
    rating: 5,
    text: 'After my surgery, I was worried about recovery at home. Medora recovery support team was incredible — patient, knowledgeable, and genuinely caring. They helped me regain my independence much faster than expected.',
  },
  {
    name: 'Sarah Williams',
    role: 'Family Member',
    image: '/caregiver-1.jpg',
    rating: 5,
    text: 'The wellness monitoring service gives our entire family peace of mind. We receive regular updates about dads health, and the emergency response team once detected an issue before it became serious. Truly life-saving service.',
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const goNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const goPrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0, scale: 0.95 }),
  };

  return (
    <section id="testimonials" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-100/40 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Testimonials"
          title="Stories from families like yours"
          description="Hear from the families and individuals whose lives have been touched by our compassionate care."
          className="mb-16"
        />

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Quote Icon */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shadow-glow z-20">
            <Quote className="w-6 h-6 text-white" />
          </div>

          <div className="relative h-[400px] sm:h-[350px]">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="absolute inset-0"
              >
                <GlassCard className="h-full flex flex-col justify-center p-8 sm:p-12" glow>
                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-6 justify-center">
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Star className="w-5 h-5 text-primary" fill="currentColor" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-lg sm:text-xl text-center text-accent leading-relaxed mb-8 italic">
                    &ldquo;{testimonials[current].text}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center justify-center gap-4">
                    <motion.div
                      className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary-200 shadow-lg"
                      whileHover={{ scale: 1.1 }}
                    >
                      <img
                        src={testimonials[current].image}
                        alt={testimonials[current].name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div className="text-left">
                      <p className="font-semibold text-accent">{testimonials[current].name}</p>
                      <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              onClick={goPrev}
              className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary-100 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-5 h-5 text-accent" />
            </motion.button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goTo(index)}
                  className={cn(
                    'h-2 rounded-full transition-all duration-300',
                    index === current
                      ? 'w-8 bg-primary'
                      : 'w-2 bg-primary-200 hover:bg-primary-300'
                  )}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            <motion.button
              onClick={goNext}
              className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary-100 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-5 h-5 text-accent" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
