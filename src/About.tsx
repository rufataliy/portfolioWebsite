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
          src={`https://portfoliorufat.herokuapp.com/${page.image}`}
          alt=""
        />
      </ImgBox>
      <span dangerouslySetInnerHTML={{ __html: page.text }} />
    </Page>
  );
};
export default About;
