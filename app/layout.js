import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from 'next-themes'
import { Inter } from "next/font/google";


const inter = Inter({subsets: ["latin"]});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const currentTheme = "system" //Optionally you can use dark or system as default theme...


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`bg-white dark:bg-black ${inter.className}`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme={currentTheme}
          enableSystem
        >
          
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}

