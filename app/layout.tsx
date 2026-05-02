import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TimeSync — Smart Meeting Scheduler for Remote Teams',
  description: 'Find optimal meeting times across timezones. Smart scheduling for distributed teams considering work preferences and availability.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="3b2fc5eb-b2db-4cd5-a5f1-6eb4ca8fb2f1"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
