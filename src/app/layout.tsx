import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainSidebar from "@/components/layout/MainSidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sample SaaS",
  description: "Sample SaaS application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <div className="flex h-screen">
          <MainSidebar />
          <main className="flex-1 overflow-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
