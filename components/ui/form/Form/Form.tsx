import { cn } from '@/utils/styles'
import { FormHTMLAttributes } from 'react'

type FormProps = FormHTMLAttributes<HTMLFormElement>

export function Form({ children, className, ...props }: FormProps) {
  return (
    <form
      className={cn(
        'flex flex-col gap-4 p-6 bg-white/50 rounded-2xl backdrop-blur-lg',
        className,
      )}
      {...props}
    >
      {children}
    </form>
  )
}
