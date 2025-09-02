import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"

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
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
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
            {/* Background patterns and gradients */}
            <div className="fixed inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
              <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" />
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float-delayed" />
            </div>
            
            <Header />
            <main className="flex-1 relative">
              <div className="animate-fade-in">
                {children}
              </div>
            </main>
            
            {/* Footer */}
            <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div className="flex items-center space-x-2 mb-4 md:mb-0">
                    <span className="font-bold text-xl gradient-text">Mad UI</span>
                    <span className="text-muted-foreground">Beautiful components for modern apps</span>
                  </div>
                  <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                    <a href="/docs" className="hover:text-foreground transition-colors">Documentation</a>
                    <a href="/components" className="hover:text-foreground transition-colors">Components</a>
                    <a href="https://github.com" className="hover:text-foreground transition-colors">GitHub</a>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t text-center text-sm text-muted-foreground">
                  <p>&copy; 2024 Mad UI. Built with ❤️ for developers.</p>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
