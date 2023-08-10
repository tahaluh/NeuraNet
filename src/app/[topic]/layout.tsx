import localesMap from "@/src/locales/localesMap";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NeuraNet",
  description: "by tahaluh",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

export async function generateStaticParams() {
  const topics = Object.keys(localesMap["pt-br"]);

  return topics.map((topic) => {
    return { topic: topic };
  });
}
