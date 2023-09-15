import { ModalConfig } from "./types";

export const defaultModalConfig: ModalConfig = {
  isOpen: false,
  message: "",
  primaryAction: () => {},
  secondaryAction: () => {},
  primaryActionVariant: "primary",
  secondaryActionVariant: "secondary",
  title: "",
  primaryActionTitle: "",
  secondaryActionTitle: "",
};
