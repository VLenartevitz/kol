import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kolnutricao.com.br"),
  title: "KOL Nutrição em Saúde da Mulher | Thays Kohl",
  description:
    "Landing page da KOL, nutrição em saúde da mulher com acompanhamento personalizado, performance, estética e cuidado integrativo.",
  openGraph: {
    title: "KOL Nutrição em Saúde da Mulher",
    description:
      "Estratégias nutricionais personalizadas para mulheres que buscam saúde, autonomia, performance e bem-estar.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
