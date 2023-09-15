/**
 *
 * TextInput
 *
 */

import { FC } from "react";
import { useController } from "react-hook-form";
import {
  StyledErrorIndicator,
  StyledInput,
  StyledInputLabel,
  StyledInputWrapper,
} from "./styles";
import { FormField } from "./types";

const Input: FC<FormField> = (props) => {
  const {
    field,
    fieldState: { error },
  } = useController(props);

  const { label, placeholder, type } = props;

  return (
    <StyledInputWrapper>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledInput {...field} placeholder={placeholder} type={type} />
      {error && error?.type === "required" && (
        <StyledErrorIndicator>This field is required</StyledErrorIndicator>
      )}
      {error && error?.type === "validate" && (
        <StyledErrorIndicator>{error.message}</StyledErrorIndicator>
      )}
    </StyledInputWrapper>
  );
};

export default Input;
