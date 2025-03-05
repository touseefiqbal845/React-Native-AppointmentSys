import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";

const CustomHeader = ({ backText, onBackPress }) => {
  return (
    <>
      <View
        style={[
          styles.container,

          {
            // flex: 1,
            height: "10%",
          },
        ]}
      >
        <StatusBar barStyle="light-content" />
        <View style={styles.header}>
          <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
            <Image
              source={require("../../assets/back-arrow.png")}
              style={styles.backIcon}
            />
          </TouchableOpacity>
          {backText ? <Text style={styles.backText}>{backText}</Text> : null}
        </View>
      </View>
    </>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    top: 20,
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
});
