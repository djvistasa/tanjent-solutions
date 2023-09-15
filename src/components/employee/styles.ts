import styled from "styled-components";
import { calculateRem } from "../../utils";
const StyledEmployee = styled.a`
  background-color: ${({
    theme: {
      colors: { gray },
    },
  }) => gray};
  flex: 2;
  border-radius: ${calculateRem(10)};
  padding: ${calculateRem(30)};
  display: flex;
  align-items: center;
  margin-bottom: ${calculateRem(30)};
`;

const StyledLabel = styled.h2`
  font-size: ${calculateRem(20)};
  color: ${({
    theme: {
      colors: { white },
    },
  }) => white};
  margin-right: ${calculateRem(15)};
`;

const StyledCounter = styled.p`
  color: ${({
    theme: {
      colors: { primary },
    },
  }) => primary};
  width: ${calculateRem(25)};
  height: ${calculateRem(25)};
  line-height: ${calculateRem(25)};
  border-radius: 100%;
  text-align: center;
  font-size: ${calculateRem(18)};
  margin-right: ${calculateRem(15)};
  border: ${({
    theme: {
      colors: { primary },
    },
  }) => `1px solid ${primary}`};
`;

const StyledEmployeeWrapper = styled.div`
  display: flex;
  gap: 30px;
`;

const StyledDeleteAction = styled.a`
  width: ${calculateRem(45)};
  height: ${calculateRem(45)};
  margin-top: ${calculateRem(20)};
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${({
    theme: {
      colors: { white },
    },
  }) => white};
`;

export {
  StyledCounter,
  StyledDeleteAction,
  StyledEmployee,
  StyledEmployeeWrapper,
  StyledLabel,
};
