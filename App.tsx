import React, { useMemo, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";

import { BottomNavigation } from "./src/components/BottomNavigation";
import { colors } from "./src/theme";
import { AppRoute, FamilyMember, TabRoute } from "./src/types";
import { familyMembers } from "./src/data/sampleData";
import { ActionsScreen } from "./src/screens/ActionsScreen";
import { FamilyScreen } from "./src/screens/FamilyScreen";
import { HomeDashboardScreen } from "./src/screens/HomeDashboardScreen";
import { InsightsScreen } from "./src/screens/InsightsScreen";
import { InsuranceOptimizerScreen } from "./src/screens/InsuranceOptimizerScreen";
import { MedicalVaultScreen } from "./src/screens/MedicalVaultScreen";
import { MemberProfileScreen } from "./src/screens/MemberProfileScreen";
import { PillboxLedgerScreen } from "./src/screens/PillboxLedgerScreen";
import { PrescriptionScannerScreen } from "./src/screens/PrescriptionScannerScreen";
import { VaccineIntelligenceScreen } from "./src/screens/VaccineIntelligenceScreen";

const tabForRoute: Record<AppRoute, TabRoute> = {
  home: "home",
  family: "family",
  member: "family",
  vault: "vault",
  actions: "actions",
  scanner: "actions",
  insurance: "actions",
  pillbox: "actions",
  vaccine: "actions",
  insights: "insights"
};

export default function App() {
  const [route, setRoute] = useState<AppRoute>("home");
  const [selectedMemberId, setSelectedMemberId] = useState("aarav");

  const selectedMember = useMemo<FamilyMember>(() => {
    return familyMembers.find((member) => member.id === selectedMemberId) ?? familyMembers[0];
  }, [selectedMemberId]);

  const openMember = (memberId: string) => {
    setSelectedMemberId(memberId);
    setRoute("member");
  };

  const activeTab = tabForRoute[route];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <View style={styles.shell}>
        {route === "home" && <HomeDashboardScreen onOpenMember={openMember} onNavigate={setRoute} />}
        {route === "family" && <FamilyScreen onOpenMember={openMember} />}
        {route === "member" && (
          <MemberProfileScreen
            member={selectedMember}
            onBack={() => setRoute("family")}
            onOpenVaccine={() => setRoute("vaccine")}
          />
        )}
        {route === "vault" && <MedicalVaultScreen onNavigate={setRoute} />}
        {route === "actions" && <ActionsScreen onNavigate={setRoute} />}
        {route === "scanner" && <PrescriptionScannerScreen onBack={() => setRoute("actions")} />}
        {route === "insurance" && <InsuranceOptimizerScreen onBack={() => setRoute("actions")} />}
        {route === "pillbox" && <PillboxLedgerScreen onBack={() => setRoute("actions")} />}
        {route === "vaccine" && <VaccineIntelligenceScreen onBack={() => setRoute("actions")} />}
        {route === "insights" && <InsightsScreen onNavigate={setRoute} />}
      </View>
      <BottomNavigation activeTab={activeTab} onChange={setRoute} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white
  },
  shell: {
    flex: 1,
    backgroundColor: colors.white
  }
});
