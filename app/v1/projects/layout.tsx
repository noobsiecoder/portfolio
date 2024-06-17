import type { Metadata } from "next";
import type { Viewport } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Contains all of Abhishek's Projects",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="p-8 lg:py-12 lg:px-32 xl:py-14 xl:px-40 2xl:py-16 2xl:px-48 bg-stone-50 w-full flex justify-center">
      {children}
    </div>
  );
}
