import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/ThemeProvider"
import { Header } from "@/components/header"
import { Sparkles } from "lucide-react"
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
          <div className="relative flex min-h-screen flex-col overflow-hidden">
            {/* Enhanced Background with multiple layers */}
            <div className="fixed inset-0 -z-10">
              {/* Base gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/10" />
              
              {/* Animated orbs with better positioning */}
              <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-float opacity-30"></div>
              <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-3xl animate-float-delayed opacity-30"></div>
              <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full blur-3xl animate-float-delayed-4s opacity-30"></div>
              
              {/* Subtle grid pattern */}
              <div className="absolute inset-0 bg-grid-pattern opacity-3 dark:opacity-5" />
              
              {/* Noise texture for depth */}
              <div className="absolute inset-0 opacity-5">
                <div className="w-full h-full bg-noise-pattern"></div>
              </div>
            </div>
            
            <Header />
            <main className="flex-1 relative pt-20">
              <div className="animate-fade-in">
                {children}
              </div>
            </main>
            
            {/* Modern Footer */}
            <footer className="relative border-t border-border/20 bg-background/95 backdrop-blur-xl">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  {/* Brand Section */}
                  <div className="md:col-span-1">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-lg">
                        <Sparkles className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <span className="font-bold text-2xl text-primary">
                          Mad UI
                        </span>
                        <p className="text-sm text-muted-foreground">v2.0</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Beautiful, accessible, and customizable React components for modern web applications.
                    </p>
                  </div>
                  
                  {/* Documentation Links */}
                  <div>
                    <h3 className="font-semibold text-lg mb-6 text-foreground">Documentation</h3>
                    <ul className="space-y-3">
                      <li><a href="/docs/getting-started" className="text-muted-foreground hover:text-primary transition-colors duration-200">Getting Started</a></li>
                      <li><Link href="/docs/components" className="text-muted-foreground hover:text-primary transition-colors duration-200">Components</Link></li>
                      <li><a href="/docs/examples" className="text-muted-foreground hover:text-primary transition-colors duration-200">Examples</a></li>
                      <li><a href="/docs/installation" className="text-muted-foreground hover:text-primary transition-colors duration-200">Installation</a></li>
                    </ul>
                  </div>
                  
                  {/* Community Links */}
                  <div>
                    <h3 className="font-semibold text-lg mb-6 text-foreground">Community</h3>
                    <ul className="space-y-3">
                      <li><a href="https://github.com" className="text-muted-foreground hover:text-primary transition-colors duration-200">GitHub</a></li>
                      <li><a href="/docs" className="text-muted-foreground hover:text-primary transition-colors duration-200">Documentation</a></li>
                      <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">Discord</a></li>
                      <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">Twitter</a></li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-16 pt-8 border-t border-border/20">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground">
                      &copy; 2025 Mad UI. Built with ❤️ for developers worldwide.
                    </p>
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                      <a href="#" className="hover:text-primary transition-colors duration-200">Privacy Policy</a>
                      <a href="#" className="hover:text-primary transition-colors duration-200">Terms of Service</a>
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
