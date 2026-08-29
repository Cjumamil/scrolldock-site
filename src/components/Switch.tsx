type SwitchProps = {
  checked: boolean
}

export default function Switch({ checked }: SwitchProps) {
  return (
    <span
      className={`inline-flex h-4 w-7 shrink-0 items-center rounded-full transition-colors duration-200 ${
        checked ? 'bg-teal' : 'bg-white/20'
      }`}
    >
      <span
        className={`h-3 w-3 transform rounded-full bg-white transition-transform duration-200 ${
          checked ? 'translate-x-3.5' : 'translate-x-0.5'
        }`}
      />
    </span>
  )
}
