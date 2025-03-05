import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
// import Icon from "react-native-vector-icons/MaterialIcons";
import Feather from 'react-native-vector-icons/Feather'
import CustomInput from "../../components/Custom-Input/CustomInput";
import CustomButton from "./../../components/Custom-Button/CustomButton";

const SignUp = ({ buttonText, onButtonPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.signup}>
        <Text style={styles.MainHeading}>Join us to start searching</Text>
        <Text style={styles.smallHeading}>
          You can search course, apply course and find scholarship for abroad
          studies
        </Text>
        <CustomInput placeholder="Name" fontSize={16} fontColor="#A0A3B5" />
        <CustomInput placeholder="Email" fontSize={16} fontColor="#A0A3B5" />
        <CustomInput
          isPassword
          Feather={"rocket"}
          iconPosition={"end"}
          placeholder="Password"
          fontSize={16}
          fontColor="#A0A3B5"
        />
        <View style={styles.agree}>
          <TouchableOpacity>
          <Feather
            name={'chevron-down'}
            // size={scale(25)}
            // color={appColors.black}
          />
          </TouchableOpacity>
          <Text style={styles.agreeHeading}>
            I agree with the Terms of Service & Privacy Policy
          </Text>
        </View>

        <View style={styles.customButton}>
          <CustomButton onPress={onButtonPress} buttonText={"Sign up"} />
          <Text style={styles.logindirect}>
            Have an account? Log in
          </Text>
        </View>
     
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  signup: {
    width: "100%",
    padding: 20,
    top: 130,
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
    marginVertical: 50,
    padding: 25,
  },
  logindirect:{
    fontSize: 14,
    color: "#0EBE7F",
    marginBottom: 0,
    marginTop: 10,
    textAlign: "center",
  }
});

export default SignUp;
