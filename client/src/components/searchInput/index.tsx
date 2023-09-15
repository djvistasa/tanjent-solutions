/**
 *
 * SearchInput
 *
 */
import { StyledSearchInput, StyledSearchInputContainer } from "./styles";
import { SearchInputProps } from "./types";

function SearchInput({ onSearch }: SearchInputProps): JSX.Element {
  return (
    <StyledSearchInputContainer>
      <StyledSearchInput
        placeholder="Search by name, surname or email"
        onChange={(searchValue) => onSearch(searchValue.target.value)}
      />
    </StyledSearchInputContainer>
  );
}

export default SearchInput;
