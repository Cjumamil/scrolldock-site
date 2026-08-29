const STEPS = [
  'Unzip the download and drag ScrollDock.app into Applications.',
  'Right-click the app and choose Open instead of double-clicking.',
  "Click Open again on the confirmation dialog. That's it — it won't ask again.",
]

export default function InstallBand() {
  return (
    <section className="bg-gray-100/70 py-14">
      <div className="mx-auto max-w-[640px] px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          One extra click, the first time
        </h2>
        <p className="mt-3 text-[15px] text-ink-secondary">
          macOS will show a warning the first time you open it — that's
          expected.
        </p>

        <ol className="mt-8 space-y-4 text-left">
          {STEPS.map((step, index) => (
            <li key={step} className="flex gap-3">
              <span className="shrink-0 text-[15px] font-semibold text-blue">
                {index + 1}.
              </span>
              <span className="text-[15px] leading-relaxed text-ink-secondary">
                {step}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
