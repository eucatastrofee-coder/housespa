import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "HouseSpa | Masajes de Lujo a Domicilio",
  description: "Disfruta de masajes y tratamientos de bienestar premium entregados directamente en tu hogar, hotel u oficina. Terapeutas certificados y rigurosamente seleccionados.",
  metadataBase: new URL("https://housespa.mx"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "HouseSpa | Bienestar de Lujo a tu Puerta",
    description: "Masajes profesionales a domicilio en tu hogar, hotel o residencia. Sin tráfico, sin tiempos de espera, solo relajación absoluta.",
    url: "https://housespa.mx",
    siteName: "HouseSpa",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "HouseSpa Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HouseSpa | Bienestar de Lujo a tu Puerta",
    description: "Masajes profesionales a domicilio en tu hogar, hotel o residencia.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className="antialiased bg-charcoal-deep text-ivory">
        <SmoothScroll>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
            <WhatsAppButton />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
