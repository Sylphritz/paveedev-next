'use client'

import { createSkill } from '@/app/[locale]/(dashboard)/dashboard/skills/actions'
import { Button } from '@/components/ui/Button'
import { Checkbox } from '@/components/ui/form/Checkbox'
import { Form } from '@/components/ui/form/Form'
import { InputField } from '@/components/ui/form/InputField'
import { useLocalizedActionState } from '@/hooks/useLocalizedActionState'
import { useTranslations } from 'next-intl'

export function SkillForm() {
  const t = useTranslations('Dashboard')

  const createSkillWithUserId = createSkill.bind(null, 'sylphritz')

  const [state, formAction, pending] = useLocalizedActionState(
    createSkillWithUserId,
    {
      errors: [],
    },
  )

  return (
    <Form action={formAction} aria-disabled={pending}>
      <InputField
        id="skill-name"
        name="name"
        placeholder={t('skillsPage.addPage.form.name')}
        aria-label={t('skillsPage.addPage.form.name')}
      />
      <InputField
        id="skill-slug"
        name="slug"
        placeholder={t('skillsPage.addPage.form.slug')}
        aria-label={t('skillsPage.addPage.form.slug')}
      />
      <InputField
        id="skill-experience"
        name="experienceYears"
        placeholder={t('skillsPage.addPage.form.experienceYears')}
        aria-label={t('skillsPage.addPage.form.experienceYears')}
      />
      <Checkbox
        id="skill-enabled"
        name="enabled"
        label={t('skillsPage.addPage.form.enabled')}
      />
      <div>{state?.errors?.join(', ')}</div>
      <div className="flex gap-4 mt-4">
        <Button
          type="reset"
          variant="text"
          className="flex-1"
          disabled={pending}
        >
          {t('common.form.action.reset')}
        </Button>
        <Button type="submit" className="flex-1" disabled={pending}>
          {t('common.form.action.save')}
        </Button>
      </div>
    </Form>
  )
}
