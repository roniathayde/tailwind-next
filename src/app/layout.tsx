import type { Metadata } from 'next'
import './globals.css'
import { Boilerplate } from './Boilerplate'

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
    <Boilerplate>
      {children}
    </Boilerplate>
  )
}
