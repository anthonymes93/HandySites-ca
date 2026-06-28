import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle2 } from 'lucide-react'

const inputClass =
  'w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200 hover:border-gray-300'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    plan: 'starter',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-28 lg:py-36 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* ── Left: Copy ── */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-orange-500 font-bold text-xs tracking-[0.18em] uppercase mb-5">
              Get In Touch
            </p>
            <h2
              className="text-4xl lg:text-5xl font-black text-gray-950 tracking-tight mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Let's build something<br />
              <span className="text-orange-500">you're proud of.</span>
            </h2>
            <p className="text-[1.0625rem] text-gray-500 leading-relaxed mb-12">
              Tell us about your business. We'll reply within one business day with a clear
              plan and a path to getting your site live.
            </p>

            <div className="space-y-5 mb-12">
              {[
                { emoji: '📧', title: 'Email Us', detail: 'hello@handysite.ca' },
                { emoji: '⚡', title: 'Fast Response', detail: 'We reply within 24 hours' },
                { emoji: '🍁', title: 'Proudly Canadian', detail: 'Serving businesses nationwide' },
              ].map(item => (
                <div key={item.title} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-xl shrink-0 border border-orange-100">
                    {item.emoji}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm" style={{ fontFamily: 'var(--font-display)' }}>
                      {item.title}
                    </p>
                    <p className="text-gray-500 text-sm">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quote block */}
            <div className="p-7 bg-orange-50 rounded-2xl border border-orange-100">
              <div className="text-3xl text-orange-300 font-serif leading-none mb-3">"</div>
              <p className="text-orange-800 text-[15px] italic leading-relaxed mb-3">
                Every dollar you invest in a professional website comes back tenfold in customer trust.
              </p>
              <p className="text-orange-400 text-xs font-bold tracking-wide">— The HandySite Team</p>
            </div>
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="bg-gray-50 rounded-3xl p-9 border border-gray-100 shadow-sm">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-5 border border-green-100">
                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-black text-gray-950 mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                    Message received!
                  </h3>
                  <p className="text-gray-500 text-sm">We'll be in touch within one business day.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-black text-gray-500 mb-2 uppercase tracking-[0.12em]">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Mike Johnson"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black text-gray-500 mb-2 uppercase tracking-[0.12em]">
                        Business Name
                      </label>
                      <input
                        type="text"
                        name="business"
                        value={form.business}
                        onChange={handleChange}
                        placeholder="Johnson Plumbing"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-black text-gray-500 mb-2 uppercase tracking-[0.12em]">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="mike@example.com"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-black text-gray-500 mb-2 uppercase tracking-[0.12em]">
                      Phone (optional)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(416) 555-0100"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-black text-gray-500 mb-2 uppercase tracking-[0.12em]">
                      Which plan interests you?
                    </label>
                    <div className="relative">
                      <select
                        name="plan"
                        value={form.plan}
                        onChange={handleChange}
                        className={`${inputClass} appearance-none cursor-pointer`}
                      >
                        <option value="starter">Starter — $500 one-time</option>
                        <option value="managed">Managed — $15/month</option>
                        <option value="unsure">Not sure yet</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-black text-gray-500 mb-2 uppercase tracking-[0.12em]">
                      About Your Business
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="What kind of work do you do? What do you want your website to accomplish?"
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2.5 bg-orange-500 text-white font-bold py-4 rounded-full hover:bg-orange-600 transition-all duration-200 shadow-lg shadow-orange-200 hover:shadow-xl hover:shadow-orange-200 hover:-translate-y-0.5 text-[15px] mt-2"
                  >
                    Send Message
                    <Send className="w-4 h-4" />
                  </button>

                  <p className="text-center text-gray-400 text-xs mt-1">
                    We typically reply within 24 hours on business days.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
