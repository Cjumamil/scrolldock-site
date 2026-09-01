import {
  Radar,
  ToggleRight,
  Zap,
  RefreshCw,
  type LucideIcon,
} from 'lucide-react'

const FEATURES: { title: string; body: string; icon: LucideIcon }[] = [
  {
    title: 'Detects your dock automatically',
    body: 'Plug in or unplug an external display and ScrollDock notices within a second or two, clamshell mode included.',
    icon: Radar,
  },
  {
    title: 'Switch manually, anytime',
    body: 'Prefer to flip it yourself? One click in the app\'s menu bar overrides auto-detection instantly — no Dock icon, no window to manage.',
    icon: ToggleRight,
  },
  {
    title: 'Applies instantly',
    body: 'No logout, no restart. The change takes effect the moment it happens.',
    icon: Zap,
  },
  {
    title: 'Stays in sync',
    body: "Change it by hand in System Settings and ScrollDock remembers — it never fights you.",
    icon: RefreshCw,
  },
]

export default function Features() {
  return (
    <section className="bg-surface">
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <linearGradient id="feature-icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-blue)" />
            <stop offset="100%" stopColor="var(--color-teal)" />
          </linearGradient>
        </defs>
      </svg>

      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <h2 className="mb-12 text-center text-4xl font-bold tracking-tight text-blue sm:mb-16 sm:text-[2.75rem]">
          Features
        </h2>

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 sm:gap-x-8 sm:gap-y-0">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="min-w-0">
              <feature.icon
                className="mb-3 h-8 w-8 sm:mb-5 sm:h-14 sm:w-14"
                strokeWidth={2}
                color="url(#feature-icon-gradient)"
              />
              <h3 className="text-[15px] font-bold text-ink sm:text-[18px] lg:text-[21px]">{feature.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-ink-secondary sm:mt-3 sm:text-[16px] lg:text-[18px]">
                {feature.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
