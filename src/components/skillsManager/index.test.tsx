import { describe, expect, it, vi } from "vitest";

import { useTestComponentWithTheme } from "../../hooks";
import SkillsManager from "./index";

describe("SkillsManager", () => {
  const mountWithTheme = useTestComponentWithTheme();

  it("should renders correctly", async () => {
    const control = {};
    const register = vi.fn();

    const component = mountWithTheme(
      <SkillsManager control={control} register={register} />
    );

    expect(component).toMatchSnapshot();
  });
});
