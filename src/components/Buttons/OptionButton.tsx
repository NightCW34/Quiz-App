import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

import { colors } from "../colors";
const { white, primary, black } = colors;

import RegularText from "../Texts/RegularText";

const ButtonView = styled.TouchableOpacity`
  background-color: ${white};
  width: 100%;
  height: 60px;
  padding: 15px;
  border-radius: 15px;
  justify-content: center;
`;

import { ButtonProps } from "./types";

const OptionButton: FunctionComponent<ButtonProps> = (props) => {
  return (
    <ButtonView onPress={props.onPress} style={props.style}>
      <RegularText style={[{ color: black, fontSize: 15 }, props.textStyle]}>
        {props.children}
      </RegularText>
    </ButtonView>
  );
};

export default OptionButton;
