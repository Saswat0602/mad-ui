import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/ThemeProvider"
import { Header } from "@/components/header"
import Link from "next/link"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Mad UI - Beautiful React Components",
  description: "A comprehensive, modern UI component library built with React and Tailwind CSS. Beautiful, accessible, and customizable components for your next project.",
  keywords: ["React", "Components", "UI Library", "Tailwind CSS", "TypeScript", "Modern UI"],
  authors: [{ name: "Mad UI Team" }],
  creator: "Mad UI",
  metadataBase: new URL("https://mad-ui.dev"),
  openGraph: {
    title: "Mad UI - Beautiful React Components",
    description: "A comprehensive, modern UI component library built with React and Tailwind CSS.",
    url: "https://mad-ui.dev",
    siteName: "Mad UI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mad UI - Beautiful React Components",
    description: "A comprehensive, modern UI component library built with React and Tailwind CSS.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider defaultTheme="dark">
          <div className="relative flex min-h-screen flex-col bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary">
            {/* Subtle clean ambient lighting */}
            <div className="fixed inset-0 -z-10 pointer-events-none">
              <div className="absolute inset-0 bg-background" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-primary/10 via-primary/5 to-transparent blur-3xl opacity-60 dark:opacity-40" />
              <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] opacity-40 dark:opacity-25" />
            </div>
            
            <Header />
            <main className="flex-1 relative pt-16">
              {children}
            </main>
            
            {/* Modern Footer */}
            <footer className="relative border-t border-border/20 bg-background/95 backdrop-blur-xl">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  {/* Brand Section */}
                  <div className="md:col-span-1 space-y-4">
                    <div className="flex items-center space-x-2.5">
                      <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-700/60 flex items-center justify-center">
                        <span className="font-bold text-sm bg-gradient-to-br from-blue-400 to-indigo-400 bg-clip-text text-transparent">M</span>
                      </div>
                      <span className="font-semibold text-lg tracking-tight text-foreground">
                        Mad UI
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
                      An enterprise-grade, accessible React UI component library built with TypeScript and Tailwind CSS.
                    </p>
                  </div>
                  
                  {/* Documentation Links */}
                  <div>
                    <h3 className="font-medium text-sm mb-4 text-foreground">Documentation</h3>
                    <ul className="space-y-2.5 text-sm">
                      <li><Link href="/docs/getting-started" className="text-muted-foreground hover:text-foreground transition-colors">Getting Started</Link></li>
                      <li><Link href="/docs/components" className="text-muted-foreground hover:text-foreground transition-colors">Components</Link></li>
                      <li><Link href="/docs/installation" className="text-muted-foreground hover:text-foreground transition-colors">Installation Guide</Link></li>
                      <li><Link href="/docs/examples" className="text-muted-foreground hover:text-foreground transition-colors">Examples</Link></li>
                    </ul>
                  </div>
                  
                  {/* Ecosystem Links */}
                  <div>
                    <h3 className="font-medium text-sm mb-4 text-foreground">Ecosystem</h3>
                    <ul className="space-y-2.5 text-sm">
                      <li><a href="https://github.com/Saswat0602/mad-ui" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">GitHub Repository</a></li>
                      <li><a href="https://www.npmjs.com/package/mad-ui-components" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">npm Package</a></li>
                      <li><a href="https://github.com/Saswat0602/mad-ui/issues" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">Issues & Feedback</a></li>
                      <li><a href="https://github.com/Saswat0602/mad-ui/releases" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">Releases</a></li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-12 pt-6 border-t border-border/40">
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
                    <p>
                      Built with React, TypeScript &amp; Tailwind CSS. Released under the MIT License.
                    </p>
                    <div className="flex items-center gap-6">
                      <a href="https://github.com/Saswat0602/mad-ui" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
                      <a href="https://www.npmjs.com/package/mad-ui-components" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">npm</a>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
