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

function Header({
  numberOfEmployees,
  onFilterChanged,
  filterOptions,
  onNewEmployee,
  onSearch,
}: HeaderProps): JSX.Element {
  const formatNumberOfEmployeeLabel = () => {
    switch (numberOfEmployees) {
      case 0:
        return "No employees";
      case 1:
        return `There is 1 employee`;
      default:
        return `There are ${numberOfEmployees} employees`;
    }
  };

  return (
    <StyledHeader>
      <StyledHeaderInner>
        <StyledTitleWrapper>
          <h1>Employees</h1>
          <p>{formatNumberOfEmployeeLabel()}</p>
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
