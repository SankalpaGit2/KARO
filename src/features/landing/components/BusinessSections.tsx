import { motion } from 'framer-motion'
import {
  AlertTriangle,
  BarChart3,
  Check,
  CircleDashed,
  Database,
  Sparkles,
  TrendingUp,
} from 'lucide-react'

import { SectionIntro } from '../../../components/home/SectionIntro'

const stages = [
  { title: 'OBSERVE', description: 'Collect business events.', icon: Database },
  { title: 'UNDERSTAND', description: 'Analyze patterns.', icon: BarChart3 },
  {
    title: 'DETECT',
    description: 'Find risks and opportunities.',
    icon: AlertTriangle,
  },
  {
    title: 'RECOMMEND',
    description: 'Suggest the next action.',
    icon: Sparkles,
  },
  { title: 'EXECUTE', description: 'Help the business act.', icon: Check },
]

export function BusinessProblemSection() {
  const dataSources = [
    'POS',
    'Excel',
    'Bank',
    'QR Payments',
    'Inventory',
    'Employees',
    'Suppliers',
    'Branches',
    'Accounting',
  ]
  const outcomes = [
    ['What happened', 'Most business software records what happened.'],
    ['Why it happened', 'KARO explains patterns and drivers.'],
    ['What needs attention', 'The platform flags risks before they grow.'],
    ['What to do next', 'Actionable recommendations lead to faster decisions.'],
  ]

  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="mb-6 inline-flex rounded-full border border-slate-200 bg-slate-100 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-600">
            The problem
          </p>
          <h2 className="text-4xl font-black tracking-[-0.07em] text-slate-900 sm:text-5xl">
            Your business already has the data.
            <span className="mt-2 block text-slate-500">
              The problem is knowing what it means.
            </span>
          </h2>
        </div>
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.06)]">
          <div className="mb-4 flex flex-wrap gap-2.5">
            {dataSources.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-600"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Sources
              </div>
              <div className="mt-3 text-2xl font-black text-slate-900">12+</div>
            </div>
            <div className="rounded-2xl border border-red-200 bg-red-50 p-4">
              <div className="text-xs uppercase tracking-[0.2em] text-red-600">
                KARO
              </div>
              <div className="mt-3 text-2xl font-black text-red-900">1</div>
            </div>
            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4">
              <div className="text-xs uppercase tracking-[0.2em] text-blue-700">
                Decision
              </div>
              <div className="mt-3 text-lg font-black text-blue-900">
                One intelligent business picture
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 grid gap-5 rounded-[32px] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 shadow-[0_30px_80px_rgba(15,23,42,0.05)] md:grid-cols-4">
        {outcomes.map(([title, description]) => (
          <div key={title} className="space-y-2">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
              {title}
            </p>
            <p className="text-lg font-semibold text-slate-700">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function DecisionProcessSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 text-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(239,68,68,0.06),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro
          title="From business data to business decisions."
          subtitle="KARO translates operational activity into clear signals, context, and next steps."
        />
        <div className="relative mt-16">
          <div className="absolute left-[10%] right-[10%] top-14 hidden h-px bg-gradient-to-r from-transparent via-red-300/60 to-transparent lg:block" />
          <div className="grid gap-6 lg:grid-cols-5">
            {stages.map(({ title, description, icon: Icon }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="relative rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_20px_50px_rgba(2,6,23,0.08)]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-red-100 to-blue-100 text-red-700 ring-1 ring-inset ring-red-200">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-red-700">
                  0{index + 1}
                </div>
                <h3 className="mt-4 text-xl font-black text-slate-900">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function BusinessPulseSection() {
  const metrics = [
    ['Sales', 'NPR 428,500'],
    ['Profit', 'NPR 94,200'],
    ['Inventory Risk', '3'],
    ['Receivables', 'NPR 672,000'],
    ['Cash Position', 'NPR 1.84M'],
  ]
  const alerts = [
    ['Stock shortage', '7 products'],
    ['Payment mismatch', 'NPR 2,700'],
    ['Overdue customers', '8'],
    ['Supplier delay', '2'],
  ]

  return (
    <section id="business-pulse" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow="Business Pulse"
          title="Meet your Business Pulse."
          subtitle="A live view of what your business needs attention on, without digging through reports."
        />
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="mt-12 overflow-hidden rounded-[32px] border border-slate-200 bg-slate-50 p-4 shadow-[0_30px_80px_rgba(15,23,42,0.08)] sm:p-6"
        >
          <div className="grid gap-6 lg:grid-cols-[1.35fr_0.8fr]">
            <div className="rounded-[28px] border border-slate-200 bg-white p-5">
              <div className="flex flex-col gap-4 border-b border-slate-200 pb-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm text-slate-500">Business Health</p>
                  <div className="mt-2 flex items-end gap-2">
                    <span className="text-4xl font-black text-slate-900">
                      82
                    </span>
                    <span className="pb-1 text-lg text-slate-400">/ 100</span>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-sm font-semibold text-emerald-700">
                  <TrendingUp className="h-4 w-4" />
                  +8.5% this month
                </div>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {metrics.map(([title, value]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                      {title}
                    </div>
                    <div className="mt-3 text-lg font-bold text-slate-900">
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[28px] border border-slate-200 bg-white p-5">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900">
                  Needs attention
                </h3>
                <CircleDashed className="h-5 w-5 text-red-600" />
              </div>
              <div className="space-y-4">
                {alerts.map(([title, value]) => (
                  <div
                    key={title}
                    className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-3"
                  >
                    <div>
                      <div className="text-sm font-medium text-slate-800">
                        {title}
                      </div>
                      <div className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-500">
                        Action
                      </div>
                    </div>
                    <div className="text-base font-bold text-slate-900">
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
