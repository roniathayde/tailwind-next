'use client'

import { Button } from "@/components/Button"
import { Sidebar } from "@/components/Sidebar"
import { Inter } from "next/font/google"
import { createContext, useState } from "react"

const inter = Inter({ subsets: ['latin'] })



export const ThemeContext = createContext( {} )


export function Boilerplate ({children}: {
  children: React.ReactNode
}) {
  const [theme, setTheme] = useState('dark') 

  function changeTheme() {
    setTheme(prevState=> prevState === 'dark' ? '' : 'dark')
  }
  


  return (

   
    <ThemeContext.Provider value={ {theme, changeTheme} }>
    <html lang="en" className={`antialiased ${theme}`}>
      <body className={inter.className}>
      
        <div className="min-h-screen dark:bg-zinc-900 lg:grid lg:grid-cols-app">
          <Sidebar />
          
          <main className="max-w-[100vw] px-4 pb-12 pt-24 lg:col-start-2 lg:px-8 lg:pt-8">
          
            {children}
          </main>
        </div>
      </body>
    </html>
    </ThemeContext.Provider>
  ) 
} 