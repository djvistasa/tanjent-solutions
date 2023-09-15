import styled from "styled-components";
import { calculateRem } from "../../utils";
import { StyledOptionsWrapperProps } from "./types";

const StyledFilter = styled.a`
  display: block;
  min-width: ${calculateRem(200)};
  position: relative;
  margin-right: ${calculateRem(50)};
  transition: 0.3s all 0.1s ease-in-out;
  h2 {
    float: left;
  }

  &:hover {
    i {
      transform: rotate(-135deg);
      -webkit-transform: rotate(-135deg);
    }
  }
`;

const StyledArrowDown = styled.i`
  border: ${({
    theme: {
      colors: { light },
    },
  }) => `1px solid ${light}`};
  border-width: 0 ${calculateRem(3)} ${calculateRem(3)} 0;
  display: block;
  padding: ${calculateRem(3)};
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
`;

const StyledOptionsWrapper = styled.div<StyledOptionsWrapperProps>`
  min-width: ${calculateRem(200)};
  margin-top: ${calculateRem(10)};
  border-radius: ${calculateRem(10)};
  position: absolute;
  background: ${({
    theme: {
      colors: { mainBackgroundColor },
    },
  }) => mainBackgroundColor};
  display: ${({ isExpanded }) => (isExpanded ? "block" : "none")};
  padding: ${calculateRem(10)};
`;
const StyledOption = styled.a`
  display: block;
  padding: ${calculateRem(10)};
  margin-bottom: ${calculateRem(10)};
  border-bottom: ${({
    theme: {
      colors: { light },
    },
  }) => `1px solid ${light}`};

  &:last-child {
    margin: 0;
    border-bottom: 0;
  }
`;

const StyledFilterTrigger = styled.a`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  span {
    margin-top: -${calculateRem(3)};
  }
`;

export {
  StyledArrowDown,
  StyledFilter,
  StyledFilterTrigger,
  StyledOption,
  StyledOptionsWrapper,
};
