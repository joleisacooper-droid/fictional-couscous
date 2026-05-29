import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PYNK - We Don\'t Make Promises. We Set Standards.',
  description: 'Built with Purpose. Driven by Passion. Created for Generations. PYNK stands on a foundation of faith, family, discipline, ownership, growth, and legacy.',
  keywords: 'PYNK, legacy, faith, family, discipline, ownership, growth',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'PYNK - A Legacy Brand',
    description: 'Built on years of work, sacrifice, vision, and determination.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
