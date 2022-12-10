import { StyleSheet, View, Image } from "react-native";
import React from "react";

import RegularButton from "../components/Buttons/RegularButton";
import MainContainer from "../components/Containers/MainContainer";
import BigText from "../components/Texts/BigText";
import { colors } from "../components/colors";
import RegularText from "../components/Texts/RegularText";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.bannerContainer}>
        <Image
          source={require("../assets/banner.png")}
          resizeMode="contain"
          style={styles.banner}
        />
      </View>
      <View style={styles.bottom_container}>
        <View style={styles.text_container}>
          <BigText style={{ fontWeight: "900", fontSize: 50 }}>
            Quiz App
          </BigText>
          <RegularText style={{ fontSize: 18 }}>
            Pon aprueba tu conocimiento
          </RegularText>
          <RegularText style={{ fontSize: 18 }}>sobre informatica</RegularText>
        </View>
        <View style={{ marginBottom: 10 }}>
          <RegularButton
            textStyle={styles.buttonText}
            style={styles.button_container}
            onPress={() => navigation.navigate("Quizz")}
          >
            Iniciar
          </RegularButton>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "600",
    color: colors.black,
  },
  bottom_container: {
    width: "100%",
    height: "40%",
    justifyContent: "center",
    backgroundColor: colors.secondary,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  button_container: {
    alignSelf: "center",
    width: "90%",
    backgroundColor: colors.white,
    borderRadius: 30,
  },
  text_container: {
    alignItems: "center",
    marginBottom: 50,
  },
});
