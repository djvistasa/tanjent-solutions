type ButtonVariant = "primary" | "secondary" | "negative" | "delete";

interface ButtonProps {
  title: string;
  disabled?: boolean | undefined;
  onClick: (event?: React.MouseEvent<HTMLElement>) => void;
  variant: ButtonVariant;
  icon?: JSX.Element;
  type?: "button" | "submit" | "reset" | undefined;
  testID?: string;
}

interface StyledButtonProps {
  disabled: boolean | undefined;
  backgroundColor: string;
  hoverColor: string;
  titleColor: string;
  hasIcon?: boolean;
}

export type { ButtonProps, ButtonVariant, StyledButtonProps };
