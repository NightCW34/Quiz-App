import { StyleSheet, View, Image } from "react-native";
import React from "react";

import RegularButton from "../components/Buttons/RegularButton";
import Title from "../components/Title";
import MainContainer from "../components/Containers/MainContainer";
import BigText from "../components/Texts/BigText";
import RegularText from "../components/Texts/RegularText";
import { colors } from "../components/colors";

const ResultScreen = ({ navigation, route }: any) => {
  const { score } = route.params;

  const resultBanner =
    score > 40
      ? "https://cdn3d.iconscout.com/3d/premium/thumb/winner-4208775-3485788.png"
      : "https://cdn3d.iconscout.com/3d/free/thumb/sad-face-3750922-3144984.png";

  return (
    <MainContainer style={{ backgroundColor: colors.secondary }}>
      <Title text="Resultados" />
      <View style={styles.bannerContainer}>
        <BigText style={{ fontWeight: "bold", color: colors.black }}>
          Tu puntuacion final es
        </BigText>
        <View style={styles.score_container}>
          <RegularText style={styles.score}>{score}</RegularText>
        </View>
        <Image
          source={{
            uri: resultBanner,
          }}
          resizeMode="contain"
          style={styles.banner}
        />
      </View>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <RegularButton
          style={{ backgroundColor: colors.white }}
          textStyle={styles.buttonText}
          onPress={() => navigation.navigate("Home")}
        >
          Volver al inicio
        </RegularButton>
      </View>
    </MainContainer>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
    height: "80%",
    width: "100%",
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "600",
    color: colors.black,
  },

  score: {
    fontSize: 50,
    fontWeight: "800",
    alignItems: "center",
    color: colors.white,
  },

  score_container: {
    backgroundColor: colors.primary,
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    borderRadius: 100,
  },
});
