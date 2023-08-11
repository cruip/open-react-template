import './css/style.css'

import { Inter, Architects_Daughter, Josefin_Slab } from 'next/font/google'

import Header from '@/components/ui/header'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const josefinSlab = Josefin_Slab({
  subsets: ['latin'],
  variable: '--font-josefin',
  weight: '300',
  display: 'swap'
})

const architects_daughter = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-architects-daughter',
  weight: '400',
  display: 'swap'
})

export const metadata = {
  title: 'Keith Nickas, UI Software Engineer',
  description: 'A personal website showcasing professional, and, personal works developed by Keith Nickas.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${architects_daughter.variable} ${josefinSlab.variable} font-inter antialiased bg-gray-900 text-gray-200 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          {children}
        </div>
        <script src="https://www.google.com/recaptcha/api.js"></script>
      </body>
    </html>
  )
}
 