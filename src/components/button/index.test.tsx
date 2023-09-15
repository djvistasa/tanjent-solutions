import { describe, expect, it, vi } from "vitest";
import { useTestComponentWithTheme } from "../../hooks";
import Button from "./index";

const mountWithTheme = useTestComponentWithTheme();
const mockClick = vi.fn();

describe("Button", () => {
  it("should render correctly", () => {
    const { getByTestId } = mountWithTheme(
      <Button
        title="Click me"
        testID="test-button"
        onClick={mockClick}
        variant="delete"
      />
    );
    const button = getByTestId("test-button");
    expect(button).toBeDefined();
  });

  it("should render correctly with icon", () => {
    const { getByTestId, getByText } = mountWithTheme(
      <Button
        title="Click me"
        testID="test-button"
        onClick={mockClick}
        variant="delete"
        icon={<div>Icon</div>}
      />
    );
    const button = getByTestId("test-button");
    expect(button).toBeDefined();
    const icon = getByText("Icon");
    expect(icon).toBeDefined();
  });

  it("should fire onclick function when clicked", () => {
    const { getByTestId } = mountWithTheme(
      <Button
        title="Click me"
        testID="test-button"
        onClick={mockClick}
        variant="delete"
      />
    );
    const button = getByTestId("test-button");
    button.click();
    expect(mockClick).toHaveBeenCalled();
  });
});
