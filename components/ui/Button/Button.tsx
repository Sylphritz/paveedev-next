import { Link } from '@/i18n/navigation'
import { cn } from '@/utils/styles'
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonColor =
  'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'

type ButtonVariant = 'contained' | 'outlined' | 'text'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
    color?: ButtonColor
    variant?: ButtonVariant
    href?: string
    leadingSlot?: ReactNode
    trailingSlot?: ReactNode
  }

const buttonVariant: Record<ButtonColor, Record<ButtonVariant, string>> = {
  primary: {
    contained:
      'from-primary hover:from-primary-light active:from-primary-dark to-primary-dark text-on-primary',
    outlined:
      'border-primary hover:bg-primary text-primary hover:text-on-primary',
    text: 'text-primary hover:text-primary-light active:text-primary-dark',
  },
  secondary: {
    contained:
      'from-accent hover:from-accent-light active:from-accent-dark to-accent-dark text-on-accent',
    outlined: 'border-accent hover:bg-accent text-accent hover:text-on-accent',
    text: 'text-accent hover:text-accent-light active:text-accent-dark',
  },
  success: {
    contained:
      'from-success hover:from-success-light active:from-success-dark to-success-dark text-on-success',
    outlined:
      'border-success hover:bg-success text-success hover:text-on-success',
    text: 'text-success hover:text-success-light active:text-success-dark',
  },
  warning: {
    contained:
      'from-warning hover:from-warning-light active:from-warning-dark to-warning-dark text-on-warning',
    outlined:
      'border-warning hover:bg-warning text-warning hover:text-on-warning',
    text: 'text-warning hover:text-warning-light active:text-warning-dark',
  },
  danger: {
    contained:
      'from-error hover:from-error-light active:from-error-dark to-error-dark text-on-error',
    outlined: 'border-error hover:bg-error text-error hover:text-on-error',
    text: 'text-error hover:text-error-light active:text-error-dark',
  },
  info: {
    contained:
      'from-info hover:from-info-light active:from-info-dark to-info-dark text-on-info',
    outlined: 'border-info hover:bg-info text-info hover:text-on-info',
    text: 'text-info hover:text-info-light active:text-info-dark',
  },
}

const baseStyles: Record<ButtonVariant, string> = {
  contained:
    'shadow-sm/30 bg-linear-to-br border border-surface active:translate-y-px',
  outlined: 'border-2 transition-colors',
  text: 'hover:bg-surface/50',
}

export function Button({
  variant = 'contained',
  color = 'primary',
  className,
  children,
  href,
  leadingSlot,
  trailingSlot,
  disabled,
  ...props
}: ButtonProps) {
  const buttonClasses = cn(
    'px-6 py-2 rounded-2xl shadow-primary active:shadow-none flex items-center justify-center gap-2',
    leadingSlot && 'pl-4',
    trailingSlot && 'pr-4',
    baseStyles[variant],
    buttonVariant[color][variant],
    disabled && 'opacity-50 pointer-events-none shadow-none',
    className,
  )

  if (href) {
    return (
      <Link href={href} className={buttonClasses} {...props}>
        {leadingSlot}
        {children}
        {trailingSlot}
      </Link>
    )
  }

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  )
}
