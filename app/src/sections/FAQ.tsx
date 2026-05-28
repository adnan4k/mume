import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { staggerContainer, staggerItem } from '@/animations/variants';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: "What is Mume Care's ambition?",
    answer: 'MUME CARE aims to create a safer, warmer, and easier everyday life for people who need extra support and assistance. We strive to meet everyone with love, respect, and care while delivering professional and reliable services to our clients and their families.',
  },
  {
    question: 'What is your vision?',
    answer: 'Our vision is to contribute to less loneliness, greater security, and improved quality of life in society. MUME CARE aims to be a daily source of support for elderly people, young individuals, and families in need of help, care, and relief.',
  },
  {
    question: 'Who do you want to help?',
    answer: 'We want to support elderly people and everyone who needs extra assistance in everyday life. Through care, practical help, and social support, we aim to create safety, well-being, and joy in people’s lives while also giving relief to family caregivers.',
  },
  {
    question: 'How do you work as a team?',
    answer: 'At MUME CARE, we work together as a strong team focused on collaboration, respect, and excellent service. We support one another and do our very best to provide safe, professional, and compassionate assistance to all our clients.',
  },
  {
    question: 'Do you provide technical help too?',
    answer: 'Yes. We offer simple technical assistance for common digital issues with phones, tablets, and computers. When needed, we also collaborate with trusted technical partners in the city for further examination and repairs.',
  },
  {
    question: 'What does MUME CARE stand for?',
    answer: 'M - Humanity, U - Development, M - Motivation, E - Empathy, C - Care, A - Responsibility, R - Respect, E - Engagement.',
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
          title="Mume Care in brief"
          description="Our services, vision, values, and approach to safe and compassionate everyday support."
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
