import type { Metadata } from 'next'
import { Geist, JetBrains_Mono } from 'next/font/google'
import { LanguageProvider } from '@/lib/language'
import './globals.css'

const geist = Geist({
  variable: '--font-display',
  subsets: ['latin'],
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Felipe Gonçalves | Software Developer',
  description:
    'Felipe Gonçalves, Software Developer. Transformo ideias em produtos digitais, unindo frontend, backend e inteligência artificial.',
  openGraph: {
    title: 'Felipe Gonçalves | Software Developer',
    description: 'Transformo ideias em produtos digitais.',
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${geist.variable} ${jetbrainsMono.variable}`}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
