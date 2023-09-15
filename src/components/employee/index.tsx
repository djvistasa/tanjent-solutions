/**
 *
 * Employee
 *
 */

import { ReactComponent as DeleteIcon } from "../../assets/svg/icon-delete.svg";
import {
  StyledCounter,
  StyledDeleteAction,
  StyledEmployee,
  StyledEmployeeWrapper,
  StyledLabel,
} from "./styles";
import { EmployeeProps } from "./types";

function Employee({
  employee: { firstName, lastName, contactNumber, id, emailAddress },
  employeeIndex,
  onEmployeeSelect,
  onEmployeeDelete,
  testID,
}: EmployeeProps): JSX.Element {
  return (
    <StyledEmployeeWrapper data-testid={testID}>
      <StyledEmployee
        onClick={() => onEmployeeSelect(id)}
        data-testid="expand-employee-btn"
      >
        <StyledCounter>{employeeIndex + 1}</StyledCounter>
        <StyledLabel>{firstName}</StyledLabel>
        <StyledLabel>{lastName}</StyledLabel>
        <StyledLabel>{contactNumber}</StyledLabel>
        <StyledLabel>{emailAddress}</StyledLabel>
      </StyledEmployee>
      <StyledDeleteAction
        onClick={() => onEmployeeDelete(id, firstName)}
        data-testid="delete-employee-btn"
      >
        <DeleteIcon />
      </StyledDeleteAction>
    </StyledEmployeeWrapper>
  );
}

export default Employee;
