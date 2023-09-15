import { FilterOption, Skill } from "../../types";

interface IEmployee {
  id: string;
  firstName: string;
  lastName: string;
  contactNumber: string;
  emailAddress: string;
  dateOfBirth: Date;
  streetAddress: string;
  city: string;
  postalCode: number;
  country: string;
  skills: Skill[];
  totalNumberOfExp?: number;
}

interface IUseEmployees {
  employees: IEmployee[];
  searchForEmployee: (searchTerm: string) => void;
  confirmDelete: (employeeId: string, employeeName: string) => void;
  initiateNewEmployeeFlow: () => void;
  expandEmployee: (employeeId: string) => void;
  filterEmployees: (filterOption: FilterOption) => void;
}

export type { IUseEmployees };
