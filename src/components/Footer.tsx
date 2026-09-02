import { FaDiscord } from 'react-icons/fa'
import { DISCORD_INVITE_URL } from '../constants'

export default function Footer() {
  return (
    <footer className="border-t border-divider py-10 text-center">
      <p className="text-[13px] text-ink-tertiary">ScrollDock — built by Coop</p>
      <div className="mt-3 flex items-center justify-center gap-4 text-[13px] text-ink-tertiary">
        <a
          href="mailto:cooperjumamil@hotmail.com?subject=ScrollDock%20Bug%20Report"
          className="transition-colors hover:text-ink"
        >
          Report a bug
        </a>
        <a
          href={DISCORD_INVITE_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Join the Discord"
          title="Join the Discord"
          className="transition-colors hover:text-[#5865F2]"
        >
          <FaDiscord size={16} />
        </a>
      </div>
    </footer>
  )
}
