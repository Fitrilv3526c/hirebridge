import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/componants/Navbar'
import Footer from '@/componants/Footer'

// Body font
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

// Heading font
const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '600', '700'], // Regular + Semi-bold + Bold
})

export const metadata: Metadata = {
  title: 'Hire Bridge | Software Solutions',
  description:
    'Professional software house delivering web, mobile, and cloud solutions.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        <Navbar />
        <div className='!mt-20'>{children}</div>
        <Footer />
      </body>
    </html>
  )
}
