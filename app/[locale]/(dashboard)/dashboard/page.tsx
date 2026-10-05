import { DashboardContainer } from '@/components/DashboardContainer'
import { DashboardHeader } from '@/components/DashboardHeader'
import { useTranslations } from 'next-intl'

export default function DashboardPage() {
  const t = useTranslations('Dashboard')

  return (
    <DashboardContainer>
      <DashboardHeader title={t('title')} subtitle={t('subtitle')} />
      <div className="flex flex-col">
        {/* TODO: show resume information */}
        {/* TODO: add a download button */}
        <table className="rounded-2xl overflow-hidden bg-surface/20 shadow-xs shadow-neutral-200">
          <tbody className="*:odd:bg-surface [&_td]:p-3">
            <tr>
              <td>{t('content.label.name')}</td>
              <td>Pavee Udomkarnpaisarn</td>
            </tr>
            <tr>
              <td>{t('content.label.email')}</td>
              <td>pudomkarnpaisarn@gmail.com</td>
            </tr>
            <tr>
              <td>{t('content.label.phone')}</td>
              <td>+66 84 308 0880</td>
            </tr>
            <tr>
              <td className="align-text-top">
                {t('content.label.introduction')}
              </td>
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
