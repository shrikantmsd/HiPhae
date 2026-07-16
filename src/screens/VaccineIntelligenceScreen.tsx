import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ShieldAlert, Syringe } from "lucide-react-native";

import { Card } from "../components/Card";
import { ProgressBar } from "../components/ProgressBar";
import { Screen } from "../components/Screen";
import { SectionHeader } from "../components/SectionHeader";
import { vaccineEvents } from "../data/sampleData";
import { colors, radii, spacing } from "../theme";
import type { TimelineStatus } from "../types";

type VaccineIntelligenceScreenProps = {
  onBack: () => void;
};

const statusColor: Record<TimelineStatus, string> = {
  complete: colors.success,
  due: colors.danger,
  upcoming: colors.info,
  review: colors.warning
};

const sideEffects = [
  { label: "Soreness", value: 36, color: colors.info },
  { label: "Mild fever", value: 22, color: colors.warning },
  { label: "Sleepiness", value: 18, color: colors.lavender },
  { label: "Rash review", value: 6, color: colors.danger }
];

export function VaccineIntelligenceScreen({ onBack }: VaccineIntelligenceScreenProps) {
  return (
    <Screen
      eyebrow="Vaccine Intelligence"
      title="Immunity Timeline"
      subtitle="Schedules, protection windows, and side effect radar."
      onBack={onBack}
    >
      <Card elevated style={styles.timelineCard}>
        <SectionHeader title="Timeline" caption="Family vaccine state and upcoming windows." />
        {vaccineEvents.map((event) => {
          const tone = statusColor[event.status];

          return (
            <View key={event.id} style={styles.vaccineRow}>
              <View style={[styles.vaccineIcon, { backgroundColor: `${tone}20` }]}>
                <Syringe size={20} color={tone} strokeWidth={2.4} />
              </View>
              <View style={styles.vaccineBody}>
                <View style={styles.vaccineTop}>
                  <Text style={styles.vaccineName}>{event.vaccine}</Text>
                  <Text style={[styles.vaccineDue, { color: tone }]}>{event.due}</Text>
                </View>
                <Text style={styles.vaccineMeta}>{event.member}</Text>
                <ProgressBar value={event.protection} color={tone} />
              </View>
            </View>
          );
        })}
      </Card>

      <Card style={styles.radarCard}>
        <View style={styles.radarHeader}>
          <SectionHeader title="Side Effect Radar" caption="Expected post-vaccine observation signals." />
          <View style={styles.radarIcon}>
            <ShieldAlert size={20} color={colors.warning} strokeWidth={2.4} />
          </View>
        </View>
        <View style={styles.sideEffectStack}>
          {sideEffects.map((effect) => (
            <View key={effect.label} style={styles.sideEffectRow}>
              <View style={styles.sideEffectTextRow}>
                <Text style={styles.sideEffectLabel}>{effect.label}</Text>
                <Text style={[styles.sideEffectValue, { color: effect.color }]}>{effect.value}%</Text>
              </View>
              <ProgressBar value={effect.value} color={effect.color} />
            </View>
          ))}
        </View>
      </Card>

      <Card style={styles.detailsCard}>
        <SectionHeader title="Vaccine Details" caption="Readable family context for each recommendation." />
        {vaccineEvents.map((event) => (
          <View key={`${event.id}-detail`} style={styles.detailBox}>
            <Text style={styles.detailTitle}>{event.vaccine}</Text>
            <Text style={styles.detailBody}>{event.details}</Text>
          </View>
        ))}
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  timelineCard: {
    gap: spacing.md
  },
  vaccineRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    backgroundColor: colors.white,
    borderRadius: radii.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md
  },
  vaccineIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center"
  },
  vaccineBody: {
    flex: 1,
    gap: spacing.xs
  },
  vaccineTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: spacing.sm
  },
  vaccineName: {
    flex: 1,
    color: colors.ink,
    fontSize: 15,
    fontWeight: "900"
  },
  vaccineDue: {
    fontSize: 12,
    fontWeight: "900"
  },
  vaccineMeta: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: "800"
  },
  radarCard: {
    gap: spacing.md
  },
  radarHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm
  },
  radarIcon: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center"
  },
  sideEffectStack: {
    gap: spacing.md
  },
  sideEffectRow: {
    gap: spacing.xs
  },
  sideEffectTextRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: spacing.sm
  },
  sideEffectLabel: {
    color: colors.ink,
    fontSize: 13,
    fontWeight: "800"
  },
  sideEffectValue: {
    fontSize: 13,
    fontWeight: "900"
  },
  detailsCard: {
    gap: spacing.md
  },
  detailBox: {
    backgroundColor: colors.white,
    borderRadius: radii.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    gap: 4
  },
  detailTitle: {
    color: colors.ink,
    fontSize: 14,
    fontWeight: "900"
  },
  detailBody: {
    color: colors.muted,
    fontSize: 12,
    lineHeight: 18
  }
});
