import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Login01 from "../../Pages/SignupAndLoginScreen/LoginScreen01";
import ResetPassword from "../../Pages/SignupAndLoginScreen/ResetPassword";
import SplashScreen from "../../Pages/SplashScreen/SplashScreen";
import OnboardingOne from "../../Pages/OnboardingOne/OnboardingOne";
import OnboardingTwo from "../../Pages/OnboardingOne/OnboardingTwo";
import OnboardingThree from "../../Pages/OnboardingOne/OnboardingThree";
import SignUp from "../../Pages/SignupAndLoginScreen/SignUp";
import ForgotPasswordModal from "../../Pages/SignupAndLoginScreen/ForgotPassword";
import FourDigit from "../../Pages/SignupAndLoginScreen/FourDigit";
import MenuScreen from "../../Pages/MenuScreen/MenuScreen";
import MyDoctors from "../../Pages/MyDoctors/MyDoctors";
import AllRecords from "../../Pages/MedicalRecords/AllRecords";
import MedicalRecordOne from "../../Pages/MedicalRecords/MedicalRecordOne";
import AddRecordOne from "../../Pages/MedicalRecords/AddRecordsOne";
import AddRecordTow from "../../Pages/MedicalRecords/AddRecordTwo";
import HelpCenter from "../../Pages/HelpCenter/HelpCenter";
import DiagnosticScreen from "../../Pages/DiagnosticScreen/DiagnosticScreen";
import SelectTimeOne from "../../Pages/Doctors/SelectTimeOne";
import SelectTimeTwo from "../../Pages/Doctors/SelectTimeTwo";
import BackgroundWrapper from "../../Pages/SplashScreen/BackgroundWrapper";
import Doctors from "../../Pages/Doctors/Doctors";
import FavDoctor from "../../Pages/Doctors/FavouriteDoctor";
import PopularDoctor from "../../Pages/Doctors/PopularDoctor";
import PrivacyPolicyScreen from "../../Pages/PrivacyPolicy/Privacy";
import PaymentsScreen from "../../Pages/Payment/Payment";
import SettingsScreen from "../../Pages/Settings/Settings";
import DiagnosticTestScreen from "../../Pages/DiagnosticScreen/Diagnostic_tests";

const Stack = createStackNavigator();

export default function AppNavigator({ isLoading }) {
  return (
    <NavigationContainer>
      <BackgroundWrapper>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            gestureEnabled: true,
            gestureDirection: "horizontal",
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        >
          {isLoading ? (
            <Stack.Screen name="Splash" component={SplashScreen} />
          ) : (
            <>
          
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


              <Stack.Screen name="DoctorsScreen" component={Doctors} />
              <Stack.Screen name="FavouriteScreens" component={FavDoctor} />
              <Stack.Screen
                name="PopularDoctorsScreens"
                component={PopularDoctor}
              />



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
              <Stack.Screen name="DiagnosticTestScreen" component={DiagnosticTestScreen} /> 

              <Stack.Screen name="SettingsScreen" component={SettingsScreen} />

              <Stack.Screen name="PaymentScreen" component={PaymentsScreen} />

              <Stack.Screen
                name="PrivacyPolicyScreen"
                component={PrivacyPolicyScreen}
              />

              <Stack.Screen name="HelpCenterScreen" component={HelpCenter} />

              {/* <Stack.Screen name="MedicalRecordscreen" component={MyDoctors} /> */}
            </>
          )}
        </Stack.Navigator>
      </BackgroundWrapper>
    </NavigationContainer>
  );
}
