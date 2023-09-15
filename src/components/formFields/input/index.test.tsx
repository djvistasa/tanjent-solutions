import { describe, expect, it } from "vitest";
import TextInput from ".";
import { useTestComponentWithTheme } from "../../../hooks";

describe("Input", () => {
  const mountWithTheme = useTestComponentWithTheme();

  it("should render", () => {
    const tree = mountWithTheme(<TextInput />);
    expect(tree).toMatchSnapshot();
  });
});
