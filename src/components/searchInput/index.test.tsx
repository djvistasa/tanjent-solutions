import { describe, expect, test, vi } from "vitest";

import { fireEvent } from "@testing-library/react";
import { useTestComponentWithTheme } from "../../hooks";
import SearchInput from "./index";

describe("SearchInput", () => {
  const mountWithTheme = useTestComponentWithTheme();

  test("SearchInput calls onSearch when input value changes", async () => {
    const onSearch = vi.fn();
    const { getByTestId } = mountWithTheme(
      <SearchInput onSearch={onSearch} testID="search-input" />
    );

    const searchInput = getByTestId("search-input");
    fireEvent.change(searchInput, { target: { value: "test" } });

    expect(onSearch).toHaveBeenCalledWith("test");
  });
});
