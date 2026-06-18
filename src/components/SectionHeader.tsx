import React, { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";

import { colors, spacing } from "../theme";

type SectionHeaderProps = {
  title: string;
  caption?: string;
  action?: ReactNode;
};

export function SectionHeader({ title, caption, action }: SectionHeaderProps) {
  return (
    <View style={styles.row}>
      <View style={styles.textBlock}>
        <Text style={styles.title}>{title}</Text>
        {caption ? <Text style={styles.caption}>{caption}</Text> : null}
      </View>
      {action}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: spacing.md
  },
  textBlock: {
    flex: 1
  },
  title: {
    color: colors.ink,
    fontSize: 19,
    lineHeight: 24,
    fontWeight: "800",
    letterSpacing: 0
  },
  caption: {
    color: colors.muted,
    fontSize: 13,
    lineHeight: 18,
    marginTop: 3
  }
});
