import { createTypedHooks } from "easy-peasy";
import { StoreModel } from "../store/types";
import { useEmployees } from "./useEmployees";

const typedHooks = createTypedHooks<StoreModel>();

export const { useStoreActions } = typedHooks;
export const { useStoreDispatch } = typedHooks;
export const { useStoreState } = typedHooks;

import useTestComponentWithTheme from "./useTestComponentWithTheme";

export { useTestComponentWithTheme, useEmployees };
