import React, { useState, useEffect } from "react";
// @ts-ignore
import About from "./About";
import Portfolio from "./Portfolio";
import { Box, FlexWrapper, GlobalStyles } from "./styled/styles";
import Page from "./Page";
import BusinessCard from "./businessCard";
import PageThumbnail from "./PageThumbnail";
function App() {
  const [state, setState] = useState("");
  const [openPage, setOpenPage] = useState<HTMLDivElement>();
  const [pages, setPages] = useState<page[]>();
  useEffect(() => {
    fetch("https://portfolio.rufataliyev.com/api/pages")
      .then((res) => res.json())
      .then((pages) => setPages(pages))
      .catch((err) => console.log(err));
    window.addEventListener(
      "devicemotion",
      ({ rotationRate: { alpha, gamma, beta } }) => {
        console.log({ alpha, gamma, beta });
      }
    );
    openPage?.scrollIntoView();
  }, [openPage]);
  const open: eventHandler = (event: Event) => {
    console.log("open");

    event.stopPropagation();
    event.preventDefault();
    //@ts-ignore
    setState(event.target.closest(".page").id);
    //@ts-ignore
    setOpenPage(event.target.closest(".page"));
    //@ts-ignore
    event.target.closest(".page").classList.add("open");
    //@ts-ignore
  };
  const close: eventHandler = (e) => {
    e.stopPropagation();
    setState("");
    console.log(openPage);

    openPage?.classList.remove("open");
    //@ts-ignore
    setOpenPage(undefined);
  };
  const components = (page) => {
    const compns = {
      About: <About page={page} />,
      Portfolio: <Portfolio />,
      Contact: <BusinessCard page={page} />,
    };
    return compns[page.name];
  };
  return (
    <FlexWrapper>
      <GlobalStyles />
      {pages &&
        pages.map((page: page) => (
          <React.Fragment>
            {page.name !== "Contact" ? (
              <Box className="page" id={page.name} onClick={open}>
                {state === page.name ? (
                  <Page close={close}>{components(page)}</Page>
                ) : (
                  <PageThumbnail page={page} />
                )}
              </Box>
            ) : (
              <BusinessCard page={page} />
            )}
          </React.Fragment>
        ))}
    </FlexWrapper>
  );
}

export default App;
