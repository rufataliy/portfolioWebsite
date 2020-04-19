import React from "react";
import { ImgPortfolio, PortfolioContent, Label } from "./styled/styles";
interface PortfolioContentProps {
  showContent: Boolean;
  selectedItem: string;
  portfolio: {
    img: string;
    label: string;
    techStack: string;
    url: string;
    position: string;
    text: string;
  };
}

export default ({
  showContent,
  portfolio,
  selectedItem,
}: PortfolioContentProps) => {
  return (
    <React.Fragment>
      <ImgPortfolio src={portfolio.img} />
      <Label>
        <span>{portfolio.label}</span>
      </Label>
      {showContent && selectedItem === portfolio.label && (
        <PortfolioContent>
          {portfolio.techStack} | <a href={portfolio.url}>Demo</a>
          <p>{portfolio.position}</p>
          <p>{portfolio.text}</p>
        </PortfolioContent>
      )}
    </React.Fragment>
  );
};
