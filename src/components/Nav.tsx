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
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="/"
          onClick={handleLogoClick}
          className="flex items-center gap-2.5 no-underline"
        >
          <img
            src="/scrolldock-icon.png"
            alt=""
            className="h-8 w-8 rounded-lg"
          />
          <span className="text-[15px] font-semibold tracking-tight text-ink">ScrollDock</span>
          {(version || versionError) && (
            <span className="rounded-full bg-ink/5 px-2 py-0.5 text-[11px] font-medium text-ink-tertiary">
              {version ?? 'Latest'}
            </span>
          )}
        </a>

        <div className="flex items-center gap-4">
          <a
            href="/changelog"
            onClick={handleChangelogClick}
            className="text-[13px] font-medium text-ink-secondary transition-colors hover:text-ink"
          >
            Changelog
          </a>
          <a
            href={DOWNLOAD_URL}
            className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-[13px] font-medium text-white transition-colors hover:bg-ink/85"
          >
            <AppleLogo className="h-3 w-3" />
            Download
          </a>
        </div>
      </div>
    </header>
  )
}
