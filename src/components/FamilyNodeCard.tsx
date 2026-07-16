import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { ProgressBar } from "./ProgressBar";
import { colors, radii, roleColor, spacing } from "../theme";
import type { FamilyMember } from "../types";

type FamilyNodeCardProps = {
  member: FamilyMember;
  compact?: boolean;
  onPress?: () => void;
};

export function FamilyNodeCard({ member, compact, onPress }: FamilyNodeCardProps) {
  const tint = roleColor[member.role];

  return (
    <Pressable
      onPress={onPress}
      style={[styles.card, compact && styles.compactCard]}
      accessibilityLabel={`${member.name} profile`}
    >
      <View style={styles.topRow}>
        <View style={[styles.avatar, { backgroundColor: tint }]}>
          <Text style={styles.avatarText}>{member.avatarInitials}</Text>
        </View>
        <View style={styles.identity}>
          <Text style={styles.name} numberOfLines={1}>
            {member.name}
          </Text>
          <Text style={styles.meta} numberOfLines={1}>
            {member.relation} - {member.age}
          </Text>
        </View>
      </View>
      {!compact ? (
        <Text style={styles.summary} numberOfLines={2}>
          {member.summary}
        </Text>
      ) : null}
      <View style={styles.scoreRow}>
        <Text style={styles.scoreLabel}>Health</Text>
        <Text style={styles.score}>{member.healthScore}</Text>
      </View>
      <ProgressBar value={member.healthScore} color={tint} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 238,
    minHeight: 174,
    backgroundColor: colors.card,
    borderRadius: radii.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    gap: spacing.sm
  },
  compactCard: {
    width: "100%",
    minHeight: 132
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center"
  },
  avatarText: {
    color: colors.white,
    fontSize: 15,
    fontWeight: "900",
    letterSpacing: 0
  },
  identity: {
    flex: 1
  },
  name: {
    color: colors.ink,
    fontSize: 17,
    fontWeight: "900",
    letterSpacing: 0
  },
  meta: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: "700",
    marginTop: 2
  },
  summary: {
    color: colors.muted,
    fontSize: 13,
    lineHeight: 18
  },
  scoreRow: {
    marginTop: "auto",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  scoreLabel: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: "800"
  },
  score: {
    color: colors.ink,
    fontSize: 18,
    fontWeight: "900"
  }
});
