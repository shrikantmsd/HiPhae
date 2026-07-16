import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Calculator, ShieldCheck } from "lucide-react-native";

import { Card } from "../components/Card";
import { ProgressBar } from "../components/ProgressBar";
import { Screen } from "../components/Screen";
import { SectionHeader } from "../components/SectionHeader";
import { coverageCards, gapAnalysis } from "../data/sampleData";
import { colors, radii, spacing } from "../theme";

type InsuranceOptimizerScreenProps = {
  onBack: () => void;
};

export function InsuranceOptimizerScreen({ onBack }: InsuranceOptimizerScreenProps) {
  return (
    <Screen
      eyebrow="Insurance Optimizer"
      title="Cover Intelligence"
      subtitle="Coverage, cost simulation, and protection gaps."
      onBack={onBack}
    >
      <View style={styles.coverageGrid}>
        {coverageCards.map((card) => (
          <View key={card.label} style={styles.coverageCard}>
            <View style={[styles.coverageIcon, { backgroundColor: `${card.color}20` }]}>
              <ShieldCheck size={19} color={card.color} strokeWidth={2.4} />
            </View>
            <Text style={styles.coverageLabel}>{card.label}</Text>
            <Text style={styles.coverageValue}>{card.value}</Text>
            <Text style={styles.coverageSubtext}>{card.subtext}</Text>
          </View>
        ))}
      </View>

      <Card style={styles.simulatorCard}>
        <View style={styles.simulatorHeader}>
          <SectionHeader title="Cost Simulator" caption="Projected annual protection economics." />
          <View style={styles.calculatorIcon}>
            <Calculator size={20} color={colors.info} strokeWidth={2.4} />
          </View>
        </View>
        <View style={styles.simulatorRows}>
          <SimulatorRow label="Premium load" value="INR 58k" progress={62} color={colors.info} />
          <SimulatorRow label="Expected claims" value="INR 1.42L" progress={71} color={colors.success} />
          <SimulatorRow label="Out-of-pocket risk" value="INR 34k" progress={38} color={colors.warning} />
        </View>
      </Card>

      <Card style={styles.gapCard}>
        <SectionHeader title="Gap Analysis" caption="Recommended adjustments for the next renewal." />
        {gapAnalysis.map((item, index) => (
          <View key={item} style={styles.gapRow}>
            <View style={styles.gapIndex}>
              <Text style={styles.gapIndexText}>{index + 1}</Text>
            </View>
            <Text style={styles.gapText}>{item}</Text>
          </View>
        ))}
      </Card>
    </Screen>
  );
}

type SimulatorRowProps = {
  label: string;
  value: string;
  progress: number;
  color: string;
};

function SimulatorRow({ label, value, progress, color }: SimulatorRowProps) {
  return (
    <View style={styles.simulatorRow}>
      <View style={styles.simulatorTextRow}>
        <Text style={styles.simulatorLabel}>{label}</Text>
        <Text style={styles.simulatorValue}>{value}</Text>
      </View>
      <ProgressBar value={progress} color={color} />
    </View>
  );
}

const styles = StyleSheet.create({
  coverageGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.md
  },
  coverageCard: {
    flex: 1,
    minWidth: 150,
    minHeight: 166,
    backgroundColor: colors.card,
    borderRadius: radii.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    justifyContent: "space-between"
  },
  coverageIcon: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: "center",
    justifyContent: "center"
  },
  coverageLabel: {
    color: colors.muted,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "800"
  },
  coverageValue: {
    color: colors.ink,
    fontSize: 22,
    fontWeight: "900"
  },
  coverageSubtext: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: "700"
  },
  simulatorCard: {
    gap: spacing.lg
  },
  simulatorHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm
  },
  calculatorIcon: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center"
  },
  simulatorRows: {
    gap: spacing.md
  },
  simulatorRow: {
    gap: spacing.xs
  },
  simulatorTextRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: spacing.md
  },
  simulatorLabel: {
    color: colors.muted,
    fontSize: 13,
    fontWeight: "800"
  },
  simulatorValue: {
    color: colors.ink,
    fontSize: 14,
    fontWeight: "900"
  },
  gapCard: {
    gap: spacing.md
  },
  gapRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    backgroundColor: colors.white,
    borderRadius: radii.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md
  },
  gapIndex: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.ink,
    alignItems: "center",
    justifyContent: "center"
  },
  gapIndexText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: "900"
  },
  gapText: {
    flex: 1,
    color: colors.ink,
    fontSize: 13,
    lineHeight: 19,
    fontWeight: "700"
  }
});
