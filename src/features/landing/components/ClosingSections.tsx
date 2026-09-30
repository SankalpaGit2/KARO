import { motion } from 'framer-motion'
import { ArrowRight, Check, Sparkles } from 'lucide-react'

import { SectionIntro } from '../../../components/home/SectionIntro'

const plans = [
  {
    name: 'Starter',
    description: 'For small businesses',
    features: [
      'Core sales',
      'Inventory',
      'Customers',
      'Suppliers',
      'Basic reports',
    ],
    cta: 'Start Free',
    highlight: false,
  },
  {
    name: 'Growth',
    description: 'For growing businesses',
    features: [
      'Everything in Starter',
      'Multi-branch',
      'Advanced analytics',
      'Business Pulse',
      'AI Business Analyst',
    ],
    cta: 'Start Growing',
    highlight: true,
  },
  {
    name: 'Enterprise',
    description: 'For larger organizations',
    features: [
      'Advanced permissions',
      'Automation',
      'API',
      'Advanced analytics',
      'Custom integrations',
      'Dedicated support',
    ],
    cta: 'Talk to Sales',
    highlight: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="bg-white py-24 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow="Pricing"
          title="Simple pricing for every stage of growth."
          subtitle="Start with the essentials, then scale as your business grows."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <motion.article
              key={plan.name}
              whileHover={{ y: -4 }}
              className={`rounded-[30px] border p-6 ${plan.highlight ? 'border-red-200 bg-red-50 shadow-[0_24px_80px_rgba(239,68,68,0.1)]' : 'border-slate-200 bg-slate-50'}`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-black text-slate-900">
                  {plan.name}
                </h3>
                {plan.highlight && (
                  <span className="rounded-full bg-red-600 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                    Popular
                  </span>
                )}
              </div>
              <p className="mt-4 text-slate-600">{plan.description}</p>
              <div className="mt-6 text-3xl font-black text-slate-900">
                Contact us
              </div>
              <p className="mt-1 text-sm text-slate-500">
                For a plan tailored to your business
              </p>
              <ul className="mt-8 space-y-3 text-slate-700">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold ${plan.highlight ? 'bg-red-600 text-white hover:bg-red-700' : 'border border-slate-300 bg-white text-slate-900 hover:bg-slate-100'}`}
              >
                {plan.cta}
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FinalCallToAction() {
  return (
    <section className="bg-white py-4 text-slate-900 mb-10">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
      
        <h2 className="mt-8 text-4xl font-black sm:text-5xl lg:text-6xl">
          Your business is already generating the signals.
          <span className="mt-3 block text-slate-500">Start listening.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
          Bring your operations together and turn business activity into action.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-base font-semibold text-white shadow-[0_18px_50px_rgba(239,68,68,0.2)] transition hover:-translate-y-0.5 hover:bg-red-700">
            Start Free
            <ArrowRight className="h-4 w-4" />
          </button>
          <button className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-base font-semibold text-slate-900 transition hover:border-red-200 hover:bg-red-50">
            Book a Demo
          </button>
        </div>
        <p className="mt-6 text-sm text-slate-500">
          Built for businesses that want to understand more, react faster, and
          grow smarter.
        </p>
      </div>
    </section>
  )
}
