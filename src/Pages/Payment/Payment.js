import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import BackgroundWrapper from "../SplashScreen/BackgroundWrapper";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import { customStyles } from "../../fonts/fontSetting";

const paymentsData = [
  { id: 1, title: "Consultation with Dr. Ali", amount: "500 PKR", status: "Delivered", date: "20 April 2025", method: "Cash" },
  { id: 2, title: "Follow-up Appointment", amount: "300 PKR", status: "Pending", date: "22 April 2025", method: "Online" },
  { id: 3, title: "Health Report Service", amount: "800 PKR", status: "Delivered", date: "25 April 2025", method: "Card" },
  { id: 4, title: "Lab Blood Test", amount: "1200 PKR", status: "Pending", date: "26 April 2025", method: "Cash" },
];

export default function PaymentsScreen({ navigation }) {
  return (
    <>
      <BackgroundWrapper>
        <CustomHeader
          backText={"Payments"}
          onBackPress={() => navigation.goBack()}
        />
        <ScrollView style={styles.container}>
          <Text style={styles.title}>Payments History</Text>

          {paymentsData.map((payment) => (
            <View key={payment.id} style={styles.paymentCard}>
              <View style={styles.row}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.paymentTitle}>{payment.title}</Text>
                  <Text style={styles.date}>{payment.date} • {payment.method}</Text>
                </View>
                <Text style={styles.amount}>{payment.amount}</Text>
              </View>

              <View style={styles.statusRow}>
                <View
                  style={[
                    styles.statusBadge,
                    payment.status === "Delivered" ? styles.delivered : styles.pending,
                  ]}
                >
                  <Text style={styles.statusText}>{payment.status}</Text>
                </View>
              </View>
            </View>
          ))}
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
    fontSize: customStyles.fontSizeLarge,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#1E1E1E",
  },
  paymentCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  paymentTitle: {
    fontSize: customStyles.fontSizeMedium,
    color: "#333333",
    fontWeight: "600",
    marginBottom: 4,
  },
  date: {
    fontSize: 13,
    color: "#888888",
  },
  amount: {
    fontSize: customStyles.fontSizeMedium,
    fontWeight: "bold",
    color: customStyles.colorPrimary,
  },
  statusRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  statusBadge: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  statusText: {
    fontSize: 12,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  delivered: {
    backgroundColor: "#28A745",
  },
  pending: {
    backgroundColor: "#FFC107",
  },
});
