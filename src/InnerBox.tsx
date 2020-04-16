import React, { ReactNode } from "react";
// @ts-ignore
import styled, { keyframes } from "styled-components";
import { PageBackBlock } from "./styled/styles";
const InnerBox = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const LineLeftAnimation = keyframes`
from {
  opacity:0;
  transform: rotate(90deg) translateY(-50%);
}
to{
  opacity:1;
  transform: rotate(45deg) translateY(-50%);
}
`;
const LineRightAnimation = keyframes`
from {
  opacity:0;
  transform: rotate(-90deg) translateY(-50%);
}
to{
  opacity:1;
  transform: rotate(-45deg) translateY(-50%);
}
`;
const CloseBtn = styled.div`
  margin-left: auto;
  height: 60px;
  width: 60px;
  position: absolute;
  right: 0;
  z-index: 10000;
`;
const LineLeft = styled.span`
  opacity: 1;
  height: 3px;
  border-radius: 3px;
  width: 100%;
  background: grey;
  display: inline-block;
  position: absolute;
  transform: rotate(90deg) translateY(-50%);
  animation: ${LineLeftAnimation} 0.2s 0.3s 1 forwards ease-out;
  top: 50%;
`;
const LineRight = styled.span`
  opacity: 1;
  height: 3px;
  border-radius: 3px;
  background: grey;
  width: 100%;
  display: inline-block;
  position: absolute;
  transform: rotate(-90deg) translateY(-50%);
  animation: ${LineRightAnimation} 0.2s 0.3s 1 forwards ease-out;
  top: 50%;
`;
interface InnerBoxProps {
  close: () => void;
  children?: ReactNode;
}
export default ({ close, children }: InnerBoxProps) => {
  return (
    <InnerBox onClick={(event: Event) => event.stopPropagation()}>
      <CloseBtn onClick={close}>
        <LineLeft />
        <LineRight />
      </CloseBtn>
      <PageBackBlock className="test" />
      {children}
    </InnerBox>
  );
};
