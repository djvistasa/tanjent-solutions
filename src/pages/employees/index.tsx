/**
 *
 * Employees
 *
 */
import { useStoreRehydrated } from "easy-peasy";
import { emptyStateIcon } from "../../assets";
import Employee from "../../components/employee";
import Header from "../../components/header";
import { useEmployees } from "../../hooks/useEmployees";
import {
  StyledApplicationWrapper,
  StyledEmptyStateImageWrapper,
} from "../../theme/global-styles";
import { filterOptions } from "./config";

function Employees(): JSX.Element {
  const {
    employees,
    confirmDelete,
    searchForEmployee,
    initiateNewEmployeeFlow,
    expandEmployee,
    filterEmployees,
  } = useEmployees();

  const isHydrated = useStoreRehydrated();

  return isHydrated ? (
    <StyledApplicationWrapper>
      <Header
        numberOfEmployees={employees.length}
        onFilterChanged={filterEmployees}
        onNewEmployee={initiateNewEmployeeFlow}
        onSearch={searchForEmployee}
        filterOptions={filterOptions}
      />

      {employees.length > 0 ? (
        employees.map((employee, index) => (
          <Employee
            employee={employee}
            onEmployeeSelect={expandEmployee}
            employeeIndex={index}
            onEmployeeDelete={confirmDelete}
            key={employee.id}
          />
        ))
      ) : (
        <StyledEmptyStateImageWrapper>
          <img src={emptyStateIcon} />
          <p>There is nothing here</p>
          <p>
            Create a new employee by clicking the <strong>New Employee </strong>
            button to get started
          </p>
        </StyledEmptyStateImageWrapper>
      )}
    </StyledApplicationWrapper>
  ) : (
    <></>
  );
}

export default Employees;
