import { SkillForm } from '@/app/[locale]/(dashboard)/dashboard/skills/_components/SkillForm'
import { DashboardContainer } from '@/components/DashboardContainer'
import { DashboardHeader } from '@/components/DashboardHeader'
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
          <SkillForm />
        </div>
      </div>
    </DashboardContainer>
  )
}
