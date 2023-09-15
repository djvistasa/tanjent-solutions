import styled from "styled-components";
import { calculateRem } from "../../utils";

const StyledForm = styled.form`
  padding: ${calculateRem(40)};
  max-height: 100vh;
  overflow-y: auto;
  h1 {
    margin-bottom: ${calculateRem(50)};
  }
  section {
    > p {
      color: ${({
        theme: {
          colors: { primary },
        },
      }) => primary};
      font-weight: 500;
      margin-bottom: ${calculateRem(20)};
    }
  }
`;

const StyledInlineFieldWrapper = styled.div`
  display: flex;
  gap: ${calculateRem(20)};
`;

const StyledActionsWrapper = styled.div`
  padding-bottom: ${calculateRem(70)};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledPositiveActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${calculateRem(10)};
`;

export {
  StyledActionsWrapper,
  StyledForm,
  StyledInlineFieldWrapper,
  StyledPositiveActionsWrapper,
};
