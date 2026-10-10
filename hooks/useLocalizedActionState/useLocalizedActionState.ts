import { LocalizedFormAction } from '@/types/form.types'
import { useLocale } from 'next-intl'
import { useActionState } from 'react'

export const useLocalizedActionState = <State>(
  action: LocalizedFormAction<State>,
  initialState: Awaited<State>,
  permalink?: string,
) => {
  const locale = useLocale()
  const formActionWithLocale = action.bind(null, locale)

  return useActionState(formActionWithLocale, initialState, permalink)
}
