import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import MainContainer from "../components/Containers/MainContainer";
import OptionButton from "../components/Buttons/OptionButton";
import ActionButton from "../components/Buttons/ActionButton";
import BigText from "../components/Texts/BigText";
import { colors } from "../components/colors";
import { Text } from "react-native";

const shuffleArray = (array: string[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const QuizzScreen = ({ navigation }: any) => {
  const [questions, setQuestions] = useState<any>();
  const [ques, setQues] = useState<any>(0);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const getQuiz = async () => {
    setIsLoading(true);
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFzYWVsQGdtYWlsLmNvbSIsImlhdCI6MTY4MzQ4ODY0OSwiZXhwIjoxNjgzNDkyMjQ5fQ.hhIH2ptwN8eA2igfP1cBEjHlFbdNuGG1iIN1LzxzcpQ";

    /**
     * Cambiar url si usa ngrok o
     * localhost:3002 si planea verlo solo desde la web por la peticion https
     * cambiar antes de /item
     */

    const url = "https://62eb-138-97-162-166.ngrok.io/item/";
    const res = await fetch(url, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    setQuestions(data);
    setOptions(generateOptionsAndShuffle(data[0]));
    setIsLoading(false);
  };

  const generateOptionsAndShuffle = (_question: any) => {
    const options: any = [..._question.incorrect_answers];
    options.push(_question.correct_answer);
    shuffleArray(options);

    return options;
  };

  const handleSelectedOption = (_option: string) => {
    setSelectedOption(_option);
    if (_option === questions[ques].correct_answer) {
      setScore(score + 10);
    }
    if (ques !== 9) {
      setTimeout(() => {
        setQues(ques + 1);
        setOptions(generateOptionsAndShuffle(questions[ques + 1]));
        setSelectedOption("");
      }, 1000);
    }
    if (ques === 9) {
      setTimeout(() => {
        handleShowResult();
      }, 1000);
    }
  };

  const handleShowResult = () => {
    navigation.navigate("Results", {
      score: score,
    });
  };

  useEffect(() => {
    getQuiz().catch((error) => {
      console.log("Error al obtener las preguntas", error);
    });
  }, []);

  const handleNextPress = () => {
    setQues(ques + 1);
    setOptions(generateOptionsAndShuffle(questions[ques + 1]));
  };

  if (questions && questions.length < 10) {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 20 }}>
          No hay suficientes preguntas disponibles.
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <MainContainer>
      {isLoading ? (
        <View style={styles.loadingScreen}>
          <BigText
            style={{ fontSize: 32, fontWeight: "700", color: colors.black }}
          >
            Cargando...
          </BigText>
        </View>
      ) : (
        questions && (
          <View style={styles.parent}>
            <View style={styles.top}>
              <BigText style={{ color: colors.black }}>{ques + 1} /10</BigText>
              <BigText style={{ fontSize: 24, color: colors.black }}>
                Q. {questions[ques].question}
              </BigText>
            </View>
            <View style={styles.options}>
              <OptionButton
                onPress={() => handleSelectedOption(options[0])}
                isSelected={selectedOption === options[0]}
                isCorrect={options[0] === questions[ques].correct_answer} // agrega esta línea
              >
                {options[0]}
              </OptionButton>
              <OptionButton
                onPress={() => handleSelectedOption(options[1])}
                isSelected={selectedOption === options[1]}
                isCorrect={options[1] === questions[ques].correct_answer} // agrega esta línea
              >
                {options[1]}
              </OptionButton>
              <OptionButton
                onPress={() => handleSelectedOption(options[2])}
                isSelected={selectedOption === options[2]}
                isCorrect={options[2] === questions[ques].correct_answer} // agrega esta línea
              >
                {options[2]}
              </OptionButton>
              <OptionButton
                onPress={() => handleSelectedOption(options[3])}
                isSelected={selectedOption === options[3]}
                isCorrect={options[3] === questions[ques].correct_answer} // agrega esta línea
              >
                {options[3]}
              </OptionButton>
            </View>

            <View style={styles.bottom}>
              {ques !== 9 && (
                <ActionButton onPress={handleNextPress}>SKIP</ActionButton>
              )}
              {ques === 9 && (
                <ActionButton
                  onPress={handleShowResult}
                  style={{ width: "100%" }}
                >
                  Mostrar Resultados
                </ActionButton>
              )}
            </View>
          </View>
        )
      )}
    </MainContainer>
  );
};

export default QuizzScreen;

const styles = StyleSheet.create({
  top: {
    marginVertical: 16,
  },
  options: {
    marginVertical: 16,
    flex: 1,
    backgroundColor: colors.secondary,
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 10,
    padding: 10,
  },
  bottom: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  parent: {
    height: "100%",
  },
  loadingScreen: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
});
