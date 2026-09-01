import { useEffect, useState } from 'react'
import { DOWNLOAD_URL, GITHUB_LATEST_RELEASE_URL } from '../constants'
import AppleLogo from './AppleLogo'
import { navigate } from '../lib/router'

export default function Nav() {
  const [version, setVersion] = useState<string | null>(null)
  const [versionError, setVersionError] = useState(false)

  useEffect(() => {
    let cancelled = false

    fetch(GITHUB_LATEST_RELEASE_URL)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch latest release')
        return res.json()
      })
      .then((data) => {
        if (cancelled) return
        if (typeof data?.tag_name === 'string' && data.tag_name.length > 0) {
          setVersion(data.tag_name)
        } else {
          setVersionError(true)
        }
      })
      .catch(() => {
        if (!cancelled) setVersionError(true)
      })

    return () => {
      cancelled = true
    }
  }, [])

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    navigate('/')
  }

  const handleChangelogClick = (e: React.MouseEvent) => {
    e.preventDefault()
    navigate('/changelog')
  }

  return (
    <header className="sticky top-0 z-50 border-b border-divider/70 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <a
          href="/"
          onClick={handleLogoClick}
          className="flex items-center gap-2 no-underline sm:gap-2.5"
        >
          <img
            src="/scrolldock-icon.png"
            alt=""
            className="h-7 w-7 rounded-lg sm:h-8 sm:w-8"
          />
          <span className="text-[14px] font-semibold tracking-tight text-ink sm:text-[15px]">ScrollDock</span>
          {(version || versionError) && (
            <span className="hidden rounded-full bg-ink/5 px-2 py-0.5 text-[11px] font-medium text-ink-tertiary sm:inline-flex">
              {version ?? 'Latest'}
            </span>
          )}
        </a>

        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href="/changelog"
            onClick={handleChangelogClick}
            className="text-[12px] font-medium text-ink-secondary transition-colors hover:text-ink sm:text-[13px]"
          >
            Changelog
          </a>
          <a
            href={DOWNLOAD_URL}
            className="inline-flex items-center gap-1 rounded-full bg-ink px-3 py-1.5 text-[12px] font-medium text-white transition-all duration-200 hover:scale-105 hover:bg-gradient-to-r hover:from-ink hover:via-blue hover:to-ink hover:bg-[length:200%_100%] hover:shadow-lg hover:shadow-ink/20 hover:animate-gradient-flow sm:gap-1.5 sm:px-4 sm:py-2 sm:text-[13px]"
          >
            <AppleLogo className="h-3 w-3" />
            Download
          </a>
        </div>
      </div>
    </header>
  )
}
