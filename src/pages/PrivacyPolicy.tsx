import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = 'Privacy Policy | HandySites'
  }, [])

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <meta name="description" content="HandySites privacy policy — how we collect, use, and protect your information." />

      {/* Minimal nav */}
      <header className="border-b border-gray-100 px-6 py-4">
        <Link to="/">
          <img src="/logo.png" alt="HandySites" style={{ height: '48px', width: 'auto' }} />
        </Link>
      </header>

      <main className="flex-1 max-w-3xl mx-auto w-full px-6 py-16">
        <p className="text-orange-500 font-bold text-xs tracking-[0.18em] uppercase mb-4">Legal</p>
        <h1
          className="text-4xl lg:text-5xl font-black text-gray-950 tracking-tight mb-3"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-400 mb-12">Last updated: {new Date().getFullYear()}</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-600 text-[1rem] leading-relaxed">

          <p>
            HandySites is committed to protecting the privacy of its users. This Privacy Policy describes how we
            collect, use, store, and disclose information that we obtain about visitors to our website and users
            of our services.
          </p>

          <section>
            <h2 className="text-xl font-black text-gray-950 mb-3" style={{ fontFamily: 'var(--font-display)' }}>
              Information We Collect
            </h2>
            <p className="mb-3">We may collect personal and non-personal information from users in a variety of ways, including:</p>
            <ul className="space-y-2 list-none pl-0">
              {[
                ['Personal Information', 'This may include your name, email address, contact information, and any other information you voluntarily provide to us.'],
                ['Usage Information', 'We may collect non-personal information about how you interact with our website, such as IP addresses, browser types, device information, and pages visited.'],
                ['Cookies and Tracking Technologies', 'We may use cookies and similar tracking technologies to enhance user experience and collect data about usage patterns on our website.'],
              ].map(([term, def]) => (
                <li key={term} className="pl-4 border-l-2 border-orange-200">
                  <span className="font-bold text-gray-900">{term}:</span> {def}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-950 mb-3" style={{ fontFamily: 'var(--font-display)' }}>
              How We Use Your Information
            </h2>
            <p className="mb-3">We use the information we collect for the following purposes:</p>
            <ul className="space-y-2">
              {[
                'To improve our website and services.',
                'To personalize user experience and deliver relevant content.',
                'To communicate with users about their inquiries, requests, or to provide updates.',
                'To analyze trends, administer the site, and gather demographic information.',
                'To comply with legal obligations and protect against unauthorized access or use of our website.',
              ].map(item => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-950 mb-3" style={{ fontFamily: 'var(--font-display)' }}>
              Disclosure of Information
            </h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to outside parties unless
              we provide users with advance notice or as required by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-950 mb-3" style={{ fontFamily: 'var(--font-display)' }}>
              Data Security
            </h2>
            <p>
              We implement security measures to maintain the safety of your personal information. However,
              please note that no method of transmission over the internet or electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-950 mb-3" style={{ fontFamily: 'var(--font-display)' }}>
              Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party sites. We are not responsible for the privacy
              practices or content of these sites. We encourage users to read the privacy policies of any
              linked sites.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-950 mb-3" style={{ fontFamily: 'var(--font-display)' }}>
              Children's Privacy
            </h2>
            <p>
              Our website is not directed at individuals under the age of 13. We do not knowingly collect
              personal information from children. If you believe that we may have collected information from
              a child, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-950 mb-3" style={{ fontFamily: 'var(--font-display)' }}>
              Your Consent
            </h2>
            <p>By using our website, you consent to our privacy policy.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-950 mb-3" style={{ fontFamily: 'var(--font-display)' }}>
              Changes to This Privacy Policy
            </h2>
            <p>
              We reserve the right to update or modify this Privacy Policy at any time. Any changes will be
              effective immediately upon posting the updated policy on this page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-950 mb-3" style={{ fontFamily: 'var(--font-display)' }}>
              Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy or the practices of our website, please
              contact us at{' '}
              <a href="tel:+19052203305" className="text-orange-500 font-semibold hover:text-orange-600 transition-colors">
                (905) 220-3305
              </a>.
            </p>
          </section>

        </div>

        <div className="mt-14">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-orange-500 font-bold text-sm hover:text-orange-600 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </main>

      <footer className="border-t border-gray-100 px-6 py-5 text-center">
        <p className="text-xs text-gray-400">© {new Date().getFullYear()} HandySites.ca — All rights reserved.</p>
      </footer>
    </div>
  )
}
