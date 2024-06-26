import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vroom",
  description: "A video conferencing application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          variables: {
            colorBackground: "#27272A",
            colorPrimary: "#0E78F9",
            colorText: "#fff",
          },
          layout: {
            logoImageUrl: "/icons/vroom-logo.png",
          },
        }}
      >
        <body className={cn("custom-scrollbar bg-foreground", inter.className)}>
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
