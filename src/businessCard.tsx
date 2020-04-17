import styled from "styled-components";

const contact_box = styled.div`
  position: relative;
  width: 100 %;
  height: 100 %;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.6);
  border-radius: 10px;
`;
const contact = styled.div`
  background-color: transparent;
  width: 300px;
  height: 200px;
  perspective: 1000px;
  margin: 0 auto;
  &:hover ${contact_box} {
    transform: rotateY(180deg);
  }
`;
const contact_box_card = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-size: cover;
  box-shadow: inset 0 0 5px 0 rgba(0, 0, 0, 0.6);
  border-radius: 10px;
`;

const contact_box_card_front = styled(contact_box_card)`
  background-image: url("../images/businessFront.jpg");
  background-position: top left;
  background-color: #d3ceca;
  z-index: 2;
`;

const contact_box_card_back = styled(contact_box_card)`
  background-image: url("../images/businessback.jpg");
  background-position: center;
  background-color: #1a1c1d;
  transform: rotateY(180deg);
  z-index: 1;
`;
