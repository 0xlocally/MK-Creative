import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mike Karam | Creative Executive",
  description: "Creative Executive with 15+ years crafting campaigns for Coca-Cola, Discovery, and global brands.",
  openGraph: {
    title: "Mike Karam | Creative Executive",
    description: "Creative Executive with 15+ years crafting campaigns for Coca-Cola, Discovery, and global brands.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
