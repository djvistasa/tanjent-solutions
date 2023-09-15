/**
 *
 * Header
 *
 */

import { ReactComponent as PlusIcon } from "../../assets/svg/icon-plus.svg";
import { StyledButtonIconWrapper } from "../../theme/global-styles";
import Button from "../button";
import Filter from "../filter";
import SearchInput from "../searchInput";
import {
  StyledActionsWrapper,
  StyledHeader,
  StyledHeaderInner,
  StyledTitleWrapper,
} from "./styles";
import { HeaderProps } from "./types";
import { formatNumberOfEmployeeLabel } from "./utils";

function Header({
  numberOfEmployees,
  onFilterChanged,
  filterOptions,
  onNewEmployee,
  onSearch,
}: HeaderProps): JSX.Element {
  return (
    <StyledHeader data-testid="headerContainer">
      <StyledHeaderInner>
        <StyledTitleWrapper>
          <h1>Employees</h1>
          <p data-testid="headerTitle">
            {formatNumberOfEmployeeLabel(numberOfEmployees)}
          </p>
        </StyledTitleWrapper>
        <SearchInput onSearch={(searchValue) => onSearch(searchValue)} />
        <StyledActionsWrapper>
          <Filter
            onFilterChange={onFilterChanged}
            filterOptions={filterOptions}
          />
          <Button
            onClick={onNewEmployee}
            title="New employee"
            variant="primary"
            icon={
              <StyledButtonIconWrapper>
                <PlusIcon />
              </StyledButtonIconWrapper>
            }
          />
        </StyledActionsWrapper>
      </StyledHeaderInner>
    </StyledHeader>
  );
}

export default Header;
