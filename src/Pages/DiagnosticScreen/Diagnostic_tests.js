import React, { useState } from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BackgroundWrapper from "../SplashScreen/BackgroundWrapper";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import CustomButton from "../../components/Custom-Button/CustomButton";
import Loader from "../../components/Loaders/Loaders";

const DiagnosticTestScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const handleBookTest = () => {
    setModalVisible(true);
  };

  const handleEditTestBooking = () => {
    setModalVisible(false);
    console.log("Edit booking");
  };

  const handleDone = () => {
    setModalVisible(false);
    console.log("Test booked");
  };

  return (
    <>
      <BackgroundWrapper>
        <CustomHeader
          backText={"Diagnostic Test"}
          onBackPress={() => navigation.goBack()}
        />
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Image source={require("../../assets/test1.png")} style={styles.cardImage} />
            <Text style={styles.testName}>Blood Test</Text>
            <Text style={styles.testDescription}>Comprehensive blood test to evaluate overall health.</Text>
            <View style={styles.cardFooter}>
              <Text style={styles.price}>₹500</Text>
              <Text style={styles.discount}>20% OF</Text>
            </View>
          </View>

          <View style={styles.offerContainer}>
            <Text style={styles.offerTitle}>Exclusive Offer</Text>
            <Text style={styles.offerText}>Get an additional 10% discount on your first test booking.</Text>
          </View>

          <CustomButton
            width={"80%"}
            buttonText={"Book Test"}
            onButtonPress={handleBookTest}
            backgroundColor={"#0EBE7F"}
            borderWidth={0}
            textcolor={"#fff"}
            isPressedcolor={"#0A9C67"}
          />
        </View>
      </BackgroundWrapper>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Thank you! Your test is booked.</Text>
            <Text style={styles.modalText}>You have booked the Blood Test on February 21, at 02:00 PM.</Text>
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity onPress={handleDone} style={styles.modalButton}>
                <Text style={styles.modalButtonText}>Done</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleEditTestBooking} style={[styles.modalButton, styles.editButton]}>
                <Text style={styles.modalButtonText}>Edit your test booking</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Loader />
    </>
  );
};

export default DiagnosticTestScreen;

const styles = StyleSheet.create({
  cardContainer: {
    padding: 16,
    alignItems: "center",
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    alignItems: "center",
    width: "90%",
    marginBottom: 20,
  },
  cardImage: {
    width: 150,
    height: 150,
    borderRadius: 12,
    marginBottom: 15,
  },
  testName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  testDescription: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    marginBottom: 15,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0EBE7F",
  },
  discount: {
    fontSize: 14,
    color: "#FF6347",
    fontWeight: "600",
  },
  offerContainer: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    width: "90%",
    marginBottom: 20,
  },
  offerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  offerText: {
    fontSize: 14,
    color: "#555",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    width: "80%",
    alignItems: "center",
    elevation: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
  modalText: {
    fontSize: 16,
    textAlign: "center",
    color: "#555",
    marginBottom: 25,
  },
  modalButtonContainer: {
    width: "100%",
    alignItems: "center",
  },
  modalButton: {
    backgroundColor: "#0EBE7F",
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
    width: "80%",
    alignItems: "center",
  },
  modalButtonText: {
    color: "white",
    fontSize: 16,
  },
  editButton: {
    backgroundColor: "#f5a623",
  },
});
