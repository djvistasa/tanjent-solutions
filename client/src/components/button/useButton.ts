import { useTheme } from "styled-components";
import { ButtonVariant } from "./types";

export const useButton = (variant: ButtonVariant) => {
  const {
    colors: {
      primary,
      deleteAction,
      secondaryFour,
      secondary,
      light,
      gray,
      secondaryBackgroundColor,
    },
  } = useTheme();

  const getBackgroundColorByVariant = () => {
    switch (variant) {
      case "primary":
        return primary;
      case "secondary":
        return secondaryBackgroundColor;
      case "delete":
        return deleteAction;
      default:
        return secondary;
    }
  };

  const getHoverColorByVariant = () => {
    switch (variant) {
      case "primary":
        return gray;
      case "secondary":
        return secondaryFour;
      case "delete":
        return deleteAction;
      default:
        return light;
    }
  };

  const getTitleColorByVariant = () => {
    switch (variant) {
      case "primary":
      case "secondary":
      case "delete":
        return light;
      default:
        return secondaryFour;
    }
  };

  return {
    getBackgroundColorByVariant,
    getHoverColorByVariant,
    getTitleColorByVariant,
  };
};
