/**
 *
 * Modal
 *
 */

import { FC } from "react";
import { useStoreState } from "../../hooks";
import Button from "../button";
import { StyledActionsWrapper, StyledModal, StyledModalInner } from "./styles";

const Modal: FC = () => {
  const {
    ui: {
      modal: {
        config: {
          title,
          isOpen,
          message,
          secondaryAction,
          primaryAction,
          primaryActionVariant,
          secondaryActionVariant,
        },
      },
    },
  } = useStoreState((state) => state);
  return (
    <StyledModal isOpen={!!isOpen}>
      <StyledModalInner>
        <h1>{title}</h1>
        <p>{message}</p>
        <StyledActionsWrapper>
          <Button
            title="Cancel"
            onClick={() => secondaryAction()}
            variant={secondaryActionVariant}
          />
          <Button
            title="Delete"
            onClick={() => primaryAction()}
            variant={primaryActionVariant}
          />
        </StyledActionsWrapper>
      </StyledModalInner>
    </StyledModal>
  );
};

export default Modal;
