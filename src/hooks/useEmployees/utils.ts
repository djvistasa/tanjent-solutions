import { IEmployee } from "../../interfaces";

const addEachEmployeesTotalNumberOfExp = (employees: IEmployee[]) =>
  employees.map((employee) => {
    return {
      ...employee,
      totalNumberOfExp: employee.skills.reduce(
        (partialSum, a) => partialSum + Number(a.yearsExp),
        0
      ),
    };
  });

function filterEmployeesBySearchTerm(
  searchTerm: string,
  employees: IEmployee[]
): IEmployee[] {
  return employees.filter((employee) => {
    const { firstName, lastName, emailAddress } = employee;
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return (
      firstName.toLowerCase().includes(lowerCaseSearchTerm) ||
      lastName.toLowerCase().includes(lowerCaseSearchTerm) ||
      emailAddress.toLowerCase().includes(lowerCaseSearchTerm)
    );
  });
}

function sortEmployeesByDateOfBirthAscending(
  employees: IEmployee[]
): IEmployee[] {
  return employees.sort((a, b) => {
    const dateA = new Date(a.dateOfBirth);
    const dateB = new Date(b.dateOfBirth);
    return dateA.getTime() - dateB.getTime();
  });
}

function sortEmployeesByDateOfBirthDescending(
  employees: IEmployee[]
): IEmployee[] {
  return employees.sort((a, b) => {
    const dateA = new Date(a.dateOfBirth);
    const dateB = new Date(b.dateOfBirth);
    return dateB.getTime() - dateA.getTime();
  });
}

function sortEmployeesByExperienceAscending(employees: IEmployee[]) {
  const employeesWithTotalNumberOfExp =
    addEachEmployeesTotalNumberOfExp(employees);

  return employeesWithTotalNumberOfExp.sort(
    (employeeA, employeeB) =>
      employeeA.totalNumberOfExp - employeeB.totalNumberOfExp
  );
}

function sortEmployeesByExperienceDescending(employees: IEmployee[]) {
  const employeesWithTotalNumberOfExp =
    addEachEmployeesTotalNumberOfExp(employees);

  return employeesWithTotalNumberOfExp.sort(
    (employeeB, employeeA) =>
      employeeA.totalNumberOfExp - employeeB.totalNumberOfExp
  );
}

export {
  filterEmployeesBySearchTerm,
  sortEmployeesByDateOfBirthAscending,
  sortEmployeesByDateOfBirthDescending,
  sortEmployeesByExperienceAscending,
  sortEmployeesByExperienceDescending,
};
