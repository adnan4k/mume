import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
  icon?: React.ReactNode;
}

export function AnimatedButton({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  href,
  icon,
}: AnimatedButtonProps) {
  const baseStyles = cn(
    'relative inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-300 overflow-hidden group',
    {
      'px-5 py-2.5 text-sm': size === 'sm',
      'px-7 py-3.5 text-base': size === 'md',
      'px-10 py-4 text-lg': size === 'lg',
    },
    {
      'bg-primary text-white shadow-premium hover:shadow-glow hover:bg-primary-500': variant === 'primary',
      'bg-primary-100 text-primary-700 hover:bg-primary-200': variant === 'secondary',
      'border-2 border-primary text-primary hover:bg-primary hover:text-white': variant === 'outline',
      'text-primary hover:bg-primary-50': variant === 'ghost',
    },
    className
  );

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      className={baseStyles}
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
      </span>
      {variant === 'primary' && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
        />
      )}
    </Component>
  );
}
