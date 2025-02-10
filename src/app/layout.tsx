import { cn } from "@/lib/utils";
import { Provider } from "jotai";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import "../styles/globals.css";
import { App } from "./app";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KTB Fuso",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={cn(inter.className, "h-screen w-screen overflow-hidden flex flex-col")}>
        <Provider>
          <App>
            {children}
          </App>
        </Provider>
      </body>
    </html>
  );
}
