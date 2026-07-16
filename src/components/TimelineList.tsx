import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { colors, radii, spacing } from "../theme";
import type { TimelineItem, TimelineStatus } from "../types";

const statusTone: Record<TimelineStatus, string> = {
  complete: colors.success,
  due: colors.danger,
  upcoming: colors.info,
  review: colors.warning
};

type TimelineListProps = {
  items: TimelineItem[];
};

export function TimelineList({ items }: TimelineListProps) {
  return (
    <View style={styles.list}>
      {items.map((item, index) => (
        <View key={item.id} style={styles.row}>
          <View style={styles.markerColumn}>
            <View style={[styles.marker, { backgroundColor: statusTone[item.status] }]} />
            {index < items.length - 1 ? <View style={styles.line} /> : null}
          </View>
          <View style={styles.itemBody}>
            <View style={styles.itemTop}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.date}>{item.date}</Text>
            </View>
            <Text style={styles.owner}>{item.owner}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    gap: 0
  },
  row: {
    flexDirection: "row",
    minHeight: 62
  },
  markerColumn: {
    width: 28,
    alignItems: "center"
  },
  marker: {
    width: 11,
    height: 11,
    borderRadius: 6,
    marginTop: 8
  },
  line: {
    width: 2,
    flex: 1,
    backgroundColor: colors.border,
    marginTop: 4
  },
  itemBody: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: radii.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    marginBottom: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border
  },
  itemTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: spacing.sm
  },
  title: {
    flex: 1,
    color: colors.ink,
    fontSize: 14,
    fontWeight: "900",
    letterSpacing: 0
  },
  date: {
    color: colors.info,
    fontSize: 12,
    fontWeight: "900"
  },
  owner: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: "700",
    marginTop: 3
  }
});
