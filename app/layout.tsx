import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "CA Muneer Ahmed — Chartered Accountant, FCA",
  description:
    "Founder & Managing Partner, Muneer & Associates. Fellow Chartered Accountant, Gold Medallist in Economics, ERP Consultant. 15+ years across India, US, UAE & KSA.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="bg-bone text-ink antialiased">{children}</body>
    </html>
  );
}
