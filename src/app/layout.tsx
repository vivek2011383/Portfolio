import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import ClientLayout from './client-layout'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vivek Kumar - Business Analytics Portfolio',
  description: 'MBA Business Analytics student portfolio showcasing data-driven insights and analytical capabilities',
  keywords: ['Business Analytics', 'Data Analysis', 'Business Intelligence', 'MBA', 'Portfolio', 'Data Visualization'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}