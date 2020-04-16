import React from "react";
import profilePhoto from "./img/profile3.png";
//@ts-ignore
import { Page, ImgBox, Img } from "./styled/styles";
const About = () => {
  return (
    <Page>
      <ImgBox>
        <Img src={profilePhoto} alt="" />
      </ImgBox>
      <span>
        <h1>About</h1>
        <h3>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
          molestias quo numquam ea, quasi aspernatur animi iure? Nam dignissimos
          sit sequi autem facilis, inventore optio iure repellat, dolores
          exercitationem officiis?
        </h3>
      </span>
    </Page>
  );
};
export default About;
