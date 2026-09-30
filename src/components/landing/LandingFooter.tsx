const footerGroups = [
  [
    'Product',
    [
      'Business Pulse',
      'AI Analyst',
      'Sales',
      'Inventory',
      'Analytics',
      'Automation',
    ],
  ],
  [
    'Solutions',
    ['Retail', 'Restaurant', 'Wholesale', 'Services', 'Multi-Branch'],
  ],
  ['Company', ['About', 'Contact', 'Careers', 'Blog']],
  ['Resources', ['Documentation', 'Help Center', 'API', 'Security']],
  ['Legal', ['Privacy', 'Terms']],
] as const

export function LandingFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white py-14 text-slate-700">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.3fr_0.8fr_0.8fr_0.8fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <a
            href="#top"
            className="flex items-center gap-3"
            aria-label="KARO home"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 via-red-600 to-blue-600 text-sm font-black text-white">
              K
            </span>
            <span className="text-lg font-extrabold tracking-[-0.05em] text-slate-900">
              KARO
            </span>
          </a>
          <p className="mt-5 max-w-xs text-slate-600">
            The intelligent operating system for modern businesses.
          </p>
        </div>
        {footerGroups.map(([title, links]) => (
          <div key={title}>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              {title}
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="transition hover:text-red-700">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  )
}
