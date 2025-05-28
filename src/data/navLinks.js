import {
  LayoutDashboard,
  Clock,
  Calendar as CalendarIcon,
  CalendarDays,
  BarChart2,
  FlaskConical,
  MessageSquare,
  Headphones,
  Settings
} from "lucide-react";

export const navSections = [
  {
    heading: "General",
    items: [
      { label: "Dashboard",    icon: LayoutDashboard },
      { label: "History",      icon: Clock },
      { label: "Calendar",     icon: CalendarIcon },
      { label: "Appointments", icon: CalendarDays },
      { label: "Statistics",   icon: BarChart2 },
      { label: "Tests",        icon: FlaskConical }
    ]
  },
  {
    heading: "Tools",
    items: [
      { label: "Chat",    icon: MessageSquare },
      { label: "Support", icon: Headphones },
      { label: "Setting", icon: Settings }
    ]
  }
];
