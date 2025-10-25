import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "ArthaChain - AI-Native Blockchain for Tomorrow",
    template: "%s | ArthaChain"
  },
  description: "Build faster, scale infinitely, and innovate freely with ArthaChain's revolutionary SVDB architecture. The first AI-native blockchain with sub-second finality.",
  keywords: ["blockchain", "AI", "SVDB", "smart contracts", "web3", "decentralized", "cryptocurrency", "DeFi", "dApps"],
  authors: [{ name: "ArthaChain Team" }],
  creator: "ArthaChain",
  publisher: "ArthaChain",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://arthachain.io",
    title: "ArthaChain - AI-Native Blockchain for Tomorrow",
    description: "Build faster, scale infinitely, and innovate freely with ArthaChain's revolutionary SVDB architecture.",
    siteName: "ArthaChain",
  },
  twitter: {
    card: "summary_large_image",
    title: "ArthaChain - AI-Native Blockchain for Tomorrow",
    description: "Build faster, scale infinitely, and innovate freely with ArthaChain's revolutionary SVDB architecture.",
    creator: "@arthachain",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-[#450693] focus:text-white focus:border-[3px] focus:border-black focus:shadow-[4px_4px_0px_#000]">
          Skip to main content
        </a>
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        <div id="main-content">
          {children}
        </div>
        <VisualEditsMessenger />
      </body>
    </html>
  );
}