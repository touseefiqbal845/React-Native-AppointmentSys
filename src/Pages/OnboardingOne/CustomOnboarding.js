import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Button,
} from "react-native";
import CustomButton from "../../components/Custom-Button/CustomButton";
import { customStyles } from "../../fonts/fontSetting";

const CustomOnboarding = ({
  Img,
  bigHeading,
  smallHeading,
  fontSize,
  buttonText,
  onButtonPress,
  onSkipPress
}) => {
  return (
    <React.Fragment>
      <View style={styles.Imagecontainer}>
        <StatusBar barStyle="light-content" />
        <View style={styles.logoBackground}>
          <Image source={Img} style={styles.logo} />
        </View>
        <View style={styles.container}>
          {bigHeading ? (
            <Text style={[styles.bigText, { fontSize: fontSize || 20 }]}>
              {bigHeading}
            </Text>
          ) : null}
          {smallHeading ? (
            <Text style={styles.smallText}>{smallHeading}</Text>
          ) : null}

          {buttonText && onButtonPress ? (
            <View style={styles.customButton}>
              <CustomButton onPress={onButtonPress} buttonText={buttonText} />
            </View>
          ) : null}
          <TouchableOpacity onPress={onSkipPress} style={styles.skipButton}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
        </View>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  Imagecontainer: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 20,
  },
  header: {
    position: "absolute",
    top: 50,
    left: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    width: 30,
    height: 30,
    borderRadius: 5,
  },
  backText: {
    fontSize: 18,
    marginLeft: 15,
    color: "#333333",
    fontWeight: "bold",
  },
  logoBackground: {
    padding:0

  },
  logo: {
    width: "100%",
    height: 430,
  },
  bigText: {
    fontWeight: "bold",
    color: "#000",
    fontFamily: "Rubik",
  },
  smallText: {
    fontSize: 14,
    color: "#677294",
    marginTop: 10,
    textAlign: "center",
  },
  customButton: {
    width: "85%",
    marginTop: 25,
  },
  skipButton: {
    marginTop: 25,
    borderRadius: 5,
  },
  skipText: {
    color: "#677294",
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Rubik", 
  },
});

export default CustomOnboarding;
