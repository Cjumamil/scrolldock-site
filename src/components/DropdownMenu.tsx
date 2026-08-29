import { useState } from 'react'
import { Check } from 'lucide-react'
import Switch from './Switch'
import type { OnboardingStep } from './DemoPanel'

type DropdownMenuProps = {
  naturalScroll: boolean
  onToggleNaturalScroll: () => void
  onboardingStep: OnboardingStep
}

const CHECKBOX_ITEMS = [
  'Auto-switch on dock/undock',
  'Launch at Login',
  'Show Notifications',
]

export default function DropdownMenu({
  naturalScroll,
  onToggleNaturalScroll,
  onboardingStep,
}: DropdownMenuProps) {
  const [checked, setChecked] = useState([true, true, true])
  const showToggleHint = onboardingStep === 'toggle'

  const toggleCheckbox = (index: number) => {
    setChecked((current) =>
      current.map((value, i) => (i === index ? !value : value)),
    )
  }

  return (
    <div
      role="menu"
      className="absolute right-0 top-full z-30 mt-1.5 w-64 overflow-hidden rounded-lg border border-white/10 bg-[#2c2c2e]/95 py-1 text-white shadow-2xl backdrop-blur-xl"
    >
      <div className="cursor-default px-3 py-1.5 text-[12px] text-white/40">
        Docked (external display)
      </div>

      <div className="my-1 h-px bg-white/10" />

      <button
        type="button"
        role="menuitemcheckbox"
        aria-checked={naturalScroll}
        onClick={onToggleNaturalScroll}
        className="flex w-full cursor-pointer items-center justify-between px-3 py-1.5 text-left text-[13px] hover:bg-white/10"
      >
        <span>Toggle Natural Scroll</span>
        <Switch checked={naturalScroll} />
      </button>

      <div
        aria-hidden="true"
        className={`overflow-hidden px-3 transition-all duration-300 ease-out ${
          showToggleHint ? 'max-h-9 pb-1.5 opacity-100' : 'max-h-0 pb-0 opacity-0'
        }`}
      >
        <span
          className={`inline-block rounded-full bg-ink/80 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-sm ${
            showToggleHint ? 'animate-hint-invite' : ''
          }`}
        >
          Try toggling this switch
        </span>
      </div>

      <div className="my-1 h-px bg-white/10" />

      {CHECKBOX_ITEMS.map((label, index) => (
        <button
          key={label}
          type="button"
          role="menuitemcheckbox"
          aria-checked={checked[index]}
          onClick={() => toggleCheckbox(index)}
          className="flex w-full cursor-pointer items-center gap-2 px-3 py-1.5 text-left text-[13px] hover:bg-white/10"
        >
          <span className="flex h-4 w-4 shrink-0 items-center justify-center">
            {checked[index] && (
              <Check className="h-4 w-4" strokeWidth={2.5} />
            )}
          </span>
          {label}
        </button>
      ))}

      <div className="my-1 h-px bg-white/10" />

      <div className="flex cursor-default items-center justify-between px-3 py-1.5 text-[13px] text-white/90">
        <span>Quit ScrollDock</span>
        <span className="text-white/40">⌘Q</span>
      </div>
    </div>
  )
}
