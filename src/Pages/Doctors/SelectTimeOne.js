import React from "react";
import { FlatList, View, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import DoctorBio from "../../components/Doctors-Bio/DoctorBio";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import singleDoctor from "../../helpers/SingleDoctorApi";
import CustomButton from "../../components/Custom-Button/CustomButton";
import BackgroundWrapper from "../SplashScreen/BackgroundWrapper";
import Loader from "../../components/Loaders/Loaders";

const SelectTimeOne = () => {
  const navigation = useNavigation();

  const buttonData = [
    { id: "1", date: "Today, 23 Feb", availability: "No slots available" },
    { id: "2", date: "Tommorow, 24 Feb", availability: "5 slots available" },
    { id: "3", date: "Thursday, 25 Feb", availability: "3 slots available" },
  ];

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
          onButtonPress={() => navigation.navigate("SelectTimeTwo")}
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
              onButtonPress={() => navigation.navigate("SelectTimeTwo")}
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

        <View style={styles.textContainer}>
          <Text style={styles.availabilityText}>No slots available</Text>
        </View>

        <View style={styles.buttonContainer}>
          <CustomButton
            buttonText={"Next availability on Wed, 24 Feb"}
            onButtonPress={() => navigation.navigate("SelectTimeTwo")}

          />
        </View>

        <View style={styles.orContainer}>
          <Text style={styles.orText}>OR</Text>
        </View>

        <View style={styles.buttonContainer}>
          <CustomButton
            buttonText={"Contact Clinic"}
            onButtonPress={() => console.log(`Button Pressed:`)}
            textcolor={"#0EBE7F"}
            backgroundColor={"transparent"}
            borderColor={"#0EBE7F"}
            borderWidth={1}
            isPressedcolor={"#0EBE7F"}
          />
        </View>
      </View>
    </BackgroundWrapper>
    <Loader/>

    </>
  );
};

export default SelectTimeOne;

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
    alignItems: "center",
  },
  dateText: {
    marginBottom: 10,

    color: "#222222",
    fontWeight: "bold",
    fontSize: 14,
  },
  availabilityText: {
    color: "#222222",
    fontSize: 12,
  },
  buttonContainer: {
    marginBottom: 10,

    width: "100%",
  },
  orContainer: {
    marginBottom: 10,

    marginVertical: 5,
    alignItems: "center",
  },
  orText: {
    color: "#677294",
    fontSize: 12,
  },
});
