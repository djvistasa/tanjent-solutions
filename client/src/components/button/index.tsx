/**
 *
 * Button
 *
 */

import { StyledButton, StyledIconWrapper } from "./styles";
import { ButtonProps } from "./types";
import { useButton } from "./useButton";

function Button({
  title,
  onClick,
  type,
  variant,
  disabled,
  icon,
}: ButtonProps): JSX.Element {
  const {
    getBackgroundColorByVariant,
    getTitleColorByVariant,
    getHoverColorByVariant,
  } = useButton(variant);

  return (
    <StyledButton
      backgroundColor={getBackgroundColorByVariant()}
      type={type}
      disabled={disabled}
      titleColor={getTitleColorByVariant()}
      onClick={(e: React.MouseEvent<HTMLElement>) => onClick(e)}
      hasIcon={!!icon}
      hoverColor={getHoverColorByVariant()}
    >
      {icon && <StyledIconWrapper>{icon}</StyledIconWrapper>}
      {title}
    </StyledButton>
  );
}

export default Button;
