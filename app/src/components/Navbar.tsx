import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AnimatedButton } from './AnimatedButton';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    navLinks.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled ? 'py-3' : 'py-5'
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div
          className={cn(
            'mx-4 sm:mx-6 lg:mx-8 rounded-2xl transition-all duration-500',
            scrolled
              ? 'bg-accent/90 backdrop-blur-2xl shadow-premium border border-accent/40'
              : 'bg-accent/85 backdrop-blur-xl border border-accent/35'
          )}
        >
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <motion.a
                href="#hero"
                className="flex items-center gap-2.5 group"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#hero');
                }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-glow">
                  <Heart className="w-5 h-5 text-white" fill="white" />
                </div>
                <span className="text-xl font-bold text-white tracking-tight">MUME CARE</span>
              </motion.a>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-1">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={cn(
                      'relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300',
                      activeSection === link.href.slice(1)
                        ? 'text-primary'
                        : 'text-white/85 hover:text-white'
                    )}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {link.label}
                    {activeSection === link.href.slice(1) && (
                      <motion.div
                        className="absolute inset-0 bg-white/10 rounded-full -z-10"
                        layoutId="activeNav"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </motion.a>
                ))}
              </div>

              {/* CTA Button */}
              <div className="hidden lg:block">
                <AnimatedButton size="sm" href="#cta">
                  Contact Us
                </AnimatedButton>
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                className="lg:hidden p-2 rounded-xl hover:bg-white/10 transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                whileTap={{ scale: 0.95 }}
              >
                {mobileOpen ? (
                  <X className="w-6 h-6 text-white" />
                ) : (
                  <Menu className="w-6 h-6 text-white" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Menu Panel */}
            <motion.div
              className="absolute top-24 left-4 right-4 bg-white/95 backdrop-blur-2xl rounded-3xl shadow-premium-lg border border-border p-6"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={cn(
                      'px-4 py-3 rounded-2xl text-base font-medium transition-colors',
                      activeSection === link.href.slice(1)
                        ? 'bg-primary-100 text-primary'
                        : 'text-muted-foreground hover:bg-primary-50 hover:text-accent'
                    )}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <div className="pt-4 border-t border-border">
                  <AnimatedButton
                    className="w-full"
                    onClick={() => handleNavClick('#cta')}
                  >
                    Contact Us
                  </AnimatedButton>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
