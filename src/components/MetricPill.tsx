import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { colors, radii, spacing } from "../theme";

type MetricPillProps = {
  label: string;
  value: string;
  tone?: string;
};

export function MetricPill({ label, value, tone = colors.info }: MetricPillProps) {
  return (
    <View style={styles.pill}>
      <View style={[styles.dot, { backgroundColor: tone }]} />
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pill: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radii.pill,
    paddingHorizontal: spacing.sm,
    paddingVertical: 7
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 4
  },
  label: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: "700"
  },
  value: {
    color: colors.ink,
    fontSize: 12,
    fontWeight: "800"
  }
});
