import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import BackgroundWrapper from "../SplashScreen/BackgroundWrapper";
import CustomHeader from "../../components/CustomHeader/CustomHeader";

export default function PrivacyPolicyScreen({ navigation }) {
  return (
    <>
    
      <BackgroundWrapper>
      <CustomHeader
        backText={"Privacy Policy"}
        onBackPress={() => navigation.goBack()}
      />
        <ScrollView style={styles.container}>
          <Text style={styles.title}>Doctor Hunt App's Privacy Policy</Text>

          <Text style={styles.section}>
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested.
          </Text>

          <Text style={styles.bulletTitle}>Key Points:</Text>

          <View style={styles.bulletContainer}>
            <Text style={styles.bulletPoint}>
              • Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
              Malorum."
            </Text>
            <Text style={styles.bulletPoint}>
              • The point of using Lorem Ipsum is that it has a more natural
              distribution of letters.
            </Text>
            <Text style={styles.bulletPoint}>
              • It is a long established fact that a reader will be distracted
              by readable content.
            </Text>
          </View>

          <Text style={styles.section}>
            The point of using Lorem Ipsum is that it has a more natural layout
            compared to using just "Content here, content here."
          </Text>
          
        </ScrollView>
      </BackgroundWrapper>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent", 
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#1E1E1E",
  },
  section: {
    fontSize: 16,
    color: "#333333",
    marginBottom: 20,
    lineHeight: 22,
  },
  bulletTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
    color: "#1E1E1E",
  },
  bulletContainer: {
    marginLeft: 10,
    marginBottom: 20,
  },
  bulletPoint: {
    fontSize: 16,
    color: "#555555",
    marginBottom: 10,
    lineHeight: 22,
  },
});
