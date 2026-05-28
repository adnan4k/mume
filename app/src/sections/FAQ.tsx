import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { staggerContainer, staggerItem } from '@/animations/variants';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: 'How do you match caregivers with clients?',
    answer: 'We take a personalized approach to matching. Our care coordinators assess your loved one is needs, personality, preferences, and schedule. We then introduce caregivers who are not only qualified but also compatible. You will have the opportunity to meet potential caregivers before making a decision, ensuring the perfect fit.',
  },
  {
    question: 'What qualifications do your caregivers have?',
    answer: 'All Medora caregivers are licensed, insured, and undergo rigorous background checks. They complete our proprietary training program covering clinical skills, communication, empathy, and emergency response. Many hold specialized certifications in areas like dementia care, palliative care, and physical therapy assistance.',
  },
  {
    question: 'Can I change or adjust my care plan?',
    answer: 'Absolutely. We understand that care needs evolve. You can adjust your care plan at any time — whether you need to increase hours, add specialized services, or modify the schedule. Simply contact your care coordinator, and we will make the changes, typically within 24-48 hours.',
  },
  {
    question: 'How does the 24/7 emergency support work?',
    answer: 'Our emergency response team is available around the clock. Each client receives a dedicated emergency button that instantly alerts our team. We also use smart monitoring technology to detect unusual patterns. In an emergency, our team coordinates with local emergency services and notifies designated family members immediately.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'Medora currently provides in-home care services across major metropolitan areas in 15 states. We are continuously expanding. To check availability in your area, please contact us or use the zip code lookup on our website. For areas outside our coverage, we can often recommend trusted partner agencies.',
  },
  {
    question: 'How is pricing structured?',
    answer: 'Our pricing is transparent and customized based on your specific needs. Factors include the type of care, number of hours, and any specialized services. We offer flexible plans — from a few hours a week to round-the-clock care. Contact us for a free, no-obligation consultation and personalized quote.',
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      variants={staggerItem}
      className={cn(
        'rounded-2xl border transition-all duration-300',
        isOpen
          ? 'bg-white border-primary-200 shadow-premium'
          : 'bg-white/60 border-transparent hover:bg-white hover:border-border'
      )}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
      >
        <span className="text-base sm:text-lg font-medium text-accent pr-4">
          {faq.question}
        </span>
        <motion.div
          className={cn(
            'w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors',
            isOpen ? 'bg-primary text-white' : 'bg-primary-50 text-primary'
          )}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 sm:px-6 pb-5 sm:pb-6">
              <div className="h-px bg-gray-100 mb-4" />
              <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-30" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="FAQ"
          title="Questions families often ask"
          description="Find answers to common questions about our services, caregivers, and care process."
          className="mb-16"
        />

        <motion.div
          className="space-y-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index as number}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
