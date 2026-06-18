import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Card } from "../components/Card";
import { FamilyGraph } from "../components/FamilyGraph";
import { FamilyNodeCard } from "../components/FamilyNodeCard";
import { MetricPill } from "../components/MetricPill";
import { Screen } from "../components/Screen";
import { SectionHeader } from "../components/SectionHeader";
import { familyMembers } from "../data/sampleData";
import { colors, roleColor, spacing } from "../theme";

type FamilyScreenProps = {
  onOpenMember: (memberId: string) => void;
};

export function FamilyScreen({ onOpenMember }: FamilyScreenProps) {
  return (
    <Screen
      eyebrow="Family Graph"
      title="Alliance Map"
      subtitle="Protection and health signals across the household."
    >
      <FamilyGraph members={familyMembers} onOpenMember={onOpenMember} />

      <Card style={styles.legendCard}>
        <SectionHeader title="Node Types" caption="Each node carries health, cover, and risk context." />
        <View style={styles.legendRow}>
          <MetricPill label="Genesis" value="Baby" tone={colors.genesis} />
          <MetricPill label="Earner" value="Self/Spouse" tone={colors.earner} />
          <MetricPill label="Honor" value="Parents" tone={colors.honor} />
        </View>
      </Card>

      <View style={styles.memberStack}>
        <SectionHeader title="Household Members" caption="Open a profile for timeline and growth metrics." />
        {familyMembers.map((member) => (
          <View key={member.id} style={styles.memberWrap}>
            <FamilyNodeCard member={member} compact onPress={() => onOpenMember(member.id)} />
            <View style={[styles.roleRail, { backgroundColor: roleColor[member.role] }]} />
          </View>
        ))}
      </View>

      <Card style={styles.riskCard}>
        <Text style={styles.riskTitle}>Protection Summary</Text>
        <Text style={styles.riskBody}>
          Current family cover is strong for routine care and emergency hospitalization.
          The next useful optimization is a senior top-up for Dinesh and Sunita.
        </Text>
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  legendCard: {
    gap: spacing.md
  },
  legendRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm
  },
  memberStack: {
    gap: spacing.md
  },
  memberWrap: {
    position: "relative"
  },
  roleRail: {
    position: "absolute",
    left: 0,
    top: 18,
    bottom: 18,
    width: 4,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4
  },
  riskCard: {
    gap: spacing.xs
  },
  riskTitle: {
    color: colors.ink,
    fontSize: 17,
    fontWeight: "900"
  },
  riskBody: {
    color: colors.muted,
    fontSize: 13,
    lineHeight: 20
  }
});
