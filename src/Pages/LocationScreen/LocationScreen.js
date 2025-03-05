import React from "react";
import CustomSplash from "../../components/Custom-Splash/CustomSplash";

const LocationScreen = () => {
  return (
    <CustomSplash
      backIcon={require("../../assets/back-arrow.png")}
      backText="Enable Location Services"
      onBackPress={() => console.log("Back pressed")}
      Img={require("../../assets/location.png")}
      imgbackColor="#C6EFE5"
      bigHeading="Location"
      smallHeading="Your location services are switched off. Please
enable location, to help us serve better."
      fontSize={20}
      buttonText="Enable Location"
      onButtonPress={() => console.log("")}
      backgroundColor="#C6EFE5"
    />
  );
};

export default LocationScreen;
