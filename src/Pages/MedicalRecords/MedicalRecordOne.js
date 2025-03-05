import React from "react";
import CustomSplash from "../../components/Custom-Splash/CustomSplash";
import AddRecordTow from "./AddRecordTwo";

const MedicalRecordOne = () => {
  return (
   <>
    <CustomSplash
      backIcon={require("../../assets/back-arrow.png")}
      backText="Medical Records"
      onBackPress={() => console.log("Back pressed")}
      Img={require("../../assets/MedicalRecordOne.png")}
      imgbackColor="#C6EFE5"
      bigHeading="Add a medical record."
      smallHeading="A detailed health history helps a doctor diagnose you btter."
      fontSize={20}
      buttonText="Add a record"
      onButtonPress={() => console.log("")}
      backgroundColor="#C6EFE5"
    />
    {/* <AddRecordTow/> */}
   </>
  );
};

export default MedicalRecordOne;
