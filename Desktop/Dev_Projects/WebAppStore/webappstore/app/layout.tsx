import type { Metadata } from 'next'
import React from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './NavBar'
import Footer from '../app/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DRNS',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  )
}
