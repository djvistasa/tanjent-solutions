import { emptyStateIcon } from "../../assets";
import { StyledEmptyStateImageWrapper } from "../../theme/global-styles";
import Employee from "../employee";
import { StyledEmployees } from "./styles";
import { IEmployeesProps } from "./types";

const Employees = ({
  employees,
  expandEmployee,
  initiateEmployeeDelete,
}: IEmployeesProps): JSX.Element => {
  return (
    <StyledEmployees>
      {employees.length > 0 ? (
        employees.map((employee, index) => (
          <Employee
            employee={employee}
            onEmployeeSelect={expandEmployee}
            employeeIndex={index}
            onEmployeeDelete={initiateEmployeeDelete}
            key={employee.id}
            testID={`employee-${index}`}
          />
        ))
      ) : (
        <StyledEmptyStateImageWrapper data-testid="no-employees-container">
          <img src={emptyStateIcon} />
          <p>There is nothing here</p>
          <p>
            Create a new employee by clicking the <strong>New Employee </strong>
            button to get started
          </p>
        </StyledEmptyStateImageWrapper>
      )}
    </StyledEmployees>
  );
};

export default Employees;
