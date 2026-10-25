import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

export const metadata = {
  metadataBase: new URL("https://toquededesejo.vercel.app"),
  title: "Toque de Desejo | Seu prazer, seu segredo, tudo discreto",
  description:
    "Boutique sensual e produtos íntimos premium com discrição total. Perfumes íntimos, lubrificantes, cosméticos sensuais e vibradores com sigilo absoluto.",
  openGraph: {
    title: "Toque de Desejo | Vitrine Sensual Discreta",
    description:
      "Descubra sensações, explore desejos e encontre seus favoritos com toda a discrição que você merece.",
    url: "https://toquededesejo.vercel.app",
    siteName: "Toque de Desejo",
    images: [
      {
        url: "/img/logo.jpg",
        width: 800,
        height: 800,
        alt: "Toque de Desejo",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Toque de Desejo | Seu prazer, seu segredo",
    description: "Boutique sensual elegante com sigilo absoluto.",
    images: ["/img/logo.jpg"],
  },
  icons: {
    icon: "/img/logo.jpg",
    apple: "/img/logo.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
