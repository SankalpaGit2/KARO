import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Menu, X } from 'lucide-react'
import { useState } from 'react'

import ThemeToggle from '../ThemeToggle'

const navigation = ['Product', 'Solutions', 'Intelligence', 'Pricing', 'Resources']

export function LandingHeader() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
                <a href="#top" className="flex items-center gap-3" aria-label="KARO home">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 via-red-600 to-blue-600 text-sm font-black text-white shadow-[0_10px_30px_rgba(239,68,68,0.35)]">K</span>
                    <span className="text-lg font-extrabold tracking-[-0.05em] text-slate-900">KARO</span>
                </a>

                <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex" aria-label="Main navigation">
                    {navigation.map((item) => <a key={item} href="#" className="transition hover:text-slate-900">{item}</a>)}
                </nav>

                <div className="hidden items-center gap-3 md:flex">
                    <button className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:text-slate-950">Sign In</button>

                    <button className="inline-flex items-center gap-2 rounded-full bg-red-500 px-4 py-2 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(239,68,68,0.25)] transition hover:-translate-y-0.5 hover:bg-red-600">
                        Start Free <ArrowRight className="h-4 w-4" />
                    </button>
                </div>

                <div className="flex items-center gap-2 md:hidden">
                    <ThemeToggle />
                    <button aria-label="Toggle menu" aria-expanded={menuOpen} className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900" onClick={() => setMenuOpen((value) => !value)}>
                        {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {menuOpen && (
                    <motion.nav initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="border-t border-slate-200 bg-white px-4 py-4 md:hidden" aria-label="Mobile navigation">
                        <div className="space-y-3 text-sm text-slate-700">
                            {navigation.map((item) => <a key={item} href="#" className="block rounded-xl px-3 py-2 hover:bg-slate-100">{item}</a>)}
                            <div className="grid gap-2 pt-3">
                                <button className="rounded-full border border-slate-200 px-4 py-2 text-left">Sign In</button>
                                <button className="rounded-full bg-red-500 px-4 py-2 text-left font-semibold text-white">Start Free</button>
                            </div>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    )
}