import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Syringe } from "lucide-react-native";

import { Card } from "../components/Card";
import { ProgressBar } from "../components/ProgressBar";
import { Screen } from "../components/Screen";
import { SectionHeader } from "../components/SectionHeader";
import { TimelineList } from "../components/TimelineList";
import { medicalTimeline } from "../data/sampleData";
import { colors, radii, roleColor, spacing } from "../theme";
import type { FamilyMember } from "../types";

type MemberProfileScreenProps = {
  member: FamilyMember;
  onBack: () => void;
  onOpenVaccine: () => void;
};

export function MemberProfileScreen({ member, onBack, onOpenVaccine }: MemberProfileScreenProps) {
  const tint = roleColor[member.role];

  return (
    <Screen
      eyebrow="Member Profile"
      title={member.name}
      subtitle={`${member.relation} - ${member.age}`}
      onBack={onBack}
    >
      <Card elevated style={styles.profileCard}>
        <View style={styles.profileTop}>
          <View style={[styles.avatar, { backgroundColor: tint }]}>
            <Text style={styles.avatarText}>{member.avatarInitials}</Text>
          </View>
          <View style={styles.profileText}>
            <Text style={styles.profileName}>{member.name}</Text>
            <Text style={styles.profileSummary}>{member.summary}</Text>
          </View>
        </View>
        <View style={styles.scoreGrid}>
          <View style={styles.scoreBox}>
            <Text style={styles.scoreLabel}>Health</Text>
            <Text style={styles.scoreValue}>{member.healthScore}</Text>
            <ProgressBar value={member.healthScore} color={tint} />
          </View>
          <View style={styles.scoreBox}>
            <Text style={styles.scoreLabel}>Protection</Text>
            <Text style={styles.scoreValue}>{member.protectionScore}</Text>
            <ProgressBar value={member.protectionScore} color={colors.warning} />
          </View>
        </View>
      </Card>

      <Card style={styles.metricsCard}>
        <SectionHeader title="Growth Metrics" caption="Latest readings and trend labels." />
        <View style={styles.metricGrid}>
          {member.metrics.map((metric) => (
            <View key={metric.label} style={styles.metricBox}>
              <Text style={styles.metricLabel}>{metric.label}</Text>
              <Text style={styles.metricValue}>{metric.value}</Text>
              <Text style={[styles.metricTrend, { color: tint }]}>{metric.trend}</Text>
            </View>
          ))}
        </View>
      </Card>

      <Card style={styles.vaccineCard}>
        <View style={styles.vaccineTop}>
          <SectionHeader title="Vaccination Progress" caption="Smart schedule based on member profile." />
          <Pressable style={styles.iconButton} onPress={onOpenVaccine}>
            <Syringe size={18} color={colors.info} strokeWidth={2.4} />
          </Pressable>
        </View>
        <View style={styles.vaccineScoreRow}>
          <Text style={styles.vaccineScore}>86%</Text>
          <Text style={styles.vaccineStatus}>1 dose due soon</Text>
        </View>
        <ProgressBar value={86} color={colors.info} height={11} />
      </Card>

      <Card style={styles.timelineCard}>
        <SectionHeader title="Medical Timeline" caption="Consults, prescriptions, vaccines, and reviews." />
        <TimelineList items={medicalTimeline} />
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  profileCard: {
    gap: spacing.lg
  },
  profileTop: {
    flexDirection: "row",
    gap: spacing.md,
    alignItems: "center"
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    alignItems: "center",
    justifyContent: "center"
  },
  avatarText: {
    color: colors.white,
    fontSize: 22,
    fontWeight: "900"
  },
  profileText: {
    flex: 1
  },
  profileName: {
    color: colors.ink,
    fontSize: 22,
    fontWeight: "900"
  },
  profileSummary: {
    color: colors.muted,
    fontSize: 13,
    lineHeight: 20,
    marginTop: 4
  },
  scoreGrid: {
    flexDirection: "row",
    gap: spacing.sm
  },
  scoreBox: {
    flex: 1,
    backgroundColor: colors.card,
    borderRadius: radii.md,
    padding: spacing.md,
    gap: spacing.xs
  },
  scoreLabel: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: "800"
  },
  scoreValue: {
    color: colors.ink,
    fontSize: 28,
    fontWeight: "900"
  },
  metricsCard: {
    gap: spacing.md
  },
  metricGrid: {
    flexDirection: "row",
    gap: spacing.sm
  },
  metricBox: {
    flex: 1,
    minHeight: 96,
    backgroundColor: colors.white,
    borderRadius: radii.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    justifyContent: "space-between"
  },
  metricLabel: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: "800"
  },
  metricValue: {
    color: colors.ink,
    fontSize: 18,
    fontWeight: "900"
  },
  metricTrend: {
    fontSize: 12,
    fontWeight: "900"
  },
  vaccineCard: {
    gap: spacing.md
  },
  vaccineTop: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm
  },
  iconButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center"
  },
  vaccineScoreRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between"
  },
  vaccineScore: {
    color: colors.ink,
    fontSize: 34,
    fontWeight: "900"
  },
  vaccineStatus: {
    color: colors.info,
    fontSize: 13,
    fontWeight: "900",
    marginBottom: 7
  },
  timelineCard: {
    gap: spacing.md
  }
});
