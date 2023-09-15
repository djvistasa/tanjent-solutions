/**
 *
 * SearchInput
 *
 */
import { StyledSearchInput, StyledSearchInputContainer } from "./styles";
import { SearchInputProps } from "./types";

function SearchInput({ onSearch, testID }: SearchInputProps): JSX.Element {
  return (
    <StyledSearchInputContainer>
      <StyledSearchInput
        data-testid={testID}
        placeholder="Search by name, surname or email"
        onChange={(searchValue) => onSearch(searchValue.target.value)}
      />
    </StyledSearchInputContainer>
  );
}

export default SearchInput;
