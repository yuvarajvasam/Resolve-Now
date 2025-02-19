import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Resolve Now",
  description: "A place to resolve your problems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
