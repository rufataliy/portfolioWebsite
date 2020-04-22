import React from "react";
import { ImgPortfolio, PortfolioContent, Label } from "./styled/styles";
interface PortfolioContentProps {
  showContent: Boolean;
  selectedItem: string;
  portfolio: {
    image: string;
    label: string;
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
      <ImgPortfolio
        src={"https://portfoliorufat.herokuapp.com/img/" + portfolio.image}
      />
      <Label>
        <span>{portfolio.label}</span>
      </Label>
      {showContent && selectedItem === portfolio.label && (
        <PortfolioContent
          dangerouslySetInnerHTML={{ __html: portfolio.text }}
        />
      )}
    </React.Fragment>
  );
};
