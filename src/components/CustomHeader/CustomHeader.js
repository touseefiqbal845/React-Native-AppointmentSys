import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

const CustomHeader = ({ backText, showMenuIcon = false }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (showMenuIcon) {
      navigation.navigate("MenuScreen"); 
    } else {
      navigation.goBack(); 
    }
  };

  return (
    <>
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <View style={styles.header}>
          <TouchableOpacity onPress={handlePress} style={styles.backButton}>
            {showMenuIcon ? (
              <Icon
                name="menu"
                size={24}
                color="#333"
                style={styles.iconStyle}
              />
            ) : (
              <Image
                source={require("../../assets/back-arrow.png")}
                style={styles.backIcon}
              />
            )}
          </TouchableOpacity>

          {backText ? <Text style={styles.backText}>{backText}</Text> : null}
        </View>
      </View>
    </>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    height: "10%",
    // backgroundColor: "",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  backIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  iconStyle: {
    fontSize: 24,
  },
  backText: {
    fontSize: 18,
    marginLeft: 15,
    color: "#333",
    fontWeight: "bold",
  },
});
