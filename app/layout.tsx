import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BrainBoost — AI Gaming Coach",
  description: "AI-Powered Rocket League Coach",
  manifest: "/manifest.json",
  themeColor: "#00f5ff",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "BrainBoost",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#00f5ff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="BrainBoost" />
      </head>
      <body>{children}</body>
    </html>
  );
}