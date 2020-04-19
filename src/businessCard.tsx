import React from "react";
import styled from "styled-components";
import front from "./img/prodigy.png";
import back from "./img/sannTek.png";
import { Box } from "./styled/styles";
const ContactBox = styled.div`
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

  perspective: 1000px;
  margin: 0 auto;
  padding: 0;
  overflow: visible;
  box-shadow: none;
  &:hover {
    transform: scale(1);
    box-shadow: none;
  }
  &:hover ${ContactBox} {
    transform: rotateY(180deg);
  }
`;
const ContactBoxCard = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-size: cover;
  border-radius: 10px;
`;

const ContactBoxCardFront = styled(ContactBoxCard)`
  background-position: top left;
  background-color: white;
  z-index: 2;
`;

const ContactBoxCardBack = styled(ContactBoxCard)`
  background-position: center;
  transform: rotateY(180deg);
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const LinkShadowHover = styled.span`
  transition: 0.4s;
  &:hover {
    box-shadow: 0px 11px 20px -12px grey;
    transform: translateY(-3px);
    font-size: calc(100%+1px);
  }
`;
export default () => {
  return (
    <Contact>
      <ContactBox>
        <ContactBoxCardFront>
          <h1>Contact</h1>
        </ContactBoxCardFront>
        <ContactBoxCardBack>
          <h2>+1 613 879 5442</h2>
          <a href="#">
            <h2>
              <LinkShadowHover>rufataliyevbakou@gmail.com</LinkShadowHover>
            </h2>
          </a>
          <a href="https://github.com/rufataliy">
            <h2>
              <LinkShadowHover>Github</LinkShadowHover>
            </h2>
          </a>
        </ContactBoxCardBack>
      </ContactBox>
    </Contact>
  );
};
