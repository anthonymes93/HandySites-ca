import { motion } from 'framer-motion'
import { Zap, ShieldCheck, Smartphone } from 'lucide-react'

const trustItems = [
  { icon: Zap,         label: 'Fast Turnaround', sub: '4–7 days to launch' },
  { icon: ShieldCheck, label: 'Built to Convert', sub: 'More calls & messages' },
  { icon: Smartphone,  label: 'Mobile Ready',     sub: 'Perfect on every device' },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-white overflow-hidden flex items-center"
      style={{ paddingTop: '68px', minHeight: '100vh' }}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: [
            'linear-gradient(rgba(0,0,0,0.036) 1px, transparent 1px)',
            'linear-gradient(90deg, rgba(0,0,0,0.036) 1px, transparent 1px)',
          ].join(', '),
          backgroundSize: '64px 64px',
        }}
      />

      {/* Centre orange glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '800px', height: '800px',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          background:
            'radial-gradient(circle, rgba(249,115,22,0.07) 0%, rgba(249,115,22,0.025) 40%, transparent 65%)',
          borderRadius: '50%',
        }}
      />

      {/* Content — centred single column */}
      <div className="relative w-full max-w-4xl mx-auto px-6 py-28 text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="inline-flex items-center gap-2 border border-orange-200 bg-orange-50/70
                     text-orange-600 font-bold rounded-full mb-10"
          style={{ fontSize: '10.5px', letterSpacing: '0.1em', padding: '7px 15px', textTransform: 'uppercase' }}
        >
          <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" style={{ flexShrink: 0 }} />
          Websites that work. Pricing that's fair.
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.1 }}
          className="text-gray-950 font-black tracking-tight mb-8 mx-auto"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3rem, 7vw, 5.25rem)',
            lineHeight: 1.03,
            letterSpacing: '-0.03em',
          }}
        >
          Professional websites<br />
          for local businesses.<br />
          Built for{' '}
          <span
            className="text-orange-500"
            style={{ textShadow: '0 0 80px rgba(249,115,22,0.22)' }}
          >
            $8600.
          </span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="text-gray-500 leading-[1.78] mb-12 mx-auto"
          style={{ fontSize: '1.125rem', maxWidth: '32rem' }}
        >
          Clean, modern, and mobile-ready websites that help contractors
          and local service pros get more leads and grow their business.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2.5 bg-orange-500 text-white
                       font-bold rounded-xl hover:bg-orange-600
                       transition-all duration-300 hover:-translate-y-1"
            style={{
              fontSize: '15px', padding: '17px 38px',
              boxShadow: '0 8px 24px -6px rgba(249,115,22,0.45)',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 36px -6px rgba(249,115,22,0.55)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px -6px rgba(249,115,22,0.45)' }}
          >
            Get Your Website
            <svg
              className="transition-transform duration-300 group-hover:translate-x-1"
              style={{ width: '16px', height: '16px' }}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          <a
            href="#pricing"
            className="group inline-flex items-center gap-2.5 bg-white text-gray-700
                       font-semibold rounded-xl border border-gray-200
                       hover:border-orange-300 hover:text-orange-600
                       transition-all duration-300 hover:-translate-y-1"
            style={{ fontSize: '15px', padding: '17px 32px' }}
          >
            See What's Included
            <svg
              className="transition-transform duration-300 group-hover:translate-y-0.5"
              style={{ width: '15px', height: '15px' }}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-4"
        >
          {trustItems.map((item, i) => (
            <div key={item.label} className="flex items-center gap-3">
              {i > 0 && <div className="hidden sm:block w-px h-8 bg-gray-200" />}
              <div
                className="w-8 h-8 bg-orange-50 rounded-lg flex items-center justify-center shrink-0"
                style={{ border: '1px solid rgba(249,115,22,0.14)' }}
              >
                <item.icon className="text-orange-500" style={{ width: '15px', height: '15px' }} />
              </div>
              <div className="text-left">
                <p className="font-bold text-gray-900 leading-tight" style={{ fontSize: '12.5px' }}>{item.label}</p>
                <p className="text-gray-500 leading-tight mt-0.5" style={{ fontSize: '11.5px' }}>{item.sub}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ height: '100px', background: 'linear-gradient(to top, #F9FAFB 0%, transparent 100%)' }}
      />
    </section>
  )
}
