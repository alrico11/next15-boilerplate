"use client"
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { AppHeader } from '@/shared/components/appHeader';
import { AppSidebar } from '@/shared/components/appSideBar';
import { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

export default function LayoutAuthenticated({ children }: Readonly<RootLayoutProps>) {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <AppHeader />
          {children}
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
