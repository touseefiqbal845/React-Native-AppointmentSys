import React from "react";
import CustomSplash from "../../components/Custom-Splash/CustomSplash";

const MedicalOrderOne = () => {
  return (
    <CustomSplash
      backIcon={require("../../assets/back-arrow.png")}
      backText="Medicine Orders"
      onBackPress={() => console.log("Back pressed")}
      Img={require("../../assets/medicalorder.png")}
      imgbackColor="#C6EFE5"
      bigHeading="No orders placed yet."
      smallHeading="Place your first order now.."
      fontSize={20}
      buttonText="Order medicines"
      onButtonPress={() => console.log("")}
      backgroundColor="#C6EFE5"
    />
  );
};

export default MedicalOrderOne;
