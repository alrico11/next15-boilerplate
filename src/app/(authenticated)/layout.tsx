"use client"
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { AppHeader } from '@/shared/components/appHeader';
import { AppSidebar } from '@/shared/components/appSideBar';
import { useHydration } from '@/shared/hooks';
import { useTheme } from 'next-themes';
import { ReactNode, useEffect } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

export default function LayoutAuthenticated({ children }: Readonly<RootLayoutProps>) {
  const hyd = useHydration()
  const { theme, setTheme, systemTheme } = useTheme()
  useEffect(() => { systemTheme && setTheme(systemTheme) }, [systemTheme])
  if (!hyd) return null
  
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <AppHeader />
          <div className={`${theme === 'dark' ? 'bg-black/50 text-foreground' : 'bg-black/5 text-background'}  flex-1`}>
            {children}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
