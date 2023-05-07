import React from "react";
import { TouchableOpacity, Text, StyleProp, ViewStyle } from "react-native";
import { colors } from "../colors";

import { ButtonProps } from "./types";

const OptionButton = ({
  onPress,
  style,
  textStyle,
  isSelected = false,
  isCorrect = false,
  children,
}: ButtonProps) => {
  const backgroundColor = isSelected
    ? isCorrect
      ? colors.green
      : colors.red
    : colors.white;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          paddingVertical: 10,
          width: "100%",
          height: "15%",
          paddingHorizontal: 20,
          borderRadius: 10,
          backgroundColor,
          marginVertical: 10,
          alignItems: "center",
          justifyContent: "center",
        },
        style,
      ]}
    >
      <Text
        style={[
          {
            color: isSelected ? colors.white : colors.black,
            fontWeight: "700",
            fontSize: 20,
            textAlign: "center",
          },
          textStyle,
        ]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default OptionButton;
