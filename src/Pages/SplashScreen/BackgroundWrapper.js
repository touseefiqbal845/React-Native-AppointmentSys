// BackgroundWrapper.js
import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const BackgroundWrapper = ({ children }) => (
  <ImageBackground
    source={require("../../assets/01_Splash_screen.jpg")} 
    resizeMode="cover"
    style={styles.image}
  >
    <SafeAreaView style={styles.container}>
      {children}
    </SafeAreaView>
  </ImageBackground>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
});

export default BackgroundWrapper;
