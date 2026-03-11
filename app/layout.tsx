import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import localFont from 'next/font/local'
import './globals.css'

const jakartaSans = localFont({
  src: [
    { path: '../public/fonts/PlusJakartaSans-Light.ttf', weight: '300', style: 'normal' },
    { path: '../public/fonts/PlusJakartaSans-SemiBold.ttf', weight: '600', style: 'normal' },
  ],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Design System',
  description: 'A comprehensive style guide for building consistent interfaces',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={jakartaSans.variable}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}