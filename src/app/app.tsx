"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import axios from "axios";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

interface AppProps { children: ReactNode }
const queryClient = new QueryClient();

axios.defaults.baseURL = process.env.API_URL;

export const App = ({ children }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange >
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  );
};
