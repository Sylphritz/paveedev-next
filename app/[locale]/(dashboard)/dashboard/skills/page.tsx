import { SkillsTable } from '@/app/[locale]/(dashboard)/dashboard/skills/_components/SkillsTable'
import { DashboardContainer } from '@/components/DashboardContainer'
import { DashboardHeader } from '@/components/DashboardHeader'
import { Button } from '@/components/ui/Button'
import { Metadata } from 'next'
import { useTranslations } from 'next-intl'

export const metadata: Metadata = {
  title: 'Skills',
}

export default function SkillsPage({}: PageProps<'/[locale]/dashboard/skills'>) {
  const t = useTranslations('Dashboard.skillsPage')

  return (
    <DashboardContainer>
      <DashboardHeader
        title={t('title')}
        subtitle={t('subtitle')}
        trailingSlot={
          <Button href="/dashboard/skills/new">{t('addSkill')}</Button>
        }
      />
      <div>
        <SkillsTable />
      </div>
    </DashboardContainer>
  )
}
