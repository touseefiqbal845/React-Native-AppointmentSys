import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import CustomSplash from "../../components/Custom-Splash/CustomSplash";

const LocationScreen = () => {
  const navigation = useNavigation();

  return (
  
    <CustomSplash
      backIcon={require("../../assets/back-arrow.png")}
      backText="Enable Location Services"
      Img={require("../../assets/location.png")}
      imgbackColor="#C6EFE5"
      bigHeading="Location"
      smallHeading="Your location services are switched off. Please
enable location, to help us serve better."
      fontSize={20}
      buttonText="Enable Location"
      onButtonPress={() => navigation.navigate("MenuScreen")}
      onBackPress={() => navigation.goBack()}
      backgroundColor="#C6EFE5"
    />
  );
};

export default LocationScreen;
