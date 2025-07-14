import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pearl Natalia",
  description: "My Personal Portfolio.",

  metadataBase: new URL("https://pearlnatalia.com"),

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    title: "Pearl Natalia",
    description: "My Personal Portfolio.",
    url: "/",
    siteName: "Pearl Natalia",
    type: "website",
    images: [
      {
        url: "/images/preview.png",
        width: 1200,
        height: 630,
        alt: "Preview of Pearl Natalia's portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Pearl Natalia",
    description: "My Personal Portfolio.",
    images: ["/images/preview.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
