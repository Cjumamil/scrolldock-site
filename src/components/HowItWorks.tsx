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
    <section className="bg-bg">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <h2 className="mb-12 text-center text-4xl font-bold tracking-tight text-blue sm:mb-16 sm:text-[2.75rem]">
          How it works
        </h2>

        <div className="grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-3 sm:gap-y-16">
          {STEPS.map((step) => (
            <div key={step.number}>
              <span className="text-[15px] font-semibold text-blue sm:text-[18px]">
                {step.number}
              </span>
              <h3 className="mt-4 text-[18px] font-bold text-ink sm:text-[21px]">
                {step.title}
              </h3>
              <p className="mt-3 text-[16px] leading-relaxed text-ink-secondary sm:text-[18px]">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
