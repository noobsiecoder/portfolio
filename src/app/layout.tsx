import type { Metadata } from "next";
import "./styles/build.css";

export const metadata: Metadata = {
  title: "Abhishek Sriram",
  description:
    "Works on Robotics | Artificial Intelligence | Computer Programming",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="relative min-h-screen">
      <body
        className="overflow-x-hidden  p-4 md:mt-10 md:px-12 md:py-8 lg:px-24 xl:px-32 w-screen lg:mt-24 xl:mt-12"
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
