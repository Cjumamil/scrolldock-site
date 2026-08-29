const STEPS = [
  {
    number: '01',
    title: 'Plug in your display',
    body: 'ScrollDock watches for display changes in the background — clamshell mode included.',
  },
  {
    number: '02',
    title: 'It detects the change',
    body: 'Docked or undocked, ScrollDock knows within a second or two, even through slower docks.',
  },
  {
    number: '03',
    title: 'Scrolling flips itself',
    body: 'Your preferred direction applies instantly — no logout, no trip to System Settings.',
  },
]

export default function HowItWorks() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-blue sm:text-4xl">
        How it works
      </h2>

      <div className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-3">
        {STEPS.map((step) => (
          <div key={step.number}>
            <span className="text-[13px] font-semibold text-blue">
              {step.number}
            </span>
            <h3 className="mt-3 text-[17px] font-bold text-ink">
              {step.title}
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-secondary">
              {step.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
