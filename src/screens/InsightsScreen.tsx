import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { ArrowUpRight, Bot, LineChart } from "lucide-react-native";

import { Card } from "../components/Card";
import { MiniBarChart } from "../components/MiniBarChart";
import { Screen } from "../components/Screen";
import { SectionHeader } from "../components/SectionHeader";
import { StatCard } from "../components/StatCard";
import { insightCards, spendTrend } from "../data/sampleData";
import { colors, radii, spacing } from "../theme";
import type { AppRoute } from "../types";

type InsightsScreenProps = {
  onNavigate: (route: AppRoute) => void;
};

export function InsightsScreen({ onNavigate }: InsightsScreenProps) {
  return (
    <Screen
      eyebrow="Insights"
      title="Health Wealth"
      subtitle="Spend trends, risk predictions, and prevention economics."
      rightSlot={
        <Pressable style={styles.actionButton} onPress={() => onNavigate("insurance")}>
          <LineChart size={20} color={colors.ink} strokeWidth={2.4} />
        </Pressable>
      }
    >
      <Card elevated style={styles.chartCard}>
        <SectionHeader title="Healthcare Spend" caption="Blue is spend, green is covered amount." />
        <MiniBarChart points={spendTrend} />
        <View style={styles.chartFooter}>
          <Text style={styles.chartValue}>INR 95.1k</Text>
          <Text style={styles.chartNote}>6-month household spend</Text>
        </View>
      </Card>

      <View style={styles.statGrid}>
        {insightCards.slice(0, 4).map((item, index) => (
          <StatCard
            key={item.title}
            icon={item.icon}
            title={item.title}
            value={item.value}
            note={item.note}
            tint={index === 0 ? colors.warning : index === 1 ? colors.info : index === 2 ? colors.success : colors.genesis}
          />
        ))}
      </View>

      <Card style={styles.predictionCard}>
        <View style={styles.predictionTop}>
          <View style={styles.predictionIcon}>
            <Bot size={22} color={colors.white} strokeWidth={2.4} />
          </View>
          <View style={styles.predictionText}>
            <Text style={styles.predictionTitle}>Next Best Action</Text>
            <Text style={styles.predictionBody}>
              Book Aarav's MMR booster and reorder Dinesh's statin before policy OPD spend crosses 80%.
            </Text>
          </View>
          <ArrowUpRight size={20} color={colors.white} strokeWidth={2.4} />
        </View>
      </Card>

      <Card style={styles.trendCard}>
        <SectionHeader title="Predictions" caption="Forward-looking care and finance signals." />
        {insightCards.slice(4).map((item) => (
          <View key={item.title} style={styles.predictionRow}>
            <Text style={styles.predictionRowValue}>{item.value}</Text>
            <View style={styles.predictionRowText}>
              <Text style={styles.predictionRowTitle}>{item.title}</Text>
              <Text style={styles.predictionRowNote}>{item.note}</Text>
            </View>
          </View>
        ))}
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  actionButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center"
  },
  chartCard: {
    gap: spacing.md
  },
  chartFooter: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: spacing.md
  },
  chartValue: {
    color: colors.ink,
    fontSize: 28,
    fontWeight: "900",
    letterSpacing: 0
  },
  chartNote: {
    flex: 1,
    color: colors.muted,
    fontSize: 12,
    lineHeight: 18,
    textAlign: "right"
  },
  statGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.md
  },
  predictionCard: {
    backgroundColor: colors.ink
  },
  predictionTop: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md
  },
  predictionIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.info,
    alignItems: "center",
    justifyContent: "center"
  },
  predictionText: {
    flex: 1
  },
  predictionTitle: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "900"
  },
  predictionBody: {
    color: "#CBD5E1",
    fontSize: 12,
    lineHeight: 18,
    marginTop: 3
  },
  trendCard: {
    gap: spacing.md
  },
  predictionRow: {
    flexDirection: "row",
    gap: spacing.md,
    backgroundColor: colors.white,
    borderRadius: radii.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md
  },
  predictionRowValue: {
    width: 64,
    color: colors.info,
    fontSize: 20,
    fontWeight: "900"
  },
  predictionRowText: {
    flex: 1
  },
  predictionRowTitle: {
    color: colors.ink,
    fontSize: 14,
    fontWeight: "900"
  },
  predictionRowNote: {
    color: colors.muted,
    fontSize: 12,
    lineHeight: 18,
    marginTop: 3
  }
});
