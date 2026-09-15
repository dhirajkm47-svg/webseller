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
      <body className="bg-[#09090B] text-zinc-100 antialiased min-h-screen font-sans selection:bg-[#E50914] selection:text-white">
        {children}
      </body>
    </html>
  );
}
