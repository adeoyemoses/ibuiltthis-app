import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "iBuiltThis",
  description:
    "iBuiltThis is a platform for creating and sharing your own project with the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Font added to the entire application */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
