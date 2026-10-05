import { ProjectsTable } from '@/app/[locale]/(dashboard)/dashboard/projects/_components/ProjectsTable'
import { DashboardContainer } from '@/components/DashboardContainer'
import { DashboardHeader } from '@/components/DashboardHeader'
import { Button } from '@/components/ui/Button'
import { Metadata } from 'next'
import { useTranslations } from 'next-intl'

export const metadata: Metadata = {
  title: 'Projects',
}

export default function ProjectsPage({}: PageProps<'/[locale]/dashboard/projects'>) {
  const t = useTranslations('Dashboard.projectsPage')

  return (
    <DashboardContainer>
      <DashboardHeader
        title="Projects"
        subtitle="Portfolio projects"
        trailingSlot={
          <Button href="/dashboard/projects/new">{t('addProject')}</Button>
        }
      />
      <div>
        <ProjectsTable />
      </div>
    </DashboardContainer>
  )
}
