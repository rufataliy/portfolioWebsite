import React from "react";
import styled from "styled-components";
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
  h1 {
    text-align: left;
  }
  overflow: hidden;
  justify-content: space-between;
  display: flex;
  background-position: top left;
  background-color: white;
  z-index: 2;
  padding: 2vw;
  box-sizing: border-box;
`;

const ContactBoxCardBack = styled(ContactBoxCard)`
  background-position: center;
  transform: rotateY(180deg);
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const LinkShadowHover = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  a {
    font-size: 1.6rem;
  }
  h3 {
    margin: 0;
    font-size: 1.6rem;
  }
  span {
    text-align: center;
  }
  span a {
    display: inline-block;
    transition: 0.4s;
  }
  & a,
  a:visited {
    color: inherit;
  }
  span:hover a {
    box-shadow: 0px 11px 20px -8px grey;
    transform: translateY(-3px);
    font-size: calc(100%+1px);
  }
`;
interface BusinessCardProps {
  page?: page;
}
export default ({ page }: BusinessCardProps) => {
  return (
    <Contact>
      <ContactBox>
        <ContactBoxCardFront>
          <h1>{page.name}</h1>
          <img
            src={`https://portfoliorufat.herokuapp.com/img/${page.image}`}
            alt=""
          />
        </ContactBoxCardFront>
        <ContactBoxCardBack>
          <LinkShadowHover dangerouslySetInnerHTML={{ __html: page.text }} />
        </ContactBoxCardBack>
      </ContactBox>
    </Contact>
  );
};
