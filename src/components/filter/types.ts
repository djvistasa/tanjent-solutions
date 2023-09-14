interface FilterOption {
  id: number;
  title: string;
}

interface FilterProps {
  onFilterChange: (selectedOption: FilterOption) => void;
  filterOptions: FilterOption[];
}

interface StyledOptionsWrapperProps {
  isExpanded: boolean;
}

export type { FilterProps, FilterOption, StyledOptionsWrapperProps };
