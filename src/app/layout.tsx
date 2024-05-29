import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Container from "@/components/container";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LogStatus from "@/components/LogStatus";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NeXt grind",
  description: "Dev Grind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header />
        <Container>
        <LogStatus />
          {children} 
        </Container>
        <Footer />
      </body>
    </html>
  );
}
