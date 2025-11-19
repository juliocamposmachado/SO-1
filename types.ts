import { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  path: string;
  icon: LucideIcon;
}

export interface PillarProps {
  title: string;
  description: string;
  items: string[];
  icon: LucideIcon;
  color: string;
}

export interface StatProps {
  value: string;
  label: string;
  icon: LucideIcon;
}