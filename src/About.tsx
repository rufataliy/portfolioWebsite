import React from "react";
import { Page, ImgBox, Img } from "./styled/styles";

interface AboutProps {
  page?: page;
}
const About = ({ page }: AboutProps) => {
  return (
    <Page>
      <ImgBox>
        <Img
          src={`https://portfoliorufat.herokuapp.com/img/${page.image}`}
          alt="about img"
        />
      </ImgBox>
      <span dangerouslySetInnerHTML={{ __html: page.text }} />
    </Page>
  );
};
export default About;
