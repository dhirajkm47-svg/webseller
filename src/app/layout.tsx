import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alpha Fitness | Amanora Club, Amanora Township, Hadapsar, Pune",
  description:
    "Dedicated fitness facility situated at Amanora Club (Fern Hotel), Amanora Township, Hadapsar, Pune. Strength training, cardio suite, and digital membership enrollment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#0B0B0F] text-[#F5F5F7] antialiased min-h-screen font-sans selection:bg-[#7A5CFF] selection:text-white">
        {children}
      </body>
    </html>
  );
}
