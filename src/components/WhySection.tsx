import { motion, type Variants } from 'framer-motion'
import { Zap, Smartphone, PhoneCall, Clock } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Sites optimized for speed. Fast pages rank higher on Google and keep customers from leaving.',
  },
  {
    icon: Smartphone,
    title: 'Mobile First',
    description: 'Your customers browse on their phones. Every site looks polished on every screen size.',
  },
  {
    icon: PhoneCall,
    title: 'Gets You Calls',
    description: 'Every page is designed to turn visitors into paying customers — more calls, more jobs.',
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: 'From first message to live website in as little as 7 days. We move fast.',
  },
]

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

export default function WhySection() {
  return (
    <section className="py-28 lg:py-36 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="text-center mb-18"
          style={{ marginBottom: '4.5rem' }}
        >
          <p className="text-orange-500 font-bold text-xs tracking-[0.18em] uppercase mb-5">
            Trusted by Contractors &amp; Service Pros
          </p>
          <h2
            className="text-4xl lg:text-5xl font-black text-gray-950 tracking-tight mb-5"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Websites that help you{' '}
            <span className="text-orange-500">win more jobs</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-lg mx-auto leading-relaxed">
            We build websites that are fast, easy to use, and designed to turn visitors into customers.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {features.map(feat => (
            <motion.div
              key={feat.title}
              variants={cardVariants}
              transition={{ duration: 0.55 }}
              className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 group"
            >
              <div className="w-11 h-11 bg-orange-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-orange-500 transition-colors duration-300">
                <feat.icon className="w-5 h-5 text-orange-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3
                className="font-bold text-gray-950 text-base mb-2.5"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {feat.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feat.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 0.55 }}
          className="mt-14 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm hover:gap-3 transition-all duration-200 hover:text-orange-600"
          >
            Ready to get started?
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
