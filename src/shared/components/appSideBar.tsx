"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  BookOpen,
  Calendar,
  ChevronDown,
  Clock,
  FileText,
  Folder,
  LayoutDashboardIcon,
  Users
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const menuItems = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboardIcon },
  {
    title: "Customer Management",
    icon: Users,
    subItems: [
      { title: "Customers", url: "/customers" },
      { title: "Leads", url: "/leads" },
    ],
  },
  { title: "Survey Registration", url: "/survey-registration", icon: Calendar },
  {
    title: "Survey Management",
    icon: FileText,
    subItems: [
      { title: "Ongoing Surveys", url: "/ongoing-surveys" },
      { title: "Completed Surveys", url: "/completed-surveys" },
    ],
  },
  {
    title: "Dealer Management",
    icon: Folder,
    subItems: [
      { title: "Dealers", url: "/dealers" },
      { title: "Regions", url: "/regions" },
    ],
  },
  {
    title: "User Management",
    icon: Users,
    subItems: [
      { title: "Users", url: "/users" },
      { title: "Roles", url: "/roles" },
    ],
  },
  {
    title: "Report",
    icon: Clock,
    subItems: [
      { title: "Monthly Report", url: "/monthly-report" },
      { title: "Annual Report", url: "/annual-report" },
    ],
  },
  { title: "Logs", url: "/logs", icon: BookOpen },
];

export function AppSidebar() {
  const { open } = useSidebar();
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});
  const router = useRouter();
  const pathname = usePathname();

  const toggleExpand = (title: string) => {
    setExpanded((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <Sidebar className={cn("shadow-lg")} >
      <SidebarHeader>
        <div className="flex items-center gap-2 mb-6">
          <div className="rounded-full flex items-center justify-center font-bold text-lg">
            KTB
          </div>
          {open && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="text-sm font-semibold"
            >
              PT KRAMA YUDHA <br /> TIGA BERLIAN MOTORS
            </motion.div>
          )}
        </div>
      </SidebarHeader>
      <SidebarContent className="overflow-auto h-full" >
      <SidebarGroup>
          <SidebarGroupLabel className={cn("transition-opacity", open ? "opacity-100" : "opacity-0 hidden")}>
            MAIN MENU
          </SidebarGroupLabel>
          <SidebarMenu>
            {menuItems.map((item) =>
              item.subItems ? (
                <div key={item.title}>
                  <SidebarMenuItem className="">
                    <SidebarMenuButton size={'lg'} asChild onClick={() => toggleExpand(item.title)}>
                      <motion.div
                        className="flex items-center justify-between w-full cursor-pointer rounded-md px-2 py-2"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="flex items-center gap-1">
                          <item.icon className="w-5 h-5" />
                          {open && <span>{item.title}</span>}
                        </div>
                        {open && (
                          <motion.div
                            animate={{ rotate: expanded[item.title] ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className="w-4 h-4" />
                          </motion.div>
                        )}
                      </motion.div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  {expanded[item.title] &&
                    open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        {item.subItems.map((subItem) => {
                          const isActive = pathname === subItem.url;
                          return (
                            <SidebarMenuItem key={subItem.title}>
                              <SidebarMenuButton
                                size={'lg'}
                                onClick={() => router.push(subItem.url)}
                                className={cn(
                                  "px-8",
                                  isActive && "bg-primary/10"
                                )}
                              >
                                <motion.span
                                  whileHover={{ x: 5 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  {subItem.title}
                                </motion.span>
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                          );
                        })}
                      </motion.div>
                    )}
                </div>
              ) : (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    size={'lg'}
                    onClick={() => router.push(item.url)}
                    className={cn(
                      pathname === item.url && "bg-primary/10"
                    )}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                      className="flex items-center gap-1"
                    >
                      <item.icon className="w-5 h-5" />
                      {open && <span>{item.title}</span>}
                    </motion.div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )
            )}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
