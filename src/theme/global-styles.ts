import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import { calculateRem } from '../utils';

const GlobalStyles = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
  }

    body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${({
      theme: {
        colors: { light },
      },
    }) => light};
    font-family: ${({
      theme: {
        fonts: { spartanRegular },
      },
    }) => spartanRegular};
    background-color:${({
      theme: {
        colors: { secondaryFour },
      },
    }) => secondaryFour} ;
    box-sizing: border-box;
  }

  a {
    cursor: pointer;
    font-weight: 300;
  }

  strong {
    font-weight: 700;
  } 

    input, select {
    border: none;
    border-radius: ${calculateRem(5)};
    padding: ${calculateRem(15)};
    width: 100%;
    outline: none;
    box-sizing: border-box;
    background-color: ${({
      theme: {
        colors: { secondaryBackgroundColor },
      },
    }) => secondaryBackgroundColor};
    color: ${({
      theme: {
        colors: { light },
      },
    }) => light};
    font-size: ${calculateRem(14)};
  }


  `;

const StyledButtonIconWrapper = styled.div`
  width: ${calculateRem(30)};
  height: ${calculateRem(30)};
  background-color: ${({
    theme: {
      colors: { light },
    },
  }) => light};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledApplicationWrapper = styled.div`
  max-width: ${calculateRem(1024)};
  height: 100%;
  margin: auto;
  padding: ${calculateRem(15)};
`;

const StyledClearFix = styled.div`
  clear: both;
`;

const StyledEmptyStateImageWrapper = styled.div`
  width: 400px;
  margin: auto;

  img {
    width: inherit;
  }

  > p {
    margin-bottom: ${calculateRem(25)};
  }

  p {
    text-align: center;
    font-size: ${calculateRem(25)};
  }
`;

export {
  GlobalStyles,
  StyledApplicationWrapper,
  StyledButtonIconWrapper,
  StyledClearFix,
  StyledEmptyStateImageWrapper,
};
