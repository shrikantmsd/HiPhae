export const colors = {
  white: "#FFFFFF",
  card: "#F8FAFC",
  cardElevated: "#FFFFFF",
  border: "#E5EAF0",
  borderStrong: "#D8E0EA",
  ink: "#0F172A",
  muted: "#64748B",
  subtle: "#94A3B8",
  success: "#34D399",
  warning: "#F5B942",
  danger: "#F87171",
  info: "#4F8CFF",
  genesis: "#4F8CFF",
  earner: "#F5B942",
  honor: "#34D399",
  lavender: "#A78BFA",
  cyan: "#22D3EE"
};

export const roleColor = {
  genesis: colors.genesis,
  earner: colors.earner,
  honor: colors.honor
} as const;

export const spacing = {
  xs: 6,
  sm: 10,
  md: 16,
  lg: 20,
  xl: 28,
  xxl: 36
};

export const radii = {
  sm: 12,
  md: 16,
  lg: 24,
  pill: 999
};

export const shadows = {
  soft: {
    shadowColor: "#0F172A",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 24,
    elevation: 4
  },
  faint: {
    shadowColor: "#0F172A",
    shadowOpacity: 0.04,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 16,
    elevation: 2
  }
};
