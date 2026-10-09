import { cn } from '@/utils/styles'
import { InputHTMLAttributes } from 'react'

type InputFieldProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type' | 'id'
> & {
  id: string
  containerClassName?: string
  type?: Exclude<
    InputHTMLAttributes<HTMLInputElement>['type'],
    'checkbox' | 'radio'
  >
}

export function InputField({
  id,
  className,
  containerClassName,
  type = 'text',
  ...props
}: InputFieldProps) {
  return (
    <label
      htmlFor={id}
      className={cn(
        'flex items-center gap-1 bg-white rounded-lg px-4 py-2 inset-shadow-xs/20',
        containerClassName,
      )}
    >
      <input
        id={id}
        className={cn('flex-1 outline-none', className)}
        type={type}
        {...props}
      />
    </label>
  )
}
