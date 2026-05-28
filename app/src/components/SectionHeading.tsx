import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { fadeUp, staggerContainer } from '@/animations/variants';

interface SectionHeadingProps {
  tag?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  titleClassName?: string;
  tagClassName?: string;
  light?: boolean;
}

export function SectionHeading({
  tag,
  title,
  description,
  align = 'center',
  className,
  titleClassName,
  tagClassName,
  light = false,
}: SectionHeadingProps) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <motion.div
      className={cn('max-w-3xl', alignClasses[align], className)}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      {tag && (
        <motion.span
          variants={fadeUp}
          className={cn(
            'inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4',
            light
              ? 'bg-white/20 text-white backdrop-blur-sm'
              : 'bg-primary-100 text-primary-600',
            tagClassName
          )}
        >
          {tag}
        </motion.span>
      )}
      <motion.h2
        variants={fadeUp}
        className={cn(
          'text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight',
          light ? 'text-white' : 'text-accent',
          titleClassName
        )}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUp}
          className={cn(
            'mt-4 text-base sm:text-lg leading-relaxed',
            light ? 'text-white/80' : 'text-muted-foreground'
          )}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
