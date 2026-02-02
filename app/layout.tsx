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
  title: "Mero Turismo | Passeios Náuticos em Angra dos Reis",
  description: "Viva experiências inesquecíveis em Angra dos Reis com a Mero Turismo. Passeios de barco, mergulho e as melhores praias da Costa Verde.",
  keywords: [
    "Passeio de barco Angra dos Reis",
    "Turismo em Angra",
    "Ilhas Paradisíacas",
    "Aluguel de Lancha",
    "Passeio de Escuna",
    "Mergulho em Angra",
    "Ilha Grande",
    "Praia do Dentista",
    "Ilhas Botinas",
    "Passeio Náutico Família",
  ],
  openGraph: {
    title: "Mero Turismo | Passeios Náuticos em Angra dos Reis",
    description: "Agende seu passeio de barco e conheça o paraíso.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
