import { DashboardContainer } from '@/components/DashboardContainer'
import { DashboardHeader } from '@/components/DashboardHeader'
import { Button } from '@/components/ui/Button'
import { Checkbox } from '@/components/ui/form/Checkbox'
import { InputField } from '@/components/ui/form/InputField'
import { Metadata } from 'next'
import { useTranslations } from 'next-intl'

export const metadata: Metadata = {
  title: 'Add Skill',
}

export default function NewSkillPage() {
  const t = useTranslations('Dashboard')

  return (
    <DashboardContainer>
      <DashboardHeader
        title={t('skillsPage.addPage.title')}
        subtitle={t('skillsPage.addPage.subtitle')}
      />
      <div>
        <div className="mx-auto max-w-lg px-6 py-6 rounded-2xl bg-linear-to-br from-surface/80 to-surface shadow-sm border border-primary-muted/20">
          <form className="flex flex-col gap-4 p-6 bg-white/50 rounded-2xl backdrop-blur-lg">
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
            <div className="flex gap-4 mt-4">
              <Button type="reset" variant="text" className="flex-1">
                {t('common.form.action.reset')}
              </Button>
              <Button type="submit" className="flex-1">
                {t('common.form.action.save')}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </DashboardContainer>
  )
}
