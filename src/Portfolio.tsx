import React, { useState } from "react";
import {
  Box,
  FlexWrapper,
  ImgPortfolio,
  PortfolioContent,
  Label,
} from "./styled/styles";
//@ts-ignore
import styled from "styled-components";
import prodigyImg from "./img/prodigy.png";
import sannTekImg from "./img/sannTek.png";
import garden from "./img/ss.png";

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
      setOpenElement(undefined);
    } else {
      openElement?.classList.remove("portfolio-open");
      clickedBox.classList.add("portfolio-open");
      setOpenElement(clickedBox);
      setState(!state);
    }
    //@ts-ignore
    clickedBox.parentElement.scrollTo(0, 0);
    //@ts-ignore
  };
  return (
    <FlexWrapper>
      <Box id="prodigy" onClick={open}>
        <ImgPortfolio src={prodigyImg} />
        <Label>Prodigy</Label>
        {openElement && openElement.id === "prodigy" && (
          <PortfolioContent>
            ExpressJS, MySql, HTML, CSS | <a href="">Demo</a>
          </PortfolioContent>
        )}
      </Box>
      <Box id="sanntek" onClick={open}>
        <ImgPortfolio src={sannTekImg} />
        <Label>SannTekk</Label>
        {openElement && openElement.id === "sanntek" && (
          <PortfolioContent>ExpressJS, MySql, HTML, CSS</PortfolioContent>
        )}
      </Box>
      <Box id="prodigy2" onClick={open}>
        <ImgPortfolio src={garden} />
        <Label>Css Zen Garden</Label>
        {openElement && openElement.id === "prodigy2" && (
          <PortfolioContent>ExpressJS, MySql, HTML, CSS</PortfolioContent>
        )}
      </Box>
    </FlexWrapper>
  );
};

export default Portfolio;
