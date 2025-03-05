
import React from "react";
import CustomOnboarding from "./CustomOnboarding";

const OnboardingThree = () => {
  return (
    <CustomOnboarding
      Img={require("../../assets/onboardingthree.png")}
      imgbackColor="#C6EFE5"
      bigHeading="Easy Appointments"
      smallHeading="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of it over 2000 years old."
      fontSize={20}
      buttonText="Get Started"
      onButtonPress={() => console.log("")}
      onSkipPress={() => console.log("")}
      
    />
  );
};

export default OnboardingThree;
