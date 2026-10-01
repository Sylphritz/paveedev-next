import { DashboardContainer } from '@/components/DashboardContainer'
import { DashboardHeader } from '@/components/DashboardHeader'

export default function SkillsPage({}: PageProps<'/dashboard/skills'>) {
  return (
    <DashboardContainer>
      <DashboardHeader
        title="Dashboard"
        subtitle="Welcome to your dashboard!"
      />
      SKILLs
    </DashboardContainer>
  )
}
