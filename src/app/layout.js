import { Inter } from "next/font/google";
import "./globals.css";
import { Aside } from "@/components/Aside";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Code Connect",
  description: "Uma rede social para Devs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <div className="app-container">
          <Aside />
          {children}
        </div>
      </body>
    </html>
  );
}
