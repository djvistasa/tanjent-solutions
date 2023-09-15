/**
 *
 * Employees
 *
 */
import { useStoreRehydrated } from "easy-peasy";
import EmployeesList from "../../components/employees";
import { filterOptions } from "../../components/filter/config";
import Header from "../../components/header";
import { useEmployees } from "../../hooks/useEmployees";
import { StyledApplicationWrapper } from "../../theme/global-styles";

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

      <EmployeesList
        employees={employees}
        expandEmployee={expandEmployee}
        initiateEmployeeDelete={confirmDelete}
      />
    </StyledApplicationWrapper>
  ) : (
    <></>
  );
}

export default Employees;
