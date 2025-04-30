import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Image,
  Text,
  Animated,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import ListClicker from "../../components/ListClicker/ListClicker";
import menusApi from "../../helpers/menusApi";
import Loader from "../../components/Loaders/Loaders";

const MenuScreen = ({ onBackPress }) => {
  const [scale] = useState(new Animated.Value(1));
  const [bgColor, setBgColor] = useState("#6F7FA1");
  const navigation = useNavigation();

  const handlePressIn = () => {
    Animated.timing(scale, {
      toValue: 0.96,
      duration: 100,
      useNativeDriver: true,
    }).start();
    setBgColor("rgba(255, 255, 255, 0.1)");
  };

  const handlePressOut = () => {
    Animated.timing(scale, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
    setBgColor("#6F7FA1");
  };

  const showLogoutAlert = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Logout cancelled"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            navigation.navigate("SignUpScreen");
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: "#6F7FA1",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            margin: 15,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Image
              source={require("../../assets/touseefiqbal_blue.jpeg")}
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
              }}
            />
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  color: "white",
                }}
              >
               Touseef Iqbal
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../../assets/telephone.png")}
                  style={styles.backIcons}
                />
                <Text
                  style={{
                    fontSize: 14,
                    color: "white",
                    marginLeft: 5,
                  }}
                >
                  0303-527300
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.replace("MyDoctorscreen");
            }}
            activeOpacity={0.7}
          >
            <Image
              source={require("../../assets/close.png")}
              style={styles.backIcons}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#6F7FA1",
          }}
        >
          <FlatList
            data={menusApi}
            renderItem={({ item }) => (
              <ListClicker
                menu={item}
                MenuSet
                onBackPress={() => {
                  if (item.screen) {
                    navigation.navigate(item.screen);
                  } else {
                    console.warn("No screen set for this menu item.");
                  }
                }}
              />
            )}
            keyExtractor={(item) => item.id}
            numRows={2}
            contentContainerStyle={{
              marginLeft: 10,
            }}
          />
          <Image
            source={require("../../assets/menuimage.png")}
            style={styles.backIcons}
          />
        </View>

        <TouchableOpacity
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          activeOpacity={0.8}
          onPress={showLogoutAlert}
        >
          <Animated.View
            style={[
              styles.header,
              { backgroundColor: bgColor, transform: [{ scale }] },
            ]}
          >
            <Image
              source={require("../../assets/menuicon/logout.png")}
              style={{
                marginLeft: 20,
              }}
            />
            <Text
              style={{
                fontSize: 14,
                color: "white",
                marginLeft: 35,
              }}
            >
              Logout
            </Text>
          </Animated.View>
        </TouchableOpacity>
      </View>

      <Loader />
    </>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#6F7FA1",
    borderRadius: 8,
    height: 70,
  },
});
