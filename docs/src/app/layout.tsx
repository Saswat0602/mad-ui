import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Sparkles } from "lucide-react"

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
            <footer className="relative border-t border-border/20 bg-background/80 backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
              <div className="container mx-auto px-6 py-12 relative">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {/* Brand Section */}
                  <div className="col-span-1 md:col-span-2">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center">
                        <Sparkles className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <span className="font-bold text-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                          Mad UI
                        </span>
                        <p className="text-sm text-muted-foreground">v2.0</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground max-w-md">
                      Beautiful, accessible, and customizable React components for modern web applications.
                    </p>
                  </div>
                  
                  {/* Quick Links */}
                  <div>
                    <h3 className="font-semibold mb-4">Documentation</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li><a href="/docs/getting-started" className="hover:text-foreground transition-colors">Getting Started</a></li>
                      <li><a href="/docs/components" className="hover:text-foreground transition-colors">Components</a></li>
                      <li><a href="/docs/examples" className="hover:text-foreground transition-colors">Examples</a></li>
                    </ul>
                  </div>
                  
                  {/* Community */}
                  <div>
                    <h3 className="font-semibold mb-4">Community</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li><a href="https://github.com" className="hover:text-foreground transition-colors">GitHub</a></li>
                      <li><a href="/docs" className="hover:text-foreground transition-colors">Documentation</a></li>
                      <li><a href="/docs/installation" className="hover:text-foreground transition-colors">Installation</a></li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-12 pt-8 border-t border-border/20 text-center">
                  <p className="text-sm text-muted-foreground">
                    &copy; 2025 Mad UI. Built with ❤️ for developers worldwide.
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
