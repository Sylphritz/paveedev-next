import { SkillsTable } from '@/app/[locale]/(dashboard)/dashboard/skills/_components/SkillsTable'
import { DashboardContainer } from '@/components/DashboardContainer'
import { DashboardHeader } from '@/components/DashboardHeader'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Skills',
}

export default function SkillsPage({}: PageProps<'/[locale]/dashboard/skills'>) {
  return (
    <DashboardContainer>
      <DashboardHeader
        title="Dashboard"
        subtitle="Welcome to your dashboard!"
      />
      <div>
        <SkillsTable />
      </div>
    </DashboardContainer>
  )
}
