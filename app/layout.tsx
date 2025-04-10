import './globals.css'
import { Poppins } from 'next/font/google'
import AnimatedCursor from './components/AnimatedCursor'

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Aniket Kasar - Flutter Developer Portfolio',
  description: 'Professional portfolio of Aniket Kasar, a Flutter & FlutterFlow developer creating high-quality mobile applications',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${poppins.className} min-h-screen bg-gray-900 text-gray-100 antialiased`}>
        <AnimatedCursor />
        {children}
      </body>
    </html>
  )
}
