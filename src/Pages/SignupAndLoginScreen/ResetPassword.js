import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Dimensions,
} from "react-native";
import CustomInput from "../../components/Custom-Input/CustomInput";
import CustomButton from "../../components/Custom-Button/CustomButton";

const ResetPassword = ({ onButtonPress }) => {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [email, setEmail] = useState("");

  const handleContinue = () => {
    console.log("Email entered:", email);
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.indicator} />

            <View style={{ width: "100%", alignItems: "flex-start" }}>
              <Text style={styles.title}>Reset password</Text>
            </View>

            <View style={{ width: "100%", alignItems: "flex-start" }}>
              <Text style={styles.subtitle}>
                Set the new password for your account so you can login and
                access all the features.
              </Text>
            </View>

            <CustomInput
              isPassword
              eyeicon={"google"}
              iconPosition={"end"}
              placeholder="New Password"
              fontSize={16}
              fontColor="#A0A3B5"
            />
            <CustomInput
              isPassword
              eyeicon={"google"}
              iconPosition={"end"}
              placeholder="Re-enter Password"
              fontSize={16}
              fontColor="#A0A3B5"
            />

            <View style={styles.continueButton}>
              <CustomButton onPress={onButtonPress} buttonText={"Udate Password"} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },

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
    paddingBottom: 40,
    width: "100%",
    alignItems: "center",
  },
  indicator: {
    width: 40,
    height: 5,
    backgroundColor: "#ccc",
    textAlign: "center",
    borderRadius: 2.5,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "left",
    color: "black",
  },
  subtitle: {
    fontSize: 14,
    color: "#677294",
    textAlign: "left",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
  },
  continueButton: {
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
});

export default ResetPassword;
