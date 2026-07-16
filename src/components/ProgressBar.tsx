import React from "react";
import { StyleSheet, View } from "react-native";

import { colors, radii } from "../theme";

type ProgressBarProps = {
  value: number;
  color?: string;
  height?: number;
};

export function ProgressBar({ value, color = colors.info, height = 9 }: ProgressBarProps) {
  return (
    <View style={[styles.track, { height, borderRadius: height / 2 }]}>
      <View
        style={[
          styles.fill,
          {
            width: `${Math.max(0, Math.min(value, 100))}%`,
            backgroundColor: color,
            borderRadius: height / 2
          }
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    width: "100%",
    backgroundColor: colors.border,
    overflow: "hidden"
  },
  fill: {
    height: "100%",
    minWidth: radii.sm
  }
});
