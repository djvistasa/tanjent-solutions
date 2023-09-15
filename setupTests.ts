import { vi } from "vitest";

vi.mock("react-hook-form", () => ({
  useForm: () => ({}),
  useFieldArray: () => ({
    fields: [],
  }),
  useController: () => ({
    field: {},
    fieldState: {
      error: null,
    },
  }),
}));

vi.mock("easy-peasy", () => ({
  useStoreActions: () => ({}),
  useStoreState: () => ({}),
  createTypedHooks: () => ({}),
  createStore: () => ({}),
  persist: () => ({}),
  action: () => ({}),
  StoreProvider: ({ children }) => children,
}));
