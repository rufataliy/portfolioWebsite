import React, { useState } from "react";
import { Box, FlexWrapper, ImgPortfolio } from "./styled/styles";
//@ts-ignore
import styled from "styled-components";
import prodigyImg from "./img/prodigy.png";
import sannTekImg from "./img/sannTek.png";
const Label = styled.h1`
  position: absolute;
  top: 0;
  left: 5%;
  padding: 10px 15px;
  background: white;
  box-shadow: 0px 9px 10px -6px rgba(0, 0, 0, 0.7);
  border-radius: 10px;
`;
const ImgBox = styled.div`
  height: 100%;
  width: 300px;
  max-width: 100%;
`;
const Portfolio = () => {
  const [state, setState] = useState(false);
  const [openElement, setOpenElement] = useState<HTMLDivElement | undefined>();
  const open = ({ target }: Event) => {
    setState(!state);
    //@ts-ignore
    const clickedBox = target.closest("div");
    if (openElement === clickedBox) {
      setState(!state);
      console.log(true);
      //@ts-ignore
      openElement?.classList.toggle("portfolio-open");
    } else {
      openElement?.classList.remove("portfolio-open");
      clickedBox.classList.add("portfolio-open");
      setOpenElement(clickedBox);
      setState(!state);
    }
    //@ts-ignore
    clickedBox.parentElement.scrollTo(0, 0);
    //@ts-ignore
    // setOpenElement((prevElement: HTMLDivElement | undefined) => {
    //   else {

    //     //@ts-ignore

    //     //@ts-ignore
    //   }

    //   return clickedBox;
    // });
    //@ts-ignore
  };
  return (
    <FlexWrapper>
      <Box onClick={open}>
        <ImgPortfolio src={prodigyImg} />
        <Label>Prodigy</Label>
        {state && (
          <h3>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
            molestias quo numquam ea, quasi aspernatur animi iure? Nam
            dignissimos sit sequi autem facilis, inventore optio iure repellat,
            dolores exercitationem officiis?
          </h3>
        )}
      </Box>
      <Box onClick={open}>
        <ImgPortfolio src={sannTekImg} />
        <Label>SannTekk</Label>
        {state && (
          <h3>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
            molestias quo numquam ea, quasi aspernatur animi iure? Nam
            dignissimos sit sequi autem facilis, inventore optio iure repellat,
            dolores exercitationem officiis?
          </h3>
        )}
      </Box>
      <Box onClick={open}>
        <ImgPortfolio src={prodigyImg} />
        <Label>Prodigy</Label>
        {state && (
          <h3>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
            molestias quo numquam ea, quasi aspernatur animi iure? Nam
            dignissimos sit sequi autem facilis, inventore optio iure repellat,
            dolores exercitationem officiis?
          </h3>
        )}
      </Box>
    </FlexWrapper>
  );
};

export default Portfolio;
