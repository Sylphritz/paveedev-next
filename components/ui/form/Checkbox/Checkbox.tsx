'use client'

import { PillSwitch } from '@/components/ui/PillSwitch'
import { cn } from '@/utils/styles'
import { InputHTMLAttributes, useState } from 'react'

type CheckboxProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type' | 'id'
> & {
  id: string
  label: string
  containerClassName?: string
}

export function Checkbox({
  id,
  label,
  containerClassName,
  ...props
}: CheckboxProps) {
  const [checked, setChecked] = useState(false)

  return (
    <label
      htmlFor={id}
      className={cn(
        'flex items-center justify-start gap-2',
        containerClassName,
      )}
    >
      <PillSwitch on={checked} onClick={() => setChecked(!checked)} />
      <input
        type="checkbox"
        id={id}
        aria-label={label}
        className="hidden"
        checked={checked}
        readOnly
        {...props}
      />
      {label}
    </label>
  )
}
