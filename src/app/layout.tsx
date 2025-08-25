import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NeoMatrix",
  description: "Neonity's NeoMatrix",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
