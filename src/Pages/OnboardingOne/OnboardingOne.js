import React from "react";
import CustomOnboarding from "./CustomOnboarding";
import { useNavigation } from "@react-navigation/native";
import Loader from "../../components/Loaders/Loaders";

const OnboardingOne = () => {
  const navigation = useNavigation();

  return (
    <>
      <CustomOnboarding
      Img={require("../../assets/onboardingOne.png")}
      imgbackColor="#C6EFE5"
      bigHeading="Find Trusted Doctors"
      smallHeading="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of it over 2000 years old.."
      fontSize={20}
      buttonText="Get Started"
      onButtonPress={() => navigation.navigate("OnboardingTwo")}
      onSkipPress={() => navigation.navigate("OnboardingTwo")}
    />
    <Loader/>
    </>
  
  );
};

export default OnboardingOne;
