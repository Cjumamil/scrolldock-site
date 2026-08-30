import { useEffect, useRef, useState } from 'react'

type ScrollDemoAreaProps = {
  naturalScroll: boolean
  onFirstScroll: () => void
}

const PARAGRAPHS = [
  "Natural scrolling flips the old rule: content moves with your fingers instead of away from them. Apple borrowed the idea from iOS, where swiping up moved the page up — because that's just how touchscreens work.",
  "Trackpads inherited that logic instantly. Mice didn't. A scroll wheel has no glass to drag your finger across, so plenty of people flip it straight back to the classic direction the moment they plug one in.",
  "That's the entire reason ScrollDock exists — nobody wants to dig through System Settings every time they dock or undock. Plug in an external display and your scroll direction flips system-wide, automatically — trackpad, mouse, whatever you're using in the moment.",
  "Go ahead, toggle the switch above and scroll this box with your trackpad or mouse wheel. You'll feel the difference in about half a second.",
  "Clamshell mode complicates the picture further — close the laptop lid with an external display attached and macOS keeps running headless, no built-in screen involved at all. ScrollDock still catches that transition, because it watches for display changes, not just the lid switch.",
  "Prefer to flip it yourself? One click on the menu bar icon — the same mouse glyph sitting up there — overrides whatever ScrollDock just decided automatically, and it remembers your choice until the next dock or undock.",
  "Without something watching for it, the fix is the same tedious loop every time: open System Settings, find Trackpad, flip Natural Scrolling off, then back on again the next time you undock. ScrollDock exists to delete that loop entirely.",
  "If the direction just changed underneath your cursor, that's the whole pitch working exactly as intended. Grab the app above and it'll do this same thing on your actual Mac, forever, without you lifting a finger.",
]

const TOGGLE_HINT_DURATION_MS = 2000

export default function ScrollDemoArea({
  naturalScroll,
  onFirstScroll,
}: ScrollDemoAreaProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [showToggleHint, setShowToggleHint] = useState(false)
  const previousNaturalScrollRef = useRef(naturalScroll)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault()
      event.stopPropagation()
      container.scrollTop += naturalScroll ? -event.deltaY : event.deltaY
      onFirstScroll()
    }

    container.addEventListener('wheel', handleWheel, { passive: false })
    return () => container.removeEventListener('wheel', handleWheel)
  }, [naturalScroll, onFirstScroll])

  useEffect(() => {
    if (previousNaturalScrollRef.current === naturalScroll) return
    previousNaturalScrollRef.current = naturalScroll

    setShowToggleHint(true)
    const timeout = setTimeout(() => {
      setShowToggleHint(false)
    }, TOGGLE_HINT_DURATION_MS)

    return () => clearTimeout(timeout)
  }, [naturalScroll])

  return (
    <div className="rounded-b-2xl bg-black/10 px-8 pb-8 pt-6">
      <p className="mb-4 text-center text-[13px] text-white/70">
        Try scrolling here — then toggle the switch above.
      </p>
      <div className="relative">
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute left-1/2 top-3 z-10 -translate-x-1/2 transition-all duration-300 ${
            showToggleHint
              ? 'translate-y-0 opacity-100'
              : '-translate-y-1.5 opacity-0'
          }`}
        >
          <span
            className={`inline-block rounded-full bg-ink/80 px-3.5 py-1.5 text-[12px] font-medium text-white backdrop-blur-sm ${
              showToggleHint ? 'animate-hint-invite' : ''
            }`}
          >
            Try scrolling now →
          </span>
        </div>

        <div
          ref={containerRef}
          className="h-96 space-y-5 overflow-y-auto rounded-xl bg-white/10 p-8 text-[15px] leading-relaxed text-white/90 backdrop-blur-sm"
        >
          {PARAGRAPHS.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  )
}
