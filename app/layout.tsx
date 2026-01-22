import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Formula188CM - Premium Height Growth Supplement",
  description:
    "Formula188CM is a scientifically formulated height growth supplement with 100% natural ingredients. Trusted by thousands worldwide.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
   
      </head>

      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
