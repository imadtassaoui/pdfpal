import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Toaster } from "sonner";
import "./globals.css";

const satoshi = localFont({ src: "../fonts/Satoshi-Variable.ttf" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body className={cn("bg-neutral-50 scroll-smooth", satoshi.className)}>
        <Toaster richColors />
        {children}
      </body>
    </html>
  );
}
