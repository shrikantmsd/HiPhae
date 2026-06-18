import type { LucideIcon } from "lucide-react-native";

export type TabRoute = "home" | "family" | "vault" | "actions" | "insights";

export type AppRoute =
  | TabRoute
  | "member"
  | "scanner"
  | "insurance"
  | "pillbox"
  | "vaccine";

export type FamilyRole = "genesis" | "earner" | "honor";

export type TimelineStatus = "complete" | "due" | "upcoming" | "review";

export type FamilyMember = {
  id: string;
  name: string;
  relation: string;
  age: string;
  role: FamilyRole;
  healthScore: number;
  protectionScore: number;
  avatarInitials: string;
  summary: string;
  metrics: {
    label: string;
    value: string;
    trend: string;
  }[];
};

export type Alert = {
  id: string;
  title: string;
  description: string;
  severity: "high" | "medium" | "low";
  owner: string;
};

export type TimelineItem = {
  id: string;
  title: string;
  date: string;
  owner: string;
  status: TimelineStatus;
};

export type ActionCard = {
  id: AppRoute;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  tint: string;
};

export type VaccineEvent = {
  id: string;
  vaccine: string;
  member: string;
  due: string;
  status: TimelineStatus;
  protection: number;
  details: string;
};

export type Medicine = {
  id: string;
  name: string;
  dose: string;
  schedule: string;
  adherence: number;
  refillInDays: number;
  owner: string;
};

export type VaultDocument = {
  id: string;
  title: string;
  category: "Reports" | "Insurance" | "Prescriptions" | "Vaccines" | "Bills";
  owner: string;
  date: string;
  tags: string[];
};

export type SpendPoint = {
  month: string;
  spend: number;
  covered: number;
};
