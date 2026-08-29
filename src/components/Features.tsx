import {
  Radar,
  ToggleRight,
  Zap,
  RefreshCw,
  LayoutPanelTop,
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
    body: 'Prefer to flip it yourself? One click in the menu bar overrides auto-detection instantly.',
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
  {
    title: 'Lives in the menu bar',
    body: 'No Dock icon, no window to manage, launches at login if you want it to.',
    icon: LayoutPanelTop,
  },
]

export default function Features() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-blue sm:text-4xl">
        Features
      </h2>

      <div className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature) => (
          <div key={feature.title}>
            <feature.icon className="mb-4 h-12 w-12 text-ink" strokeWidth={2} />
            <h3 className="text-[17px] font-bold text-ink">{feature.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-secondary">
              {feature.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
