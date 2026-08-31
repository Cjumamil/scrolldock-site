import { useEffect, useState } from 'react'
import { GITHUB_RELEASES_URL } from '../constants'
import { navigate } from '../lib/router'

type Release = {
  id: number
  tag_name: string
  name: string | null
  published_at: string | null
  body: string | null
}

type FetchState = 'loading' | 'error' | 'ready'

function formatDate(dateString: string | null) {
  if (!dateString) return ''
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function Changelog() {
  const [releases, setReleases] = useState<Release[]>([])
  const [state, setState] = useState<FetchState>('loading')

  useEffect(() => {
    let cancelled = false

    fetch(GITHUB_RELEASES_URL)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch releases')
        return res.json()
      })
      .then((data: Release[]) => {
        if (cancelled) return
        const sorted = [...data].sort((a, b) => {
          const aTime = a.published_at ? new Date(a.published_at).getTime() : 0
          const bTime = b.published_at ? new Date(b.published_at).getTime() : 0
          return bTime - aTime
        })
        setReleases(sorted)
        setState('ready')
      })
      .catch(() => {
        if (!cancelled) setState('error')
      })

    return () => {
      cancelled = true
    }
  }, [])

  const handleBackClick = (e: React.MouseEvent) => {
    e.preventDefault()
    navigate('/')
  }

  return (
    <section className="mx-auto max-w-2xl px-6 py-20">
      <a
        href="/"
        onClick={handleBackClick}
        className="inline-flex items-center gap-1.5 text-[13px] font-medium text-ink-secondary transition-colors hover:text-ink"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-4 w-4"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z"
            clipRule="evenodd"
          />
        </svg>
        Back
      </a>

      <h1 className="mt-6 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
        Changelog
      </h1>
      <p className="mt-4 text-lg text-ink-secondary">
        Stay up to date with every ScrollDock release.
      </p>

      {state === 'loading' && (
        <p className="mt-16 text-center text-[15px] text-ink-tertiary">
          Loading releases…
        </p>
      )}

      {state === 'error' && (
        <p className="mt-16 text-center text-[15px] text-ink-tertiary">
          Couldn't load releases right now. Try again later.
        </p>
      )}

      {state === 'ready' && releases.length === 0 && (
        <p className="mt-16 text-center text-[15px] text-ink-tertiary">
          No releases yet.
        </p>
      )}

      {state === 'ready' && releases.length > 0 && (
        <ol className="mt-14 divide-y divide-divider">
          {releases.map((release) => (
            <li key={release.id} className="py-8 first:pt-0">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h2 className="text-xl font-bold text-ink">
                  {release.tag_name}
                </h2>
                <span className="text-[13px] text-ink-tertiary">
                  {formatDate(release.published_at)}
                </span>
              </div>
              {release.body && (
                <p className="mt-3 whitespace-pre-wrap text-[15px] leading-relaxed text-ink-secondary">
                  {release.body}
                </p>
              )}
            </li>
          ))}
        </ol>
      )}
    </section>
  )
}
