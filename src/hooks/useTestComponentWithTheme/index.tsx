import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";

function useTestComponentWithTheme() {
  const renderWIthTheme = (component: JSX.Element) => {
    return <ThemeProvider theme={theme}>{component}</ThemeProvider>;
  };

  return renderWIthTheme;
}

export default useTestComponentWithTheme;
