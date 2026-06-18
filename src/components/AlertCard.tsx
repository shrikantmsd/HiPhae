import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AlertTriangle, CheckCircle2, Clock3 } from "lucide-react-native";

import { colors, radii, spacing } from "../theme";
import type { Alert } from "../types";

const severityTone = {
  high: colors.danger,
  medium: colors.warning,
  low: colors.success
};

type AlertCardProps = {
  alert: Alert;
};

export function AlertCard({ alert }: AlertCardProps) {
  const Icon = alert.severity === "high" ? AlertTriangle : alert.severity === "medium" ? Clock3 : CheckCircle2;
  const tone = severityTone[alert.severity];

  return (
    <View style={styles.card}>
      <View style={[styles.iconWrap, { backgroundColor: `${tone}22` }]}>
        <Icon size={20} color={tone} strokeWidth={2.4} />
      </View>
      <View style={styles.textBlock}>
        <View style={styles.titleRow}>
          <Text style={styles.title} numberOfLines={1}>
            {alert.title}
          </Text>
          <Text style={[styles.owner, { color: tone }]}>{alert.owner}</Text>
        </View>
        <Text style={styles.description}>{alert.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: radii.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    flexDirection: "row",
    gap: spacing.sm
  },
  iconWrap: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: "center",
    justifyContent: "center"
  },
  textBlock: {
    flex: 1,
    gap: 4
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: spacing.sm
  },
  title: {
    flex: 1,
    color: colors.ink,
    fontSize: 14,
    fontWeight: "900",
    letterSpacing: 0
  },
  owner: {
    fontSize: 11,
    fontWeight: "900"
  },
  description: {
    color: colors.muted,
    fontSize: 12,
    lineHeight: 18
  }
});
