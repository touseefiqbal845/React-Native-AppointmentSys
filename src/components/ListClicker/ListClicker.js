import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Animated,
  StatusBar,
} from "react-native";

const ListClicker = ({
  menu,
  data,

  TextfontSize ,
  Textcolor = "",
  TextWidth=300,
  fontWeight,

  MenuSet,
  CustomizeClicker,
  NameWithClicker,
  NameClickerSet,
  IconHide,
  endIcon,
  Switch,
  backText,
  onBackPress,
}) => {
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
      {MenuSet && (
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
            <Image source={menu.img} style={styles.backIcon} />
            <Text style={styles.backText}>{menu.name}</Text>
            <Image
              source={require("../../assets/clickArrow.png")}
              style={styles.backIcon}
            />
          </Animated.View>
        </TouchableOpacity>
      )}

      {CustomizeClicker && (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: TextWidth || 100,
            }}
          >
            {IconHide && (
              <Image
                source={require("../../assets/black-arrow.png")}
                style={styles.backIcon}
              />
            )}

            <View
              style={{
                flex:1,
                alignItems:"flex-start",
                justifyContent: "flex-start",
                textAlign: "left",
                marginTop: 0,


              }}
            >
              <Text
                style={{
                  fontSize: TextfontSize || 14,
                  color: Textcolor || "#677294",
                  textAlign: "left",
                  fontWeight: fontWeight || "normal",
                }}
              >
                {data?.name}
              </Text>
            </View>
          </View>

          {NameClickerSet && (
            <View style={{ flexDirection: "row"}}>
              {NameWithClicker && (
                <Text
                  style={{
                    fontSize: 10,
                    color: "#677294",
                    marginRight: 5,
                  }}
                >
                  See all
                </Text>
              )}

              <Image
                source={require("../../assets/black-arrow.png")}
                // style={styles.backIcon}
              />
            </View>
          )}
          {Switch && (
            <View style={{ flexDirection: "row" }}>
              {/* <Image
              source={require("../../assets/black-arrow.png")}
              style={styles.backIcon}
            /> */}
            </View>
          )}
          {endIcon && (
            <Image
              source={require("../../assets/black-arrow.png")}
              style={{
                marginTop: 10,
                // width:25,
                // height:25

              }}
            />
          )}
        </View>
      )}
    </>
  );
};

export default ListClicker;

const styles = StyleSheet.create({
  IconWithHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 100,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#6F7FA1",
    borderRadius: 8,
    padding: 10,

    shadowColor: "rgba(255, 255, 255, 0.1)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    // shadowRadius: 4,
    // elevation: 0.5,
    height: 70,
    // width: 220,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
    borderRadius: 5,
  },
  backText: {
    fontSize: 14,
    color: "white",
    textAlign: "left",
    flex: 1,
    marginLeft: 25,
  },
});
