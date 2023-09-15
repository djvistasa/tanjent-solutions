import { Action } from "easy-peasy";
import { ButtonVariant } from "../components/button/types";
import { IEmployee } from "../components/employee/types";

interface IEmployeeManagement {
  employees: IEmployee[];
  activeEmployee?: IEmployee;
  setActiveEmployee: Action<IEmployeeManagement, IEmployee | undefined>;
  addEmployee: Action<IEmployeeManagement, IEmployee>;
  editEmployee: Action<IEmployeeManagement, IEmployee>;
  deleteEmployee: Action<IEmployeeManagement, string>;
}

interface ModalConfig {
  isOpen?: boolean;
  title: string;
  message: string;
  primaryAction: () => void;
  secondaryAction: () => void;
  primaryActionVariant: ButtonVariant;
  secondaryActionVariant: ButtonVariant;
  primaryActionTitle: string;
  secondaryActionTitle: string;
}

interface ISideBar {
  isOpen: boolean;
  toggle: Action<ISideBar>;
}

interface IModal {
  showModal: Action<IModal, ModalConfig>;
  hideModal: Action<IModal>;
  config: ModalConfig;
}

interface IUi {
  sideBar: ISideBar;
  modal: IModal;
}

interface StoreModel {
  employeeManagement: IEmployeeManagement;
  ui: IUi;
}

export type { StoreModel, ModalConfig };
