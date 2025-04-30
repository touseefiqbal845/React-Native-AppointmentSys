import React from "react";
import { useNavigation } from "@react-navigation/native";

import CustomSplash from "../../components/Custom-Splash/CustomSplash";
import AddRecordTow from "./AddRecordTwo";
import BackgroundWrapper from "../SplashScreen/BackgroundWrapper";
import Loader from "../../components/Loaders/Loaders";

const MedicalRecordOne = () => {
      const navigation = useNavigation();
  
  return (
   <>
   <BackgroundWrapper>

    <CustomSplash
      backIcon={require("../../assets/back-arrow.png")}
      backText="Medical Records"
       onBackPress={() => navigation.goBack()}
      Img={require("../../assets/MedicalRecordOne.png")}
      imgbackColor="#C6EFE5"
      bigHeading="Add a medical record."
      smallHeading="A detailed health history helps a doctor diagnose you better."
      fontSize={20}
      buttonText="Add a record"
      onButtonPress={() => navigation.navigate("AddMedicalRecordOne")}
      backgroundColor="#C6EFE5"
    />
       </BackgroundWrapper>
<Loader/>
   </>
  );
};

export default MedicalRecordOne;
