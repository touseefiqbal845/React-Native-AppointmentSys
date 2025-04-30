import React from "react";
import { FlatList, View, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import DoctorBio from "../../components/Doctors-Bio/DoctorBio";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import singleDoctor from "../../helpers/SingleDoctorApi";
import CustomButton from "../../components/Custom-Button/CustomButton";
import { buttonData, slotData } from "../../helpers/slotsDataApi";
import BackgroundWrapper from "../SplashScreen/BackgroundWrapper";

const SelectTimeTwo = () => {
  const navigation = useNavigation();

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
                onButtonPress={() =>
                  console.log(`Button Pressed: ${item.date}`)
                }
                textcolor={"#000000"}
                backgroundColor={"transparent"}
                borderColor={"#6772941A"}
                borderWidth={1}
                isPressedcolor={"#0EBE7F"}
              />
            )}
            // showsHorizontalScrollIndicator={true}
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
                  onButtonPress={() =>
                    console.log(`Button Pressed: ${item.time}`)
                  }
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
                  onButtonPress={() =>
                    console.log(`Button Pressed: ${item.time}`)
                  }
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
});
