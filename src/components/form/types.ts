import { IEmployee } from "../employee/types";

interface FormInputs extends IEmployee {}

interface FormProps {
  onSubmit: (formValues: FormInputs) => void;
  defaultValues?: FormInputs;
}

type FormFieldType = "" | "text" | "email" | "date" | "number" | "select";

export type { FormFieldType, FormInputs, FormProps };
