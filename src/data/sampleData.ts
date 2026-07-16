import {
  Activity,
  Baby,
  CalendarClock,
  FileScan,
  HeartPulse,
  Landmark,
  Pill,
  ShieldCheck,
  Syringe
} from "lucide-react-native";

import { colors } from "../theme";
import type {
  ActionCard,
  Alert,
  FamilyMember,
  Medicine,
  SpendPoint,
  TimelineItem,
  VaccineEvent,
  VaultDocument
} from "../types";

export const familyMembers: FamilyMember[] = [
  {
    id: "dinesh",
    name: "Dinesh",
    relation: "Father",
    age: "68",
    role: "honor",
    healthScore: 78,
    protectionScore: 82,
    avatarInitials: "DI",
    summary: "Cardiac risk under active monitoring with stable medication adherence.",
    metrics: [
      { label: "BP", value: "128/82", trend: "Stable" },
      { label: "LDL", value: "112", trend: "-8%" },
      { label: "Steps", value: "5.8k", trend: "+12%" }
    ]
  },
  {
    id: "sunita",
    name: "Sunita",
    relation: "Mother",
    age: "64",
    role: "honor",
    healthScore: 84,
    protectionScore: 88,
    avatarInitials: "SU",
    summary: "Preventive screening plan is on track with strong vaccine coverage.",
    metrics: [
      { label: "HbA1c", value: "5.7", trend: "Good" },
      { label: "Sleep", value: "7h 10m", trend: "+24m" },
      { label: "Screening", value: "92%", trend: "On plan" }
    ]
  },
  {
    id: "rahul",
    name: "Rahul",
    relation: "Self",
    age: "38",
    role: "earner",
    healthScore: 87,
    protectionScore: 91,
    avatarInitials: "RA",
    summary: "Primary policy owner with balanced wellness, cover, and savings profile.",
    metrics: [
      { label: "Rest HR", value: "62", trend: "-3 bpm" },
      { label: "Cover", value: "45L", trend: "Adequate" },
      { label: "Spend", value: "18k", trend: "-9%" }
    ]
  },
  {
    id: "priya",
    name: "Priya",
    relation: "Spouse",
    age: "36",
    role: "earner",
    healthScore: 90,
    protectionScore: 89,
    avatarInitials: "PR",
    summary: "Excellent preventive health cadence and low predicted claim volatility.",
    metrics: [
      { label: "Wellness", value: "94%", trend: "+6%" },
      { label: "Iron", value: "13.1", trend: "Normal" },
      { label: "Claims", value: "0", trend: "12 mo" }
    ]
  },
  {
    id: "aarav",
    name: "Aarav",
    relation: "Baby",
    age: "14 mo",
    role: "genesis",
    healthScore: 92,
    protectionScore: 86,
    avatarInitials: "AA",
    summary: "Growth is tracking well. MMR booster and dental visit are upcoming.",
    metrics: [
      { label: "Weight", value: "10.2 kg", trend: "P55" },
      { label: "Height", value: "78 cm", trend: "P61" },
      { label: "Vaccines", value: "86%", trend: "1 due" }
    ]
  }
];

export const healthRings = [
  { label: "Health", value: 86, color: colors.info },
  { label: "Protection", value: 91, color: colors.warning },
  { label: "Readiness", value: 78, color: colors.success }
];

export const priorityAlerts: Alert[] = [
  {
    id: "a1",
    title: "Aarav MMR booster due",
    description: "Recommended window opens in 6 days. Book with pediatrician.",
    severity: "high",
    owner: "Aarav"
  },
  {
    id: "a2",
    title: "Policy OPD limit at 72%",
    description: "Projected dental and pediatric claims may exceed current OPD cover.",
    severity: "medium",
    owner: "Rahul"
  },
  {
    id: "a3",
    title: "Dinesh refill risk",
    description: "Atorvastatin supply has 5 days left. Reorder before the weekend.",
    severity: "medium",
    owner: "Dinesh"
  }
];

export const upcomingTimeline: TimelineItem[] = [
  { id: "t1", title: "MMR booster", date: "24 Jun", owner: "Aarav", status: "due" },
  { id: "t2", title: "Cardiology follow-up", date: "02 Jul", owner: "Dinesh", status: "upcoming" },
  { id: "t3", title: "Quarterly premium", date: "05 Jul", owner: "Family", status: "upcoming" },
  { id: "t4", title: "Dental check-up", date: "12 Jul", owner: "Aarav", status: "review" }
];

export const medicalTimeline: TimelineItem[] = [
  { id: "m1", title: "Growth percentile review", date: "12 Jun", owner: "Aarav", status: "complete" },
  { id: "m2", title: "Vitamin D course started", date: "02 Jun", owner: "Aarav", status: "complete" },
  { id: "m3", title: "Pediatric consultation", date: "24 May", owner: "Aarav", status: "complete" },
  { id: "m4", title: "MMR booster", date: "24 Jun", owner: "Aarav", status: "due" }
];

export const actionCards: ActionCard[] = [
  {
    id: "scanner",
    title: "Prescription Scanner",
    subtitle: "OCR, allergies, interactions",
    icon: FileScan,
    tint: colors.info
  },
  {
    id: "insurance",
    title: "Insurance Optimizer",
    subtitle: "Cover, costs, gaps",
    icon: ShieldCheck,
    tint: colors.warning
  },
  {
    id: "pillbox",
    title: "Pillbox Ledger",
    subtitle: "Dose schedule and refills",
    icon: Pill,
    tint: colors.success
  },
  {
    id: "vaccine",
    title: "Vaccine Intelligence",
    subtitle: "Timelines and side effects",
    icon: Syringe,
    tint: colors.lavender
  }
];

export const extractedMedicines = [
  { name: "Amoxicillin", strength: "250 mg", duration: "5 days", confidence: 96 },
  { name: "Paracetamol", strength: "120 mg", duration: "SOS fever", confidence: 94 },
  { name: "Cetirizine", strength: "2.5 mg", duration: "3 nights", confidence: 91 }
];

export const scanChecks = [
  { label: "Allergy check", result: "Penicillin family caution found", level: "Review" },
  { label: "Interaction check", result: "No high-risk interaction detected", level: "Clear" },
  { label: "Dose check", result: "Weight-based pediatric dose needs confirmation", level: "Review" }
];

export const coverageCards = [
  { label: "Family floater", value: "INR 45L", subtext: "91% adequate", color: colors.warning },
  { label: "Critical illness", value: "INR 30L", subtext: "Gap: INR 10L", color: colors.info },
  { label: "OPD wallet", value: "INR 18k", subtext: "72% used", color: colors.success }
];

export const gapAnalysis = [
  "Add senior parent top-up before renewal.",
  "Increase baby OPD buffer by INR 12k.",
  "Keep emergency corpus at 6.2 months of spend."
];

export const medicines: Medicine[] = [
  {
    id: "rx1",
    name: "Atorvastatin",
    dose: "10 mg",
    schedule: "Night",
    adherence: 94,
    refillInDays: 5,
    owner: "Dinesh"
  },
  {
    id: "rx2",
    name: "Vitamin D3",
    dose: "400 IU",
    schedule: "Morning",
    adherence: 88,
    refillInDays: 16,
    owner: "Aarav"
  },
  {
    id: "rx3",
    name: "Metformin XR",
    dose: "500 mg",
    schedule: "After dinner",
    adherence: 91,
    refillInDays: 11,
    owner: "Sunita"
  }
];

export const vaccineEvents: VaccineEvent[] = [
  {
    id: "v1",
    vaccine: "MMR Booster",
    member: "Aarav",
    due: "24 Jun",
    status: "due",
    protection: 72,
    details: "Measles, mumps, rubella immunity window."
  },
  {
    id: "v2",
    vaccine: "Influenza",
    member: "Family",
    due: "Sep 2026",
    status: "upcoming",
    protection: 48,
    details: "Seasonal protection for the full household."
  },
  {
    id: "v3",
    vaccine: "Pneumococcal",
    member: "Sunita",
    due: "Complete",
    status: "complete",
    protection: 96,
    details: "Senior preventive protection completed."
  }
];

export const vaultDocuments: VaultDocument[] = [
  {
    id: "d1",
    title: "Aarav Pediatric Visit Summary",
    category: "Reports",
    owner: "Aarav",
    date: "12 Jun 2026",
    tags: ["growth", "pediatric"]
  },
  {
    id: "d2",
    title: "Family Floater Policy",
    category: "Insurance",
    owner: "Family",
    date: "05 Apr 2026",
    tags: ["policy", "renewal"]
  },
  {
    id: "d3",
    title: "Dinesh Cardiology Prescription",
    category: "Prescriptions",
    owner: "Dinesh",
    date: "30 May 2026",
    tags: ["cardiac", "refill"]
  },
  {
    id: "d4",
    title: "MMR Vaccine Certificate",
    category: "Vaccines",
    owner: "Aarav",
    date: "18 Dec 2025",
    tags: ["immunization"]
  },
  {
    id: "d5",
    title: "Dental Claim Receipt",
    category: "Bills",
    owner: "Priya",
    date: "02 Jun 2026",
    tags: ["opd", "claim"]
  }
];

export const spendTrend: SpendPoint[] = [
  { month: "Jan", spend: 16500, covered: 10800 },
  { month: "Feb", spend: 9200, covered: 6500 },
  { month: "Mar", spend: 22800, covered: 17000 },
  { month: "Apr", spend: 13100, covered: 8400 },
  { month: "May", spend: 18700, covered: 12500 },
  { month: "Jun", spend: 14800, covered: 10100 }
];

export const insightCards = [
  {
    icon: Landmark,
    title: "Projected annual spend",
    value: "INR 2.18L",
    note: "9% below last year after OPD optimization"
  },
  {
    icon: Activity,
    title: "Risk trend",
    value: "Low rising",
    note: "Senior cardiology and baby vaccination drive the next 30 days"
  },
  {
    icon: HeartPulse,
    title: "Prevention ROI",
    value: "3.4x",
    note: "Screenings and vaccines prevent high-cost claim clusters"
  },
  {
    icon: Baby,
    title: "Genesis node",
    value: "On track",
    note: "Growth and immunization are inside expected windows"
  },
  {
    icon: CalendarClock,
    title: "Next review",
    value: "02 Jul",
    note: "Update senior medicine ledger after cardiology consult"
  }
];
