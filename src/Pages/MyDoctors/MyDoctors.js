import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import DoctorBio from "../../components/Doctors-Bio/DoctorBio";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import doctors from "../../helpers/doctorsApi";
import CustomInput from "../../components/Custom-Input/CustomInput";
import BackgroundWrapper from "../SplashScreen/BackgroundWrapper";

const MyDoctors = () => {
  const navigation = useNavigation();

  return (
    <>
      <BackgroundWrapper>
        <CustomHeader
          backText={"My Doctors"}
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
        <FlatList
          data={doctors}
          renderItem={({ item }) => (
            <DoctorBio
              doctor={item}
              onButtonPress={() => navigation.navigate("SelectTimeOne")}
              findDoctor={true}
              OnlyBook={true}
              exp={true}
            />
          )}
          keyExtractor={(item) => item.id}
          numRows={2}
          // contentContainerStyle={styles.listContainer}
        />
      </BackgroundWrapper>
    </>
  );
};

export default MyDoctors;
