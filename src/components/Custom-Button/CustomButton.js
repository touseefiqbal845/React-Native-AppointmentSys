import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { customStyles } from "../../fonts/fontSetting";

const CustomButton = ({
  buttonText,
  smallTextPermission,
  backgroundColor,
  borderColor,
  borderWidth,
  textcolor,
  isPressedbordercolor,
  isPressedcolor,
  isPressedborderWidth,
  width,
  onButtonPress = () => {},
}) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <TouchableOpacity
    activeOpacity={0.7}
      style={[
        
        styles.button,
        {
          backgroundColor: isPressed
            ? isPressedcolor || backgroundColor ||"rgb(41, 239, 170)"
            : backgroundColor
            ? backgroundColor
            : customStyles.colorPrimary,

          borderColor: isPressed
            ? isPressedbordercolor 
            : borderColor
            ? borderColor
            : "",
          borderWidth: isPressed
            ? isPressedborderWidth
            : borderWidth
            ? borderWidth
            : 0,
          width: width ? width : "100%",
        },
      ]}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      onPress={onButtonPress}
    >
      <Text
        style={[
          styles.textStyle,
          {
            color: isPressed ? "#FFF" : textcolor ? textcolor : "#FFF",
          },
        ]}
      >
        {buttonText}
      </Text>
      {smallTextPermission && (
        <Text
          style={[
            styles.smallText,
            {
              color: isPressed ? "#FFF" : textcolor ? textcolor : "#FFF",
            },
          ]}
        >
          {smallTextPermission}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  textStyle: {
    fontSize: 14,
    fontFamily: "",
  },
  smallText: {
    fontSize: 8,
    fontFamily: "",
  },
});

export default CustomButton;
