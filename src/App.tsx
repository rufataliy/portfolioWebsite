import React, { useState, useEffect } from "react";
// @ts-ignore
import { createGlobalStyle } from "styled-components";
import InnerBox from "./InnerBox";
import About from "./About";
import Portfolio from "./Portfolio";
import { Box, FlexWrapper } from "./styled/styles";
const GlobalStyles = createGlobalStyle`
body{
  margin:0;
  padding:0;
  }
`;

function App() {
  const [state, setState] = useState("");
  const [openPage, setOpenPage] = useState<HTMLDivElement>();
  useEffect(() => {
    openPage?.scrollIntoView();
  }, [openPage]);
  const open = (event: Event) => {
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
  const close = () => {
    setState("");
    openPage?.classList.toggle("open");
    //@ts-ignore
    setOpenPage(undefined);
  };
  return (
    <FlexWrapper state={state}>
      <GlobalStyles />
      <Box id="about" onClick={(event: Event) => open(event)}>
        {state === "about" ? (
          <InnerBox close={close}>
            <About />
          </InnerBox>
        ) : (
          <h1>About</h1>
        )}
      </Box>
      <Box id="portfolio" onClick={(event: Event) => open(event)}>
        {state === "portfolio" ? (
          <InnerBox close={close}>
            <Portfolio />
          </InnerBox>
        ) : (
          <h1>Portfolio</h1>
        )}
      </Box>
      <Box id="contact" onClick={(event: Event) => open(event)}>
        {state === "contact" ? <InnerBox close={close} /> : <h1>Contact</h1>}
      </Box>
      <Box id="test" onClick={(event: Event) => open(event)}>
        {state === "test" ? <InnerBox close={close} /> : <h1>Test</h1>}
      </Box>
    </FlexWrapper>
  );
}

export default App;
