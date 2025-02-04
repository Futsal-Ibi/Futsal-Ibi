import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Futsal Ibi",
  description: "Web oficial del CFS Fustal Ibi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="block">
        <Navbar />
        <main className="block overflow-hidden bg-gradient-to-b from-blue-500 to-blue-800 navbar bold-24">
            {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
