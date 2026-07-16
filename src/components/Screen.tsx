import React, { ReactNode } from "react";
import {
  Pressable,
  ScrollView,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle
} from "react-native";
import { ArrowLeft } from "lucide-react-native";

import { colors, radii, spacing } from "../theme";

type ScreenProps = {
  title: string;
  eyebrow?: string;
  subtitle?: string;
  children: ReactNode;
  onBack?: () => void;
  rightSlot?: ReactNode;
  contentStyle?: StyleProp<ViewStyle>;
};

export function Screen({
  title,
  eyebrow,
  subtitle,
  children,
  onBack,
  rightSlot,
  contentStyle
}: ScreenProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleRow}>
          {onBack ? (
            <Pressable onPress={onBack} style={styles.backButton} accessibilityLabel="Go back">
              <ArrowLeft size={20} color={colors.ink} strokeWidth={2.4} />
            </Pressable>
          ) : null}
          <View style={styles.titleBlock}>
            {eyebrow ? <Text style={styles.eyebrow}>{eyebrow}</Text> : null}
            <Text style={styles.title}>{title}</Text>
            {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
          </View>
        </View>
        {rightSlot}
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.content, contentStyle]}
      >
        {children}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  header: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: spacing.sm,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1
  },
  backButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: colors.card,
    alignItems: "center",
    justifyContent: "center",
    marginRight: spacing.sm
  },
  titleBlock: {
    flex: 1
  },
  eyebrow: {
    color: colors.info,
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 0,
    textTransform: "uppercase",
    marginBottom: 2
  },
  title: {
    color: colors.ink,
    fontSize: 28,
    lineHeight: 34,
    fontWeight: "800",
    letterSpacing: 0
  },
  subtitle: {
    color: colors.muted,
    fontSize: 14,
    lineHeight: 20,
    marginTop: spacing.xs
  },
  content: {
    paddingHorizontal: spacing.lg,
    paddingBottom: 120,
    gap: spacing.lg
  }
});
