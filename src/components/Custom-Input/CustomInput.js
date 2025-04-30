import React, { useState } from "react";
import { TextInput, View, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const CustomInput = ({
  placeholder,
  fontSize,
  marginBottom,
  fontColor,
  isPassword,
  icon,
  eyeicon,
  iconPositionStart,
  iconPositionEnd,
  iconPosition,
  onIconPress,
  endIcon,
  emailverified,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(!isPassword);
  const [passwordIcon, setPasswordIcon] = useState("visibility-off");
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);

  const handleIconPress = () => {
    if (isPassword) {
      setIsPasswordVisible(!isPasswordVisible);
    }
    setPasswordIcon((prevIcon) =>
      prevIcon === "visibility" ? "visibility-off" : "visibility"
    );
    if (onIconPress) {
      onIconPress();
    }
    if (emailverified) {
      tickIcon();
    }
  };

  const validateEmail = (text) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmail(text);
    setIsEmailValid(emailRegex.test(text));
  };

  return (
    <View style={[styles.container, { marginBottom: marginBottom || 15 }]}>
      {icon && iconPositionStart === "start" && (
        <TouchableOpacity onPress={handleIconPress}>
          <Icon
            name={icon}
            size={24}
            color={fontColor || "#000"}
            style={[{ padding: 5 }]}
          />
        </TouchableOpacity>
      )}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={fontColor || "#000"}
        secureTextEntry={isPassword && !isPasswordVisible}
        onChangeText={validateEmail}
        style={[
          styles.input,
          { fontSize: fontSize || 16, color: fontColor || "#677294" },
        ]}
      />
      {icon && iconPositionEnd === "end" && (
        <TouchableOpacity onPress={handleIconPress}>
          <Icon
            name={icon}
            size={24}
            color={fontColor || "#000"}
            style={[{ padding: 5 }]}
          />
        </TouchableOpacity>
      )}
      {eyeicon && iconPosition === "end" && (
        <TouchableOpacity onPress={handleIconPress}>
          <Icon
            name={passwordIcon}
            size={24}
            color={fontColor || "#000"}
            style={[{ padding: 5 }]}
          />
        </TouchableOpacity>
      )}
      {endIcon && (
        <TouchableOpacity onPress={handleIconPress}>
          <Icon
            name={endIcon}
            size={24}
            color={fontColor || "#000"}
            style={[{ padding: 5 }]}
          />
        </TouchableOpacity>
      )}
      {isEmailValid && (
        <TouchableOpacity onPress={handleIconPress}>
          <Icon
            name={"google"}
            size={24}
            color={fontColor || "#000"}
            style={[{ padding: 5 }]}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderWidth: 0.5,
    borderColor: "#B0B0B0",
    borderRadius: 12,
    padding: 5,
    height: 54,
    backgroundColor: "white",
  },
  input: {
    flex: 1,
    padding: 10,
  },
});

export default CustomInput;
