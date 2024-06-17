import type { Metadata } from "next";
import type { Viewport } from "next";
import NextTopLoader from "nextjs-toploader";
import "../globals.css";

export const metadata: Metadata = {
  icons: {
    icon: [
      {
        url: "/icons/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/icons/favicon-16x16.png",
        type: "image/png",
        sizes: "16x16",
      },
    ],
    apple: [
      {
        url: "/icons/apple-touch-icon.png",
        type: "image/png",
        sizes: "180x180",
      },
    ],
  },
  manifest: "/icons/site.webmanifest",
  title: "Abhishek's Portfolio",
  description: "Features Abhishek's notable work",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1,
  userScalable: false,
  themeColor: "##fafaf9",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <NextTopLoader />
        <div className="min-h-screen flex flex-col lg:flex-row">{children}</div>
      </body>
    </html>
  );
}
