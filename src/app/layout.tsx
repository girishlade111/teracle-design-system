import type { Metadata } from "next";
import { Chakra_Petch, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const chakraPetch = Chakra_Petch({
  variable: "--font-chakra-petch",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Teracle — Implementation-ready design system",
  description:
    "Teracle is a token-driven, accessible design system for developer documentation. WCAG 2.2 AA, keyboard-first, semantic tokens, and explicit component states.",
  keywords: [
    "Teracle",
    "design system",
    "documentation",
    "design tokens",
    "WCAG 2.2 AA",
    "Chakra Petch",
    "accessible UI",
  ],
  authors: [{ name: "Teracle" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "Teracle — Implementation-ready design system",
    description:
      "Token-driven, accessible design system for developer documentation.",
    siteName: "Teracle",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Teracle — Design System",
    description:
      "Token-driven, accessible design system for developer documentation.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${chakraPetch.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
