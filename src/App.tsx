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
    fetch("https://portfoliorufat.herokuapp.com/api/pages")
      .then((res) => res.json())
      .then(setPages)
      .catch((err) => console.log(err));
    console.log(pages);

    openPage?.scrollIntoView();
  }, [openPage]);
  const open: eventHandler = (event: Event) => {
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
    openPage?.classList.remove("open");
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
          <React.Fragment key={page.name}>
            {page.name !== "Contact" ? (
              <Box
                key={page.name}
                className="page"
                id={page.name}
                onClick={open}
              >
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
