import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function TermsOfService() {
  useEffect(() => {
    document.title = 'Terms of Service | HandySites'
  }, [])

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <meta name="description" content="HandySites Terms of Service — the terms governing use of our website and services." />

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
          Terms of Service
        </h1>
        <p className="text-sm text-gray-400 mb-12">Effective Date: July 2, 2026</p>

        <div className="space-y-8 text-gray-600 text-[1rem] leading-relaxed">

          <p>
            Welcome to HandySites. By accessing or using our website and services, you agree to these Terms
            of Service. If you do not agree with these terms, please do not use our website or services.
          </p>

          <Section title="1. About HandySites">
            <p>
              HandySites provides website design, development, and related digital services for home service
              businesses and other small businesses.
            </p>
          </Section>

          <Section title="2. Use of Our Website">
            <p className="mb-3">You agree to use our website only for lawful purposes. You must not:</p>
            <ul className="space-y-2">
              {[
                'Use the website in any way that violates applicable laws or regulations.',
                'Attempt to gain unauthorized access to our systems.',
                'Interfere with the operation or security of the website.',
                'Upload or transmit malicious software or harmful code.',
                'Use the website to send spam or fraudulent communications.',
              ].map(item => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="3. Quotes and Services">
            <p>
              Any pricing displayed on our website is for informational purposes and may change without notice.
              Project quotes are provided individually based on your specific requirements. A project is not
              considered accepted until both parties agree to proceed.
            </p>
          </Section>

          <Section title="4. Payments">
            <p className="mb-3">Payment terms will be outlined before work begins. Unless otherwise agreed in writing:</p>
            <ul className="space-y-2">
              {[
                'Deposits are non-refundable once work has started.',
                'Remaining balances are due upon project completion.',
                'HandySites reserves the right to pause or withhold delivery of completed work until outstanding balances have been paid.',
              ].map(item => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="5. Client Responsibilities">
            <p className="mb-3">Clients agree to:</p>
            <ul className="space-y-2 mb-3">
              {[
                'Provide accurate information.',
                'Supply required content, images, and branding materials.',
                'Respond to requests for feedback within a reasonable timeframe.',
                'Ensure they have permission to use any content they provide.',
              ].map(item => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p>Delays in providing required materials may delay project completion.</p>
          </Section>

          <Section title="6. Intellectual Property">
            <p className="mb-3">Unless otherwise agreed:</p>
            <ul className="space-y-2">
              {[
                'Clients retain ownership of the content they provide.',
                'Upon full payment, ownership of the completed website design and custom work transfers to the client, excluding third-party software, themes, plugins, fonts, stock assets, and other licensed materials that remain subject to their respective licenses.',
                'HandySites may display completed projects in its portfolio unless the client requests otherwise in writing.',
              ].map(item => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="7. Third-Party Services">
            <p>
              Websites may include or rely upon third-party services such as hosting providers, domain
              registrars, analytics providers, payment processors, plugins, or other software. HandySites is
              not responsible for outages, pricing changes, or service interruptions caused by third-party
              providers.
            </p>
          </Section>

          <Section title="8. Website Availability">
            <p>
              We strive to keep our website available at all times but cannot guarantee uninterrupted access.
              We may modify, suspend, or discontinue any portion of the website without prior notice.
            </p>
          </Section>

          <Section title="9. Disclaimer">
            <p>
              Our services are provided on an "as is" and "as available" basis. While we strive to provide
              high-quality websites and services, HandySites makes no guarantees regarding specific business
              outcomes, search engine rankings, lead generation, or revenue increases.
            </p>
          </Section>

          <Section title="10. Limitation of Liability">
            <p>
              To the fullest extent permitted by law, HandySites shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages arising from the use of our website or
              services. Our total liability shall not exceed the amount paid by the client for the applicable
              services.
            </p>
          </Section>

          <Section title="11. Termination">
            <p className="mb-3">We reserve the right to refuse or terminate services if:</p>
            <ul className="space-y-2">
              {[
                'These Terms are violated.',
                'Fraudulent or unlawful activity is suspected.',
                'A client fails to make required payments.',
              ].map(item => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="12. Privacy">
            <p>
              Your use of our website is also governed by our{' '}
              <Link to="/privacy-policy" className="text-orange-500 font-semibold hover:text-orange-600 transition-colors">
                Privacy Policy
              </Link>.
            </p>
          </Section>

          <Section title="13. Changes to These Terms">
            <p>
              We may update these Terms of Service from time to time. Updated versions become effective
              immediately upon being posted on this website.
            </p>
          </Section>

          <Section title="14. Governing Law">
            <p>
              These Terms shall be governed by and interpreted in accordance with the laws of the Province
              of Ontario and the applicable federal laws of Canada.
            </p>
          </Section>

          <Section title="15. Contact Us">
            <p>
              If you have any questions regarding these Terms of Service, please contact us through the
              contact information provided on the HandySites website.
            </p>
          </Section>

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

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2
        className="text-xl font-black text-gray-950 mb-3"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {title}
      </h2>
      {children}
    </section>
  )
}
