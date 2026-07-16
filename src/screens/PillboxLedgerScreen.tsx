import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { BellRing, Moon, SunMedium } from "lucide-react-native";

import { Card } from "../components/Card";
import { ProgressBar } from "../components/ProgressBar";
import { Screen } from "../components/Screen";
import { SectionHeader } from "../components/SectionHeader";
import { medicines } from "../data/sampleData";
import { colors, radii, spacing } from "../theme";

type PillboxLedgerScreenProps = {
  onBack: () => void;
};

export function PillboxLedgerScreen({ onBack }: PillboxLedgerScreenProps) {
  return (
    <Screen
      eyebrow="Pillbox Ledger"
      title="Medication Plan"
      subtitle="Daily schedule, adherence, and refill alerts."
      onBack={onBack}
    >
      <Card elevated style={styles.summaryCard}>
        <View>
          <Text style={styles.summaryLabel}>Household adherence</Text>
          <Text style={styles.summaryValue}>91%</Text>
        </View>
        <ProgressBar value={91} color={colors.success} height={12} />
        <Text style={styles.summaryNote}>One refill is inside the 7-day reorder window.</Text>
      </Card>

      <Card style={styles.scheduleCard}>
        <SectionHeader title="Medication Schedule" caption="Active prescriptions across family members." />
        {medicines.map((medicine) => (
          <View key={medicine.id} style={styles.medicineCard}>
            <View style={styles.medicineTop}>
              <View style={styles.medicineText}>
                <Text style={styles.medicineName}>{medicine.name}</Text>
                <Text style={styles.medicineMeta}>
                  {medicine.owner} - {medicine.dose}
                </Text>
              </View>
              <View style={styles.scheduleBadge}>
                {medicine.schedule.toLowerCase().includes("night") ? (
                  <Moon size={14} color={colors.info} strokeWidth={2.4} />
                ) : (
                  <SunMedium size={14} color={colors.warning} strokeWidth={2.4} />
                )}
                <Text style={styles.scheduleText}>{medicine.schedule}</Text>
              </View>
            </View>
            <View style={styles.adherenceRow}>
              <Text style={styles.adherenceLabel}>Adherence</Text>
              <Text style={styles.adherenceValue}>{medicine.adherence}%</Text>
            </View>
            <ProgressBar value={medicine.adherence} color={colors.success} />
          </View>
        ))}
      </Card>

      <Card style={styles.refillCard}>
        <SectionHeader title="Refill Alerts" caption="Inventory risk before dose interruption." />
        {medicines.map((medicine) => (
          <View key={`${medicine.id}-refill`} style={styles.refillRow}>
            <View style={[styles.refillIcon, medicine.refillInDays <= 7 && styles.refillIconUrgent]}>
              <BellRing
                size={18}
                color={medicine.refillInDays <= 7 ? colors.danger : colors.info}
                strokeWidth={2.4}
              />
            </View>
            <View style={styles.refillText}>
              <Text style={styles.refillName}>{medicine.name}</Text>
              <Text style={styles.refillMeta}>
                {medicine.refillInDays} days of supply left for {medicine.owner}
              </Text>
            </View>
          </View>
        ))}
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  summaryCard: {
    gap: spacing.md
  },
  summaryLabel: {
    color: colors.muted,
    fontSize: 13,
    fontWeight: "800"
  },
  summaryValue: {
    color: colors.ink,
    fontSize: 52,
    lineHeight: 60,
    fontWeight: "900"
  },
  summaryNote: {
    color: colors.muted,
    fontSize: 13,
    lineHeight: 20
  },
  scheduleCard: {
    gap: spacing.md
  },
  medicineCard: {
    backgroundColor: colors.white,
    borderRadius: radii.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    gap: spacing.sm
  },
  medicineTop: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: spacing.sm
  },
  medicineText: {
    flex: 1
  },
  medicineName: {
    color: colors.ink,
    fontSize: 16,
    fontWeight: "900"
  },
  medicineMeta: {
    color: colors.muted,
    fontSize: 12,
    marginTop: 3
  },
  scheduleBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    backgroundColor: colors.card,
    borderRadius: radii.pill,
    paddingHorizontal: spacing.sm,
    paddingVertical: 6
  },
  scheduleText: {
    color: colors.ink,
    fontSize: 11,
    fontWeight: "900"
  },
  adherenceRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  adherenceLabel: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: "800"
  },
  adherenceValue: {
    color: colors.success,
    fontSize: 12,
    fontWeight: "900"
  },
  refillCard: {
    gap: spacing.md
  },
  refillRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    paddingVertical: spacing.xs
  },
  refillIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: `${colors.info}18`,
    alignItems: "center",
    justifyContent: "center"
  },
  refillIconUrgent: {
    backgroundColor: `${colors.danger}18`
  },
  refillText: {
    flex: 1
  },
  refillName: {
    color: colors.ink,
    fontSize: 14,
    fontWeight: "900"
  },
  refillMeta: {
    color: colors.muted,
    fontSize: 12,
    lineHeight: 17,
    marginTop: 2
  }
});
