import { action, createStore, persist } from "easy-peasy";

import { IEmployee } from "../components/employee/types";
import { defaultModalConfig } from "./defaults";
import { StoreModel } from "./types";

const store = createStore<StoreModel>({
  employeeManagement: persist({
    employees: [],
    activeEmployee: undefined,
    setActiveEmployee: action((state, payload: IEmployee) => {
      state.activeEmployee = payload;
    }),
    addEmployee: action((state, payload: IEmployee) => {
      state.employees.push(payload);
    }),
    editEmployee: action((state, employee: IEmployee) => {
      const employeeToEditIndex = state.employees.findIndex(
        ({ id }) => id === employee.id
      );

      if (employeeToEditIndex > -1) {
        state.employees[employeeToEditIndex] = employee;
      }
    }),
    deleteEmployee: action((state, employeeId: string) => {
      const employeeToEditIndex = state.employees.findIndex(
        ({ id }) => id === employeeId
      );

      if (employeeToEditIndex > -1) {
        state.employees.splice(employeeToEditIndex, 1);
      }
    }),
  }),
  ui: {
    sideBar: {
      isOpen: false,
      toggle: action((state) => {
        state.isOpen = !state.isOpen;
      }),
    },
    modal: {
      showModal: action((state, config) => {
        config.isOpen = true;

        state.config = config;
      }),
      hideModal: action((state) => {
        state.config = defaultModalConfig;
      }),
      config: defaultModalConfig,
    },
  },
});

export { store };
