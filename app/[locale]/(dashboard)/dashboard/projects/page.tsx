import { ProjectsTable } from '@/app/[locale]/(dashboard)/dashboard/projects/_components/ProjectsTable'
import { DashboardContainer } from '@/components/DashboardContainer'
import { DashboardHeader } from '@/components/DashboardHeader'
import { Button } from '@/components/ui/Button'
import AddIcon from '@material-symbols/svg-400/rounded/add-fill.svg'
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
        title={t('title')}
        subtitle={t('subtitle')}
        trailingSlot={
          <Button
            href="/dashboard/projects/new"
            leadingSlot={<AddIcon className="h-6 w-6" />}
          >
            {t('addProject')}
          </Button>
        }
      />
      <div>
        <ProjectsTable />
      </div>
    </DashboardContainer>
  )
}
