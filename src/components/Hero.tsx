import { useEffect, useState } from 'react'
import { DOWNLOAD_URL, GITHUB_LATEST_RELEASE_URL } from '../constants'
import AppleLogo from './AppleLogo'
import DemoPanel from './DemoPanel'

export default function Hero() {
  const [sizeMB, setSizeMB] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    const fileName = DOWNLOAD_URL.split('/').pop()

    fetch(GITHUB_LATEST_RELEASE_URL)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch latest release')
        return res.json()
      })
      .then((data) => {
        if (cancelled) return
        const asset = Array.isArray(data?.assets)
          ? data.assets.find((a: { name?: string }) => a?.name === fileName)
          : undefined
        if (asset && typeof asset.size === 'number') {
          setSizeMB((asset.size / (1024 * 1024)).toFixed(1))
        }
      })
      .catch(() => {})

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <section className="relative overflow-hidden px-6 pt-24 pb-20 text-center sm:pt-32 sm:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-[420px] w-[720px] max-w-[120%] rounded-full bg-gradient-to-br from-blue/25 to-teal/25 blur-[100px]"
      />

      <div className="min-h-[calc(100vh-298px)] sm:min-h-[calc(100vh-338px)]">
        <h1 className="text-[3.375rem] font-bold leading-[1.08] tracking-tight text-ink sm:text-[5rem]">
          <span className="block">Scroll the right way,</span>
          <span className="block text-blue">every time.</span>
        </h1>

        <p className="mx-auto mt-7 max-w-xl text-xl text-ink-secondary sm:mt-10 sm:text-2xl">
          ScrollDock switches your Mac's scroll direction the instant you dock
          or undock.
        </p>

        <p className="mx-auto mt-4 max-w-md text-base text-ink-tertiary sm:mt-5 sm:text-lg">
          No more digging through System Settings to flip Natural Scrolling by
          hand, every time you dock and undock.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:mt-12">
          <a
            href={DOWNLOAD_URL}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue via-teal to-blue bg-[length:200%_100%] px-6 py-3 text-[15px] font-medium text-white transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-blue/30 hover:animate-gradient-flow sm:px-8 sm:py-4 sm:text-base"
          >
            <AppleLogo className="h-4 w-4" />
            Download for Mac
          </a>
        </div>

        <p className="mt-5 text-[13px] text-ink-tertiary sm:mt-6">
          Free Early Access · macOS 13 or later{sizeMB ? ` · ${sizeMB} MB` : ''}
        </p>

        <section className="mt-16">
          <DemoPanel />
        </section>
      </div>
    </section>
  )
}
