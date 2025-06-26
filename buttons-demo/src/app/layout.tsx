import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "VizaGen Button System",
  description: "Компоненты кнопок на основе дизайна Figma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${jost.variable} font-jost antialiased bg-slate-700 text-white`}
        style={{ lineHeight: 1.3 }}
      >
        {/* Навигация */}
        <nav className="bg-gray-800 border-b border-gray-700">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-8">
                <Link href="/" className="text-xl font-bold text-primary-500">
                  VizaGen
                </Link>
                <div className="flex space-x-4">
                  <Link 
                    href="/" 
                    className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors"
                  >
                    Все компоненты
                  </Link>
                  <Link 
                    href="/figma" 
                    className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors"
                  >
                    Figma Recreation
                  </Link>
                </div>
              </div>
              <div className="text-sm text-gray-400">
                Дизайн-система кнопок
              </div>
            </div>
          </div>
        </nav>
        
        {children}
      </body>
    </html>
  );
}
