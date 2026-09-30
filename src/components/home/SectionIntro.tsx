type SectionIntroProps = {
  title: string
  subtitle?: string
  eyebrow?: string
}

export function SectionIntro({
  title,
  subtitle,
}: SectionIntroProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-3xl font-black tracking-[-0.06em] text-slate-900 sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle ? <p className="mt-4 text-base text-slate-600 sm:text-lg">{subtitle}</p> : null}
    </div>
  )
}
