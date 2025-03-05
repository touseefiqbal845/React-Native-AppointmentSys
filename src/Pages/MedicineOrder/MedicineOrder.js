import React from "react";
import { StyleSheet, View, FlatList, Image, Text } from "react-native";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import CustomInput from "../../components/Custom-Input/CustomInput";
import medicinesOrders from "./../../helpers/medicineOrderApi";

const Item = ({ issue }) => (
  <View style={styles.itemContainer}>
    <Image source={issue.img} style={styles.itemImage} />
    <Text style={styles.itemText}>{issue.name}</Text>
  </View>
);

const MedicineOrder = () => {
  return (
    <>
      <CustomHeader
        backText={"Medicines orders"}
        onBackPress={() => console.log("Back pressed")}
      />
      <View style={styles.inputContainer}>
        <CustomInput
          iconPositionStart={"start"}
          icon={"google"}
          iconPositionEnd={"end"}
          placeholder="Search"
          fontSize={16}
          fontColor="#A0A3B5"
        />
      </View>
      <FlatList
        data={medicinesOrders}
        renderItem={({ item }) => <Item issue={item} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
      />
    </>
  );
};

export default MedicineOrder;

const styles = StyleSheet.create({
  inputContainer: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
  },
  listContainer: {
    padding: 10,
  },
  itemContainer: {
    flex: 1,
    margin: 5,
    padding: 20,
    backgroundColor: "#f8f8f8",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  itemImage: {
    width: 70,
    height: 70,
    marginBottom: 5,
  },
  itemText: {
    color: "#677294",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 10,
  },
});

export const issues = [
  { id: "1", name: "Booking a new Appointment" },
  { id: "2", name: "Existing Appointment" },
  { id: "3", name: "Online consultations" },
  { id: "4", name: "Feedbacks" },
  { id: "5", name: "Medicine orders" },
  { id: "6", name: "Diagnostic Tests" },
  { id: "7", name: "Health plans" },
  { id: "8", name: "My account and Practo Drive" },
  { id: "9", name: "Have a feature in mind" },
  { id: "10", name: "Other issues" },
];
