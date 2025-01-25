import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "../components/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cromo Studios | Modern Web Development & Design Agency",
  description:
    "Transform your business with custom web development, e-commerce solutions, and digital excellence. London-based agency specializing in modern web design and development.",
  keywords:
    "web development, web design, e-commerce, SEO, digital agency, London, custom websites, React development, Next.js",
  icons: {
    icon: [
      {
        url: "/logo-black.png",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/logo-black.png",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: "Cromo Studios | Modern Web Development & Design Agency",
    description:
      "Transform your business with custom web development, e-commerce solutions, and digital excellence. London-based agency specializing in modern web design and development.",
    url: "https://cromostudios.com",
    siteName: "Cromo Studios",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/social-preview.png",
        width: 1200,
        height: 630,
        alt: "Cromo Studios - Modern Web Development & Design Agency in London",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cromo Studios | Modern Web Development & Design Agency",
    description:
      "Transform your business with custom web development, e-commerce solutions, and digital excellence. London-based agency specializing in modern web design and development.",
    images: ["/social-preview.png"],
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
  metadataBase: new URL("https://cromostudios.com"),
  alternates: {
    canonical: "/",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <body
        className={`${inter.className} antialiased bg-white dark:bg-dark-100 text-dark-200 dark:text-stone-200 overflow-x-hidden min-h-screen w-full`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
