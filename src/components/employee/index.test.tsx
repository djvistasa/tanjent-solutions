import { describe, expect, it, vi } from "vitest";

import { useTestComponentWithTheme } from "../../hooks";
import Employee from "./index";
import { IEmployee } from "./types";

const mountWithTheme = useTestComponentWithTheme();

const mockEmployee: IEmployee = {
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
};

const mockExpandEmployee = vi.fn();
const mockDeleteEmployee = vi.fn();

describe("Employee", () => {
  it("should render correctly", () => {
    const { getByTestId } = mountWithTheme(
      <Employee
        employee={mockEmployee}
        employeeIndex={0}
        onEmployeeSelect={() => {}}
        onEmployeeDelete={() => {}}
        testID="employee"
      />
    );
    const employee = getByTestId("employee");
    expect(employee).toBeDefined();
  });

  it("should expand employee", () => {
    const { getByTestId } = mountWithTheme(
      <Employee
        employee={mockEmployee}
        employeeIndex={0}
        onEmployeeSelect={mockExpandEmployee}
        onEmployeeDelete={() => {}}
        testID="employee"
      />
    );
    const expandEmployeeButton = getByTestId("expand-employee-btn");
    expandEmployeeButton.click();

    expect(mockExpandEmployee).toHaveBeenCalledWith("1");
  });

  it("should initiate delete employee", () => {
    const { getByTestId } = mountWithTheme(
      <Employee
        employee={mockEmployee}
        employeeIndex={0}
        onEmployeeSelect={() => {}}
        onEmployeeDelete={mockDeleteEmployee}
        testID="employee"
      />
    );
    const deleteEmployeeButton = getByTestId("delete-employee-btn");
    deleteEmployeeButton.click();

    expect(mockDeleteEmployee).toHaveBeenCalledWith("1", "John");
  });
});
