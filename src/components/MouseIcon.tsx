type MouseIconProps = {
  flipped: boolean
  stroke?: string
  accent?: string
  size?: number
}

export default function MouseIcon({
  flipped,
  stroke = '#1D1D1F',
  accent = '#0071E3',
  size = 52,
}: MouseIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 52 52"
      fill="none"
      role="presentation"
      aria-hidden="true"
    >
      <rect
        x={16}
        y={6}
        width={20}
        height={32}
        rx={10}
        stroke={stroke}
        strokeWidth={2}
      />
      <line x1={26} y1={6} x2={26} y2={16} stroke={stroke} strokeWidth={2} />
      <g
        style={{
          transform: flipped ? 'scaleY(-1)' : 'scaleY(1)',
          transformOrigin: '26px 24px',
          transition: 'transform 300ms ease',
        }}
      >
        <path d="M26 20L30 25H22L26 20Z" fill={accent} />
      </g>
    </svg>
  )
}
