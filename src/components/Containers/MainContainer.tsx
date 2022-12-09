import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

import { colors } from "../colors";
const { white, primary } = colors;

const StyledView = styled.View`
  flex: 1;
  padding: 25px;
  padding-top: 40px;
  backgroundcolor: ${white};
`;

import { ContainerProps } from "./types";

const MainContainer: FunctionComponent<ContainerProps> = (props) => {
  return <StyledView style={props.style}>{props.children}</StyledView>;
};

export default MainContainer;
