import React, { useMemo, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { FileText, Search, UploadCloud } from "lucide-react-native";

import { Card } from "../components/Card";
import { Screen } from "../components/Screen";
import { SectionHeader } from "../components/SectionHeader";
import { vaultDocuments } from "../data/sampleData";
import { colors, radii, spacing } from "../theme";
import type { AppRoute, VaultDocument } from "../types";

const categories: Array<VaultDocument["category"] | "All"> = [
  "All",
  "Reports",
  "Insurance",
  "Prescriptions",
  "Vaccines",
  "Bills"
];

type MedicalVaultScreenProps = {
  onNavigate: (route: AppRoute) => void;
};

export function MedicalVaultScreen({ onNavigate }: MedicalVaultScreenProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<VaultDocument["category"] | "All">("All");

  const filteredDocuments = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return vaultDocuments.filter((document) => {
      const matchesCategory = category === "All" || document.category === category;
      const haystack = [
        document.title,
        document.owner,
        document.category,
        ...document.tags
      ]
        .join(" ")
        .toLowerCase();

      return matchesCategory && (!normalizedQuery || haystack.includes(normalizedQuery));
    });
  }, [category, query]);

  return (
    <Screen
      eyebrow="Medical Vault"
      title="Health Records"
      subtitle="Searchable documents, categories, prescriptions, and policies."
      rightSlot={
        <Pressable style={styles.uploadButton} onPress={() => onNavigate("scanner")}>
          <UploadCloud size={20} color={colors.ink} strokeWidth={2.4} />
        </Pressable>
      }
    >
      <View style={styles.searchBox}>
        <Search size={19} color={colors.muted} strokeWidth={2.4} />
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder="Search records"
          placeholderTextColor={colors.subtle}
          style={styles.searchInput}
        />
      </View>

      <View style={styles.categoryRow}>
        {categories.map((item) => {
          const selected = item === category;

          return (
            <Pressable
              key={item}
              onPress={() => setCategory(item)}
              style={[styles.categoryChip, selected && styles.categoryChipActive]}
            >
              <Text style={[styles.categoryText, selected && styles.categoryTextActive]}>{item}</Text>
            </Pressable>
          );
        })}
      </View>

      <Card style={styles.documentCard}>
        <SectionHeader
          title="Documents"
          caption={`${filteredDocuments.length} records matched`}
        />
        {filteredDocuments.map((document) => (
          <View key={document.id} style={styles.documentRow}>
            <View style={styles.documentIcon}>
              <FileText size={20} color={colors.info} strokeWidth={2.4} />
            </View>
            <View style={styles.documentText}>
              <Text style={styles.documentTitle}>{document.title}</Text>
              <Text style={styles.documentMeta}>
                {document.owner} - {document.category} - {document.date}
              </Text>
              <View style={styles.tagRow}>
                {document.tags.map((tag) => (
                  <View key={tag} style={styles.tag}>
                    <Text style={styles.tagText}>{tag}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        ))}
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  uploadButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center"
  },
  searchBox: {
    minHeight: 56,
    borderRadius: radii.lg,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    paddingHorizontal: spacing.md
  },
  searchInput: {
    flex: 1,
    color: colors.ink,
    fontSize: 15,
    fontWeight: "700"
  },
  categoryRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm
  },
  categoryChip: {
    borderRadius: radii.pill,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing.md,
    paddingVertical: 9
  },
  categoryChipActive: {
    backgroundColor: colors.ink,
    borderColor: colors.ink
  },
  categoryText: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: "900"
  },
  categoryTextActive: {
    color: colors.white
  },
  documentCard: {
    gap: spacing.md
  },
  documentRow: {
    flexDirection: "row",
    gap: spacing.md,
    backgroundColor: colors.white,
    borderRadius: radii.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md
  },
  documentIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: `${colors.info}18`,
    alignItems: "center",
    justifyContent: "center"
  },
  documentText: {
    flex: 1,
    gap: 5
  },
  documentTitle: {
    color: colors.ink,
    fontSize: 15,
    lineHeight: 20,
    fontWeight: "900"
  },
  documentMeta: {
    color: colors.muted,
    fontSize: 12,
    lineHeight: 17
  },
  tagRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6
  },
  tag: {
    backgroundColor: colors.card,
    borderRadius: radii.pill,
    paddingHorizontal: 8,
    paddingVertical: 4
  },
  tagText: {
    color: colors.muted,
    fontSize: 10,
    fontWeight: "800"
  }
});
