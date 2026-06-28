import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const starterFeatures = [
  '5-page custom website',
  'Mobile-responsive design',
  'Optimized to be found online',
  'Contact form',
  'Google Maps integration',
  'Social media links',
  'Launch in 7 business days',
]

const proFeatures = [
  'Domain name included or bring your own',
  'Hosting included',
  'Site updates & maintenance',
  'Google Analytics setup',
  'We handle all the tech',
]

interface PlanProps {
  name: string
  price: string
  period: string
  tagline: string
  features: string[]
  featured: boolean
  badge?: string
  delay: number
}

function PricingCard({ name, price, period, tagline, features, featured, badge, delay }: PlanProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`relative rounded-3xl p-9 flex flex-col ${
        featured
          ? 'bg-gray-950 shadow-2xl shadow-gray-900/30'
          : 'bg-white border border-gray-200 hover:border-orange-200 hover:shadow-xl transition-all duration-300'
      }`}
    >
      {badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full tracking-[0.1em] uppercase whitespace-nowrap">
          {badge}
        </div>
      )}

      <div className="mb-8">
        <p className={`text-[10px] font-black uppercase tracking-[0.18em] mb-3 ${featured ? 'text-orange-500' : 'text-gray-400'}`}>
          {name}
        </p>
        <div className="flex items-end gap-2 mb-2">
          <span
            className={`font-black tracking-tight leading-none ${featured ? 'text-white' : 'text-gray-950'}`}
            style={{ fontFamily: 'var(--font-display)', fontSize: '3.25rem' }}
          >
            {price}
          </span>
          <span className={`mb-2 text-sm font-medium ${featured ? 'text-gray-500' : 'text-gray-400'}`}>{period}</span>
        </div>
        <p className={`text-sm leading-relaxed mt-3 ${featured ? 'text-gray-400' : 'text-gray-500'}`}>{tagline}</p>
      </div>

      <a
        href="#contact"
        className={`block w-full text-center font-bold py-4 rounded-full transition-all duration-200 mb-9 text-[15px] hover:-translate-y-0.5 ${
          featured
            ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/40'
            : 'bg-gray-950 text-white hover:bg-gray-800'
        }`}
      >
        Get Started
      </a>

      <ul className="space-y-4 flex-1">
        {features.map(f => (
          <li key={f} className="flex items-start gap-3">
            <div
              className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                featured ? 'bg-orange-500/20' : 'bg-orange-50'
              }`}
            >
              <Check className={`w-3 h-3 ${featured ? 'text-orange-400' : 'text-orange-500'}`} />
            </div>
            <span className={`text-sm leading-snug ${featured ? 'text-gray-400' : 'text-gray-600'}`}>{f}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 lg:py-36 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="text-center mb-18"
          style={{ marginBottom: '4.5rem' }}
        >
          <p className="text-orange-500 font-bold text-xs tracking-[0.18em] uppercase mb-5">Pricing</p>
          <h2
            className="text-4xl lg:text-5xl font-black text-gray-950 tracking-tight mb-5"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Simple, honest pricing
          </h2>
          <p className="text-lg text-gray-500 max-w-lg mx-auto leading-relaxed">
            No surprises. No hidden fees. Build your site once, or let us handle everything month to month.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-7 max-w-4xl mx-auto" style={{ paddingTop: '1.5rem' }}>
          <PricingCard
            name="Website Build"
            price="$500"
            period="one-time"
            tagline="Perfect for getting a polished, professional site live fast."
            features={starterFeatures}
            featured={false}
            delay={0.1}
          />
          <PricingCard
            name="Managed"
            price="$15"
            period="/month"
            tagline="Your site, domain, and hosting — all handled for you, every month."
            features={proFeatures}
            featured={true}
            badge="We Handle Everything"
            delay={0.2}
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-400 text-sm mt-12"
        >
          Need something custom?{' '}
          <a href="#contact" className="text-orange-500 hover:text-orange-600 hover:underline font-semibold transition-colors">
            Let's talk
          </a>{' '}
          — we're happy to scope out exactly what your business needs.
        </motion.p>
      </div>
    </section>
  )
}
