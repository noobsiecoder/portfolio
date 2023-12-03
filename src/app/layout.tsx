import type { Metadata } from "next";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "Abhishek Sriram",
  description: "Works on Robotics | Artificial Intelligence | Computer Programming",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="flex min-h-screen">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
