import React from "react";
import { StyleSheet, Text, View } from "react-native";
import type { LucideIcon } from "lucide-react-native";

import { colors, radii, spacing } from "../theme";

type StatCardProps = {
  icon?: LucideIcon;
  title: string;
  value: string;
  note?: string;
  tint?: string;
};

export function StatCard({ icon: Icon, title, value, note, tint = colors.info }: StatCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <Text style={styles.title}>{title}</Text>
        {Icon ? (
          <View style={[styles.iconWrap, { backgroundColor: `${tint}1F` }]}>
            <Icon size={18} color={tint} strokeWidth={2.3} />
          </View>
        ) : null}
      </View>
      <Text style={styles.value}>{value}</Text>
      {note ? <Text style={styles.note}>{note}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    minWidth: 150,
    backgroundColor: colors.card,
    borderRadius: radii.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    gap: spacing.sm
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: spacing.sm
  },
  iconWrap: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    flex: 1,
    color: colors.muted,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "800"
  },
  value: {
    color: colors.ink,
    fontSize: 23,
    lineHeight: 28,
    fontWeight: "900",
    letterSpacing: 0
  },
  note: {
    color: colors.muted,
    fontSize: 12,
    lineHeight: 17
  }
});
