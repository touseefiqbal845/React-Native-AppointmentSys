import React from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Modal,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import Icon from "react-native-vector-icons/FontAwesome";
import DoctorBio from "../../components/Doctors-Bio/DoctorBio";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import CustomInput from "../../components/Custom-Input/CustomInput";
import doctorsApi from "../../helpers/doctorsApi";
import ListClicker from "../../components/ListClicker/ListClicker";
import BackgroundWrapper from "../SplashScreen/BackgroundWrapper";
import CustomTabBar from "../../components/Navbar/Navbar";
import Loader from "../../components/Loaders/Loaders";

const FavDoctor = () => {
  const navigation = useNavigation();

  const handleDoctorCardPress = () => {
    navigation.navigate("SelectTimeOne");
  };

  return (
    <>
      <BackgroundWrapper>
        <View style={{ flex: 1 }}>
          <CustomHeader
            showMenuIcon={true}
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

          <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
            {/* Popular Doctors List */}
            <View style={{ marginTop: 0 }}>
              <FlatList
                data={doctorsApi}
                numColumns={2}
                renderItem={({ item }) => (
                  <View style={styles.cardContainer}>
                    <DoctorBio
                      doctor={item}
                      onButtonPress={handleDoctorCardPress}
                      likeButton={true}
                      speciality={true}
                      LikeButtonEnd={true}
                      FavouriteDoctor={true}
                      ImageAndTextContainerrowDirection={"column"}
                      imageHeight={70}
                      imageWidth={70}
                      borderRadius={50}
                      PaddingContainer={10}
                      popularDoctorName={"center"}
                      moveDetails={true}
                    />
                  </View>
                )}
                keyExtractor={(item) => item.id.toString()}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
              />
            </View>

            {/* Feature Doctors List */}
            <View style={styles.container}>
              <ListClicker
                data={{ id: 1, name: "Feature Doctor" }}
                CustomizeClicker
                endIcon
                TextfontSize={20}
                Textcolor={"#333333"}
                fontWeight={"bold"}
              />
            </View>

            <View style={{ marginTop: 5 }}>
              <FlatList
                data={doctorsApi}
                horizontal
                renderItem={({ item }) => (
                  <View style={styles.cardContainer}>
                    <DoctorBio
                      doctor={item}
                      onButtonPress={() => console.log("Button Pressed")}
                      likeButton={true}
                      speciality={true}
                      LikeButtonEnd={true}
                      FavouriteDoctor={true}
                      ImageAndTextContainerrowDirection={"column"}
                      imageHeight={50}
                      imageWidth={50}
                      borderRadius={50}
                      PaddingContainer={10}
                      popularDoctorName={"center"}
                      moveDetails={true}
                    />
                  </View>
                )}
                keyExtractor={(item) => item.id.toString()}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
              />
            </View>
          </ScrollView>

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
    marginBottom: 10,
  },
  categoryText: {
    fontSize: 20,
    color: "#333333",
    fontWeight: "bold",
  },
  cardContainer: {
    flex: 1,
    margin: 0,
    width: "100%",
  },
  separator: {
    width: 0,
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
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 10,
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(245, 19, 19, 0.5)",
  },
});

export default FavDoctor;
