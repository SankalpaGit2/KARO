import { motion } from 'framer-motion'
import { ArrowRight, BellRing, ChevronRight, TrendingUp } from 'lucide-react'

const healthMetrics = [
  ['Revenue', '↑ 18.4%'],
  ['Gross Profit', '↑ 7.2%'],
  ['Inventory', '⚠ 3 risks'],
  ['Receivables', '⚠ NPR 172K'],
  ['Cash', '✓ Healthy'],
  ['Branches', '↑ Growing'],
]

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-white text-slate-900"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(239,68,68,0.08),transparent_28%),radial-gradient(circle_at_80%_30%,_rgba(59,130,246,0.09),transparent_30%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:64px_64px] opacity-50" />
      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-14 sm:px-6 lg:px-8 lg:pb-28 lg:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="text-5xl font-black tracking-[-0.08em] text-slate-950 sm:text-6xl lg:text-8xl">
            Run your business.
            <span className="mt-2 block text-slate-500">Don’t chase it.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 sm:text-xl">
            KARO connects your sales, inventory, payments, people and
            operations, then turns business activity into clear actions.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-500 via-red-600 to-blue-600 px-6 py-3 text-base font-semibold text-white shadow-[0_18px_50px_rgba(239,68,68,0.45)] transition hover:-translate-y-0.5">
              Start Free
              <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href="#business-pulse"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-base font-semibold text-slate-800 transition hover:border-red-300 hover:bg-red-50"
            >
              See How It Works
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
          <p className="mt-5 text-sm text-slate-500">No credit card required</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto mt-16 max-w-6xl"
        >
          <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white p-4 shadow-[0_32px_80px_rgba(15,23,42,0.12)] sm:p-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>
              <span className="rounded-full border border-red-200 bg-red-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-red-700">
                BUSINESS PULSE
              </span>
            </div>
            <div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
              <div className="space-y-5 rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">Business Health</p>
                    <div className="mt-2 flex items-end gap-2">
                      <span className="text-4xl font-black tracking-[-0.06em] text-slate-900">
                        82
                      </span>
                      <span className="pb-1 text-sm text-slate-500">/ 100</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-sm font-medium text-emerald-700">
                    <TrendingUp className="h-4 w-4" />
                    +6.4
                  </div>
                </div>
                <div className="h-40 rounded-2xl border border-slate-200 bg-[linear-gradient(180deg,rgba(239,68,68,0.12),rgba(15,23,42,0)),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:100%_100%,18px_18px,18px_18px] p-3">
                  <div className="flex h-full items-end gap-2">
                    {[38, 50, 45, 67, 72, 63, 91, 82, 75, 88, 96].map(
                      (height, index) => (
                        <span
                          key={index}
                          className="flex-1 rounded-t-xl bg-gradient-to-t from-red-500 via-blue-500 to-indigo-400"
                          style={{
                            height: `${height}%`,
                            opacity: index > 7 ? 0.96 : 0.7,
                          }}
                        />
                      ),
                    )}
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {healthMetrics.map(([label, value], index) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-slate-200 bg-white p-3"
                    >
                      <div className="text-xs uppercase tracking-[0.18em] text-slate-500">
                        {label}
                      </div>
                      <div
                        className={`mt-2 text-sm font-semibold ${index === 2 || index === 3 ? 'text-amber-700' : index === 4 ? 'text-emerald-700' : 'text-slate-900'}`}
                      >
                        {value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-5">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-lg font-bold text-slate-900">
                    Today’s priorities
                  </h2>
                  <BellRing className="h-4 w-4 text-red-600" />
                </div>
                <div className="space-y-4">
                  {[
                    ['bg-red-400', '3 products may run out in 4 days'],
                    ['bg-amber-400', 'NPR 172,000 overdue'],
                    ['bg-blue-400', 'Branch 2 has a payment mismatch'],
                    ['bg-emerald-400', 'Product X sales increased 31%'],
                  ].map(([tone, text]) => (
                    <div
                      key={text}
                      className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3"
                    >
                      <span
                        className={`mt-1 h-2.5 w-2.5 rounded-full ${tone}`}
                      />
                      <p className="text-sm text-slate-700">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export function TrustStrip() {
  const stages = [
    'Single Store',
    'Growing Business',
    'Multi-Branch',
    'Enterprise',
  ]
  return (
    <section className="border-b border-slate-200 bg-white py-7">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 text-center md:flex-row md:items-center md:justify-between">
          <p className="text-[15px] font-bold tracking-[-0.04em] text-slate-900">
            One platform. Every stage of business.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-slate-600">
            {stages.map((stage, index) => (
              <div key={stage} className="flex items-center gap-3">
                <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 font-medium text-slate-700">
                  {stage}
                </span>
                {index < stages.length - 1 && (
                  <ChevronRight className="h-4 w-4 text-slate-400" />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
          {[
            'Sales',
            'Inventory',
            'Finance',
            'People',
            'Operations',
            'Intelligence',
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1.5"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
