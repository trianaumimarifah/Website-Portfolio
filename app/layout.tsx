import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import AOSProvider from "@/components/AOSProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Triana Umi Ma'rifah | Data Enthusiast",
  description: "Portfolio of Triana Umi Ma'rifah, Data Enthusiast & Business Intelligence Analyst.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} font-sans h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AOSProvider>
            {children}
          </AOSProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
