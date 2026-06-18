import React from "react";
import { Pressable, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import Svg, { Line } from "react-native-svg";

import { colors, radii, roleColor, shadows, spacing } from "../theme";
import type { FamilyMember } from "../types";

const graphLayout = {
  dinesh: { x: 25, y: 14 },
  sunita: { x: 75, y: 14 },
  rahul: { x: 36, y: 48 },
  priya: { x: 64, y: 48 },
  aarav: { x: 50, y: 82 }
};

type FamilyGraphProps = {
  members: FamilyMember[];
  onOpenMember: (memberId: string) => void;
};

export function FamilyGraph({ members, onOpenMember }: FamilyGraphProps) {
  const { width } = useWindowDimensions();
  const graphWidth = Math.min(width - spacing.lg * 2, 420);
  const graphHeight = 390;

  return (
    <View style={[styles.graph, { width: graphWidth, height: graphHeight }]}>
      <Svg width="100%" height="100%" viewBox="0 0 100 100" style={StyleSheet.absoluteFill}>
        <Line x1="25" y1="14" x2="36" y2="48" stroke={colors.borderStrong} strokeWidth="1.4" />
        <Line x1="75" y1="14" x2="36" y2="48" stroke={colors.borderStrong} strokeWidth="1.4" />
        <Line x1="36" y1="48" x2="64" y2="48" stroke={colors.borderStrong} strokeWidth="1.4" />
        <Line x1="50" y1="48" x2="50" y2="82" stroke={colors.borderStrong} strokeWidth="1.4" />
      </Svg>
      {members.map((member) => {
        const position = graphLayout[member.id as keyof typeof graphLayout];
        const tint = roleColor[member.role];
        const left = (position.x / 100) * graphWidth;
        const top = (position.y / 100) * graphHeight;

        return (
          <Pressable
            key={member.id}
            onPress={() => onOpenMember(member.id)}
            style={[
              styles.node,
              {
                left,
                top,
                borderColor: tint,
                transform: [{ translateX: -48 }, { translateY: -32 }]
              }
            ]}
          >
            <View style={[styles.nodeAvatar, { backgroundColor: tint }]}>
              <Text style={styles.nodeInitials}>{member.avatarInitials}</Text>
            </View>
            <Text style={styles.nodeName} numberOfLines={1}>
              {member.name}
            </Text>
            <Text style={styles.nodeRole} numberOfLines={1}>
              {member.relation}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  graph: {
    width: "100%",
    alignSelf: "center",
    backgroundColor: colors.card,
    borderRadius: radii.lg,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: "hidden",
    ...shadows.faint
  },
  node: {
    position: "absolute",
    width: 96,
    minHeight: 76,
    borderRadius: 24,
    borderWidth: 1.5,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    padding: 8
  },
  nodeAvatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 4
  },
  nodeInitials: {
    color: colors.white,
    fontSize: 11,
    fontWeight: "900"
  },
  nodeName: {
    color: colors.ink,
    fontSize: 13,
    fontWeight: "900",
    letterSpacing: 0
  },
  nodeRole: {
    color: colors.muted,
    fontSize: 10,
    fontWeight: "800",
    marginTop: 1
  }
});
