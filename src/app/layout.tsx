import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thalles Azevedo - Psicanalista",
  description: "Consultas online",
  keywords: [
    "Psicanalista",
    "Terapia online",
    "Psicologia clínica",
    "Thalles Azevedo",
    "Psicanálise lacaniana",
    "Terapia",
    "Thalles Psicanalista",
    "Psicanalista online",
    "thalles",
    "azevedo",
    "psi"
  ],
  authors: [{ name: "Thalles Azevedo" }],
  openGraph: {
    title: "Thalles Azevedo - Psicanalista",
    description: "Consultas online e para todo o Brasil.",
    url: "https://psithalles.com/",
    siteName: "Thalles Azevedo Psicanalista",
    images: [
      {
        url: "https://psithalles.com/images/thalles-1.jpeg",
        width: 1464,
        height: 2174,
        alt: "Thalles Azevedo Psicanalista"
      }
    ],
    locale: "pt_BR",
    type: "website"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
