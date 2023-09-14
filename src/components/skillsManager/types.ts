import { Control, UseFormRegister } from "react-hook-form";
import { SeniorityRating } from "../../enums";
import { FormInputs } from "../form/types";

interface SkillsManagerProps {
  control: Control<FormInputs, any>;
  register: UseFormRegister<FormInputs>;
}

interface SkillIndex {
  [key: number]: Skill;
}

interface Skill {
  name: string;
  yearsExp: number;
  seniorityRating: SeniorityRating;
}

export type { Skill, SkillIndex, SkillsManagerProps };
