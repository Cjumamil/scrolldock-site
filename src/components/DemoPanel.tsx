import { useState } from 'react'
import { MousePointerClick } from 'lucide-react'
import MenuBar from './MenuBar'
import ScrollDemoArea from './ScrollDemoArea'

export type OnboardingStep = 'menu' | 'toggle' | 'scroll' | 'done'

export default function DemoPanel() {
  const [naturalScroll, setNaturalScroll] = useState(true)
  const [onboardingStep, setOnboardingStep] = useState<OnboardingStep>('menu')

  const advanceOnboardingStep = (from: OnboardingStep, to: OnboardingStep) => {
    setOnboardingStep((current) => (current === from ? to : current))
  }

  const handleMenuOpened = () => {
    advanceOnboardingStep('menu', 'toggle')
  }

  const handleToggleNaturalScroll = () => {
    setNaturalScroll((value) => !value)
    advanceOnboardingStep('toggle', 'scroll')
  }

  const handleFirstScroll = () => {
    advanceOnboardingStep('scroll', 'done')
  }

  return (
    <div>
      <p className="mb-4 flex items-center justify-center gap-1.5 text-center text-[16px] text-ink-tertiary">
        <MousePointerClick className="h-3.5 w-3.5" strokeWidth={2} />
        Interactive Demo Below
      </p>

      <div className="mx-auto w-auto max-w-5xl overflow-hidden rounded-4xl bg-gradient-to-br from-blue to-teal shadow-[0_25px_60px_-15px_rgba(0,113,227,0.35)]">
        <MenuBar
          naturalScroll={naturalScroll}
          onToggleNaturalScroll={handleToggleNaturalScroll}
          onboardingStep={onboardingStep}
          onMenuOpened={handleMenuOpened}
        />
        <ScrollDemoArea naturalScroll={naturalScroll} onFirstScroll={handleFirstScroll} />
      </div>
    </div>
  )
}
