import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { colors, radii, spacing } from "../theme";
import type { SpendPoint } from "../types";

type MiniBarChartProps = {
  points: SpendPoint[];
};

export function MiniBarChart({ points }: MiniBarChartProps) {
  const max = Math.max(...points.map((point) => point.spend));

  return (
    <View style={styles.chart}>
      {points.map((point) => {
        const spendHeight = Math.max(18, (point.spend / max) * 150);
        const coveredHeight = Math.max(12, (point.covered / max) * 150);

        return (
          <View key={point.month} style={styles.column}>
            <View style={styles.barTrack}>
              <View style={[styles.coveredBar, { height: coveredHeight }]} />
              <View style={[styles.spendBar, { height: spendHeight }]} />
            </View>
            <Text style={styles.month}>{point.month}</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  chart: {
    height: 190,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: spacing.sm
  },
  column: {
    flex: 1,
    alignItems: "center",
    gap: spacing.xs
  },
  barTrack: {
    width: "100%",
    maxWidth: 34,
    height: 154,
    borderRadius: radii.pill,
    backgroundColor: colors.border,
    justifyContent: "flex-end",
    overflow: "hidden"
  },
  spendBar: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: colors.info,
    opacity: 0.7,
    borderRadius: radii.pill
  },
  coveredBar: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: colors.success,
    borderRadius: radii.pill
  },
  month: {
    color: colors.muted,
    fontSize: 11,
    fontWeight: "800"
  }
});
