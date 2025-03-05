import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Image,
  Text,
  Animated,
  TouchableOpacity,
  Modal,
} from "react-native";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import ImageUploader from "./PhotoUploader";
import CustomButton from "../../components/Custom-Button/CustomButton";
import Icon from "react-native-vector-icons/MaterialIcons";

const AddRecordOne = ({ onBackPress, onButtonPress, buttonText }) => {
  const [isModalVisible, setIsModalVisible] = useState(true);

  return (
    <>
      <CustomHeader
        backText={"Add Records"}
        onBackPress={() => console.log("Back pressed")}
      />

      <View
        style={{
          flex: 1,
          // backgroundColor: "white",
        }}
      >
        <ImageUploader />

        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={{ width: "100%" }}>
              <Text style={styles.title}>Record for</Text>
            </View>

            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <View>
                <Text style={styles.subtitle}>Abdullah Mamun</Text>
              </View>
              <View>
                <TouchableOpacity>
                  <Icon name="facebook" size={24} color="#3b5998" />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.divider} />

            <View style={{ width: "100%" }}>
              <Text style={styles.title}>Type of record</Text>
            </View>

            <View
              style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              {Array(3)
                .fill(null)
                .map((_, index) => (
                  <TouchableOpacity
                    key={index}
                    style={{
                      alignItems: "center",
                      // padding: 10,
                      marginRight: 50,
                      borderRadius: 10,
                    }}
                  >
                    <Icon name="facebook" size={24} color="#3b5998" />
                    <Text style={styles.reporttitle}>Report</Text>
                  </TouchableOpacity>
                ))}
            </View>

            <View style={styles.divider} />
            <View style={{ width: "100%" }}>
              <Text style={styles.title}>Record created on</Text>
            </View>

            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <View>
                <Text style={styles.subtitle}>27 Feb, 2021</Text>
              </View>
              <View>
                <TouchableOpacity>
                  <Icon name="facebook" size={24} color="#3b5998" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.divider} />

            <View style={styles.uploadButton}>
              <CustomButton
                onPress={onButtonPress}
                buttonText={"Upload record"}
              />
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default AddRecordOne;

const styles = StyleSheet.create({
  header: {},

  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modalContainer: {
    // backgroundColor: "#fff",
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
  touchableOpacitygap: {
    flex: 1,
    gap: 15,
  },
  title: {
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 10,
    textAlign: "left",
    color: "black",
  },
  subtitle: {
    fontSize: 18,
    color: "#0EBE7F",
    textAlign: "left",
  },
  reporttitle: {
    fontSize: 12,
    color: "#677294",
    textAlign: "left",
  },
  uploadButton: {
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 20,
  },
});
