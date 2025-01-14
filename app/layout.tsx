import type { Metadata } from "next"
import { Space_Grotesk } from 'next/font/google'
import "./globals.css"
import Sidebar from "@/app/components/Sidebar"

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Brice - Designer & Developer",
  description: "I design and develop websites",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <div className="flex min-h-screen relative">
          <Sidebar />
          <main className="flex-1 p-8">
            <div className="ocean">
              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>
            </div>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}

