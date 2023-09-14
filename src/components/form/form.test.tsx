import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import Form from ".";
import { useTestComponentWithTheme } from "../../hooks";

test("does component render", () => {
  const mountWithTheme = useTestComponentWithTheme();
  const { getByTestId } = render(
    mountWithTheme(<Form testID="component test id " />)
  );

  const componentSnapshot = getByTestId("component test id");

  expect(componentSnapshot).toMatchSnapshot();
});
