import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import CustomSplash from "../../components/Custom-Splash/CustomSplash";
import Loader from "../../components/Loaders/Loaders";

const MedicalOrderOne = () => {
  const navigation = useNavigation();

  return (
   <>
    <CustomSplash
      backIcon={require("../../assets/back-arrow.png")}
      backText="Medicine Orders"
      onBackPress={() => navigation.goBack()}
      Img={require("../../assets/medicalorder.png")}
      imgbackColor="#C6EFE5"
      bigHeading="No orders placed yet."
      smallHeading="Place your first order now.."
      fontSize={20}
      buttonText="Order medicines"
      onButtonPress={() => console.log("")}
      backgroundColor="#C6EFE5"
    />
    <Loader/>
   </>
  );
};

export default MedicalOrderOne;
