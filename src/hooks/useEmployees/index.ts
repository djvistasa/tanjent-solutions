import { useEffect, useState } from "react";
import { useStoreActions, useStoreState } from "..";

import { IEmployee } from "../../components/employee/types";
import { FilterKeys } from "../../components/filter/enums";
import { FilterOption } from "../../components/filter/types";
import { IUseEmployees } from "./types";
import {
  filterEmployeesBySearchTerm,
  sortEmployeesByDateOfBirthAscending,
  sortEmployeesByDateOfBirthDescending,
  sortEmployeesByExperienceAscending,
} from "./utils";

export const useEmployees = (): IUseEmployees => {
  const {
    ui: {
      sideBar: { toggle },
      modal: { hideModal, showModal },
    },
    employeeManagement: { setActiveEmployee, deleteEmployee },
  } = useStoreActions((actions) => actions);
  const {
    employeeManagement: { employees },
  } = useStoreState((state) => state);

  const [currentEmployees, setCurrentEmployees] =
    useState<IEmployee[]>(employees);

  const searchForEmployee = (searchTerm: string) => {
    const filteredEmployees = filterEmployeesBySearchTerm(
      searchTerm.toLowerCase(),
      employees
    );

    setCurrentEmployees(filteredEmployees);
  };

  const expandEmployee = (employeeId: string) => {
    const activeEmployee = employees.find(({ id }) => id === employeeId);

    if (activeEmployee) {
      setActiveEmployee(activeEmployee);
      toggle();
    }
  };

  const resetSort = () => setCurrentEmployees(employees);

  const sortEmployeesByYoungestToOldest = () => {
    const youngestToOldest = sortEmployeesByDateOfBirthAscending(employees);

    setCurrentEmployees(youngestToOldest);
  };

  const sortEmployeesByOldestToYoungest = () => {
    const oldestToYoungest = sortEmployeesByDateOfBirthDescending(employees);

    setCurrentEmployees(oldestToYoungest);
  };

  const sortEmployeesByLeastExperienceToMost = () => {
    const lowestExperienceToHighest =
      sortEmployeesByExperienceAscending(employees);

    setCurrentEmployees(lowestExperienceToHighest);
  };

  const sortEmployeesByMostExperiencedToLeast = () => {
    const highestExperienceToLowest =
      sortEmployeesByDateOfBirthDescending(employees);

    setCurrentEmployees(highestExperienceToLowest);
  };

  const filterEmployees = ({ title }: FilterOption) => {
    switch (title) {
      case FilterKeys.SortBy:
        return resetSort();
      case FilterKeys.DateOfBirthAsc:
        return sortEmployeesByYoungestToOldest();
      case FilterKeys.DateOfBirthDesc:
        return sortEmployeesByOldestToYoungest();
      case FilterKeys.YearsOfExpAsc:
        return sortEmployeesByLeastExperienceToMost();
      case FilterKeys.YearsOfExpDesc:
        return sortEmployeesByMostExperiencedToLeast();
      default:
        break;
    }
  };

  const initiateNewEmployeeFlow = () => {
    setActiveEmployee(undefined);
    toggle();
  };

  const confirmDelete = (employeeId: string, employeeName: string) =>
    showModal({
      title: "Confirm Deletion",
      message: `Are you sure you want to delete employee: ${employeeName}? This action cannot be undone`,
      primaryAction: () => {
        deleteEmployee(employeeId);
        hideModal();
      },
      secondaryAction: () => hideModal(),
      primaryActionVariant: "delete",
      secondaryActionVariant: "secondary",
      primaryActionTitle: "Delete",
      secondaryActionTitle: "Cancel",
    });

  useEffect(() => {
    setCurrentEmployees(employees);
  }, [employees]);

  return {
    employees: currentEmployees,
    searchForEmployee,
    confirmDelete,
    initiateNewEmployeeFlow,
    expandEmployee,
    filterEmployees,
  };
};
