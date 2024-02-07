import { History, LayoutDashboard, UserRound } from "lucide-react";

export const listMenu = [
  {
    name: "Dashboard",
    url: "/",
    icon: <LayoutDashboard />,
  },
  {
    name: "Personal",
    url: "/personal",
    icon: <UserRound />,
  },
  {
    name: "History",
    url: "/history",
    icon: <History />,
  },
];
