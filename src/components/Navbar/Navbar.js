import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

const tabItems = [
  { name: "home", screen: "DoctorsScreen", isActive: true },
  { name: "favorite-border", screen: "FavouriteScreens", isActive: false },
  { name: "people-outline", screen: "PopularDoctorsScreens", isActive: false },
  { name: "menu", screen: "MenuScreen", isActive: false },
];

const CustomTabBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {tabItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={item.isActive ? styles.greenCircle : styles.iconButton}
          onPress={() => navigation.navigate(item.screen)}
        >
          <Icon
            name={item.name}
            size={24}
            color={item.isActive ? "#fff" : "#9095A0"}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 70,
    backgroundColor: "#fff",
    borderTopColor: "#fff",
    borderTopWidth: 2,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  greenCircle: {
    backgroundColor: "#00C28B",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  iconButton: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CustomTabBar;
