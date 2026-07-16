import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Camera, CheckCircle2, ScanLine, TriangleAlert } from "lucide-react-native";

import { Card } from "../components/Card";
import { ProgressBar } from "../components/ProgressBar";
import { Screen } from "../components/Screen";
import { SectionHeader } from "../components/SectionHeader";
import { extractedMedicines, scanChecks } from "../data/sampleData";
import { colors, radii, spacing } from "../theme";

type PrescriptionScannerScreenProps = {
  onBack: () => void;
};

export function PrescriptionScannerScreen({ onBack }: PrescriptionScannerScreenProps) {
  return (
    <Screen
      eyebrow="Prescription Scanner"
      title="Scan Rx"
      subtitle="OCR extraction with allergy and interaction review."
      onBack={onBack}
    >
      <Card elevated style={styles.scanCard}>
        <View style={styles.scanFrame}>
          <View style={styles.cornerTopLeft} />
          <View style={styles.cornerTopRight} />
          <View style={styles.cornerBottomLeft} />
          <View style={styles.cornerBottomRight} />
          <ScanLine size={52} color={colors.info} strokeWidth={1.9} />
          <Text style={styles.scanTitle}>Prescription detected</Text>
          <Text style={styles.scanMeta}>OCR confidence 94%</Text>
        </View>
        <Pressable style={styles.scanButton}>
          <Camera size={19} color={colors.white} strokeWidth={2.4} />
          <Text style={styles.scanButtonText}>Start New Scan</Text>
        </Pressable>
      </Card>

      <Card style={styles.stackCard}>
        <SectionHeader title="Medicine Extraction" caption="Structured fields from the scanned prescription." />
        {extractedMedicines.map((medicine) => (
          <View key={medicine.name} style={styles.medicineRow}>
            <View style={styles.medicineText}>
              <Text style={styles.medicineName}>{medicine.name}</Text>
              <Text style={styles.medicineMeta}>
                {medicine.strength} - {medicine.duration}
              </Text>
            </View>
            <View style={styles.confidenceBox}>
              <Text style={styles.confidence}>{medicine.confidence}%</Text>
            </View>
          </View>
        ))}
      </Card>

      <Card style={styles.stackCard}>
        <SectionHeader title="Safety Checks" caption="Allergy, dose, and drug interaction analysis." />
        {scanChecks.map((check) => {
          const isClear = check.level === "Clear";
          const tone = isClear ? colors.success : colors.warning;
          const Icon = isClear ? CheckCircle2 : TriangleAlert;

          return (
            <View key={check.label} style={styles.checkRow}>
              <View style={[styles.checkIcon, { backgroundColor: `${tone}20` }]}>
                <Icon size={20} color={tone} strokeWidth={2.4} />
              </View>
              <View style={styles.checkText}>
                <Text style={styles.checkLabel}>{check.label}</Text>
                <Text style={styles.checkResult}>{check.result}</Text>
              </View>
              <Text style={[styles.checkLevel, { color: tone }]}>{check.level}</Text>
            </View>
          );
        })}
      </Card>

      <Card style={styles.stackCard}>
        <SectionHeader title="Clinical Readiness" caption="Review queue before adding medicines." />
        <ProgressBar value={68} color={colors.warning} height={11} />
        <Text style={styles.readinessText}>
          Two items need caregiver or doctor confirmation before the prescription joins the pillbox ledger.
        </Text>
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  scanCard: {
    gap: spacing.md
  },
  scanFrame: {
    minHeight: 238,
    borderRadius: radii.lg,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden"
  },
  cornerTopLeft: {
    position: "absolute",
    left: 20,
    top: 20,
    width: 42,
    height: 42,
    borderTopWidth: 3,
    borderLeftWidth: 3,
    borderColor: colors.info,
    borderTopLeftRadius: 14
  },
  cornerTopRight: {
    position: "absolute",
    right: 20,
    top: 20,
    width: 42,
    height: 42,
    borderTopWidth: 3,
    borderRightWidth: 3,
    borderColor: colors.info,
    borderTopRightRadius: 14
  },
  cornerBottomLeft: {
    position: "absolute",
    left: 20,
    bottom: 20,
    width: 42,
    height: 42,
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    borderColor: colors.info,
    borderBottomLeftRadius: 14
  },
  cornerBottomRight: {
    position: "absolute",
    right: 20,
    bottom: 20,
    width: 42,
    height: 42,
    borderBottomWidth: 3,
    borderRightWidth: 3,
    borderColor: colors.info,
    borderBottomRightRadius: 14
  },
  scanTitle: {
    color: colors.ink,
    fontSize: 20,
    fontWeight: "900",
    marginTop: spacing.md
  },
  scanMeta: {
    color: colors.muted,
    fontSize: 13,
    fontWeight: "800",
    marginTop: 3
  },
  scanButton: {
    minHeight: 56,
    borderRadius: radii.lg,
    backgroundColor: colors.ink,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: spacing.sm
  },
  scanButtonText: {
    color: colors.white,
    fontSize: 15,
    fontWeight: "900"
  },
  stackCard: {
    gap: spacing.md
  },
  medicineRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: spacing.md,
    padding: spacing.md,
    borderRadius: radii.md,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border
  },
  medicineText: {
    flex: 1
  },
  medicineName: {
    color: colors.ink,
    fontSize: 15,
    fontWeight: "900"
  },
  medicineMeta: {
    color: colors.muted,
    fontSize: 12,
    marginTop: 3
  },
  confidenceBox: {
    borderRadius: radii.pill,
    backgroundColor: `${colors.success}20`,
    paddingHorizontal: spacing.sm,
    paddingVertical: 6
  },
  confidence: {
    color: colors.success,
    fontSize: 12,
    fontWeight: "900"
  },
  checkRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    paddingVertical: spacing.xs
  },
  checkIcon: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: "center",
    justifyContent: "center"
  },
  checkText: {
    flex: 1
  },
  checkLabel: {
    color: colors.ink,
    fontSize: 14,
    fontWeight: "900"
  },
  checkResult: {
    color: colors.muted,
    fontSize: 12,
    lineHeight: 17,
    marginTop: 2
  },
  checkLevel: {
    fontSize: 12,
    fontWeight: "900"
  },
  readinessText: {
    color: colors.muted,
    fontSize: 13,
    lineHeight: 20
  }
});
