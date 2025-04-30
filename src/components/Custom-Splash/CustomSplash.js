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
import CustomButton from "../Custom-Button/CustomButton";
import CustomHeader from "../CustomHeader/CustomHeader";

const CustomSplash = ({
  backText,
  onBackPress,
  Img,
  bigHeading,
  smallHeading,
  fontSize,
  buttonText,
  onButtonPress,
  backgroundColor,
}) => {
  return (
    <React.Fragment>
        <CustomHeader backText={backText} onBackPress={onBackPress}/>

      <View style={styles.container}>
        <View
          style={[
            styles.logoBackground,
            { backgroundColor: backgroundColor || "white" },
          ]}
        >
          <Image source={Img} style={styles.logo} />
        </View>
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
            <CustomButton onButtonPress={onButtonPress} buttonText={buttonText} />
          </View>
         ) : null} 
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    padding: 20,
  },
 
  logoBackground: {
    justifyContent: "center",
    alignItems: "center",
    width: 170,
    height: 170,
    borderRadius: 100,
  },
  logo: {
    width: 100,
    height: 100,
  },
  bigText: {
    fontWeight: "bold",
    color: "#000",
    fontFamily: "Rubik",
    marginTop: 20,
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
});

export default CustomSplash;
