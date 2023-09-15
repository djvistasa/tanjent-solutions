import { fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { useTestComponentWithTheme } from "../../hooks";
import Filter from "./index";
import { FilterOption } from "./types";

describe("Filter", () => {
  const mountWithTheme = useTestComponentWithTheme();
  const mockOnFilerChange = vi.fn();

  const mockFilter: FilterOption[] = [
    {
      id: 1,
      title: "Option 1",
    },
  ];
  it("should render options when clicked", () => {
    const { getByTestId } = mountWithTheme(
      <Filter filterOptions={mockFilter} onFilterChange={mockOnFilerChange} />
    );

    const filterTrigger = getByTestId("filter-trigger");
    fireEvent.click(filterTrigger);
    const filterOption = getByTestId("filter-option-0");
    expect(filterOption).toBeDefined();
  });

  it("should call onFilterChange when option is clicked", () => {
    const { getByTestId } = mountWithTheme(
      <Filter filterOptions={mockFilter} onFilterChange={mockOnFilerChange} />
    );

    const filterTrigger = getByTestId("filter-trigger");
    fireEvent.click(filterTrigger);
    const filterOption = getByTestId("filter-option-0");
    fireEvent.click(filterOption);
    expect(mockOnFilerChange).toHaveBeenCalledWith({
      id: 1,
      title: "Option 1",
    });
  });
});
