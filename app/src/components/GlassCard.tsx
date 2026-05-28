import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

export function GlassCard({
  children,
  className,
  hover = true,
  glow = false,
  padding = 'md',
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        'relative rounded-3xl bg-white/80 backdrop-blur-xl border border-white/40 shadow-premium',
        {
          'p-4': padding === 'sm',
          'p-6': padding === 'md',
          'p-8': padding === 'lg',
        },
        glow && 'shadow-glow',
        className
      )}
      whileHover={
        hover
          ? {
              y: -8,
              scale: 1.02,
              boxShadow: '0 20px 60px rgba(91, 124, 250, 0.15)',
              transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
            }
          : undefined
      }
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}
