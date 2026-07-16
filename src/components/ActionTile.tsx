import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { ArrowUpRight } from "lucide-react-native";

import { colors, radii, spacing } from "../theme";
import type { ActionCard } from "../types";

type ActionTileProps = {
  action: ActionCard;
  onPress: () => void;
};

export function ActionTile({ action, onPress }: ActionTileProps) {
  const Icon = action.icon;

  return (
    <Pressable onPress={onPress} style={styles.tile} accessibilityLabel={action.title}>
      <View style={styles.topRow}>
        <View style={[styles.iconWrap, { backgroundColor: `${action.tint}20` }]}>
          <Icon size={22} color={action.tint} strokeWidth={2.4} />
        </View>
        <ArrowUpRight size={18} color={colors.subtle} strokeWidth={2.4} />
      </View>
      <Text style={styles.title}>{action.title}</Text>
      <Text style={styles.subtitle}>{action.subtitle}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tile: {
    flex: 1,
    minWidth: 148,
    minHeight: 150,
    backgroundColor: colors.card,
    borderRadius: radii.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    justifyContent: "space-between"
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  iconWrap: {
    width: 46,
    height: 46,
    borderRadius: 23,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    color: colors.ink,
    fontSize: 16,
    lineHeight: 20,
    fontWeight: "900",
    letterSpacing: 0,
    marginTop: spacing.md
  },
  subtitle: {
    color: colors.muted,
    fontSize: 12,
    lineHeight: 17,
    marginTop: 4
  }
});
