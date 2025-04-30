import React, { useState } from "react";
import { FlatList, View, StyleSheet, Text, Modal, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import DoctorBio from "../../components/Doctors-Bio/DoctorBio";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import singleDoctor from "../../helpers/SingleDoctorApi";
import CustomButton from "../../components/Custom-Button/CustomButton";
import { buttonData, slotData } from "../../helpers/slotsDataApi";
import BackgroundWrapper from "../SplashScreen/BackgroundWrapper";
import Loader from "../../components/Loaders/Loaders";

const SelectTimeTwo = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const handleSlotSelection = () => {
    setModalVisible(true);
  };

  const handleEditAppointment = () => {
    setModalVisible(false);
    console.log("Edit appointment");
  };

  const handleDone = () => {
    setModalVisible(false);
    console.log("Done");
  };

  return (
    <>
      <BackgroundWrapper>
        <CustomHeader
          backText={"Select Time"}
          onBackPress={() => navigation.goBack()}
        />
        <View style={styles.DoctorBiocontainer}>
          <DoctorBio
            doctor={singleDoctor}
            onButtonPress={() => console.log("Button Pressed")}
            OnlyRating={true}
            exp={true}
          />
        </View>

        <View style={styles.FlatListcontainer}>
          <FlatList
            data={buttonData}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CustomButton
                width={"auto"}
                buttonText={item.date}
                smallTextPermission={item.availability}
                onButtonPress={() => handleSlotSelection()}
                textcolor={"#000000"}
                backgroundColor={"transparent"}
                borderColor={"#6772941A"}
                borderWidth={1}
                isPressedcolor={"#0EBE7F"}
              />
            )}
            ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
          />
        </View>
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.dateText}>Today, 23 Feb</Text>
          </View>

          <View style={styles.textdaysContainer}>
            <Text style={styles.availabilityText}>Afternoon 7 slots</Text>
          </View>

          <View style={styles.slotsContainer}>
            <FlatList
              data={slotData}
              numColumns={3}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <CustomButton
                  width={"auto"}
                  buttonText={item.time}
                  onButtonPress={() => handleSlotSelection()}
                  textcolor={"#0EBE7F"}
                  backgroundColor={"#0EBE7F14"}
                  borderColor={""}
                  borderWidth={0}
                  isPressedcolor={"#0EBE7F"}
                />
              )}
              columnWrapperStyle={styles.rowWrapper}
            />
          </View>

          <View style={styles.textdaysContainer}>
            <Text style={styles.availabilityText}>Evening 5 slots</Text>
          </View>

          <View style={styles.slotsContainer}>
            <FlatList
              data={slotData}
              numColumns={3}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <CustomButton
                  width={"auto"}
                  buttonText={item.time}
                  onButtonPress={() => handleSlotSelection()}
                  textcolor={"#0EBE7F"}
                  backgroundColor={"#0EBE7F14"}
                  borderColor={""}
                  borderWidth={0}
                  isPressedcolor={"#0EBE7F"}
                />
              )}
              columnWrapperStyle={styles.rowWrapper}
            />
          </View>
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
            <Text style={styles.modalTitle}>Thank you! Your appointment is booked.</Text>
            <Text style={styles.modalText}>
              You booked an appointment with Dr. Pediatrician Purpieson on February 21, at 02:00 PM.
            </Text>
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity onPress={handleDone} style={styles.modalButton}>
                <Text style={styles.modalButtonText}>Done</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleEditAppointment} style={[styles.modalButton, styles.editButton]}>
                <Text style={styles.modalButtonText}>Edit your appointment</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Loader />
    </>
  );
};

export default SelectTimeTwo;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  FlatListcontainer: {
    padding: 15,
  },
  textContainer: {
    marginBottom: 10,
  },
  dateText: {
    marginBottom: 10,
    color: "#222222",
    fontWeight: "bold",
    fontSize: 14,
  },
  textdaysContainer: {
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    marginBottom: 10,
  },
  availabilityText: {
    color: "#000000",
    fontSize: 14,
    fontWeight: "600",
  },
  slotsContainer: {
    marginBottom: 10,
    width: "100%",
  },
  rowWrapper: {
    justifyContent: "space-between",
    marginBottom: 10,
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
