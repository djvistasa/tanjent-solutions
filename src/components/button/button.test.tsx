import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import Button from ".";
import { useTestComponentWithTheme } from "../../hooks";

const mockClick = jest.fn();

test("does component render", () => {
  const mountWithTheme = useTestComponentWithTheme();
  const { getByTestId } = render(
    mountWithTheme(<Button testID="button" onClick={mockClick} />)
  );

  const componentSnapshot = getByTestId("component test id");

  expect(componentSnapshot).toMatchSnapshot();
});
