import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { BarChart3, Home, Sparkles, UsersRound, Vault } from "lucide-react-native";

import { colors, radii, shadows, spacing } from "../theme";
import type { TabRoute } from "../types";

const tabs = [
  { id: "home", label: "Home", icon: Home },
  { id: "family", label: "Family", icon: UsersRound },
  { id: "vault", label: "Vault", icon: Vault },
  { id: "actions", label: "Actions", icon: Sparkles },
  { id: "insights", label: "Insights", icon: BarChart3 }
] as const;

type BottomNavigationProps = {
  activeTab: TabRoute;
  onChange: (tab: TabRoute) => void;
};

export function BottomNavigation({ activeTab, onChange }: BottomNavigationProps) {
  return (
    <View style={styles.wrap}>
      <View style={styles.nav}>
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;

          return (
            <Pressable
              key={tab.id}
              onPress={() => onChange(tab.id)}
              style={[styles.item, isActive && styles.itemActive]}
              accessibilityLabel={tab.label}
            >
              <Icon
                size={21}
                color={isActive ? colors.white : colors.muted}
                strokeWidth={2.3}
              />
              <Text style={[styles.label, isActive && styles.labelActive]} numberOfLines={1}>
                {tab.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: colors.white,
    paddingHorizontal: spacing.md,
    paddingTop: spacing.sm,
    paddingBottom: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.border
  },
  nav: {
    minHeight: 68,
    borderRadius: radii.lg,
    backgroundColor: colors.card,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8,
    ...shadows.faint
  },
  item: {
    flex: 1,
    minHeight: 52,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    gap: 4
  },
  itemActive: {
    backgroundColor: colors.ink
  },
  label: {
    color: colors.muted,
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 0
  },
  labelActive: {
    color: colors.white
  }
});
