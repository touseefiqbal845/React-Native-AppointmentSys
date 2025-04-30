import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import CustomButton from "../../components/Custom-Button/CustomButton";
import Loader from "../../components/Loaders/Loaders";

const FourDigit = ({ onSubmitCode,isModalVisible, setIsModalVisible, setIsResetPasswordModalVisible }) => {
  const [code, setCode] = useState(["", "", "", ""]);
  const navigation = useNavigation();

  const handleInputChange = (text, index) => {
    let newCode = [...code];
    newCode[index] = text;
    setCode(newCode);
    if (text && index < 3) {
      inputs[index + 1].focus();
    }
  };

  const handleContinue = () => {
    setIsModalVisible(false);  
    setIsResetPasswordModalVisible(true)
  }

  const inputs = [];

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Modal
          visible={isModalVisible}
          transparent
          animationType="slide"
          onRequestClose={() => setIsModalVisible(false)}
        >
            <TouchableOpacity style={styles.modalOverlay} onPress={() => setIsModalVisible(false)} >
           <View style={styles.modalContainer}>
            <View style={styles.indicator} />
            <View style={{ width: "100%", alignItems: "flex-start" }}>
              <Text style={styles.title}>Enter 4 Digits Code</Text>
            </View>
            <View style={{ width: "100%", alignItems: "flex-start" }}>
              <Text style={styles.subtitle}>
                Enter the 4-digit code that you received on your email.
              </Text>
            </View>
            <View style={styles.codeContainer}>
              {code.map((digit, index) => (
                <TextInput
                  key={index}
                  ref={(ref) => (inputs[index] = ref)}
                  value={digit}
                  onChangeText={(text) => handleInputChange(text, index)}
                  maxLength={1}
                  keyboardType="number-pad"
                  style={styles.input}
                />
              ))}
            </View>

            <CustomButton
              buttonText="Continue"
              onPress={() => {
                onSubmitCode(code.join(""));
                setIsModalVisible(false);
              }}
              onButtonPress={handleContinue}
            />
          </View>
        </TouchableOpacity>
      </Modal>
      <Loader />
    </>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
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
    textAlign: "center",
    marginBottom: 20,
  },
  codeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 30,
  },
  input: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    textAlign: "center",
    fontSize: 18,
    color: "#000",
  },
});

export default FourDigit;
