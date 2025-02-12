import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bruno Netto - Desenvolvedor Front End",
  description: "Explore meus projetos, habilidades e experiência como desenvolvedor Front End. Veja como posso ajudar a transformar suas ideias em soluções digitais.",
  keywords: "desenvolvedor web, portfólio, projetos, React, Next.js, JavaScript, TypeScript, CSS-in-JS, Styled Components, Stitches, Design System, Git, Github",
  robots: "index, follow",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
