import { DOWNLOAD_URL } from '../constants'
import AppleLogo from './AppleLogo'

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-divider/70 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2.5">
          <img
            src="/scrolldock-icon.png"
            alt=""
            className="h-8 w-8 rounded-lg"
          />
          <span className="text-[15px] font-semibold tracking-tight text-ink">ScrollDock</span>
          <span className="rounded-full bg-ink/5 px-2 py-0.5 text-[11px] font-medium text-ink-tertiary">
            v1.0
          </span>
        </div>

        <a
          href={DOWNLOAD_URL}
          className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-[13px] font-medium text-white transition-colors hover:bg-ink/85"
        >
          <AppleLogo className="h-3 w-3" />
          Download
        </a>
      </div>
    </header>
  )
}
