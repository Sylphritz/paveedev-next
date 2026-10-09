import { cn } from '@/utils/styles'
import React from 'react'

const SIZE_STYLES = {
  container: {
    md: 'w-10',
    lg: 'w-14',
  },
  thumb: {
    size: {
      md: 'w-4 h-4',
      lg: 'w-6 h-6',
    },
    margin: {
      md: 'ml-4',
      lg: 'ml-6',
    },
  },
}

type PillSwitchProps = {
  on?: boolean
  className?: string
  size?: 'md' | 'lg'
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export function PillSwitch({
  on,
  className,
  size = 'md',
  onClick,
}: PillSwitchProps) {
  return (
    <button
      className={cn(
        'flex inset-shadow-xs/20 p-1 rounded-full transition-colors',
        on ? 'bg-primary-light' : 'bg-sunken',
        SIZE_STYLES.container[size],
        className,
      )}
      type="button"
      role="checkbox"
      aria-checked={on}
      tabIndex={0}
      onClick={(e) => onClick?.(e)}
    >
      <div
        className={cn(
          'rounded-full bg-white shadow-xs/20 transition-[margin] duration-150',
          SIZE_STYLES.thumb.size[size],
          on && SIZE_STYLES.thumb.margin[size],
        )}
      ></div>
    </button>
  )
}
