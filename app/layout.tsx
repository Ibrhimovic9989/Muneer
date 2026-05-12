import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "CA Muneer Ahmed — Chartered Accountant, FCA",
  description:
    "Founder & Managing Partner, Muneer & Associates. Fellow Chartered Accountant, Gold Medallist in Economics, ERP Consultant. 15+ years across India, US, UAE & KSA.",
};

// Inline pre-hydration script — sets theme before first paint to avoid FOUC.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(!t){t='sepia';}document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','sepia');}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.variable} data-theme="sepia">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-bone text-ink antialiased">{children}</body>
    </html>
  );
}
