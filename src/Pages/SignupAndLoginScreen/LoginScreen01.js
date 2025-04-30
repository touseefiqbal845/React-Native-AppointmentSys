import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";


import { useNavigation } from "@react-navigation/native";

import CustomInput from "../../components/Custom-Input/CustomInput";
import CustomButton from "../../components/Custom-Button/CustomButton";
import ForgotPasswordModal from "./ForgotPassword";
import BackgroundWrapper from "../SplashScreen/BackgroundWrapper";

const Login01 = ({ buttonText, onButtonPress }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigation = useNavigation();

  const handleForgotPasswordPress = () => {
    setIsModalVisible(true);
  };

  return (
    <BackgroundWrapper>

    <View style={styles.container}>
      {/* MAIN LOGIN SCREEN */}
      <View style={styles.signup}>
        <Text style={styles.MainHeading}>Welcome back</Text>
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

        <CustomInput
          placeholder="Email"
          isEmailValid
          fontSize={16}
          fontColor="#A0A3B5"
        />

        <CustomInput
          isPassword
          eyeicon={"password"}
          iconPosition={"end"}
          placeholder="Password"
          fontSize={16}
          fontColor="#A0A3B5"
        />

        <View style={styles.customButton}>
          <CustomButton onPress={onButtonPress} buttonText={"Login"} />
          <TouchableOpacity onPress={handleForgotPasswordPress}>
            <Text style={styles.signupdirect}>Forgot password</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.signupHeading}>
          <TouchableOpacity onPress={() => navigation.navigate("SignUpScreen")}>
            <Text style={styles.signupdirect}>
              Don’t have an account? Join us
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {isModalVisible && (
        <ForgotPasswordModal setIsModalVisible={setIsModalVisible} />
      )}
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
  customButton: {
    marginVertical: 0,
    padding: 25,
  },
  signupdirect: {
    fontSize: 14,
    color: "#0EBE7F",
    marginBottom: 0,
    marginTop: 10,
    textAlign: "center",
  },
  signupHeading: {
    marginVertical: 50,
    textAlign: "center",
  },
});

export default Login01;
