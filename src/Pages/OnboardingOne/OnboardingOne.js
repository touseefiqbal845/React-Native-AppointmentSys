import React from "react";
import CustomOnboarding from "./CustomOnboarding";

const OnboardingOne = () => {
  return (
    <CustomOnboarding
      Img={require("../../assets/onboardingOne.png")}
      imgbackColor="#C6EFE5"
      bigHeading="Find Trusted Doctors"
      smallHeading="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of it over 2000 years old.."
      fontSize={20}
      buttonText="Get Started"
      onButtonPress={() => console.log("")}
      onSkipPress={() => console.log("")}
      
    />
  );
};

export default OnboardingOne;
