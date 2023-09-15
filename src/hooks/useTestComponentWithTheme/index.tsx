import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";

import { RenderResult } from "@testing-library/react";
import { EasyPeasyConfig, Store, StoreProvider } from "easy-peasy";
import { ReactElement } from "react";
import { StoreModel } from "../../store/types";

function useTestComponentWithTheme(
  mockStore?: Store<StoreModel, EasyPeasyConfig<undefined, {}>>
) {
  const renderWithTheme = (component: ReactElement<any, any>): RenderResult => {
    return mockStore
      ? render(
          <StoreProvider store={mockStore}>
            <ThemeProvider theme={theme}>{component}</ThemeProvider>
          </StoreProvider>
        )
      : render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
  };

  return renderWithTheme;
}

export default useTestComponentWithTheme;

// export default useTestComponentWithTheme;
