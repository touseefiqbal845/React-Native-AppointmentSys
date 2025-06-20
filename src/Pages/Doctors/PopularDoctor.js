import React from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import DoctorBio from "../../components/Doctors-Bio/DoctorBio";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import CustomInput from "../../components/Custom-Input/CustomInput";
import doctorsApi from "../../helpers/doctorsApi";
import ListClicker from "../../components/ListClicker/ListClicker";
import BackgroundWrapper from "../SplashScreen/BackgroundWrapper";
import CustomTabBar from "../../components/Navbar/Navbar";
import Loader from "../../components/Loaders/Loaders";

const PopularDoctor = () => {
  const navigation = useNavigation();

  return (
    <>
      <BackgroundWrapper>
        <CustomHeader
          backText={"Popular Doctors"}
          onBackPress={() => navigation.goBack()}
        />

        <View style={styles.container}>
          <CustomInput
            icon={"search"}
            iconPositionEnd={"end"}
            placeholder="Search"
            fontSize={16}
            fontColor="#A0A3B5"
          />
        </View>

        <View style={styles.container}>
          <ListClicker
            data={{ id: 1, name: "Popular Doctor" }}
            CustomizeClicker
            endIcon
            TextfontSize={20}
            Textcolor={"#333333"}
            fontWeight={"bold"}
          />
        </View>

        <View style={{}}>
          <FlatList
            data={doctorsApi}
            horizontal
            renderItem={({ item }) => (
              <DoctorBio
                doctor={item}
                onButtonPress={() => console.log("Button Pressed")}
                likeButton={true}
                OnlyRating={true}
                exp={true}
                ImageAndTextContainerrowDirection={"column"}
                imageHeight={150}
                imageWidth={150}
                PaddingContainer={0}
                popularDoctorName={"center"}
                moveDetails={true}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>

        <View style={styles.container}>
          <Text style={styles.categoryText}>Category</Text>
        </View>
        <View style={{ maxHeight: 350 }}>
          <FlatList
            data={doctorsApi}
            renderItem={({ item }) => (
              <View style={{}}>
                <DoctorBio
                  doctor={item}
                  onButtonPress={() => console.log("Button Pressed")}
                  reviews
                  exp={true}
                />
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
          <CustomTabBar />
        </View>
      </BackgroundWrapper>
      <Loader />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 0,
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 20,
    color: "#333333",
    fontWeight: "bold",
  },
});

export default PopularDoctor;
