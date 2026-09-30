import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight, Blocks, BriefcaseBusiness, Building2, BuildingIcon, Check, Database, FileText, Gauge, Globe2, ReceiptText, ShieldCheck, Sparkles, Store, Users, Warehouse, BarChart3, CircleDashed } from 'lucide-react'
import { Fragment } from 'react'

import { SectionIntro } from '../../../components/home/SectionIntro'

const industries = [
  { title: 'Retail', features: ['POS', 'Inventory', 'Suppliers', 'Branches'], icon: Store },
  { title: 'Restaurant', features: ['Orders', 'Kitchen', 'Ingredients', 'Waste'], icon: ReceiptText },
  { title: 'Wholesale', features: ['Purchasing', 'Pricing', 'Warehouses', 'Margins'], icon: Warehouse },
  { title: 'Pharmacy', features: ['Inventory', 'Expiries', 'Reorder', 'Compliance'], icon: ShieldCheck },
  { title: 'Salon', features: ['Appointments', 'Services', 'Staff', 'Customers'], icon: Users },
  { title: 'Services', features: ['Bookings', 'People', 'Revenue', 'Tasks'], icon: BriefcaseBusiness },
  { title: 'Manufacturing', features: ['Production', 'Suppliers', 'Costs', 'Alerts'], icon: Blocks },
  { title: 'More', features: ['Adaptable', 'Custom roles', 'Data model', 'Growth'], icon: Globe2 },
]

export function IndustrySection() {
  return <section className="bg-white py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionIntro eyebrow="Industry flexibility" title="One business engine. Built for different businesses." subtitle="Built to adapt as your business grows." /><div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">{industries.map(({ title, features, icon: Icon }) => <motion.article key={title} whileHover={{ y: -4 }} className="rounded-[26px] border border-slate-200 bg-slate-50 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.04)]"><div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500/10 to-blue-500/10 text-red-700"><Icon className="h-5 w-5" /></div><h3 className="text-2xl font-black text-slate-900">{title}</h3><div className="mt-4 flex flex-wrap gap-2">{features.map((feature) => <span key={feature} className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600">{feature}</span>)}</div></motion.article>)}</div></div></section>
}

export function GrowthSection() {
  const growthStages = [
    ['1 LOCATION', ['Sales', 'Inventory', 'Customers']],
    ['3 BRANCHES', ['Central inventory', 'Branch analytics', 'Purchasing']],
    ['20+ BRANCHES', ['Central operations', 'Advanced analytics', 'Automation', 'AI intelligence']],
  ]
  return <section className="bg-white py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionIntro eyebrow="Business growth" title="Start small. Grow without changing systems." subtitle="Your software shouldn't become the thing holding your business back." /><motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }} className="mt-12 grid gap-6 lg:grid-cols-3">{growthStages.map(([title, items], index) => <article key={title} className="relative rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.05)]">{index < 2 && <div className="absolute -bottom-5 left-1/2 h-10 w-px -translate-x-1/2 bg-slate-300" />}<div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-red-700">{title}</div><div className="mt-5 space-y-3">{items.map((item) => <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700">{item}</div>)}</div></article>)}</motion.div></div></section>
}

export function MultiBranchSection() {
  const branches = [['Kathmandu', 98], ['Birgunj', 86], ['Pokhara', 79], ['Chitwan', 76]]
  return <section className="bg-white py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionIntro eyebrow="Multi-branch" title="One business. Many locations." subtitle="Your HQ gets the full picture while every branch keeps the context it needs." /><motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.7 }} className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]"><div className="rounded-[30px] border border-slate-200 bg-white p-5"><div className="mb-5 flex items-center justify-between"><div><div className="text-xs uppercase tracking-[0.22em] text-slate-500">Company</div><div className="mt-2 text-2xl font-black text-slate-900">KARO HQ</div></div><span className="rounded-full bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-700">Live</span></div><div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{branches.map(([branch]) => <div key={branch} className="rounded-2xl border border-slate-200 bg-slate-50 p-4"><div className="text-sm font-semibold text-slate-900">{branch}</div><div className="mt-4 space-y-2 text-xs text-slate-600">{['Sales', 'Profit', 'Inventory', 'Expenses'].map((metric) => <div key={metric} className="flex items-center justify-between border-b border-slate-200 pb-1"><span>{metric}</span><span className="text-red-700">A</span></div>)}</div></div>)}</div></div><div className="rounded-[30px] border border-slate-200 bg-slate-50 p-5"><div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Branch comparison</div><div className="mt-5 space-y-4">{branches.map(([branch, value]) => <div key={branch}><div className="mb-2 flex items-center justify-between text-sm text-slate-700"><span>{branch}</span><span>{value}%</span></div><div className="h-2.5 rounded-full bg-slate-200"><div className="h-2.5 rounded-full bg-gradient-to-r from-red-500 to-blue-500" style={{ width: `${value}%` }} /></div></div>)}</div></div></motion.div></div></section>
}

export function PermissionsSection() {
  const roles = [
    ['Organization Owner', ['View', 'Create', 'Edit', 'Approve', 'Delete'], 'Entire Organization'],
    ['General Manager', ['View', 'Create', 'Edit', 'Approve'], 'Entire Organization'],
    ['Sales Manager', ['View', 'Create', 'Edit'], 'Selected Branch'],
    ['Inventory Manager', ['View', 'Create', 'Edit', 'Approve'], 'Warehouse'],
    ['Sales Executive', ['View', 'Create'], 'Selected Branch'],
    ['Cashier', ['View', 'Create'], 'Own Records'],
    ['Employee', ['View'], 'Own Records'],
  ]
  return <section className="bg-white py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionIntro eyebrow="Role & permissions" title="Give everyone the access they need. Nothing more." subtitle="Create custom roles for your business." /><motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.7 }} className="mt-12 grid gap-6 lg:grid-cols-7">{roles.map(([role, permissions, scope]) => <article key={role} className="rounded-[24px] border border-slate-200 bg-slate-50 p-4"><h3 className="text-sm font-bold text-slate-900">{role}</h3><div className="mt-4 space-y-2 text-xs text-slate-600">{permissions.map((permission) => <div key={permission} className="flex items-center justify-between rounded-full border border-slate-200 bg-white px-2 py-1"><span>{permission}</span><Check className="h-3.5 w-3.5 text-emerald-500" /></div>)}</div><div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-red-700">{scope}</div></article>)}</motion.div></div></section>
}

export function PlatformArchitectureSection() {
  const modules = ['Sales', 'Inventory', 'Payments', 'Customers', 'Suppliers', 'Employees', 'Branches']
  const stages = [
    { title: 'Business Events', description: 'Capture activity from every part of the business.', icon: Database, accent: 'text-red-700 bg-red-50' },
    { title: 'Analytics Engine', description: 'Turn operating data into useful signals.', icon: BarChart3, accent: 'text-blue-700 bg-blue-50' },
    { title: 'AI Intelligence', description: 'Find patterns, risks, and opportunities.', icon: Sparkles, accent: 'text-red-700 bg-red-50' },
    { title: 'Business Pulse', description: 'See what matters across the whole business.', icon: CircleDashed, accent: 'text-blue-700 bg-blue-50' },
    { title: 'Actions & Automation', description: 'Move from insight to the next action.', icon: ArrowRight, accent: 'text-red-700 bg-red-50' },
  ]

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow="Platform architecture"
          title="One connected business engine."
          subtitle="KARO brings your tools and operations together, then turns business activity into action."
        />

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-12"
        >
          <div className="flex flex-col gap-4 border-b border-slate-200 pb-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-700">Connected workspace</p>
              <h3 className="mt-1 text-xl font-black text-slate-900">KARO Core</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {modules.map((module) => (
                <span key={module} className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700">
                  {module}
                </span>
              ))}
            </div>
          </div>

          <ol className="mt-8 grid grid-cols-1 items-stretch gap-3 lg:grid-cols-[minmax(0,1fr)_32px_minmax(0,1fr)_32px_minmax(0,1fr)_32px_minmax(0,1fr)_32px_minmax(0,1fr)]">
            {stages.map(({ title, description, icon: Icon, accent }, index) => (
              <Fragment key={title}>
                <li key={title} className="min-w-0 rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_12px_32px_rgba(15,23,42,0.05)] sm:p-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">0{index + 1}</span>
                    <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${accent}`}>
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>
                  <h4 className="mt-5 text-base font-extrabold leading-tight text-slate-900">{title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
                </li>
                {index < stages.length - 1 && (
                  <li key={`${title}-connector`} aria-hidden="true" className="flex items-center justify-center text-slate-400">
                    <ArrowDown className="h-4 w-4 lg:hidden" />
                    <ArrowRight className="hidden h-4 w-4 lg:block" />
                  </li>
                )}
              </Fragment>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  )
}

export function SecuritySection() {
  const securityFeatures = [
    ['Role-based access', ShieldCheck], ['Organization isolation', Building2], ['Audit logs', FileText],
    ['Secure authentication', ShieldCheck], ['Branch-level permissions', BuildingIcon], ['Data protection', Database],
    ['Backups', Database], ['Activity tracking', Gauge],
  ] as const
  return <section className="bg-white py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionIntro eyebrow="Security & trust" title="Built for real business." subtitle="Functionality matters, but so does control, accountability, and protection." /><motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.7 }} className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">{securityFeatures.map(([label, Icon]) => <article key={label} className="rounded-[24px] border border-slate-200 bg-slate-50 p-5"><div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-600 text-white"><Icon className="h-5 w-5" /></div><h3 className="text-lg font-bold text-slate-900">{label}</h3></article>)}</motion.div></div></section>
}