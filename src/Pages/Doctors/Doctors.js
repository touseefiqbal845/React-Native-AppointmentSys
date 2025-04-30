import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import DoctorBio from "../../components/Doctors-Bio/DoctorBio";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import doctors from "../../helpers/doctorsApi";
import CustomInput from "../../components/Custom-Input/CustomInput";
import BackgroundWrapper from "../SplashScreen/BackgroundWrapper";
import CustomTabBar from "../../components/Navbar/Navbar";
import { slotData } from "../../helpers/slotsDataApi";
import CustomButton from "../../components/Custom-Button/CustomButton";
import Loader from "../../components/Loaders/Loaders";

const filterCategoryData = [
  { id: "1", time: "All" },
  { id: "2", time: "Dentist" },
  { id: "3", time: "Cardiology" },
  { id: "4", time: "Pediatrics" },
  { id: "5", time: "Orthopedics" },
  { id: "6", time: "Dermatology" },
  { id: "7", time: "Neurology" },
  { id: "8", time: "Psychiatry" },
  { id: "9", time: "Gastroenterology" },
  { id: "10", time: "Endocrinology" },
  { id: "11", time: "Ophthalmology" },
  { id: "12", time: "Urology" },
  { id: "13", time: "Radiology" },
  { id: "14", time: "Obstetrics" },
  { id: "15", time: "Oncology" },
  { id: "16", time: "Emergency Medicine" },
  { id: "17", time: "General Surgery" },
  { id: "18", time: "Allergy & Immunology" },
  { id: "19", time: "Geriatrics" },
  { id: "20", time: "Family Medicine" },
];

const Doctors = () => {
  const navigation = useNavigation();

  return (
    <>
      <BackgroundWrapper>
        <CustomHeader
        showMenuIcon = {true} 
          backText={"Doctors"}
          onBackPress={() => navigation.goBack()}
        />
        <View
          style={{
            marginLeft: 15,
            marginRight: 15,
            marginTop: 10,
          }}
        >
          <CustomInput
            // iconPositionStart={"start"}
            icon={"search"}
            iconPositionEnd={"end"}
            placeholder="Search"
            fontSize={16}
            fontColor="#A0A3B5"
          />
        </View>
        <View style={styles.slotsContainer}>
          <FlatList
            data={filterCategoryData}
            horizontal={true}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CustomButton
                width={"auto"}
                buttonText={item.time}
                onButtonPress={() =>
                  console.log(`Button Pressed: ${item.time}`)
                }
                textcolor={"#0EBE7F"}
                backgroundColor={"#0EBE7F14"}
                borderColor={""}
                borderWidth={0}
                isPressedcolor={"#0EBE7F"}
                style={styles.buttonStyle}
              moveDetails={true}

              />
            )}
            contentContainerStyle={styles.scrollContentContainer}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        </View>

        <FlatList
          data={doctors}
          renderItem={({ item }) => (
            <DoctorBio
              doctor={item}
              onButtonPress={() => navigation.navigate("SelectTimeOne")}
              OnlyRating
              speciality
              exp={true}
              moveDetails={true}
            />
          )}
          keyExtractor={(item) => item.id}
          numRows={2}
          // contentContainerStyle={styles.listContainer}
        />
        <CustomTabBar />
      </BackgroundWrapper>
      <Loader/>
    </>
  );
};
const styles = StyleSheet.create({
  slotsContainer: {
    width: "100%",
    overflow: "hidden",
  },
  scrollContentContainer: {
    paddingHorizontal: 10,
  },
  separator: {
    width: 10,
  },
  buttonStyle: {
    marginRight: 10,
  },
});

export default Doctors;
