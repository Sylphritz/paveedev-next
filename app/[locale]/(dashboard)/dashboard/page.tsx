import { DashboardContainer } from '@/components/DashboardContainer'
import { DashboardHeader } from '@/components/DashboardHeader'

export default function DashboardPage() {
  return (
    <DashboardContainer>
      <DashboardHeader
        title="Dashboard"
        subtitle="Welcome to your dashboard!"
      />
      <div className="flex flex-col">
        {/* TODO: show resume information */}
        {/* TODO: add a download button */}
        <table className="rounded-2xl overflow-hidden bg-surface/20 shadow-xs shadow-neutral-200">
          <tbody className="*:odd:bg-surface [&_td]:p-3">
            <tr>
              <td>Name</td>
              <td>Pavee Udomkarnpaisarn</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>pudomkarnpaisarn@gmail.com</td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>+66 84 308 0880</td>
            </tr>
            <tr>
              <td className="align-text-top">Brief introduction</td>
              <td>
                <p className="max-w-full lg:max-w-prose">
                  Passionate about software development and problem-solving.
                  Experienced in building scalable and efficient web
                  applications.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </DashboardContainer>
  )
}
