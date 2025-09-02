import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar, Sidebar, Layout } from '@saswat0602/ui-library';

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
        <Layout>
          <Navbar />
          <Sidebar />
          <main className="flex-1 overflow-auto">
            {children}
          </main>
        </Layout>
      </body>
    </html>
  );
}
