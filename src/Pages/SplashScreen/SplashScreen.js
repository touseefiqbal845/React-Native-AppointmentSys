import React from "react";
import { StyleSheet, View, Text } from "react-native";
import CustomSplash from "../../components/Custom-Splash/CustomSplash";
import BackgroundWrapper from "./BackgroundWrapper";

const SplashScreen = () => {
  return (
    <BackgroundWrapper>
      <View style={styles.container}>
        <CustomSplash
          Img={require("../../assets/logo.png")}
          bigHeading="Doctor Hunt"
          fontSize={25}
          showHeader={false}
        />
      </View>
    </BackgroundWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SplashScreen;
