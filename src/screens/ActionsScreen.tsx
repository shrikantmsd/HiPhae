import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CalendarCheck2, FileCheck2 } from "lucide-react-native";

import { ActionTile } from "../components/ActionTile";
import { Card } from "../components/Card";
import { ProgressBar } from "../components/ProgressBar";
import { Screen } from "../components/Screen";
import { SectionHeader } from "../components/SectionHeader";
import { actionCards } from "../data/sampleData";
import { colors, radii, spacing } from "../theme";
import type { AppRoute } from "../types";

type ActionsScreenProps = {
  onNavigate: (route: AppRoute) => void;
};

export function ActionsScreen({ onNavigate }: ActionsScreenProps) {
  return (
    <Screen
      eyebrow="Actions"
      title="Care Command"
      subtitle="Scan, optimize, schedule, and protect the family."
    >
      <View style={styles.actionGrid}>
        {actionCards.map((action) => (
          <ActionTile key={action.id} action={action} onPress={() => onNavigate(action.id)} />
        ))}
      </View>

      <Card style={styles.commandCard}>
        <SectionHeader title="Today" caption="Operational readiness across care workflows." />
        <View style={styles.commandRow}>
          <View style={[styles.commandIcon, { backgroundColor: `${colors.success}20` }]}>
            <CalendarCheck2 size={21} color={colors.success} strokeWidth={2.4} />
          </View>
          <View style={styles.commandText}>
            <Text style={styles.commandTitle}>3 of 4 routines complete</Text>
            <Text style={styles.commandBody}>Medicine adherence and vaccine readiness are strong.</Text>
          </View>
        </View>
        <ProgressBar value={75} color={colors.success} height={10} />
      </Card>

      <Card style={styles.auditCard}>
        <View style={styles.auditIcon}>
          <FileCheck2 size={21} color={colors.info} strokeWidth={2.4} />
        </View>
        <Text style={styles.auditTitle}>Care audit ready</Text>
        <Text style={styles.auditBody}>
          HiPhae has enough vault, medication, and insurance data to generate a family review.
        </Text>
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  actionGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.md
  },
  commandCard: {
    gap: spacing.md
  },
  commandRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md
  },
  commandIcon: {
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: "center",
    justifyContent: "center"
  },
  commandText: {
    flex: 1
  },
  commandTitle: {
    color: colors.ink,
    fontSize: 16,
    fontWeight: "900"
  },
  commandBody: {
    color: colors.muted,
    fontSize: 13,
    lineHeight: 19,
    marginTop: 3
  },
  auditCard: {
    backgroundColor: colors.ink,
    gap: spacing.sm
  },
  auditIcon: {
    width: 46,
    height: 46,
    borderRadius: radii.pill,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center"
  },
  auditTitle: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "900"
  },
  auditBody: {
    color: "#CBD5E1",
    fontSize: 13,
    lineHeight: 20
  }
});
