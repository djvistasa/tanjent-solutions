import { IEmployee } from "../employee/types";

interface IEmployeesProps {
  employees: IEmployee[];
  expandEmployee: (employeeID: string) => void;
  initiateEmployeeDelete: (employeeID: string, employeeName: string) => void;
}

export type { IEmployeesProps };
