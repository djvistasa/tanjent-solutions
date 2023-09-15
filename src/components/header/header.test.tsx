import { describe, expect, it, vi } from "vitest";
import { useTestComponentWithTheme } from "../../hooks";
import Header from "./";

describe("Testing header", () => {
  const mountWithTheme = useTestComponentWithTheme();

  it("should be able to render header component", () => {
    const onSearch = vi.fn();
    const onFilterChanged = vi.fn();
    const onNewEmployee = vi.fn();
    const options = [
      {
        id: 0,
        title: "Option 1",
      },
    ];

    const { getByTestId } = mountWithTheme(
      <Header
        numberOfEmployees={0}
        filterOptions={options}
        onSearch={onSearch}
        onFilterChanged={onFilterChanged}
        onNewEmployee={onNewEmployee}
      />
    );

    const componentSnapshot = getByTestId("headerContainer");

    expect(componentSnapshot).toMatchSnapshot();
  });
});
