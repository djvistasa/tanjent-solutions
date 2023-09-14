/**
 *
 * Form
 *
 */

import { MouseEvent } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { ReactComponent as PlusIcon } from "../../assets/svg/icon-plus.svg";

import { useStoreActions } from "../../hooks";
import { StyledButtonIconWrapper } from "../../theme/global-styles";
import { emailValidation } from "../../utils/formValidation";
import Button from "../button";
import Input from "../formFields/input";
import SkillsManager from "../skillsManager";
import {
  StyledActionsWrapper,
  StyledForm,
  StyledInlineFieldWrapper,
  StyledPositiveActionsWrapper,
} from "./styles";
import { FormInputs, FormProps } from "./types";

function Form({ onSubmit, defaultValues }: FormProps): JSX.Element {
  const { handleSubmit, control, reset, register } = useForm<FormInputs>({
    defaultValues,
    mode: "all",
  });
  const methods = useForm();

  const {
    ui: {
      sideBar: { toggle },
    },
  } = useStoreActions((actions) => actions);

  const handleFormSubmit: SubmitHandler<FormInputs> = (data) => onSubmit(data);

  const onCancel = (event?: MouseEvent<HTMLElement>) => {
    event?.preventDefault();
    toggle();
    reset();
  };

  return (
    <FormProvider {...methods}>
      <StyledForm onSubmit={handleSubmit(handleFormSubmit)}>
        <h1>New Employee</h1>
        <section>
          <p>Basic Info</p>
          <StyledInlineFieldWrapper>
            <Input
              name="firstName"
              control={control}
              rules={{ required: true }}
              label="First Name"
              type="text"
            />
            <Input
              name="lastName"
              control={control}
              label="Last Name"
              type="text"
              rules={{ required: true }}
            />
          </StyledInlineFieldWrapper>
          <Input
            name="contactNumber"
            control={control}
            rules={{
              required: true,
            }}
            label="Contact Number"
            type="text"
          />
          <Input
            name="emailAddress"
            control={control}
            rules={{
              validate: (email: string) => emailValidation(email),
            }}
            label="Email Address"
            type="text"
          />
          <StyledInlineFieldWrapper>
            <Input
              name="dateOfBirth"
              control={control}
              rules={{ required: true }}
              label="Date Of Birth"
              type="date"
            />
          </StyledInlineFieldWrapper>
        </section>
        <section>
          <p>Address Info</p>
          <Input
            name="streetAddress"
            control={control}
            rules={{ required: true }}
            label="Street Address"
            type="text"
          />
          <StyledInlineFieldWrapper>
            <Input
              name="city"
              control={control}
              rules={{ required: true }}
              label="City"
              type="text"
            />
            <Input
              name="postCode"
              control={control}
              rules={{ required: true }}
              label="Postal Code"
              type="number"
            />
            <Input
              name="country"
              control={control}
              rules={{ required: true }}
              label="Country"
              type="text"
            />
          </StyledInlineFieldWrapper>
        </section>
        <section>
          <p>Skills</p>
          <SkillsManager control={control} register={register} />
          <StyledActionsWrapper>
            <Button
              title="Cancel"
              onClick={(event) => onCancel(event)}
              variant="negative"
            />
            <StyledPositiveActionsWrapper>
              <Button
                title="Save and Add Employee"
                type="submit"
                onClick={() => {}}
                variant="primary"
                icon={
                  <StyledButtonIconWrapper>
                    <PlusIcon />
                  </StyledButtonIconWrapper>
                }
              />
            </StyledPositiveActionsWrapper>
          </StyledActionsWrapper>
        </section>
      </StyledForm>
    </FormProvider>
  );
}

export default Form;
