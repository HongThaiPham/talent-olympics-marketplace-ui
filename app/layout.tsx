import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import AppProvider from "@/components/AppProvider";
import { cn } from "@/lib/utils";
import Footer from "@/components/commons/Footer";

const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Solana Talent Olympics 2024 - Marketplace UI",
  description: "A UI for the Solana Talent Olympics 2024 - Marketplace",
  icons: {
    icon: "/favicon.ico", // /public path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="dark"
      style={{
        colorScheme: "dark",
      }}
    >
      <body
        className={cn(
          "min-h-screen bg-background antialiased",
          inter.className
        )}
      >
        <AppProvider>
          {children}

          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
