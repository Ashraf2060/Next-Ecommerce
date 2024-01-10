

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './NavBar/NavBar'
import Footer from './Footer'

import SessionProvider from "@/app/SessionProvider"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'YouUoshop',
  description: 'Outstanding Shopping experience with YouUo shop',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body className={inter.className} >
      <SessionProvider>
      <NavBar />
      <main className='p-4 max-w-7xl m-auto min-w-[300px]F'>
      {children}
      </main>
      <Footer />
      
      </SessionProvider>
      
      
      </body>
    </html>
  )
}
