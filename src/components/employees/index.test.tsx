import { describe, expect, it, vi } from "vitest";

import { useTestComponentWithTheme } from "../../hooks";
import { IEmployee } from "../employee/types";
import Employees from "./index";

const mockEmployees: IEmployee[] = [
  {
    firstName: "John",
    lastName: "Doe",
    contactNumber: "1234567890",
    id: "1",
    emailAddress: "johndoe@example.com",
    city: "Mumbai",
    dateOfBirth: new Date("1990-01-01"),
    country: "India",
    postalCode: 400001,
    skills: [
      {
        name: "React",
        seniorityRating: 3,
        yearsExp: 3,
      },
    ],
    streetAddress: "1st Street",
    totalNumberOfExp: 3,
  },
];

const mockExpandEmployee = vi.fn();
const mockDeleteEmployee = vi.fn();

const mountWithTheme = useTestComponentWithTheme();

describe("Employees", () => {
  it("should render list of employees when there are employees", () => {
    const { getByTestId } = mountWithTheme(
      <Employees
        employees={mockEmployees}
        expandEmployee={mockExpandEmployee}
        initiateEmployeeDelete={mockDeleteEmployee}
      />
    );

    const firstEmployee = getByTestId("employee-0");
    expect(firstEmployee).toBeDefined();
  });

  it("should render empty state when there are no employees", () => {
    const { getByTestId } = mountWithTheme(
      <Employees
        employees={[]}
        expandEmployee={mockExpandEmployee}
        initiateEmployeeDelete={mockDeleteEmployee}
      />
    );

    const emptyState = getByTestId("no-employees-container");
    expect(emptyState).toBeDefined();
  });
});
