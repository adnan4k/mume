import type { Variants } from 'framer-motion';

// Easing presets for premium feel - using tuples for proper typing
const smoothEasing: [number, number, number, number] = [0.25, 0.1, 0.25, 1];
const bounceEasing: [number, number, number, number] = [0.68, -0.55, 0.265, 1.55];
const easeOutEasing: [number, number, number, number] = [0, 0, 0.2, 1];
const easeInOutEasing: [number, number, number, number] = [0.4, 0, 0.2, 1];

export const easings = {
  smooth: smoothEasing,
  bounce: bounceEasing,
  spring: { type: 'spring' as const, stiffness: 100, damping: 15 },
  springStiff: { type: 'spring' as const, stiffness: 200, damping: 20 },
  springSoft: { type: 'spring' as const, stiffness: 50, damping: 12 },
  easeOut: easeOutEasing,
  easeInOut: easeInOutEasing,
};

// Fade up animation
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: smoothEasing },
  },
};

// Fade in animation
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: smoothEasing },
  },
};

// Scale fade animation
export const scaleFade: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: smoothEasing },
  },
};

// Slide in from left
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: smoothEasing },
  },
};

// Slide in from right
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: smoothEasing },
  },
};

// Stagger container
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Stagger container slow
export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// Stagger item
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: smoothEasing },
  },
};

// Hero text reveal
export const heroTextReveal: Variants = {
  hidden: { opacity: 0, y: 60, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.9, ease: smoothEasing },
  },
};

// Hero stagger container
export const heroStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

// Card hover animation
export const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.02,
    y: -8,
    transition: { duration: 0.4, ease: smoothEasing },
  },
};

// Button hover animation
export const buttonHover = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: { duration: 0.3, ease: smoothEasing },
  },
  tap: { scale: 0.98 },
};

// Floating animation config
export const floatingAnimation = {
  y: [0, -20, 0],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};

// Glow pulse animation
export const glowPulse = {
  boxShadow: [
    '0 0 20px rgba(91, 124, 250, 0.2)',
    '0 0 40px rgba(91, 124, 250, 0.4)',
    '0 0 20px rgba(91, 124, 250, 0.2)',
  ],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};

// Page transition
export const pageTransition: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.5, ease: smoothEasing },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3, ease: smoothEasing },
  },
};

// Accordion animation
export const accordionContent: Variants = {
  collapsed: { height: 0, opacity: 0 },
  expanded: {
    height: 'auto',
    opacity: 1,
    transition: { duration: 0.4, ease: smoothEasing },
  },
};

// Counter animation config
export const counterConfig = {
  duration: 2,
  ease: smoothEasing,
};
