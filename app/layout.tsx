import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import CosmicBadge from '@/components/CosmicBadge'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Calculator Pro - Professional Calculator App',
  description: 'A professional calculator application with basic arithmetic operations, clean interface, and keyboard support. Built with Next.js and Tailwind CSS.',
  keywords: ['calculator', 'arithmetic', 'math', 'professional', 'clean interface', 'responsive'],
  authors: [{ name: 'Calculator Pro Team' }],
  openGraph: {
    title: 'Calculator Pro',
    description: 'Professional calculator with clean interface and full keyboard support',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calculator Pro',
    description: 'Professional calculator with clean interface and full keyboard support',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string

  return (
    <html lang="en">
      <head>
        {/* Console capture script for dashboard debugging */}
        <script src="/dashboard-console-capture.js" />
      </head>
      <body className={inter.className}>
        {children}
        <CosmicBadge bucketSlug={bucketSlug} />
      </body>
    </html>
  )
}