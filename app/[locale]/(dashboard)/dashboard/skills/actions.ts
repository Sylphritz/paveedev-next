'use server'

import { redirect } from '@/i18n/navigation'
import { LocalizedFormAction } from '@/types/form.types'
import { revalidatePath } from 'next/cache'

type TestState = { errors: string[] }

// Additional params are added like this.
type CreateSkillAction<State> = (
  userId: string,
  ...args: Parameters<LocalizedFormAction<State>>
) => ReturnType<LocalizedFormAction<State>>

export const createSkill: CreateSkillAction<TestState> = async (
  userId: string,
  locale: string,
  initialState: TestState,
  formData: FormData,
) => {
  console.log(formData)
  console.log('userId', userId)

  // TODO: fetch the actual data, install Zod, and validate the form data
  if (!userId) {
    return {
      errors: ['aaa', 'bbb'],
    }
  }

  revalidatePath('/dashboard/skills')
  return redirect({
    href: '/dashboard/skills',
    locale,
  })
}
