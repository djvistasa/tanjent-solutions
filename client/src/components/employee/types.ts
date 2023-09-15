import { Skill } from "../skillsManager/types";

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

interface EmployeeProps {
  employee: IEmployee;
  onEmployeeSelect: (id: string) => void;
  onEmployeeDelete: (id: string, firstName: string) => void;
  employeeIndex: number;
}

export type { EmployeeProps, IEmployee };
