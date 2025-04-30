import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Login01 from "../SignupAndLoginScreen/LoginScreen01";
import ResetPassword from "../SignupAndLoginScreen/ResetPassword";
import SplashScreen from "../SplashScreen/SplashScreen";
import OnboardingOne from "../OnboardingOne/OnboardingOne";
import OnboardingTwo from "../OnboardingOne/OnboardingTwo";
import OnboardingThree from "../OnboardingOne/OnboardingThree";
import SignUp from "../SignupAndLoginScreen/SignUp";
import ForgotPasswordModal from "../SignupAndLoginScreen/ForgotPassword";
import FourDigit from "../SignupAndLoginScreen/FourDigit";
import MenuScreen from "../MenuScreen/MenuScreen";
import MyDoctors from "../MyDoctors/MyDoctors";
import AllRecords from "../MedicalRecords/AllRecords";
import MedicalRecordOne from "../MedicalRecords/MedicalRecordOne";
import AddRecordOne from "../MedicalRecords/AddRecordsOne";
import AddRecordTow from "../MedicalRecords/AddRecordTwo";
import HelpCenter from "../HelpCenter/HelpCenter";
import DiagnosticScreen from "../DiagnosticScreen/DiagnosticScreen";
import SelectTimeOne from "../Doctors/SelectTimeOne";
import SelectTimeTwo from "../Doctors/SelectTimeTwo";
import BackgroundWrapper from "../SplashScreen/BackgroundWrapper";
import CustomTabBar from "../../components/Navbar/Navbar";
import Doctors from "../TabBarScreens/Doctors";
import FavDoctor from "../Doctors/FavouriteDoctor";
import PopularDoctor from "../Doctors/PopularDoctor";

const Stack = createStackNavigator();

export default function AppNavigator({ isLoading }) {
  return (
    <NavigationContainer>
      <BackgroundWrapper>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {isLoading ? (
            <Stack.Screen name="Splash" component={SplashScreen} />
          ) : (
            <>
            
              <Stack.Screen name="DoctorsScreen" component={Doctors} />
              <Stack.Screen name="FavouriteScreens" component={FavDoctor} />
              <Stack.Screen
                name="PopularDoctorsScreens"
                component={PopularDoctor}
              />


              <Stack.Screen name="OnboardingOne" component={OnboardingOne} />
              <Stack.Screen name="OnboardingTwo" component={OnboardingTwo} />
              <Stack.Screen
                name="OnboardingThree"
                component={OnboardingThree}
              />

              <Stack.Screen name="LoginScreen" component={Login01} />
              <Stack.Screen name="SignUpScreen" component={SignUp} />
              <Stack.Screen
                name="ForgotScreen"
                component={ForgotPasswordModal}
              />
              <Stack.Screen name="FourDigitScreen" component={FourDigit} />
              <Stack.Screen
                name="ResetPasswordScreen"
                component={ResetPassword}
              />

              <Stack.Screen name="MenuScreen" component={MenuScreen} />

              <Stack.Screen name="MyDoctorscreen" component={MyDoctors} />
              <Stack.Screen name="SelectTimeOne" component={SelectTimeOne} />
              <Stack.Screen name="SelectTimeTwo" component={SelectTimeTwo} />

              <Stack.Screen name="AllRecordscreen" component={AllRecords} />
              <Stack.Screen
                name="MedicalRecordOne"
                component={MedicalRecordOne}
              />
              <Stack.Screen
                name="AddMedicalRecordOne"
                component={AddRecordOne}
              />
              <Stack.Screen
                name="AddMedicalRecordTwo"
                component={AddRecordTow}
              />

              <Stack.Screen
                name="DiagnosticTestScreen01"
                component={DiagnosticScreen}
              />

              <Stack.Screen name="HelpCenterScreen" component={HelpCenter} />

              {/* <Stack.Screen name="Payments" component={MyDoctors} />  */}
              {/* <Stack.Screen name="MedicalRecordscreen" component={MyDoctors} /> */}
            </>
          )}
        </Stack.Navigator>
      </BackgroundWrapper>
    </NavigationContainer>
  );
}
