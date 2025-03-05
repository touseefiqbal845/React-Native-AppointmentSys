import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import MainApp from "./MainApp";
import SplashScreen from "./src/Pages/SplashScreen/SplashScreen";
import SlectTimeOne from "./src/Pages/Doctors/SelectTimeOne";


import DiagnosticScreen from "./src/Pages/DiagnosticScreen/DiagnosticScreen";
import PatientEmpty from "./src/Pages/DiagnosticScreen/PatientEmpty";
import MedicalRecordOne from "./src/Pages/MedicalRecords/MedicalRecordOne";
import MedicalOrderOne from "./src/Pages/Medical-Order/MedicalOrderOne";
import LocationScreen from "./src/Pages/LocationScreen/LocationScreen";
import OnboardingOne from "./src/Pages/OnboardingOne/OnboardingOne";
import OnboardingTwo from "./src/Pages/OnboardingOne/OnboardingTwo";
import OnboardingThree from "./src/Pages/OnboardingOne/OnboardingThree";
import SignUp from "./src/Pages/SignupAndLoginScreen/SignUp";
import Login01 from "./src/Pages/SignupAndLoginScreen/LoginScreen01";
import ForgotPasswordModal from "./src/Pages/SignupAndLoginScreen/ForgotPassword";
import FourDigit from "./src/Pages/SignupAndLoginScreen/FourDigit";
import ResetPassword from "./src/Pages/SignupAndLoginScreen/ResetPassword";
import MyDoctors from "./src/Pages/MyDoctors/MyDoctors";
import CustomHeader from "./src/components/CustomHeader/CustomHeader";
import FindDoctors from "./src/Pages/Doctors/FindDoctors";
import ListClicker from "./src/components/ListClicker/ListClicker";
import MenuScreen from "./src/Pages/MenuScreen/MenuScreen";
import HelpCenter from "./src/Pages/HelpCenter/HelpCenter";
import MedicineOrder from "./src/Pages/MedicineOrder/MedicineOrder";
import AllRecords from "./src/Pages/MedicalRecords/AllRecords";
import AddRecordTow from "./src/Pages/MedicalRecords/AddRecordTwo";
import AddRecordOne from "./src/Pages/MedicalRecords/AddRecordsOne";
import SelectTimeTwo from "./src/Pages/Doctors/SelectTimeTwo";
import PopularDoctor from "./src/Pages/Doctors/PopularDoctor";
import FavDoctor from "./src/Pages/Doctors/FavouriteDoctor";
import ANewpp from "./src/Pages/MedicalRecords/Videorocessor";
  
const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return (
    <View style={styles.container}>
      {/* {isLoading ? <SplashScreen /> : <MainApp />} */}

      {/* <CustomHeader/> */}
      {/* <ListClicker/> */}
{/* <ANewpp/> */}
      
      <FindDoctors/>
      {/* <SlectTimeOne/> */}
      {/* <SelectTimeTwo/> */}
      {/* <PopularDoctor/> */}
      {/* <FavDoctor/> */}

      {/* <DiagnosticScreen/> */}
      {/* <PatientEmpty/> */}
      {/* <MedicalRecordOne/> */}
      {/* <MedicalOrderOne/> */}
      {/* <LocationScreen/> */}

      {/* <OnboardingOne/> */}
      {/* <OnboardingTwo/> */}
      {/* <OnboardingThree/> */}

      {/* <SignUp/> */}
      {/* <Login01/>   */}
      {/* <ForgotPasswordModal/> */}
      {/* <FourDigit/> */}
      {/* <ResetPassword/> */}
      {/* <MyDoctors/> */}
      {/* <AddRecordOne/>   */}
      {/* <AddRecordTow/> */}
      {/* <AllRecords/> */}
      {/* <MenuScreen/> */}
      {/* <HelpCenter /> */}
      {/* <MedicineOrder/> */}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E3FDFD",
  },
});

export default App;
