import { useEffect, useRef, useState } from 'react'
import { BatteryFull, Search, Sun, Volume2, Wifi } from 'lucide-react'
import MouseIcon from './MouseIcon'
import DropdownMenu from './DropdownMenu'
import AppleLogo from './AppleLogo'
import type { OnboardingStep } from './DemoPanel'

type MenuBarProps = {
  naturalScroll: boolean
  onToggleNaturalScroll: () => void
  onboardingStep: OnboardingStep
  onMenuOpened: () => void
}

const SYSTEM_ICONS = [Search, Sun, Volume2, Wifi, BatteryFull]

const CLOCK_TIME = '10:34 PM'

export default function MenuBar({
  naturalScroll,
  onToggleNaturalScroll,
  onboardingStep,
  onMenuOpened,
}: MenuBarProps) {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return

    const handlePointerDown = (event: PointerEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    return () => document.removeEventListener('pointerdown', handlePointerDown)
  }, [open])

  const handleIconClick = () => {
    const nextOpen = !open
    setOpen(nextOpen)
    if (nextOpen) onMenuOpened()
  }

  const showMenuHint = onboardingStep === 'menu'

  return (
    <div
      ref={containerRef}
      className="relative z-20 flex h-10 items-center justify-between rounded-t-2xl bg-black/20 px-4 backdrop-blur-md"
    >
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-[26px] w-[160px] -translate-x-1/2 rounded-b-xl bg-black"
      />

      <AppleLogo className="h-4 w-4 text-white" />

      <div className="flex items-center gap-3 text-white/80">
        <div className="relative">
          <button
            type="button"
            aria-expanded={open}
            aria-haspopup="menu"
            onClick={handleIconClick}
            className={`flex h-6 w-8 cursor-pointer items-center justify-center rounded-md transition-colors ${
              open ? 'bg-white/25' : 'hover:bg-white/10'
            } ${showMenuHint ? 'animate-hint-invite' : ''}`}
          >
            <MouseIcon
              flipped={naturalScroll}
              stroke="#FFFFFF"
              accent="#FFFFFF"
              size={18}
            />
          </button>

          <div
            aria-hidden="true"
            className={`pointer-events-none absolute right-0 top-full z-20 mt-1.5 transition-all duration-300 ${
              showMenuHint
                ? 'translate-y-0 opacity-100'
                : '-translate-y-1.5 opacity-0'
            }`}
          >
            <span
              className={`inline-block w-max rounded-full bg-ink/80 px-3.5 py-1.5 text-[12px] font-medium text-white backdrop-blur-sm ${
                showMenuHint ? 'animate-hint-invite' : ''
              }`}
            >
              Click here to open the menu ↑
            </span>
          </div>

          {open && (
            <DropdownMenu
              naturalScroll={naturalScroll}
              onToggleNaturalScroll={onToggleNaturalScroll}
              onboardingStep={onboardingStep}
            />
          )}
        </div>

        {SYSTEM_ICONS.map((Icon, index) => (
          <Icon key={index} className="h-4 w-4" strokeWidth={2} />
        ))}

        <span className="text-[13px] font-medium tabular-nums text-white/90">
          {CLOCK_TIME}
        </span>
      </div>
    </div>
  )
}
