import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UI Component Library Showcase",
  description: "A comprehensive showcase of all components from @saswat0602/ui-library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-gray-50">
          <nav className="bg-white shadow-sm border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex items-center">
                  <h1 className="text-xl font-semibold text-gray-900">
                    UI Component Library
                  </h1>
                </div>
                <div className="flex items-center space-x-4">
                  <a
                    href="https://github.com/saswat0602/ui-library"
                    className="text-gray-500 hover:text-gray-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.npmjs.com/package/@saswat0602/ui-library"
                    className="text-gray-500 hover:text-gray-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    NPM
                  </a>
                </div>
              </div>
            </div>
          </nav>
          <div className="flex">
            <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Components</h2>
                <nav className="space-y-2">
                  <Link href="/" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">🏠 Overview</Link>
                  <Link href="/forms" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">📝 Form Components</Link>
                  <Link href="/data-display" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">📊 Data Display</Link>
                  <Link href="/navigation" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">🧭 Navigation</Link>
                  <Link href="/feedback" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">💬 Feedback</Link>
                  <Link href="/layout" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">📐 Layout</Link>
                </nav>
              </div>
            </aside>
            <main className="flex-1 overflow-auto">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
