import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "iBuiltThis - Share Your Creation, Discover New Launches",
  description:
    "A community platform for creators to showcare their apps, AI tools, SaaS products, and creative projects. Authentic launches, real builders genuine feedback",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased`}>
        <header>IBuiltThis</header>

        {children}

        <footer>testing this is in layout</footer>
      </body>
    </html>
  );
}
