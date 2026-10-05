import '@/assets/styles/globals.css'
import type { Metadata } from 'next'
import { NextIntlClientProvider, useLocale } from 'next-intl'
import { DM_Sans, JetBrains_Mono, Noto_Sans_Thai } from 'next/font/google'

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
})

const jetBrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
})

const notoSansThai = Noto_Sans_Thai({
  variable: '--font-noto-sans-thai',
  subsets: ['thai', 'latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'Pavee Udomkarnpaisarn | Professional Developer',
    template: '%s | Pavee Udomkarnpaisarn',
  },
  description: 'A portfolio site for Pavee Udomkarnpaisarn',
}

export default function RootLayout({ children }: LayoutProps<'/[locale]'>) {
  const locale = useLocale()

  return (
    <html
      lang={locale}
      className={`${locale === 'th' ? notoSansThai.variable : dmSans.variable} ${jetBrainsMono.variable} h-full antialiased text-content`}
    >
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  )
}
