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
import { useNavigation } from "@react-navigation/native";

import ListClicker from "../../components/ListClicker/ListClicker";
import menusApi from "../../helpers/menusApi";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import CustomInput from "../../components/Custom-Input/CustomInput";
import issues from "./../../helpers/issueApi";
import BackgroundWrapper from "../SplashScreen/BackgroundWrapper";
import Loader from "../../components/Loaders/Loaders";

const HelpCenter = ({ onBackPress }) => {
  const navigation = useNavigation();
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
      <BackgroundWrapper>
        <CustomHeader
          backText={"Help Center"}
          onBackPress={() => navigation.goBack()}
        />
        <View
          style={{
            marginLeft: 15,
            marginRight: 15,
            marginTop: 10,
          }}
        >
          <CustomInput
            placeholder="I have an issue with"
            fontSize={16}
            fontColor="#A0A3B5"
          />
        </View>
        <View
          style={{
            marginLeft: 15,
            marginRight: 15,
            marginTop: 10,
          }}
        >
          <FlatList
            data={issues}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={onBackPress}>
                <ListClicker
                  data={item}
                  CustomizeClicker
                  endIcon
                  TextfontSize={16}
                />
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
            numRows={2}
            ItemSeparatorComponent={() => <View style={{ height: 25 }} />}
            contentContainerStyle={
              {
                // marginLeft: 10,
              }
            }
          />
        </View>
      </BackgroundWrapper>
      <Loader/>
    </>
  );
};

export default HelpCenter;

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
