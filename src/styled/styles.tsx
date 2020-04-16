// @ts-ignore
import styled from "styled-components";
interface styledDivProps {
  state: Boolean;
}
interface stringProp {
  state: String;
}

export const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 100%;
  overflow: ${({ state }: stringProp) => (state ? "hidden" : "auto")};
`;
export const PageBackBlock = styled.div`
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
  padding: 30px;
  height: 100vh;
  width: 100vw;
  max-height: 300px;
  max-width: 500px;
  box-shadow: 0px 9px 17px -6px rgba(0, 0, 0, 0.7);
  transition: 0.2s linear;
  border-radius: 10px;
  cursor: pointer;
  margin: 20px;
  order: 2;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 9px 25px -15px rgba(0, 0, 0, 0.9);
    color: rgba(1, 133, 154, 1);
    text-shadow: 0px 0px rgba(1, 133, 154, 1);
  }
  &.open {
    position: fixed;
    overflow: hidden;
    margin: 0 auto;
    opacity: 1;
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
    max-width: 70%;
    max-height: 100%;
    height: auto;
  }
  &.open:hover {
    transform: scale(1);
  }
`;
export const Page = styled.div`
  padding: 10px;
  overflow: hidden;
  //   display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
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
  margin-right: 30px;
  shape-outside: circle(50%);
  float: left;
  height: 300px;
  width: 300px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid white;
  box-shadow: inset 3px 0px 7px 5px rgba(0, 0, 0, 0.5),
    3px 0 7px 3px rgba(0, 0, 0, 0.3);
`;
