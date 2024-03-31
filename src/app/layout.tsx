import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abhishek's Portfolio",
  description: "",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/icons/favicon.ico",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative min-h-screen p-4 md:p-12 lg:p-24 xl:px-48 2xl:px-96">{children}</body>
    </html>
  );
}
