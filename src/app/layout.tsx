import "@/styles/globals.css"
import "react-circular-progressbar/dist/styles.css"

import type { Metadata } from "next"
import { inter } from "@/assets/fonts/font"
import NextTopLoader from "nextjs-toploader"

import { siteConfig } from "@/config/site"
import { QueryProvider } from "@/components/providers/query-provider"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { SiteLayout } from "@/components/site/site-layout"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader
          color="#10b981"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        />
        <QueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableColorScheme
            disableTransitionOnChange
          >
            <SiteLayout>{children}</SiteLayout>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  )
}
