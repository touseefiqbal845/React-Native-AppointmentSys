import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Image,
  Text,
  Animated,
  TouchableOpacity,
} from "react-native";
import ListClicker from "../../components/ListClicker/ListClicker";
import menusApi from "../../helpers/menusApi";

const MenuScreen = ({ onBackPress }) => {
  const [scale] = useState(new Animated.Value(1));
  const [bgColor, setBgColor] = useState("#6F7FA1");

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
              // backgroundColor: "#6F7FA1",
            }}
          >
            <Image
              source={require("../../assets/doctorgirl.jpg")}
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
                Abdullah Mamun
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
                  01303-527300
                </Text>
              </View>
            </View>
          </View>
          <Image
            source={require("../../assets//close.png")}
            style={styles.backIcons}
          />
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
            renderItem={({ item }) => <ListClicker menu={item} MenuSet />}
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
          onPress={onBackPress}
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

    // margin: 20,
    borderRadius: 8,
    // padding: 10,
    shadowColor: "rgba(255, 255, 255, 0.1)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    // shadowRadius: 4,
    // elevation: 0.5,
    height: 70,
    // width: 220,
  },
});
