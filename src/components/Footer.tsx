const links = ['Home', 'Pricing', 'FAQ', 'Contact']

export default function Footer() {
  return (
    <footer className="bg-gray-950 py-16 border-t border-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-14">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <img src="/logo-icon.png" alt="HandySites icon" style={{ height: '40px', width: 'auto' }} />
              <span className="font-black text-white tracking-tight" style={{ fontSize: '1.25rem', fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>
                HANDY<span className="text-orange-500">SITES</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs text-gray-500">
              Professional websites for contractors, tradespeople, and local service businesses
              across Canada. Fast turnaround. Flat pricing. Real results.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-white font-bold text-sm mb-5 tracking-wide">Quick Links</p>
            <ul className="space-y-3 text-sm">
              {links.map(l => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="text-gray-500 hover:text-orange-400 transition-colors duration-150"
                  >
                    {l}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="mailto:hello@handysite.ca"
                  className="text-gray-500 hover:text-orange-400 transition-colors duration-150"
                >
                  hello@handysite.ca
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">© {new Date().getFullYear()} HandySite.ca — All rights reserved.</p>
          <p className="text-xs text-gray-700">Made with care in Canada 🍁</p>
        </div>
      </div>
    </footer>
  )
}
