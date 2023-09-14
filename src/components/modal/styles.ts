import styled from "styled-components";
import { calculateRem, hexToRGB } from "../../utils";
import { StyledModalProps } from "./types";

const StyledModal = styled.div<StyledModalProps>`
  position: fixed;
  z-index: 9999;
  top: 0;
  width: 100%;
  left: 0;
  right: 0;
  height: 100%;
  background-color: ${({
    theme: {
      colors: { secondaryFour },
    },
  }) => hexToRGB(secondaryFour, "0.4")};
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

const StyledModalInner = styled.div`
  padding: ${calculateRem(40)};
  width: ${calculateRem(450)};
  box-sizing: border-box;
  max-height: ${calculateRem(220)};
  border-radius: ${calculateRem(10)};
  background-color: ${({
    theme: {
      colors: { mainBackgroundColor },
    },
  }) => mainBackgroundColor};
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;

  h1 {
    margin-bottom: ${calculateRem(20)};
  }
`;

const StyledActionsWrapper = styled.div`
  display: flex;
  align-self: flex-end;
  justify-content: space-between;
  gap: ${calculateRem(10)};
  margin-top: ${calculateRem(20)};
  float: right;
`;

export { StyledActionsWrapper, StyledModal, StyledModalInner };
