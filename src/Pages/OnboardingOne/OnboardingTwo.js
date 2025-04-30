import React from "react";
import CustomOnboarding from "./CustomOnboarding";
import { useNavigation } from "@react-navigation/native";

const OnboardingTwo = () => {
  const navigation = useNavigation();

  return (
    <CustomOnboarding
      Img={require("../../assets/onboardingtwo.png")}
      imgbackColor="#C6EFE5"
      bigHeading="Choose Best Doctors"
      smallHeading="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of it over 2000 years old."
      fontSize={20}
      buttonText="Get Started"
      onButtonPress={() => console.log("")}
      onSkipPress={() => navigation.navigate("OnboardingThree")}
    />
  );
};

export default OnboardingTwo;
