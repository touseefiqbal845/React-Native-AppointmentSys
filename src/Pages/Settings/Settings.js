import React, { useState } from "react";
import {
  View,
  Text,
  Switch,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import BackgroundWrapper from "../SplashScreen/BackgroundWrapper";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import { customStyles } from "../../fonts/fontSetting";

export default function SettingsScreen() {
  const navigation = useNavigation();

  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [language, setLanguage] = useState("English");
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const toggleNotifications = () => setNotificationsEnabled((prev) => !prev);
  const toggleDarkMode = () => setDarkModeEnabled((prev) => !prev);

  const handleChangePassword = () => {
    Alert.alert(
      "Password Change Limit",
      "You can change your password after next 15 days.",
      [{ text: "OK" }]
    );
  };
  const handleLanguageChange = (newLang) => {
    setLanguage(newLang);
  };

  const handleTermsAndConditions = () => {
    navigation.navigate("PrivacyPolicyScreen");
  };

  const handlePrivacyPolicy = () => {
    navigation.navigate("PrivacyPolicyScreen");
  };

  return (
    <BackgroundWrapper>
      <CustomHeader
        backText={"Settings"}
        onBackPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Settings</Text>

        <View style={styles.settingItem}>
          <Text style={styles.settingTitle}>Notifications</Text>
          <Switch
            value={notificationsEnabled}
            onValueChange={toggleNotifications}
            trackColor={{ false: "#767577", true: customStyles.colorPrimary }}
            thumbColor={notificationsEnabled ? "#fff" : "#f4f3f4"}
          />
        </View>

        <View style={styles.settingItem}>
          <Text style={styles.settingTitle}>Dark Mode</Text>
          <Switch
            value={darkModeEnabled}
            onValueChange={toggleDarkMode}
            trackColor={{ false: "#767577", true: customStyles.colorPrimary }}
            thumbColor={darkModeEnabled ? "#fff" : "#f4f3f4"}
          />
        </View>

        <TouchableOpacity
          style={styles.settingItem}
          onPress={handleChangePassword}
        >
          <Text style={styles.settingTitle}>Change Password</Text>
        </TouchableOpacity>

        <View style={styles.settingItem}>
          <Text style={styles.settingTitle}>Language</Text>
          <View style={styles.languageOptions}>
            <TouchableOpacity
              style={[
                styles.languageButton,
                language === "English" && styles.selectedLanguage,
              ]}
              onPress={() => handleLanguageChange("English")}
            >
              <Text style={styles.languageText}>English</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.languageButton,
                language === "Arabic" && styles.selectedLanguage,
              ]}
              onPress={() => handleLanguageChange("Arabic")}
            >
              <Text style={styles.languageText}>Arabic</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={styles.settingItem}
          onPress={handleTermsAndConditions}
        >
          <Text style={styles.settingTitle}>Terms and Conditions</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.settingItem}
          onPress={handlePrivacyPolicy}
        >
          <Text style={styles.settingTitle}>Privacy Policy</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingTitle}>About Us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingTitle}>Help & Support</Text>
        </TouchableOpacity>
      </View>
    </BackgroundWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    padding: 20,
  },
  title: {
    fontSize: customStyles.fontSizeLarge,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#1E1E1E",
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  settingTitle: {
    fontSize: customStyles.fontSizeMedium,
    fontWeight: "600",
    color: "#333",
  },
  languageOptions: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  languageButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginRight: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  selectedLanguage: {
    backgroundColor: customStyles.colorPrimary,
    borderColor: customStyles.colorPrimary,
  },
  languageText: {
    fontSize: customStyles.fontSizeMedium,
    color: "#333",
  },
});
