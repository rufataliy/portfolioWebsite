import React from "react";
import styled from "styled-components";
import front from "./img/prodigy.png";
import back from "./img/sannTek.png";
import { Box } from "./styled/styles";
const Contact_box = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  border-radius: 10px;
  box-shadow: 0px 9px 17px -6px rgba(0, 0, 0, 0.7);
`;
const Contact = styled(Box)`
  background-color: transparent;
  width: 300px;
  height: 200px;
  perspective: 1000px;
  margin: 0 auto;
  padding: 0;
  overflow: visible;
  box-shadow: none;
  &:hover {
    transform: scale(1);
    box-shadow: none;
  }
  &:hover ${Contact_box} {
    transform: rotateY(180deg);
  }
`;
const Contact_box_card = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-size: cover;
  border-radius: 10px;
`;

const Contact_box_card_front = styled(Contact_box_card)`
  background-position: top left;
  background-color: white;
  z-index: 2;
`;

const Contact_box_card_back = styled(Contact_box_card)`
  background-image: url(${back});
  background-position: center;
  background-color: #1a1c1d;
  transform: rotateY(180deg);
  z-index: 1;
`;

export default () => {
  return (
    <Contact>
      <Contact_box>
        <Contact_box_card_front>
          <h1>Portfolio</h1>
        </Contact_box_card_front>
        <Contact_box_card_back />
      </Contact_box>
    </Contact>
  );
};
