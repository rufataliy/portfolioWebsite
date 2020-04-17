import React, { ReactNode } from "react";
// @ts-ignore
import {
  PageBackBlock,
  InnerBox,
  CloseBtn,
  LineLeft,
  LineRight,
} from "./styled/styles";

interface PageProps {
  close: voidFunction;
  children?: ReactNode;
}
const onClick: eventHandler = (event) => {
  event.stopPropagation();
};
export default ({ close, children }: PageProps) => {
  return (
    <React.Fragment>
      <CloseBtn onClick={close}>
        <LineLeft />
        <LineRight />
      </CloseBtn>
      <InnerBox onClick={onClick}>
        {children}
        <PageBackBlock className="test" />
      </InnerBox>
    </React.Fragment>
  );
};
