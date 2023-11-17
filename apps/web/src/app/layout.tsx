import { GeistSans } from 'geist/font/sans'
import { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={GeistSans.className} lang="en">
      <body className="antialiased bg-mirage-50 text-mirage-950">
        {children}
      </body>
    </html>
  )
}
