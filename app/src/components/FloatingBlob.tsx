import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FloatingBlobProps {
  className?: string;
  color?: string;
  size?: number;
  delay?: number;
  duration?: number;
}

export function FloatingBlob({
  className,
  color = 'bg-primary-300',
  size = 300,
  delay = 0,
  duration = 7,
}: FloatingBlobProps) {
  return (
    <motion.div
      className={cn('absolute rounded-full blur-3xl opacity-30 pointer-events-none', color, className)}
      style={{ width: size, height: size }}
      animate={{
        x: [0, 30, -20, 0],
        y: [0, -50, 20, 0],
        scale: [1, 1.1, 0.9, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    />
  );
}

export function GradientMesh({ className }: { className?: string }) {
  return (
    <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
      <FloatingBlob
        color="bg-primary-300"
        size={400}
        className="top-0 left-1/4"
        delay={0}
        duration={8}
      />
      <FloatingBlob
        color="bg-primary-200"
        size={350}
        className="top-1/3 right-1/4"
        delay={2}
        duration={9}
      />
      <FloatingBlob
        color="bg-blue-200"
        size={300}
        className="bottom-1/4 left-1/3"
        delay={4}
        duration={7}
      />
    </div>
  );
}

export function GradientOrb({
  className,
  color = 'from-primary-400 to-primary-600',
  size = 200,
}: {
  className?: string;
  color?: string;
  size?: number;
}) {
  return (
    <motion.div
      className={cn(
        'absolute rounded-full blur-2xl opacity-40 pointer-events-none bg-gradient-to-br',
        color,
        className
      )}
      style={{ width: size, height: size }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}
