/**
 *
 * SidePanel
 *
 */

import { useStoreRehydrated } from "easy-peasy";
import { useStoreActions, useStoreState } from "../../hooks";
import { generateUniqueId } from "../../utils";
import Form from "../form";
import { FormInputs } from "../form/types";
import { StyledSidePanel } from "./styles";
import { SidePanelProps } from "./types";

function SidePanel(_props: SidePanelProps): JSX.Element {
  const {
    ui: {
      sideBar: { isOpen },
    },
    employeeManagement: { activeEmployee },
  } = useStoreState((state) => state);

  const {
    ui: {
      sideBar: { toggle },
    },
    employeeManagement: { setActiveEmployee, addEmployee, editEmployee },
  } = useStoreActions((actions) => actions);

  const isHydrated = useStoreRehydrated();

  const handleFormSubmit = (employee: FormInputs) => {
    toggle();
    setActiveEmployee(undefined);

    if (employee.id) {
      return editEmployee(employee);
    }

    employee.id = generateUniqueId();
    addEmployee(employee);
  };

  return isOpen && isHydrated ? (
    <StyledSidePanel isSidePanelOpen={isOpen}>
      <Form onSubmit={handleFormSubmit} defaultValues={activeEmployee} />
    </StyledSidePanel>
  ) : (
    <></>
  );
}

export default SidePanel;
