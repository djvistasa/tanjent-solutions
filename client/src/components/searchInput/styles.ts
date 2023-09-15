import styled from "styled-components";
import { calculateRem } from "../../utils";

const StyledSearchInputContainer = styled.div`
  width: ${calculateRem(300)};
  height: ${calculateRem(45)};
  border-radius: ${calculateRem(8)};
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledSearchInput = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  border: ${calculateRem(2)} solid
    ${({
      theme: {
        colors: { white },
      },
    }) => white};
  background-color: ${({
    theme: {
      colors: { secondaryFour },
    },
  }) => secondaryFour};

  &::placeholder {
    color: ${({
      theme: {
        colors: { light },
      },
    }) => light};
    font-size: ${calculateRem(16)};
  }
`;

export { StyledSearchInput, StyledSearchInputContainer };
