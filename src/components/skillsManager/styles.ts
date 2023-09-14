import styled from "styled-components";
import { calculateRem } from "../../utils";

const StyledSkillsManager = styled.div`
  h2 {
    color: ${({
      theme: {
        colors: { secondary },
      },
    }) => secondary};
    margin-bottom: ${calculateRem(20)};
  }

  button {
    width: 100%;
  }

  margin-bottom: ${calculateRem(30)};
`;

const StyledSkillsTable = styled.table`
  width: 100%;
  border-spacing: ${calculateRem(20)};
  width: calc(100% + ${calculateRem(40)});
  margin-left: -${calculateRem(20)};
  border-collapse: separate;
  th {
    text-align: left;
    font-size: ${calculateRem(15)};
    font-weight: 500;
  }

  td {
    position: relative;

    > div {
      margin-bottom: 0;
    }
  }
`;

const StyledRow = styled.tr`
  a {
    width: ${calculateRem(25)};
    height: ${calculateRem(25)};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s background-color 0.1s ease-in-out;
    cursor: pointer;
    border-radius: 10px;

    &:hover {
      background: ${({
        theme: {
          colors: { secondary },
        },
      }) => secondary};
    }
  }
`;

const StyledHeadingItem = styled.p``;

const StyledSkillNameWrapper = styled.div``;

export {
  StyledHeadingItem,
  StyledRow,
  StyledSkillNameWrapper,
  StyledSkillsManager,
  StyledSkillsTable,
};
