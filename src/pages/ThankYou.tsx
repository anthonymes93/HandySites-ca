import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowLeft } from 'lucide-react'

export default function ThankYou() {
  useEffect(() => {
    document.title = 'Thank You | HandySites'

    // TODO: Fire Google Ads / GA4 conversion event here.
    // Example (GA4):
    //   gtag('event', 'conversion', { send_to: 'AW-XXXXXXXXX/XXXXXXXXXXXXXXXX' })
    // Example (GA4 custom event):
    //   gtag('event', 'form_submit_success', { event_category: 'contact' })
  }, [])

  return (
    <>
      <meta name="description" content="Thanks for contacting HandySites." />

      <div className="min-h-screen bg-white flex flex-col">
        {/* Minimal nav */}
        <header className="border-b border-gray-100 px-6 py-4">
          <Link to="/" className="inline-flex items-center gap-2">
            <img src="/logo.png" alt="HandySites" style={{ height: '48px', width: 'auto' }} />
          </Link>
        </header>

        {/* Content */}
        <main className="flex-1 flex items-center justify-center px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-lg w-full text-center"
          >
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-100">
              <CheckCircle2 className="w-10 h-10 text-green-500" />
            </div>

            <h1
              className="text-4xl lg:text-5xl font-black text-gray-950 tracking-tight mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Thanks — we received<br />
              <span className="text-orange-500">your request.</span>
            </h1>

            <p className="text-[1.0625rem] text-gray-500 leading-relaxed mb-10">
              We'll review your message and get back to you as soon as possible.
            </p>

            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-orange-500 text-white font-bold px-7 py-3.5 rounded-full hover:bg-orange-600 transition-all duration-200 shadow-lg shadow-orange-200 hover:shadow-xl hover:shadow-orange-200 hover:-translate-y-0.5 text-[15px]"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </motion.div>
        </main>

        {/* Minimal footer */}
        <footer className="border-t border-gray-100 px-6 py-5 text-center">
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} HandySites.ca — All rights reserved.</p>
        </footer>
      </div>
    </>
  )
}
