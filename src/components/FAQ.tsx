import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: "What's included in the $500 Starter package?",
    answer:
      'Your Starter package includes a 5-page custom website (Home, About, Services, Gallery, Contact), full mobile-responsive design, a working contact form, Google Maps integration, and social media links. We handle everything from design to deployment.',
  },
  {
    question: 'Do I need any technical knowledge?',
    answer:
      "None at all. We handle 100% of the technical work. We'll ask you a few questions about your business, gather your photos and info, and take it from there. You just need to tell us what you do and who you serve.",
  },
  {
    question: 'How long does it take to build my website?',
    answer:
      'Most sites are live within 7 business days ',
  },
  {
    question: 'Are there any monthly fees?',
    answer:
      "The website build is a one-time $500 payment — you own the site outright. The Managed plan is $15/month and covers everything: hosting, your domain, annual renewals, and ongoing maintenance. No surprises, cancel any time.",
  },
  {
    question: 'Do you work with businesses outside of Canada?',
    answer:
      "We're based in Canada and primarily serve Canadian businesses, but we're happy to work with local service businesses across the globe. Drop us a message and let us know where you're located.",
  },
]

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string
  answer: string
  index: number
}) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.055 }}
      className="border-b border-gray-100 last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left gap-6 group"
      >
        <span
          className={`font-semibold text-[15px] leading-snug transition-colors duration-150 ${open ? 'text-orange-500' : 'text-gray-900 group-hover:text-orange-500'}`}
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {question}
        </span>
        <div
          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
            open ? 'bg-orange-500' : 'bg-gray-100 group-hover:bg-orange-50'
          }`}
        >
          {open ? (
            <Minus className="w-3.5 h-3.5 text-white" />
          ) : (
            <Plus className="w-3.5 h-3.5 text-gray-500 group-hover:text-orange-500" />
          )}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <p className="text-gray-500 text-[15px] leading-relaxed pb-6 pr-14">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="py-28 lg:py-36 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="text-center"
          style={{ marginBottom: '3.5rem' }}
        >
          <p className="text-orange-500 font-bold text-xs tracking-[0.18em] uppercase mb-5">FAQ</p>
          <h2
            className="text-4xl lg:text-5xl font-black text-gray-950 tracking-tight mb-5"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Questions? We've got answers.
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Everything you need to know before we get started.
          </p>
        </motion.div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 px-8 sm:px-12">
          {faqs.map((faq, i) => (
            <FAQItem key={i} {...faq} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 text-sm mt-8"
        >
          Still have questions?{' '}
          <a href="#contact" className="text-orange-500 hover:text-orange-600 hover:underline font-semibold transition-colors">
            Send us a message →
          </a>
        </motion.p>
      </div>
    </section>
  )
}
