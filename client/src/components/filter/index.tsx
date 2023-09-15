/**
 *
 * Filter
 *
 */

import { useState } from "react";
import {
  StyledArrowDown,
  StyledFilter,
  StyledFilterTrigger,
  StyledOption,
  StyledOptionsWrapper,
} from "./styles";
import { FilterOption, FilterProps } from "./types";

function Filter({
  onFilterChange,
  filterOptions = [],
}: FilterProps): JSX.Element {
  const [activeFilterOptionIndex, setActiveFilterIndex] = useState<number>(0);
  const [areFilterOptionsVisible, setAreFilterOptionsVisible] =
    useState<boolean>(false);

  const toggleFilterOptions = () =>
    setAreFilterOptionsVisible((prevVal) => !prevVal);

  const handleFilterChange = (option: FilterOption, optionIndex: number) => {
    toggleFilterOptions();
    onFilterChange(option);
    setActiveFilterIndex(optionIndex);
  };

  return (
    <StyledFilter>
      <StyledFilterTrigger onClick={() => toggleFilterOptions()}>
        <h2>{filterOptions[activeFilterOptionIndex].title}</h2>
        <span>
          <StyledArrowDown />
        </span>
      </StyledFilterTrigger>

      <StyledOptionsWrapper isExpanded={areFilterOptionsVisible}>
        {filterOptions.map(({ title, id }, index) => (
          <StyledOption
            key={id}
            onClick={() => handleFilterChange({ title, id }, index)}
          >
            {title}
          </StyledOption>
        ))}
      </StyledOptionsWrapper>
    </StyledFilter>
  );
}

export default Filter;
