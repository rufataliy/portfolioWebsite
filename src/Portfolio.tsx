import React, { useState, useEffect } from "react";
import { Box, FlexWrapper } from "./styled/styles";
import PortfolioContent from "./PortfolioContent";

//@ts-ignore
import prodigyImg from "./img/prodigy.png";

const Portfolio = () => {
  const [state, setState] = useState(false);
  const [openElement, setOpenElement] = useState<HTMLDivElement | undefined>();
  const [portfolios, setPortfolios] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api")
      .then((res) => res.json())
      .then(setPortfolios)
      .catch(console.log);
  }, []);
  const open: eventHandler = ({ target }: Event) => {
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
  const portfolioContent = {
    img: prodigyImg,
    label: "Prodigy",
    techStack: "React,Express,Mongodb, Auth",
    url: "http://localhost:3000",
    position: "Full-stack",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, quos vitae? Inventore consequuntur vitae aliquam laboriosam fuga at voluptates aut ullam dolor suscipit! Accusamus rem quod molestiae velit nemo tenetur?",
  };
  return (
    <FlexWrapper>
      {portfolios[0] &&
        portfolios.forEach((portfolio) => (
          <Box id={portfolio.label} onClick={open}>
            <PortfolioContent
              selectedItem={openElement?.id}
              portfolio={portfolio}
              showContent={state}
            />
          </Box>
        ))}
    </FlexWrapper>
  );
};

export default Portfolio;
