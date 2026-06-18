import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Svg, { Circle } from "react-native-svg";

import { colors } from "../theme";

type HealthRingProps = {
  value: number;
  label: string;
  color: string;
  size?: number;
  stroke?: number;
};

export function HealthRing({ value, label, color, size = 88, stroke = 9 }: HealthRingProps) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = circumference - (Math.max(0, Math.min(value, 100)) / 100) * circumference;

  return (
    <View style={[styles.container, { width: size }]}>
      <View style={[styles.ringBox, { width: size, height: size }]}>
        <Svg width={size} height={size}>
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={colors.border}
            strokeWidth={stroke}
            fill="transparent"
          />
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={color}
            strokeWidth={stroke}
            fill="transparent"
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={progress}
            strokeLinecap="round"
            rotation="-90"
            originX={size / 2}
            originY={size / 2}
          />
        </Svg>
        <View style={styles.valueBox}>
          <Text style={styles.value}>{value}</Text>
        </View>
      </View>
      <Text style={styles.label} numberOfLines={1}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },
  ringBox: {
    alignItems: "center",
    justifyContent: "center"
  },
  valueBox: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center"
  },
  value: {
    color: colors.ink,
    fontWeight: "900",
    fontSize: 19,
    letterSpacing: 0
  },
  label: {
    marginTop: 6,
    color: colors.muted,
    fontSize: 12,
    fontWeight: "700"
  }
});
