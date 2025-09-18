import type { Metadata } from 'next'
import LoadingProvider from './components/LoadingProvider'

export const metadata: Metadata = {
  title: 'Lahari - Portfolio',
  description: 'Data Scientist & Full-Stack Developer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        <LoadingProvider>
          {children}
        </LoadingProvider>
      </body>
    </html>
  )
}
