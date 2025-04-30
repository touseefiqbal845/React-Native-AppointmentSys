import React from "react";
import { useNavigation } from "@react-navigation/native";
import CustomSplash from "../../components/Custom-Splash/CustomSplash";
import BackgroundWrapper from "../SplashScreen/BackgroundWrapper";
import Loader from "../../components/Loaders/Loaders";

const DiagnosticScreen = () => {
  const navigation = useNavigation();

  return (
   <>
    <BackgroundWrapper>
      <CustomSplash
        backIcon={require("../../assets/back-arrow.png")}
        backText="Diagonstics Tests"
        Img={require("../../assets/diagnostic.png")}
        imgbackColor="#C6EFE5"
        bigHeading="You haven’t booked any tests yet"
        smallHeading="Get started with your first health checkup"
        fontSize={20}
        buttonText="Book Now"
        onButtonPress={() => navigation.navigate("DiagnosticTestScreen")}
        onBackPress={() => navigation.goBack()}
        backgroundColor="#C6EFE5"
      />
    </BackgroundWrapper>
    <Loader/>
   </>
  );
};

export default DiagnosticScreen;
