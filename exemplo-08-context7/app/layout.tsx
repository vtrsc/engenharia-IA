import "@/app/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js + Better Auth + GitHub",
  description: "Demo simples de autenticação com GitHub OAuth",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-50">
        <div className="min-h-screen flex items-center justify-center">
          {children}
        </div>
      </body>
    </html>
  );
}
