import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";

import CustomInput from "../../components/Custom-Input/CustomInput";
import CustomButton from "../../components/Custom-Button/CustomButton";

const ForgotPasswordModal = ({ isModalVisible, setIsModalVisible }) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");

  const handleContinue = () => {
    console.log("Email entered:", email);
    // setIsModalVisible(false);
    navigation.navigate("FourDigitScreen");
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Modal
      visible={isModalVisible}
      transparent
      animationType="slide"
      onRequestClose={handleCancel}
    >
      <TouchableOpacity style={styles.modalOverlay} onPress={handleCancel}>
        <TouchableOpacity activeOpacity={1} style={styles.modalContainer}>
          <View style={styles.indicator} />
          <Text style={styles.title}>Forgot password</Text>
          <Text style={styles.subtitle}>
            Enter your email for the verification process. We will send a
            4-digit code to your email.
          </Text>

          <CustomInput
            placeholder="Email"
            isEmailValid
            fontSize={16}
            fontColor="#A0A3B5"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />

          <View style={styles.continueButton}>
            <CustomButton
              onButtonPress={handleContinue}
              buttonText={"Continue"}
            />
          </View>

          {/* <TouchableOpacity
            style={styles.cancelButton}
            onButtonPress={handleCancel}
          >
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity> */}
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "flex-end",
  },
  modalContainer: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    paddingBottom: 40,
    width: "100%",
    alignItems: "center",
  },
  indicator: {
    width: 40,
    height: 5,
    backgroundColor: "#ccc",
    borderRadius: 2.5,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#677294",
    marginBottom: 20,
    textAlign: "center",
  },
  continueButton: {
    width: "100%",
    marginTop: 20,
  },
  cancelButton: {
    marginTop: 15,
  },
  cancelText: {
    color: "#677294",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default ForgotPasswordModal;
