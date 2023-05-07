import { ReactNode } from "react";
import {
  StyleProp,
  ViewStyle,
  TextStyle,
  GestureResponderEvent,
} from "react-native";

export interface ButtonProps {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  isSelected?: boolean;
  isCorrect?: boolean;
  children?: React.ReactNode;
}
