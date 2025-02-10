import { SidebarTrigger } from "@/components/ui/sidebar";
import { NavUser } from "./navUser";

export const AppHeader = () => {
  return (
    <header
      className={`flex sticky p-4 w-full items-center border-b justify-between`}
    >
      <SidebarTrigger />
      <NavUser user={{ email: "asd", name: "sad", avatar: "as" }} />
    </header>
  );
};
