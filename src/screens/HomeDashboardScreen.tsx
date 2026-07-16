import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Bell, ScanLine, ShieldPlus } from "lucide-react-native";

import { AlertCard } from "../components/AlertCard";
import { Card } from "../components/Card";
import { FamilyNodeCard } from "../components/FamilyNodeCard";
import { HealthRing } from "../components/HealthRing";
import { MetricPill } from "../components/MetricPill";
import { Screen } from "../components/Screen";
import { SectionHeader } from "../components/SectionHeader";
import { TimelineList } from "../components/TimelineList";
import {
  familyMembers,
  healthRings,
  priorityAlerts,
  upcomingTimeline
} from "../data/sampleData";
import { colors, radii, spacing } from "../theme";
import type { AppRoute } from "../types";

type HomeDashboardScreenProps = {
  onOpenMember: (memberId: string) => void;
  onNavigate: (route: AppRoute) => void;
};

export function HomeDashboardScreen({ onOpenMember, onNavigate }: HomeDashboardScreenProps) {
  return (
    <Screen
      eyebrow="HiPhae"
      title="Family Health OS"
      subtitle="Hyper-integrated protection, care, and health finance."
      rightSlot={
        <View style={styles.notificationButton}>
          <Bell size={20} color={colors.ink} strokeWidth={2.4} />
          <View style={styles.notificationDot} />
        </View>
      }
    >
      <Card elevated style={styles.heroCard}>
        <View style={styles.heroTop}>
          <View>
            <Text style={styles.heroLabel}>Family Health Index</Text>
            <Text style={styles.heroScore}>86</Text>
          </View>
          <View style={styles.heroPills}>
            <MetricPill label="Cover" value="91%" tone={colors.warning} />
            <MetricPill label="Claims" value="Low" tone={colors.success} />
          </View>
        </View>
        <View style={styles.ringRow}>
          {healthRings.map((ring) => (
            <HealthRing key={ring.label} {...ring} />
          ))}
        </View>
      </Card>

      <View style={styles.quickActions}>
        <Pressable style={styles.quickButton} onPress={() => onNavigate("scanner")}>
          <ScanLine size={18} color={colors.info} strokeWidth={2.4} />
          <Text style={styles.quickButtonText}>Scan Rx</Text>
        </Pressable>
        <Pressable style={styles.quickButton} onPress={() => onNavigate("insurance")}>
          <ShieldPlus size={18} color={colors.warning} strokeWidth={2.4} />
          <Text style={styles.quickButtonText}>Optimize Cover</Text>
        </Pressable>
      </View>

      <View style={styles.sectionGap}>
        <SectionHeader title="Family Nodes" caption="Genesis, earners, and honor care layers." />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalList}
        >
          {familyMembers.map((member) => (
            <FamilyNodeCard
              key={member.id}
              member={member}
              onPress={() => onOpenMember(member.id)}
            />
          ))}
        </ScrollView>
      </View>

      <Card style={styles.stackCard}>
        <SectionHeader title="Priority Alerts" caption="Needs attention in the next 7 days." />
        <View style={styles.innerStack}>
          {priorityAlerts.map((alert) => (
            <AlertCard key={alert.id} alert={alert} />
          ))}
        </View>
      </Card>

      <Card style={styles.stackCard}>
        <SectionHeader title="Upcoming Timeline" caption="Health, vaccine, and finance events." />
        <TimelineList items={upcomingTimeline} />
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  notificationButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.card,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.border
  },
  notificationDot: {
    position: "absolute",
    top: 10,
    right: 11,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.danger
  },
  heroCard: {
    gap: spacing.lg
  },
  heroTop: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: spacing.md
  },
  heroLabel: {
    color: colors.muted,
    fontSize: 13,
    fontWeight: "800"
  },
  heroScore: {
    color: colors.ink,
    fontSize: 64,
    lineHeight: 72,
    fontWeight: "900",
    letterSpacing: 0
  },
  heroPills: {
    alignItems: "flex-end",
    gap: spacing.xs
  },
  ringRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: spacing.md
  },
  quickActions: {
    flexDirection: "row",
    gap: spacing.sm
  },
  quickButton: {
    flex: 1,
    minHeight: 54,
    borderRadius: radii.lg,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.card,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.xs
  },
  quickButtonText: {
    color: colors.ink,
    fontSize: 13,
    fontWeight: "900"
  },
  sectionGap: {
    gap: spacing.md
  },
  horizontalList: {
    gap: spacing.md,
    paddingRight: spacing.lg
  },
  stackCard: {
    gap: spacing.md
  },
  innerStack: {
    gap: spacing.sm
  }
});
