import React, { useState, useEffect } from "react";
// @ts-ignore
import About from "./About";
import Portfolio from "./Portfolio";
import { Box, FlexWrapper, GlobalStyles } from "./styled/styles";
import Page from "./Page";
import BusinessCard from "./businessCard";

function App() {
  const [orientation, setOrientation] = useState({});
  const [state, setState] = useState("");
  const [openPage, setOpenPage] = useState<HTMLDivElement>();
  useEffect(() => {
    window.addEventListener(
      "devicemotion",
      ({ rotationRate: { alpha, gamma, beta } }) => {
        console.log({ alpha, gamma, beta });

        setOrientation({ rotate: alpha });
      }
    );
    openPage?.scrollIntoView();
  }, [openPage]);
  const open: eventHandler = (event: Event) => {
    event.stopPropagation();
    event.preventDefault();
    //@ts-ignore
    setState(event.target.id);
    //@ts-ignore
    setOpenPage(event.target);
    //@ts-ignore
    event.target.classList.toggle("open");
    //@ts-ignore
  };
  const close: VoidFunction = () => {
    setState("");
    openPage?.classList.toggle("open");
    //@ts-ignore
    setOpenPage(undefined);
  };
  const onClick: eventHandler = (event) => {
    open(event);
  };
  return (
    <FlexWrapper>
      <GlobalStyles />
      <Box id="about" onClick={onClick}>
        {state === "about" ? (
          <Page close={close}>
            <About />
          </Page>
        ) : (
          <h1>About</h1>
        )}
      </Box>
      <Box id="portfolio" onClick={onClick}>
        {state === "portfolio" ? (
          <Page close={close}>
            <Portfolio />
          </Page>
        ) : (
          <h1>Portfolio</h1>
        )}
      </Box>
      <BusinessCard />
    </FlexWrapper>
  );
}

export default App;
