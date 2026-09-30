import { ArrowLeft, Compass } from 'lucide-react'
import { Link } from '@tanstack/react-router'

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-6 py-16 text-slate-900">
      <div className="mx-auto max-w-lg text-center">
        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-red-600 shadow-sm ring-1 ring-red-100">
          <Compass className="h-8 w-8" />
        </div>
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-red-600">404</p>
        <h1 className="mt-4 text-4xl font-black tracking-[-0.08em] text-slate-950 sm:text-5xl">This page is not in the map.</h1>
        <p className="mt-5 text-lg text-slate-600">
          The path you requested does not exist yet, but the rest of the KARO operating system is ready.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link to="/" className="inline-flex items-center gap-2 rounded-full bg-red-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(239,68,68,0.22)] transition hover:bg-red-600">
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
          <Link to="/" className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-300">
            Explore KARO
          </Link>
        </div>
      </div>
    </div>
  )
}
