import { ProjectsTable } from '@/app/[locale]/(dashboard)/dashboard/projects/_components/ProjectsTable'
import { DashboardContainer } from '@/components/DashboardContainer'
import { DashboardHeader } from '@/components/DashboardHeader'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects',
}

export default function ProjectsPage({}: PageProps<'/[locale]/dashboard/projects'>) {
  return (
    <DashboardContainer>
      <DashboardHeader title="Projects" subtitle="Portfolio projects" />
      <div>
        <ProjectsTable />
      </div>
    </DashboardContainer>
  )
}
