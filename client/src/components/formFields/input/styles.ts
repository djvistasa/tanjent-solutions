import styled from "styled-components";
import { calculateRem } from "../../../utils";

const StyledInput = styled.input``;

const StyledInputWrapper = styled.div`
  margin-bottom: ${calculateRem(25)};
  position: relative;
  width: 100%;
  ::placeholder {
    color: ${({
      theme: {
        colors: { light },
      },
    }) => light};
  }
`;

const StyledErrorIndicator = styled.p`
  color: ${({
    theme: {
      colors: { deleteAction },
    },
  }) => deleteAction};
  font-size: ${calculateRem(14)};
  margin-top: ${calculateRem(4)};
  right: 0;
  position: absolute;
`;

const StyledInputLabel = styled.label`
  display: block;
  margin-bottom: ${calculateRem(5)};
`;

export {
  StyledErrorIndicator,
  StyledInput,
  StyledInputLabel,
  StyledInputWrapper,
};
