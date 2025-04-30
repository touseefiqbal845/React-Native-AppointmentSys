import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Icon from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import CustomInput from "../../components/Custom-Input/CustomInput";
import CustomButton from "./../../components/Custom-Button/CustomButton";
import BackgroundWrapper from "../SplashScreen/BackgroundWrapper";

const SignUp = ({ buttonText, onButtonPress }) => {
  const navigation = useNavigation();
  const [isChecked, setIsChecked] = useState(false);

  return (
    <BackgroundWrapper>

    <View style={styles.container}>
      <View style={styles.signup}>
        <Text style={styles.MainHeading}>Join us to start searching</Text>
        <Text style={styles.smallHeading}>
          You can search course, apply course and find scholarship for abroad
          studies
        </Text>
        <View style={styles.socialcontainer}>
          <TouchableOpacity style={styles.option}>
            <AntDesign name="google" size={24} color="#3b5998" />
            <Text style={styles.socialtext}>Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <Icon name="facebook" size={24} color="#3b5998" />
            <Text style={styles.socialtext}>Facebook</Text>
          </TouchableOpacity>
        </View>
        <CustomInput placeholder="Name" fontSize={16} fontColor="#A0A3B5" />
        <CustomInput placeholder="Email" fontSize={16} fontColor="#A0A3B5" />
        <CustomInput
          isPassword
          eyeicon={"password"}
          iconPosition={"end"}
          placeholder="Password"
          fontSize={16}
          fontColor="#A0A3B5"
        />
        <View style={styles.agree}>
          <TouchableOpacity onPress={() => setIsChecked(!isChecked)}>
            <Icon
              name={isChecked ? "check-box" : "check-box-outline-blank"}
              size={24}
              color="#3b5998"
            />
          </TouchableOpacity>
          <Text style={styles.agreeHeading}>
            I agree with the Terms of Service & Privacy Policy
          </Text>
        </View>

        <View style={styles.customButton}>
          <CustomButton onPress={onButtonPress} buttonText={"Sign up"} />

          <TouchableOpacity onPress={() => navigation.navigate("ForgotScreen")}>
            <Text style={styles.logindirect}>Forgot password</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
            <Text style={styles.logindirect}>Have an account? Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </BackgroundWrapper>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  signup: {
    width: "100%",
    padding: 20,
    top: 100,
  },
  MainHeading: {
    fontSize: 24,
    color: "#000000",
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  smallHeading: {
    fontSize: 14,
    color: "#677294",
    marginBottom: 40,
    textAlign: "center",
  },
  socialcontainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 30,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    width: 150,
    justifyContent: "center",
  },
  socialtext: {
    marginLeft: 10,
    fontSize: 16,
    color: "#000",
  },
  customInput: {
    width: "100%",
  },
  agreeHeading: {
    fontSize: 14,
    color: "#677294",
    marginBottom: 0,
    textAlign: "center",
  },
  agree: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  customButton: {
    marginVertical: 0,
    padding: 25,
  },
  logindirect: {
    fontSize: 14,
    color: "#0EBE7F",
    marginBottom: 0,
    marginTop: 10,
    textAlign: "center",
  },
});

export default SignUp;
