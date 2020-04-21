// @ts-ignore
import styled, { keyframes, createGlobalStyle } from "styled-components";
export const devices = {
  mobile: `(min-width:320px)`,
  tablet: `(min-width:900px)`,
  laptop: `(min-width:1024px)`,
  dektop: `(min-width:2560px)`,
};
interface styledDivProps {
  state: Boolean;
}
interface stringProp {
  state: String;
}
export const GlobalStyles = createGlobalStyle`

body{
  font-family: 'Baloo Bhaina 2', cursive;
  margin:0;
  padding:0;
  min-height:100vh;
  }
  #root{
    height:100vh;
  }
  @media ${devices.mobile} {
    html{
      font-size:10px;
    }
  }
  @media ${devices.laptop} {
     html{
      font-size:18px;
    }
  }
`;

export const FlexWrapper = styled.div<{ state?: Boolean }>`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
  padding-bottom: 60px;
`;
export const PageBackBlock = styled.div`
  z-index: -1;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;
export const Box = styled.div`
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  padding: 2vw;
  width: 100vw;
  height: 250px;
  width: 500px;
  box-shadow: 0px 9px 17px -6px rgba(0, 0, 0, 0.7);
  transition: 0.2s linear;
  border-radius: 10px;
  cursor: pointer;
  margin: 20px;
  order: 2;
  display: flex;
  justify-content: space-between;
  alig-items: flex-start;
  img {
    height: 120%;
  }
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 9px 25px -15px rgba(0, 0, 0, 0.9);
    color: rgba(1, 133, 154, 1);
    text-shadow: 0px 0px rgba(1, 133, 154, 1);
  }
  &.open {
    position: fixed;
    margin: 0 auto;
    opacity: 1;
    height: 100vh;
    width: 100vw;
    max-height: 100vh;
    max-width: 100vw;
    top: 0;
    left: 0;
    order: 1;
    z-index: 10;
    background: white;
    margin: 0;
  }
  &.portfolio-open {
    overflow: visible;
    order: 1;
    height: 100vh;
    max-width: 70%;
    max-height: 100%;
    height: auto;
  }
  &.open:hover {
    transform: scale(1);
  }
  @media ${devices.mobile} {
    margin: 10px 0;
    max-width: 90%;
    &.portfolio-open {
      max-width: 95%;
      width: 100%;
    }
  }
  @media ${devices.laptop} {
    margin: 20px;
    max-width: 100%;
    &.portfolio-open {
      max-width: 70%;
    }
  }
`;
export const PortfolioBox = styled(Box)`
  height: auto;
  display: block;
`;
export const Page = styled.div`
  padding: 10px;
  overflow: hidden;
  //   display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
  p {
    font-size: 1.6rem;
  }
`;
export const Img = styled.img`
  height: 100%;
`;
export const ImgPortfolio = styled.img`
  width: 100%;
`;
export const Content = styled.div`
  width: 50%;
  max-width: 300px;
`;
export const ImgBox = styled.div`
  height: 300px;
  width: 300px;
  font-size: 1.4rem;
  overflow: hidden;
  p {
    font-size: 1.4rem;
  }
  img {
    height: auto;
    width: 100%;
  }
  @media ${devices.laptop} {
    img {
      height: 120%;
      width: 100%;
    }
    overflow: hidden;
    border: 3px solid white;
    box-shadow: inset 3px 0px 7px 5px rgba(0, 0, 0, 0.5),
      3px 0 7px 3px rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    float: left;
    margin-right: 30px;
    shape-outside: circle(50%);
  }
`;
export const Label = styled.div`
  position: absolute;
  top: 0;
  left: 5%;
  padding: 1rem 1.4rem;
  background: white;
  box-shadow: 0px 9px 10px -6px rgba(0, 0, 0, 0.7);
  border-radius: 0.5rem;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  font-size: 1.8rem;
  margin: 0;
`;
export const PortfolioContent = styled(Label)`
  top: auto;
  padding: 2vw;
  bottom: 5%;
  font-size: 1.3rem;
  border-radius: 0.5rem;
  & p {
    margin: 0;
    font-size: 1.1rem;
  }
  & h4 {
    margin: 0;
  }
  @media ${devices.mobile} {
    position: relative;
    width: 90%;
    margin: 0 auto;
    left: 0;
    & p {
      font-size: 1.4rem;
    }
  }
  @media ${devices.laptop} {
    position: absolute;
    & p {
      font-size: 1rem;
    }
  }
`;

export const InnerBox = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

export const LineLeftAnimation = keyframes`
from {
  opacity:0;
  transform: translateX(-50%) translateY(-50%) rotate(90deg) translateY(-50%);
}
to{
  opacity:1;
  transform:  translateX(-50%) translateY(-50%) rotate(45deg) translateY(-50%);
}
`;
export const LineRightAnimation = keyframes`
from {
  opacity:0;
  transform:translateX(-50%) translateY(-50%) rotate(-90deg) translateY(-50%);
}
to{
  opacity:1;
  transform:translateX(-40%) translateY(-50%) rotate(-45deg) translateY(-50%);
}
`;
export const CloseBtn = styled.div`
  margin-left: auto;
  height: 60px;
  width: 60px;
  position: absolute;
  right: 3%;
  top: 3%;
  z-index: 10000;
  @media ${devices.mobile} {
    height: 30px;
    width: 30px;
  }
`;
const Line = styled.span`
  opacity: 1;
  height: 3px;
  border-radius: 3px;
  width: 100%;
  background: grey;
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  border: 2px solid white;
`;
export const LineLeft = styled(Line)`
  transform: rotate(90deg);
  animation: ${LineLeftAnimation} 0.2s 0.3s 1 forwards ease-out;
`;
export const LineRight = styled(Line)`
  transform: rotate(-90deg);
  animation: ${LineRightAnimation} 0.2s 0.3s 1 forwards ease-out;
`;
