import { StyleSheet, View } from "react-native";
import React from "react";
import BigText from "./Texts/BigText";
import { colors } from "./colors";

type Props = {
  text: string;
};

const Title: React.FC<Props> = ({ text }: Props) => {
  return (
    <View style={styles.container}>
      <BigText style={styles.title}>{text}</BigText>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 36,
    fontWeight: "600",
    color: colors.white,
  },
});
