import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

import { colors } from "../colors";
const { white, primary, secondary } = colors;

import RegularText from "../Texts/RegularText";

const ButtonView = styled.TouchableOpacity`
  background-color: ${secondary};
  width: 100%;
  height: 60px;
  padding: 15px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`;

import { ButtonProps } from "./types";

const ActionButton: FunctionComponent<ButtonProps> = (props) => {
  return (
    <ButtonView onPress={props.onPress} style={props.style}>
      <RegularText
        style={[
          { color: white, fontWeight: "600", fontSize: 24 },
          props.textStyle,
        ]}
      >
        {props.children}
      </RegularText>
    </ButtonView>
  );
};

export default ActionButton;
