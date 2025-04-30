import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, View } from "react-native";
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
  const [isLoading, setIsLoading] = useState(false);

  const handlePress = () => {
    setIsPressed(true);
    setIsLoading(true);

    // Disable button for 2 seconds
    setTimeout(() => {
      setIsLoading(false);
      setIsPressed(false);
      onButtonPress();
    }, 2000); // Disable for 2 seconds
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        styles.button,
        {
          backgroundColor: isPressed
            ? isPressedcolor || backgroundColor || "rgb(41, 239, 170)"
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
      onPress={handlePress}
      disabled={isLoading} // Disable button while loading
    >
      <View style={styles.textContainer}>
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
      </View>

      {isLoading && (
        <ActivityIndicator
          style={styles.loader}
          size="small"
          color="black"
        />
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
    position: "relative", 
  },
  textContainer: {
    position: "relative",
    zIndex: 1, 
  },
  textStyle: {
    fontSize: 14,
    fontFamily: "",
  },
  smallText: {
    fontSize: 8,
    fontFamily: "",
  },
  loader: {
    position: "absolute", 
    zIndex: 2, 
  },
});

export default CustomButton;
