import { Control, UseControllerProps } from "react-hook-form";
import { FormFieldType } from "../../form/types";

interface FormField extends UseControllerProps {
  placeholder?: string;
  label?: string;
  type: FormFieldType;
  control: Control<any>;
  defaultValue?: string;
  onTextChange?: (value: string) => void;
}

export type { FormField };
