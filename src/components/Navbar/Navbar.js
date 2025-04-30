import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation, useRoute } from "@react-navigation/native";

const tabItems = [
  { name: "home", screen: "MyDoctorscreen" },
  { name: "people-outline", screen: "DoctorsScreen" },
  { name: "favorite-border", screen: "FavouriteScreens" },
  { name: "menu", screen: "MenuScreen" },
];

const CustomTabBar = () => {
  const [activeTab, setActiveTab] = useState(0);
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    const currentScreenIndex = tabItems.findIndex(
      (item) => item.screen === route.name
    );
    if (currentScreenIndex !== -1) {
      setActiveTab(currentScreenIndex);
    }
  }, [route]);

  const handleTabPress = (index, screen) => {
    setActiveTab(index);
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      {tabItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={index === activeTab ? styles.greenCircle : styles.iconButton}
          onPress={() => handleTabPress(index, item.screen)}
        >
          <Icon
            name={item.name}
            size={24}
            color={index === activeTab ? "#fff" : "#9095A0"}
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
