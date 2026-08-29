import { DOWNLOAD_URL } from '../constants'
import AppleLogo from './AppleLogo'
import DemoPanel from './DemoPanel'

export default function Hero() {
  return (
    <section className="px-6 pt-20 pb-16 text-center sm:pt-28 sm:pb-20">
      <div className="min-h-[calc(100vh-266px)] sm:min-h-[calc(100vh-306px)]">
        <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-ink sm:text-7xl">
          <span className="block">Scroll the right way,</span>
          <span className="block text-blue">every time.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg text-ink-secondary sm:mt-8 sm:text-xl">
          ScrollDock switches your Mac's scroll direction the instant you dock
          or undock.
        </p>

        <p className="mx-auto mt-3 max-w-md text-sm text-ink-tertiary sm:mt-4 sm:text-base">
          No more digging through System Settings to flip Natural Scrolling by
          hand, every time.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-10">
          <a
            href={DOWNLOAD_URL}
            className="inline-flex items-center gap-2 rounded-full bg-blue px-6 py-3 text-[15px] font-medium text-white transition-colors hover:bg-blue-hover sm:px-8 sm:py-4 sm:text-base"
          >
            <AppleLogo className="h-4 w-4" />
            Download for Mac
          </a>
        </div>

        <p className="mt-4 text-[13px] text-ink-tertiary sm:mt-5">
          Free · macOS 13 or later · 2 MB
        </p>
      </div>

      <div className="mt-8 sm:mt-10">
        <DemoPanel />
      </div>
    </section>
  )
}
