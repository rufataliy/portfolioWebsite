import React, { useState, useEffect } from "react";
import { PortfolioBox, FlexWrapper } from "./styled/styles";
import PortfolioContent from "./PortfolioContent";

//@ts-ignore
import prodigyImg from "./img/prodigy.png";

const Portfolio = () => {
  const [state, setState] = useState(false);
  const [openElement, setOpenElement] = useState<HTMLDivElement | undefined>();
  const [portfolios, setPortfolios] = useState([]);
  useEffect(() => {
    fetch("https://portfoliorufat.herokuapp.com/api/portfolios")
      .then((res) => res.json())
      .then((res) => {
        setPortfolios(res);
      })
      .catch(console.log);
  }, []);
  const open: eventHandler = ({ target }: Event) => {
    //@ts-ignore
    const clickedBox = target.closest("div");
    if (openElement === clickedBox) {
      setState(false);
      console.log(true);
      //@ts-ignore
      openElement?.classList.toggle("portfolio-open");
      setOpenElement(undefined);
    } else {
      openElement?.classList.remove("portfolio-open");
      clickedBox.classList.add("portfolio-open");
      setOpenElement(clickedBox);
      setState(true);
    }
    //@ts-ig+nore
    clickedBox.parentElement.scrollTo(0, 0);
    //@ts-ignore
  };

  return (
    <FlexWrapper>
      {portfolios[0] &&
        portfolios?.map((portfolio) => (
          <PortfolioBox id={portfolio.label} onClick={open}>
            <PortfolioContent
              selectedItem={openElement?.id}
              portfolio={portfolio}
              showContent={state}
            />
          </PortfolioBox>
        ))}
    </FlexWrapper>
  );
};

export default Portfolio;
