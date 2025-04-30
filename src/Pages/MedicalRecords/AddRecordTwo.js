import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  Image,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import CustomButton from "../../components/Custom-Button/CustomButton";
import CustomSplash from "../../components/Custom-Splash/CustomSplash";
import Loader from "../../components/Loaders/Loaders";

const AddRecordTowComponent = ({ onBackPress }) => {
  const navigation = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState(true);

  return (
  <>
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
            <Text style={styles.title}>Add a record</Text>
          </View>
          <TouchableOpacity
            onPress={onBackPress}
            style={{
              width: "100%",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <View
              style={{
                width: "100%",
                alignItems: "center",
                flexDirection: "row",
                marginTop: 15,
              }}
            >
              <Image
                style={[styles.image, {}]}
                source={require("../../assets/addrecord/camera.png")}
              />
              <Text style={styles.subtitle}>Take a photo</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onBackPress}
            style={{
              width: "100%",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <View
              style={{
                width: "100%",
                alignItems: "center",
                flexDirection: "row",
                marginTop: 15,
              }}
            >
              <Image
                style={[styles.image, {}]}
                source={require("../../assets/addrecord/gallary.png")}
              />
              <Text style={styles.subtitle}>Upload from gallery</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onBackPress}
            style={{
              width: "100%",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <View
              style={{
                width: "100%",
                alignItems: "center",
                flexDirection: "row",
                marginTop: 15,
                marginBottom: 30,
              }}
            >
              <Image
                style={[styles.image, {}]}
                source={require("../../assets/addrecord/file.png")}
              />
              <Text style={styles.subtitle}>Upload files</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
    <Loader/>
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
    width: 100,
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
    textAlign: "left",
    marginLeft: 10,
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
const AddRecordTow = ({ onBackPress }) => {
  return (
    <>
      <CustomSplash
        backIcon={require("../../assets/back-arrow.png")}
        backText="Medical Records"
        onBackPress={() => navigation.goBack()}
        Img={require("../../assets/MedicalRecordOne.png")}
        imgbackColor="#C6EFE5"
        bigHeading="Add a medical record."
        smallHeading="A detailed health history helps a doctor diagnose you btter."
        fontSize={20}
        buttonText="Add a record"
        onButtonPress={() => console.log("")}
        backgroundColor="#C6EFE5"
      />
      <AddRecordTowComponent />
    </>
  );
};

export default AddRecordTow;
